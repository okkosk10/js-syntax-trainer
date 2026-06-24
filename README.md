# JS Syntax Trainer

AI 기반 JavaScript 문법 훈련 플랫폼입니다. Monaco Editor 기반의 VSCode 유사 풀이 환경, 문제은행, 테스트케이스 자동 검증, AI 코드 리뷰, 학습 통계를 위한 확장 가능한 Next.js 구조로 시작합니다.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Prisma
- PostgreSQL
- BullMQ/Redis for background jobs
- Monaco Editor
- OpenAI-compatible AI review provider

## Local Setup

```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run dev
```

## Architecture

```txt
src/
  app/                  Next.js routes and API handlers
  components/           VSCode-like UI and editor panels
  features/             Domain modules
  lib/                  Shared infrastructure
  workers/              Queue workers for execution, AI review, stats
prisma/
  schema.prisma         PostgreSQL data model
```

The first version keeps a modular monolith shape. Execution, AI review, and stats are behind provider/service interfaces so they can later move to isolated workers or separate services.
