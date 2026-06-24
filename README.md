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

## Deployment Modes

`SUBMISSION_MODE`로 무료 데모 운영과 확장 운영을 분리합니다.

- `inline` (기본값): Redis/BullMQ/worker 없이 `/api/submissions` 안에서 즉시 채점
- `queued`: BullMQ 큐 + worker 기반 비동기 채점

### Free MVP (Vercel + Neon PostgreSQL)

- `.env`에서 `SUBMISSION_MODE="inline"` 사용
- `DATABASE_URL`만 설정해도 동작
- `REDIS_URL` 미설정이어도 앱이 실행됨
- DB 장애 시 `/api/problems`는 mock 문제 목록/상세를 반환

### Scale Mode (Queue + Workers)

- `.env`에서 `SUBMISSION_MODE="queued"` 사용
- `REDIS_URL` 필요
- worker 실행 스크립트:
  - `npm run worker:test-runner`
  - `npm run worker:ai-review`

무료 데모 배포에서는 worker를 실행할 필요가 없습니다.

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
