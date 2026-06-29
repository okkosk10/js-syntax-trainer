import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { problemBank } from "../src/features/problem/problem-bank";

const outputPath = resolve(process.cwd(), "src/features/problem/problem-bank/static-problems.ts");

const content = `import type { ProblemBankProblem } from "./types";\n\nexport const staticProblems: ProblemBankProblem[] = ${JSON.stringify(problemBank, null, 2)};\n`;

writeFileSync(outputPath, content, "utf8");
console.log(`Wrote ${problemBank.length} static problems to ${outputPath}`);
