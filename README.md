# JS Syntax Trainer

AI 기반 JavaScript 문법 연습 플랫폼입니다. Monaco Editor 기반의 VSCode 같은 작성 환경, 문제 풀이, 테스트 실행, 제출 기록, AI 코드 리뷰, 학습 통계를 확장 가능한 Next.js 구조로 구성합니다.

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

## Free MVP Deployment: Vercel + Neon

무료 데모 배포는 Vercel Hobby와 Neon Free PostgreSQL 조합을 기준으로 합니다.

### Vercel Build Settings

이 저장소에는 `vercel.json`이 포함되어 있습니다. Vercel은 아래 명령으로 빌드합니다.

```bash
npm run build
```

Prisma Client는 `postinstall`에서 먼저 생성됩니다.

```bash
prisma generate
```

### Required Environment Variables

Vercel 프로젝트의 Environment Variables에 아래 값을 등록합니다.

```txt
DATABASE_URL=Neon PostgreSQL connection string
SUBMISSION_MODE=inline
NEXTAUTH_SECRET=long-random-secret
NEXTAUTH_URL=https://your-project.vercel.app
OPENAI_API_KEY=
```

무료 데모 모드에서는 `REDIS_URL`을 등록하지 않아도 됩니다.

### Database Setup

Neon에서 PostgreSQL 프로젝트를 만든 뒤, 로컬 또는 Neon/Vercel 연결 환경에서 Prisma 마이그레이션을 실행합니다.

```bash
npm run prisma:migrate
```

Vercel 빌드는 마이그레이션을 자동으로 실행하지 않습니다. 배포 전에 DB 스키마를 먼저 준비해야 합니다.

## Scale Mode: Queue + Workers

사용자가 많아지거나 채점/AI 리뷰를 백그라운드로 분리해야 하면 운영 모드를 `queued`로 전환합니다.

```txt
SUBMISSION_MODE=queued
REDIS_URL=redis://...
```

Worker 실행 스크립트:

```bash
npm run worker:test-runner
npm run worker:ai-review
```

Vercel은 상시 worker 실행 용도에 맞지 않으므로, queued 모드에서는 worker를 Render, Railway, Fly.io 같은 별도 서비스에 배포하는 구성이 필요합니다.

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

첫 버전은 Next.js 안의 modular monolith 형태로 시작합니다. Execution, AI review, stats는 provider/service 인터페이스 뒤에 두어 나중에 worker나 별도 서비스로 분리할 수 있게 합니다.
