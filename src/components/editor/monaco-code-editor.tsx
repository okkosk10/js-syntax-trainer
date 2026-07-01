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
const STARTER_PLACEHOLDER_COMMENT = "// 여기에 코드를 작성하세요.";

function findStarterPlaceholderLine(model: MonacoEditorType.ITextModel) {
  for (let lineNumber = 1; lineNumber <= model.getLineCount(); lineNumber += 1) {
    const lineText = model.getLineContent(lineNumber).trim();

    if (lineText === STARTER_PLACEHOLDER_COMMENT) {
      return lineNumber;
    }
  }

  return null;
}

export function MonacoCodeEditor({ value, onChange, markers = [] }: MonacoCodeEditorProps) {
  const editorRef = useRef<MonacoEditorType.IStandaloneCodeEditor | null>(null);
  const monacoRef = useRef<typeof import("monaco-editor") | null>(null);
  const isRemovingPlaceholderRef = useRef(false);

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

        editor.onDidChangeCursorPosition((event) => {
          if (isRemovingPlaceholderRef.current) {
            return;
          }

          const model = editor.getModel();

          if (!model) {
            return;
          }

          const placeholderLine = findStarterPlaceholderLine(model);

          if (!placeholderLine || event.position.lineNumber !== placeholderLine) {
            return;
          }

          const currentLineText = model.getLineContent(placeholderLine);
          const indent = currentLineText.match(/^\s*/)?.[0] ?? "";

          isRemovingPlaceholderRef.current = true;

          try {
            editor.executeEdits("starter-placeholder", [
              {
                range: new monaco.Range(
                  placeholderLine,
                  1,
                  placeholderLine,
                  model.getLineMaxColumn(placeholderLine)
                ),
                text: indent
              }
            ]);

            editor.setPosition({
              lineNumber: placeholderLine,
              column: indent.length + 1
            });
          } finally {
            isRemovingPlaceholderRef.current = false;
          }
        });
      }}
    />
  );
}
