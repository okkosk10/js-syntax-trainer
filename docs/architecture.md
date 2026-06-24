# Architecture

## Shape

Start as a modular monolith inside Next.js. Keep feature code under `src/features` and expose narrow service/provider interfaces for code execution, AI review, and recommendations.

## Request Flow

```txt
Client
  -> POST /api/submissions
  -> create Submission(PENDING)
  -> enqueue test-execution job
  -> worker runs isolated provider
  -> persist TestResult rows
  -> update Submission status
  -> enqueue AI review and stats jobs
```

## Domain Boundaries

- `problem`: problem bank, tags, difficulty, test cases
- `submission`: user attempts and lifecycle
- `execution`: sandbox provider abstraction
- `ai-review`: prompt/schema/provider abstraction
- `stats`: learning summaries, weak categories, daily activity

## Production Execution Options

The included local provider is a placeholder. Use one of these before running untrusted user code:

- `isolated-vm` with strict timeout and memory limits
- Docker runner with no network and resource caps
- External judge service such as Judge0
- MicroVM-based runner for stronger tenant isolation
