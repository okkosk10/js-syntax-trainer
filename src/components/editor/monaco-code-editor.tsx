"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef } from "react";
import type { editor as MonacoEditorType } from "monaco-editor";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-sm text-app-muted">Editor loading...</div>
});

type MonacoCodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
  markers?: {
    line: number;
    column?: number;
    message: string;
  }[];
};

const MARKER_OWNER = "js-syntax-trainer";

export function MonacoCodeEditor({ value, onChange, markers = [] }: MonacoCodeEditorProps) {
  const editorRef = useRef<MonacoEditorType.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import("monaco-editor") | null>(null);

  const clearMarkers = useCallback(() => {
    const editor = editorRef.current;
    const monaco = monacoRef.current;

    if (!editor || !monaco) {
      return;
    }

    const model = editor.getModel();

    if (!model) {
      return;
    }

    monaco.editor.setModelMarkers(model, MARKER_OWNER, []);
  }, []);

  const applyMarkers = useCallback(
    (nextMarkers: MonacoCodeEditorProps["markers"]) => {
      const editor = editorRef.current;
      const monaco = monacoRef.current;

      if (!editor || !monaco) {
        return;
      }

      const model = editor.getModel();

      if (!model) {
        return;
      }

      if (!nextMarkers || nextMarkers.length === 0) {
        monaco.editor.setModelMarkers(model, MARKER_OWNER, []);
        return;
      }

      monaco.editor.setModelMarkers(
        model,
        MARKER_OWNER,
        nextMarkers.map((marker) => {
          const startLineNumber = Math.max(1, marker.line);
          const startColumn = Math.max(1, marker.column ?? 1);

          return {
            startLineNumber,
            endLineNumber: startLineNumber,
            startColumn,
            endColumn: startColumn + 1,
            message: marker.message,
            severity: monaco.MarkerSeverity.Error
          };
        })
      );
    },
    []
  );

  useEffect(() => {
    applyMarkers(markers);
  }, [applyMarkers, markers]);

  useEffect(() => {
    clearMarkers();
  }, [clearMarkers, value]);

  return (
    <MonacoEditor
      height="100%"
      language="javascript"
      theme="vs-dark"
      value={value}
      options={{
        fontSize: 14,
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on"
      }}
      onChange={(nextValue) => onChange(nextValue ?? "")}
      onMount={(editor, monaco) => {
        editorRef.current = editor;
        monacoRef.current = monaco;
        applyMarkers(markers);
      }}
    />
  );
}
