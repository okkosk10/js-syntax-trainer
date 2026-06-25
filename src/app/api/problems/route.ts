import { NextResponse } from "next/server";
import { getMockProblemDetailBySlug, getMockProblemList } from "@/features/problem/mock-problems";
import { problemRepository } from "@/features/problem/problem.repository";
import { queryProblemDatabase } from "@/features/problem/problem-source";

function createMockResponse(slug: string | null) {
  if (slug) {
    const mockProblem = getMockProblemDetailBySlug(slug);

    if (!mockProblem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    return NextResponse.json({
      problem: mockProblem,
      source: "mock"
    });
  }

  return NextResponse.json({
    problems: getMockProblemList(),
    source: "mock"
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (slug) {
    const dbResult = await queryProblemDatabase(() => problemRepository.findBySlug(slug));

    if (dbResult.source === "fallback") {
      return createMockResponse(slug);
    }

    if (!dbResult.value) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    return NextResponse.json({ problem: dbResult.value });
  }

  const dbResult = await queryProblemDatabase(() => problemRepository.findPublished());

  if (dbResult.source === "fallback") {
    return createMockResponse(null);
  }

  return NextResponse.json({ problems: dbResult.value });
}
