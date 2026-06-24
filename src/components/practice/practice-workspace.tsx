"use client";

import { useState } from "react";
import { Play, RotateCcw, Send } from "lucide-react";
import { MonacoCodeEditor } from "@/components/editor/monaco-code-editor";
import { ProblemPanel } from "./problem-panel";
import { ProblemSidebar } from "./problem-sidebar";
import { ResultPanel } from "./result-panel";

const starterCode = `function doubleNumbers(numbers) {
  // 여기에 코드를 작성하세요.
}

module.exports = doubleNumbers;`;

export function PracticeWorkspace() {
  const [code, setCode] = useState(starterCode);
  const [status, setStatus] = useState<"idle" | "running" | "passed" | "failed">("idle");

  function runTests() {
    setStatus("running");
    window.setTimeout(() => {
      setStatus(code.includes(".map(") ? "passed" : "failed");
    }, 650);
  }

  return (
    <main className="flex h-screen overflow-hidden bg-app-bg text-app-text">
      <ProblemSidebar />
      <section className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-app-border bg-app-panel px-3">
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded bg-app-surface px-3 py-1.5">solution.js</span>
            <span className="hidden text-app-muted sm:inline">JavaScript</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex h-8 items-center gap-2 rounded-md border border-app-border px-3 text-sm hover:bg-app-surface"
              onClick={() => {
                setCode(starterCode);
                setStatus("idle");
              }}
            >
              <RotateCcw className="h-4 w-4" />
              Reset
            </button>
            <button
              className="inline-flex h-8 items-center gap-2 rounded-md border border-app-border px-3 text-sm hover:bg-app-surface"
              onClick={runTests}
            >
              <Play className="h-4 w-4" />
              Run
            </button>
            <button className="inline-flex h-8 items-center gap-2 rounded-md bg-app-accent px-3 text-sm font-semibold text-black">
              <Send className="h-4 w-4" />
              Submit
            </button>
          </div>
        </header>
        <div className="grid min-h-0 flex-1 grid-cols-1 lg:grid-cols-[1fr_360px]">
          <div className="min-h-0">
            <MonacoCodeEditor value={code} onChange={setCode} />
          </div>
          <ProblemPanel />
        </div>
        <ResultPanel status={status} />
      </section>
    </main>
  );
}
