import { NextResponse } from "next/server";

const seedProblems = [
  {
    id: "array-map-basics",
    title: "map으로 배열 변환하기",
    difficulty: "EASY",
    category: "array",
    tags: ["array", "map", "callback"]
  }
];

export async function GET() {
  return NextResponse.json({ problems: seedProblems });
}
