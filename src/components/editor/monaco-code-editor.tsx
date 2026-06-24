"use client";

import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
  loading: () => <div className="flex h-full items-center justify-center text-sm text-app-muted">Editor loading...</div>
});

type MonacoCodeEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function MonacoCodeEditor({ value, onChange }: MonacoCodeEditorProps) {
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
    />
  );
}
