import type { ProblemBankProblem } from "./types";

export const staticProblems: ProblemBankProblem[] = [
  {
    "id": "pb-vars-clamp-1",
    "slug": "vars-clamp-1",
    "title": "변수/연산/조건문 · 입력 정제기 안정화 미션 1",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "number",
      "if"
    ],
    "description": "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function varsClamp1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsClamp1;",
    "explanation": "if/else 조건문으로 경계값을 먼저 처리하면 됩니다. / 원문 주제: 숫자 범위 제한하기",
    "hints": [
      "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
      "범위 안에 있는 값은 그대로 반환해야 합니다.",
      "음수와 경계값(min, max 자체)도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-clamp-1-tc-1",
        "input": {
          "value": -2,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-clamp-1-tc-2",
        "input": {
          "value": 5,
          "min": 0,
          "max": 5
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-clamp-1-tc-3",
        "input": {
          "value": 2,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-clamp-1-tc-4",
        "input": {
          "value": -100,
          "min": -10,
          "max": 10
        },
        "expectedOutput": 10,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-clamp-1-tc-5",
        "input": {
          "value": 1,
          "min": 1,
          "max": 1
        },
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-grade-2",
    "slug": "vars-grade-2",
    "title": "변수/연산/조건문 · 요약 엔진 표준화 미션 2",
    "difficulty": "MEDIUM",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "comparison",
      "number"
    ],
    "description": "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function varsGrade2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsGrade2;",
    "explanation": "큰 구간부터 순서대로 비교하면 조건이 단순해집니다. / 원문 주제: 점수 등급 매기기",
    "hints": [
      "90점 이상을 먼저 검사하세요.",
      "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
      "0점과 100점 같은 경계 점수도 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-grade-2-tc-1",
        "input": 95,
        "expectedOutput": "P2_A",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-grade-2-tc-2",
        "input": 82,
        "expectedOutput": "P2_B",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-grade-2-tc-3",
        "input": 67,
        "expectedOutput": "P2_D",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-grade-2-tc-4",
        "input": 70,
        "expectedOutput": "P2_C",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-grade-2-tc-5",
        "input": 0,
        "expectedOutput": "P2_D",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-discount-3",
    "slug": "vars-discount-3",
    "title": "변수/연산/조건문 · 요약 엔진 검산 미션 3",
    "difficulty": "HARD",
    "category": "변수/연산/조건문",
    "tags": [
      "operator",
      "condition",
      "object"
    ],
    "description": "입력은 { price, isMember }입니다. 회원이면 10% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function varsDiscount3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsDiscount3;",
    "explanation": "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다. / 원문 주제: 할인 적용 금액 계산",
    "hints": [
      "회원 여부에 따라 할인율을 먼저 정하세요.",
      "price * (1 - 할인율)로 계산할 수 있습니다.",
      "반환 전 Math.round를 적용해 정수로 맞추세요.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-discount-3-tc-1",
        "input": {
          "price": 10000,
          "isMember": true,
          "rate": 10
        },
        "expectedOutput": 9000,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-discount-3-tc-2",
        "input": {
          "price": 15990,
          "isMember": false,
          "rate": 10
        },
        "expectedOutput": 15990,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-discount-3-tc-3",
        "input": {
          "price": 0,
          "isMember": true,
          "rate": 10
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-discount-3-tc-4",
        "input": {
          "price": 9999,
          "isMember": true,
          "rate": 10
        },
        "expectedOutput": 8999,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-discount-3-tc-5",
        "input": {
          "price": 1200,
          "isMember": false,
          "rate": 10
        },
        "expectedOutput": 1200,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-clamp-4",
    "slug": "vars-clamp-4",
    "title": "변수/연산/조건문 · 포인트 처리기 필터링 미션 4",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "number",
      "if"
    ],
    "description": "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function varsClamp4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsClamp4;",
    "explanation": "if/else 조건문으로 경계값을 먼저 처리하면 됩니다. / 원문 주제: 숫자 범위 제한하기",
    "hints": [
      "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
      "범위 안에 있는 값은 그대로 반환해야 합니다.",
      "음수와 경계값(min, max 자체)도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-clamp-4-tc-1",
        "input": {
          "value": -3,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-clamp-4-tc-2",
        "input": {
          "value": 6,
          "min": 0,
          "max": 5
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-clamp-4-tc-3",
        "input": {
          "value": 3,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-clamp-4-tc-4",
        "input": {
          "value": -100,
          "min": -10,
          "max": 10
        },
        "expectedOutput": -10,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-clamp-4-tc-5",
        "input": {
          "value": 2,
          "min": 2,
          "max": 2
        },
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-grade-5",
    "slug": "vars-grade-5",
    "title": "변수/연산/조건문 · 규칙 실행기 보정 미션 5",
    "difficulty": "MEDIUM",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "comparison",
      "number"
    ],
    "description": "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function varsGrade5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsGrade5;",
    "explanation": "큰 구간부터 순서대로 비교하면 조건이 단순해집니다. / 원문 주제: 점수 등급 매기기",
    "hints": [
      "90점 이상을 먼저 검사하세요.",
      "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
      "0점과 100점 같은 경계 점수도 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-grade-5-tc-1",
        "input": 95,
        "expectedOutput": "A",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-grade-5-tc-2",
        "input": 82,
        "expectedOutput": "B",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-grade-5-tc-3",
        "input": 67,
        "expectedOutput": "D",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-grade-5-tc-4",
        "input": 70,
        "expectedOutput": "C",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-grade-5-tc-5",
        "input": 0,
        "expectedOutput": "D",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-discount-6",
    "slug": "vars-discount-6",
    "title": "변수/연산/조건문 · 정렬 처리기 분해 미션 6",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "operator",
      "condition",
      "object"
    ],
    "description": "입력은 { price, isMember }입니다. 회원이면 11% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다. 추가 규칙: 기존 계산 결과를 7로 나눈 나머지를 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function varsDiscount6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsDiscount6;",
    "explanation": "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다. / 원문 주제: 할인 적용 금액 계산",
    "hints": [
      "회원 여부에 따라 할인율을 먼저 정하세요.",
      "price * (1 - 할인율)로 계산할 수 있습니다.",
      "반환 전 Math.round를 적용해 정수로 맞추세요.",
      "변형 규칙: 기존 계산 결과를 7로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-discount-6-tc-1",
        "input": {
          "price": 10000,
          "isMember": true,
          "rate": 11
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-discount-6-tc-2",
        "input": {
          "price": 15990,
          "isMember": false,
          "rate": 11
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-discount-6-tc-3",
        "input": {
          "price": 0,
          "isMember": true,
          "rate": 11
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-discount-6-tc-4",
        "input": {
          "price": 9999,
          "isMember": true,
          "rate": 11
        },
        "expectedOutput": 2,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-discount-6-tc-5",
        "input": {
          "price": 1200,
          "isMember": false,
          "rate": 11
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-clamp-7",
    "slug": "vars-clamp-7",
    "title": "변수/연산/조건문 · 후처리 워커 확장 미션 7",
    "difficulty": "MEDIUM",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "number",
      "if"
    ],
    "description": "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요. 추가 규칙: 기존 계산 결과를 9로 나눈 나머지를 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function varsClamp7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsClamp7;",
    "explanation": "if/else 조건문으로 경계값을 먼저 처리하면 됩니다. / 원문 주제: 숫자 범위 제한하기",
    "hints": [
      "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
      "범위 안에 있는 값은 그대로 반환해야 합니다.",
      "음수와 경계값(min, max 자체)도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과를 9로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-clamp-7-tc-1",
        "input": {
          "value": -4,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-clamp-7-tc-2",
        "input": {
          "value": 7,
          "min": 0,
          "max": 5
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-clamp-7-tc-3",
        "input": {
          "value": 4,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 4,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-clamp-7-tc-4",
        "input": {
          "value": -100,
          "min": -10,
          "max": 10
        },
        "expectedOutput": -1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-clamp-7-tc-5",
        "input": {
          "value": 3,
          "min": 3,
          "max": 3
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-grade-8",
    "slug": "vars-grade-8",
    "title": "변수/연산/조건문 · 캐시 정리기 재매핑 미션 8",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "comparison",
      "number"
    ],
    "description": "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다. 추가 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function varsGrade8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsGrade8;",
    "explanation": "큰 구간부터 순서대로 비교하면 조건이 단순해집니다. / 원문 주제: 점수 등급 매기기",
    "hints": [
      "90점 이상을 먼저 검사하세요.",
      "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
      "0점과 100점 같은 경계 점수도 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-grade-8-tc-1",
        "input": 95,
        "expectedOutput": "a",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-grade-8-tc-2",
        "input": 82,
        "expectedOutput": "b",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-grade-8-tc-3",
        "input": 67,
        "expectedOutput": "d",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-grade-8-tc-4",
        "input": 70,
        "expectedOutput": "c",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-grade-8-tc-5",
        "input": 0,
        "expectedOutput": "d",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-discount-9",
    "slug": "vars-discount-9",
    "title": "변수/연산/조건문 · 전처리 워커 검산 미션 9",
    "difficulty": "MEDIUM",
    "category": "변수/연산/조건문",
    "tags": [
      "operator",
      "condition",
      "object"
    ],
    "description": "입력은 { price, isMember }입니다. 회원이면 12% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다. 추가 규칙: 기존 계산 결과에서 8를 빼서 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function varsDiscount9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsDiscount9;",
    "explanation": "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다. / 원문 주제: 할인 적용 금액 계산",
    "hints": [
      "회원 여부에 따라 할인율을 먼저 정하세요.",
      "price * (1 - 할인율)로 계산할 수 있습니다.",
      "반환 전 Math.round를 적용해 정수로 맞추세요.",
      "변형 규칙: 기존 계산 결과에서 8를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-discount-9-tc-1",
        "input": {
          "price": 10000,
          "isMember": true,
          "rate": 12
        },
        "expectedOutput": 8792,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-discount-9-tc-2",
        "input": {
          "price": 15990,
          "isMember": false,
          "rate": 12
        },
        "expectedOutput": 15982,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-discount-9-tc-3",
        "input": {
          "price": 0,
          "isMember": true,
          "rate": 12
        },
        "expectedOutput": -8,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-discount-9-tc-4",
        "input": {
          "price": 9999,
          "isMember": true,
          "rate": 12
        },
        "expectedOutput": 8791,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-discount-9-tc-5",
        "input": {
          "price": 1200,
          "isMember": false,
          "rate": 12
        },
        "expectedOutput": 1192,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-clamp-10",
    "slug": "vars-clamp-10",
    "title": "변수/연산/조건문 · 입력 정제기 최적화 미션 10",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "number",
      "if"
    ],
    "description": "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요. 추가 규칙: 기존 계산 결과에서 10를 빼서 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function varsClamp10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsClamp10;",
    "explanation": "if/else 조건문으로 경계값을 먼저 처리하면 됩니다. / 원문 주제: 숫자 범위 제한하기",
    "hints": [
      "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
      "범위 안에 있는 값은 그대로 반환해야 합니다.",
      "음수와 경계값(min, max 자체)도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과에서 10를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-clamp-10-tc-1",
        "input": {
          "value": -5,
          "min": 0,
          "max": 10
        },
        "expectedOutput": -10,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-clamp-10-tc-2",
        "input": {
          "value": 8,
          "min": 0,
          "max": 5
        },
        "expectedOutput": -5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-clamp-10-tc-3",
        "input": {
          "value": 5,
          "min": 0,
          "max": 10
        },
        "expectedOutput": -5,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-clamp-10-tc-4",
        "input": {
          "value": -100,
          "min": -10,
          "max": 10
        },
        "expectedOutput": -20,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-clamp-10-tc-5",
        "input": {
          "value": 4,
          "min": 4,
          "max": 4
        },
        "expectedOutput": -6,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-grade-11",
    "slug": "vars-grade-11",
    "title": "변수/연산/조건문 · 에러 방어기 재조합 미션 11",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "comparison",
      "number"
    ],
    "description": "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다. 추가 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function varsGrade11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsGrade11;",
    "explanation": "큰 구간부터 순서대로 비교하면 조건이 단순해집니다. / 원문 주제: 점수 등급 매기기",
    "hints": [
      "90점 이상을 먼저 검사하세요.",
      "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
      "0점과 100점 같은 경계 점수도 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-grade-11-tc-1",
        "input": 95,
        "expectedOutput": "A",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-grade-11-tc-2",
        "input": 82,
        "expectedOutput": "B",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-grade-11-tc-3",
        "input": 67,
        "expectedOutput": "D",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-grade-11-tc-4",
        "input": 70,
        "expectedOutput": "C",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-grade-11-tc-5",
        "input": 0,
        "expectedOutput": "D",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-discount-12",
    "slug": "vars-discount-12",
    "title": "변수/연산/조건문 · 테스트 헬퍼 분해 미션 12",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "operator",
      "condition",
      "object"
    ],
    "description": "입력은 { price, isMember }입니다. 회원이면 13% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다. 추가 규칙: 기존 계산 결과에 11를 더해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function varsDiscount12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsDiscount12;",
    "explanation": "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다. / 원문 주제: 할인 적용 금액 계산",
    "hints": [
      "회원 여부에 따라 할인율을 먼저 정하세요.",
      "price * (1 - 할인율)로 계산할 수 있습니다.",
      "반환 전 Math.round를 적용해 정수로 맞추세요.",
      "변형 규칙: 기존 계산 결과에 11를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-discount-12-tc-1",
        "input": {
          "price": 10000,
          "isMember": true,
          "rate": 13
        },
        "expectedOutput": 8711,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-discount-12-tc-2",
        "input": {
          "price": 15990,
          "isMember": false,
          "rate": 13
        },
        "expectedOutput": 16001,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-discount-12-tc-3",
        "input": {
          "price": 0,
          "isMember": true,
          "rate": 13
        },
        "expectedOutput": 11,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-discount-12-tc-4",
        "input": {
          "price": 9999,
          "isMember": true,
          "rate": 13
        },
        "expectedOutput": 8710,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-discount-12-tc-5",
        "input": {
          "price": 1200,
          "isMember": false,
          "rate": 13
        },
        "expectedOutput": 1211,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-clamp-13",
    "slug": "vars-clamp-13",
    "title": "변수/연산/조건문 · 내보내기 모듈 합성 미션 13",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "number",
      "if"
    ],
    "description": "입력은 { value, min, max } 객체입니다. value가 min보다 작으면 min, max보다 크면 max를 반환하고, 범위 안이면 value를 반환하세요. 추가 규칙: 기존 계산 결과에 13를 더해 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function varsClamp13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsClamp13;",
    "explanation": "if/else 조건문으로 경계값을 먼저 처리하면 됩니다. / 원문 주제: 숫자 범위 제한하기",
    "hints": [
      "작은 쪽 경계(min)와 큰 쪽 경계(max)를 각각 검사하세요.",
      "범위 안에 있는 값은 그대로 반환해야 합니다.",
      "음수와 경계값(min, max 자체)도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과에 13를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-clamp-13-tc-1",
        "input": {
          "value": -6,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 13,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-clamp-13-tc-2",
        "input": {
          "value": 9,
          "min": 0,
          "max": 5
        },
        "expectedOutput": 18,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-clamp-13-tc-3",
        "input": {
          "value": 6,
          "min": 0,
          "max": 10
        },
        "expectedOutput": 19,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-clamp-13-tc-4",
        "input": {
          "value": -100,
          "min": -10,
          "max": 10
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-clamp-13-tc-5",
        "input": {
          "value": 5,
          "min": 5,
          "max": 5
        },
        "expectedOutput": 18,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-grade-14",
    "slug": "vars-grade-14",
    "title": "변수/연산/조건문 · 요약 엔진 합성 미션 14",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "condition",
      "comparison",
      "number"
    ],
    "description": "입력 점수(score, 0~100)를 받아 등급 문자열을 반환하세요. 90 이상 A, 80 이상 B, 70 이상 C, 그 외 D입니다. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function varsGrade14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsGrade14;",
    "explanation": "큰 구간부터 순서대로 비교하면 조건이 단순해집니다. / 원문 주제: 점수 등급 매기기",
    "hints": [
      "90점 이상을 먼저 검사하세요.",
      "조건 순서를 바꾸면 잘못된 등급이 나올 수 있습니다.",
      "0점과 100점 같은 경계 점수도 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-grade-14-tc-1",
        "input": 95,
        "expectedOutput": "A",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-grade-14-tc-2",
        "input": 82,
        "expectedOutput": "B",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-grade-14-tc-3",
        "input": 67,
        "expectedOutput": "D",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-grade-14-tc-4",
        "input": 70,
        "expectedOutput": "C",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-grade-14-tc-5",
        "input": 0,
        "expectedOutput": "D",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-vars-discount-15",
    "slug": "vars-discount-15",
    "title": "변수/연산/조건문 · 필터 유틸 확장 미션 15",
    "difficulty": "EASY",
    "category": "변수/연산/조건문",
    "tags": [
      "operator",
      "condition",
      "object"
    ],
    "description": "입력은 { price, isMember }입니다. 회원이면 14% 할인, 아니면 원가를 반환하세요. 결과는 소수점 첫째 자리에서 반올림한 정수로 반환합니다. 추가 규칙: 기존 계산 결과에 15을 곱해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function varsDiscount15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = varsDiscount15;",
    "explanation": "삼항 연산자 또는 if문으로 할인율을 나눈 뒤 계산하면 됩니다. / 원문 주제: 할인 적용 금액 계산",
    "hints": [
      "회원 여부에 따라 할인율을 먼저 정하세요.",
      "price * (1 - 할인율)로 계산할 수 있습니다.",
      "반환 전 Math.round를 적용해 정수로 맞추세요.",
      "변형 규칙: 기존 계산 결과에 15을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "vars-discount-15-tc-1",
        "input": {
          "price": 10000,
          "isMember": true,
          "rate": 14
        },
        "expectedOutput": 129000,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "vars-discount-15-tc-2",
        "input": {
          "price": 15990,
          "isMember": false,
          "rate": 14
        },
        "expectedOutput": 239850,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "vars-discount-15-tc-3",
        "input": {
          "price": 0,
          "isMember": true,
          "rate": 14
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "vars-discount-15-tc-4",
        "input": {
          "price": 9999,
          "isMember": true,
          "rate": 14
        },
        "expectedOutput": 128985,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "vars-discount-15-tc-5",
        "input": {
          "price": 1200,
          "isMember": false,
          "rate": 14
        },
        "expectedOutput": 18000,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-sum-to-n-1",
    "slug": "loop-sum-to-n-1",
    "title": "반복문 · 검증 파이프 확장 미션 1",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "for",
      "loop",
      "number"
    ],
    "description": "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function loopSumToN1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopSumToN1;",
    "explanation": "for문으로 누적합 변수를 업데이트하면 됩니다. / 원문 주제: 1부터 N까지 합 구하기",
    "hints": [
      "합계를 담을 변수를 0으로 시작하세요.",
      "반복 범위를 1부터 n까지 정확히 맞추세요.",
      "n이 0 이하인 경우를 먼저 처리하면 안전합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-sum-to-n-1-tc-1",
        "input": 5,
        "expectedOutput": 15,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-sum-to-n-1-tc-2",
        "input": 1,
        "expectedOutput": 1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-sum-to-n-1-tc-3",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-sum-to-n-1-tc-4",
        "input": 10,
        "expectedOutput": 55,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-sum-to-n-1-tc-5",
        "input": -3,
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-count-char-2",
    "slug": "loop-count-char-2",
    "title": "반복문 · 객체 매퍼 정리 미션 2",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "for",
      "string",
      "condition"
    ],
    "description": "입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: a) 추가 규칙: 기존 계산 결과에 2를 더해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function loopCountChar2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopCountChar2;",
    "explanation": "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다. / 원문 주제: 문자 개수 세기",
    "hints": [
      "text와 target을 모두 소문자로 맞추세요.",
      "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
      "빈 문자열일 때 결과가 0인지 확인하세요.",
      "변형 규칙: 기존 계산 결과에 2를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-count-char-2-tc-1",
        "input": {
          "text": "Aaab",
          "target": "a"
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-count-char-2-tc-2",
        "input": {
          "text": "JavaScript",
          "target": "a"
        },
        "expectedOutput": 4,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-count-char-2-tc-3",
        "input": {
          "text": "",
          "target": "a"
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-count-char-2-tc-4",
        "input": {
          "text": "BBBBbb",
          "target": "b"
        },
        "expectedOutput": 8,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-count-char-2-tc-5",
        "input": {
          "text": "12345",
          "target": "b"
        },
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-range-step-3",
    "slug": "loop-range-step-3",
    "title": "반복문 · 요약 엔진 재검증 미션 3",
    "difficulty": "HARD",
    "category": "반복문",
    "tags": [
      "while",
      "loop",
      "array"
    ],
    "description": "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function loopRangeStep3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopRangeStep3;",
    "explanation": "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다. / 원문 주제: 간격 배열 만들기",
    "hints": [
      "step이 0 이하인지 먼저 확인하세요.",
      "현재 값이 end를 넘기 전까지 반복하세요.",
      "음수 시작값이나 start > end도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-range-step-3-tc-1",
        "input": {
          "start": 0,
          "end": 6,
          "step": 2
        },
        "expectedOutput": "0|2|4|6",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-range-step-3-tc-2",
        "input": {
          "start": -2,
          "end": 2,
          "step": 2
        },
        "expectedOutput": "-2|0|2",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-range-step-3-tc-3",
        "input": {
          "start": 5,
          "end": 3,
          "step": 1
        },
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-range-step-3-tc-4",
        "input": {
          "start": 1,
          "end": 1,
          "step": 0
        },
        "expectedOutput": "",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-range-step-3-tc-5",
        "input": {
          "start": 3,
          "end": 9,
          "step": 3
        },
        "expectedOutput": "3|6|9",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-factorial-4",
    "slug": "loop-factorial-4",
    "title": "반복문 · 테스트 헬퍼 보정 미션 4",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "loop",
      "math",
      "number"
    ],
    "description": "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에 4을 곱해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function loopFactorial4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopFactorial4;",
    "explanation": "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요. / 원문 주제: 팩토리얼 계산",
    "hints": [
      "n이 음수인지 먼저 처리하세요.",
      "n이 0일 때는 반복 없이 1을 반환합니다.",
      "곱셈 누적값은 1에서 시작해야 합니다.",
      "변형 규칙: 기존 계산 결과에 4을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-factorial-4-tc-1",
        "input": 3,
        "expectedOutput": 24,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-factorial-4-tc-2",
        "input": 0,
        "expectedOutput": 4,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-factorial-4-tc-3",
        "input": -1,
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-factorial-4-tc-4",
        "input": 5,
        "expectedOutput": 480,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-factorial-4-tc-5",
        "input": 1,
        "expectedOutput": 4,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-sum-to-n-5",
    "slug": "loop-sum-to-n-5",
    "title": "반복문 · 요약 엔진 추출 미션 5",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "for",
      "loop",
      "number"
    ],
    "description": "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요. 추가 규칙: 기존 계산 결과에 6을 곱해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function loopSumToN5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopSumToN5;",
    "explanation": "for문으로 누적합 변수를 업데이트하면 됩니다. / 원문 주제: 1부터 N까지 합 구하기",
    "hints": [
      "합계를 담을 변수를 0으로 시작하세요.",
      "반복 범위를 1부터 n까지 정확히 맞추세요.",
      "n이 0 이하인 경우를 먼저 처리하면 안전합니다.",
      "변형 규칙: 기존 계산 결과에 6을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-sum-to-n-5-tc-1",
        "input": 5,
        "expectedOutput": 90,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-sum-to-n-5-tc-2",
        "input": 1,
        "expectedOutput": 6,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-sum-to-n-5-tc-3",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-sum-to-n-5-tc-4",
        "input": 10,
        "expectedOutput": 330,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-sum-to-n-5-tc-5",
        "input": -3,
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-count-char-6",
    "slug": "loop-count-char-6",
    "title": "반복문 · 규칙 실행기 분해 미션 6",
    "difficulty": "HARD",
    "category": "반복문",
    "tags": [
      "for",
      "string",
      "condition"
    ],
    "description": "입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: b) 추가 규칙: 기존 계산 결과를 7로 나눈 나머지를 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function loopCountChar6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopCountChar6;",
    "explanation": "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다. / 원문 주제: 문자 개수 세기",
    "hints": [
      "text와 target을 모두 소문자로 맞추세요.",
      "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
      "빈 문자열일 때 결과가 0인지 확인하세요.",
      "변형 규칙: 기존 계산 결과를 7로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-count-char-6-tc-1",
        "input": {
          "text": "Abbb",
          "target": "b"
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-count-char-6-tc-2",
        "input": {
          "text": "JavaScript",
          "target": "a"
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-count-char-6-tc-3",
        "input": {
          "text": "",
          "target": "b"
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-count-char-6-tc-4",
        "input": {
          "text": "BBBBbb",
          "target": "c"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-count-char-6-tc-5",
        "input": {
          "text": "12345",
          "target": "c"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-range-step-7",
    "slug": "loop-range-step-7",
    "title": "반복문 · 지표 계산기 검산 미션 7",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "while",
      "loop",
      "array"
    ],
    "description": "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function loopRangeStep7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopRangeStep7;",
    "explanation": "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다. / 원문 주제: 간격 배열 만들기",
    "hints": [
      "step이 0 이하인지 먼저 확인하세요.",
      "현재 값이 end를 넘기 전까지 반복하세요.",
      "음수 시작값이나 start > end도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-range-step-7-tc-1",
        "input": {
          "start": 0,
          "end": 7,
          "step": 2
        },
        "expectedOutput": [
          0,
          2,
          4,
          6
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-range-step-7-tc-2",
        "input": {
          "start": -2,
          "end": 2,
          "step": 2
        },
        "expectedOutput": [
          -2,
          0,
          2
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-range-step-7-tc-3",
        "input": {
          "start": 5,
          "end": 3,
          "step": 1
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-range-step-7-tc-4",
        "input": {
          "start": 1,
          "end": 2,
          "step": 0
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-range-step-7-tc-5",
        "input": {
          "start": 3,
          "end": 9,
          "step": 3
        },
        "expectedOutput": [
          3,
          6,
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-factorial-8",
    "slug": "loop-factorial-8",
    "title": "반복문 · 에러 방어기 확장 미션 8",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "loop",
      "math",
      "number"
    ],
    "description": "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에서 6를 빼서 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function loopFactorial8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopFactorial8;",
    "explanation": "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요. / 원문 주제: 팩토리얼 계산",
    "hints": [
      "n이 음수인지 먼저 처리하세요.",
      "n이 0일 때는 반복 없이 1을 반환합니다.",
      "곱셈 누적값은 1에서 시작해야 합니다.",
      "변형 규칙: 기존 계산 결과에서 6를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-factorial-8-tc-1",
        "input": 4,
        "expectedOutput": 18,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-factorial-8-tc-2",
        "input": 0,
        "expectedOutput": -5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-factorial-8-tc-3",
        "input": -1,
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-factorial-8-tc-4",
        "input": 5,
        "expectedOutput": 114,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-factorial-8-tc-5",
        "input": 1,
        "expectedOutput": -5,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-sum-to-n-9",
    "slug": "loop-sum-to-n-9",
    "title": "반복문 · 전처리 워커 재매핑 미션 9",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "for",
      "loop",
      "number"
    ],
    "description": "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요. 추가 규칙: 기존 계산 결과에서 8를 빼서 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function loopSumToN9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopSumToN9;",
    "explanation": "for문으로 누적합 변수를 업데이트하면 됩니다. / 원문 주제: 1부터 N까지 합 구하기",
    "hints": [
      "합계를 담을 변수를 0으로 시작하세요.",
      "반복 범위를 1부터 n까지 정확히 맞추세요.",
      "n이 0 이하인 경우를 먼저 처리하면 안전합니다.",
      "변형 규칙: 기존 계산 결과에서 8를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-sum-to-n-9-tc-1",
        "input": 5,
        "expectedOutput": 7,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-sum-to-n-9-tc-2",
        "input": 1,
        "expectedOutput": -7,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-sum-to-n-9-tc-3",
        "input": 0,
        "expectedOutput": -8,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-sum-to-n-9-tc-4",
        "input": 10,
        "expectedOutput": 47,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-sum-to-n-9-tc-5",
        "input": -3,
        "expectedOutput": -8,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-count-char-10",
    "slug": "loop-count-char-10",
    "title": "반복문 · 상태 판별기 안정화 미션 10",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "for",
      "string",
      "condition"
    ],
    "description": "입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: c) 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function loopCountChar10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopCountChar10;",
    "explanation": "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다. / 원문 주제: 문자 개수 세기",
    "hints": [
      "text와 target을 모두 소문자로 맞추세요.",
      "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
      "빈 문자열일 때 결과가 0인지 확인하세요.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-count-char-10-tc-1",
        "input": {
          "text": "Accb",
          "target": "c"
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-count-char-10-tc-2",
        "input": {
          "text": "JavaScript",
          "target": "a"
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-count-char-10-tc-3",
        "input": {
          "text": "",
          "target": "c"
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-count-char-10-tc-4",
        "input": {
          "text": "BBBBbb",
          "target": "d"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-count-char-10-tc-5",
        "input": {
          "text": "12345",
          "target": "d"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-range-step-11",
    "slug": "loop-range-step-11",
    "title": "반복문 · 정렬 처리기 검산 미션 11",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "while",
      "loop",
      "array"
    ],
    "description": "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열의 앞에서 9개만 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function loopRangeStep11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopRangeStep11;",
    "explanation": "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다. / 원문 주제: 간격 배열 만들기",
    "hints": [
      "step이 0 이하인지 먼저 확인하세요.",
      "현재 값이 end를 넘기 전까지 반복하세요.",
      "음수 시작값이나 start > end도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 9개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-range-step-11-tc-1",
        "input": {
          "start": 0,
          "end": 8,
          "step": 2
        },
        "expectedOutput": [
          0,
          2,
          4,
          6,
          8
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-range-step-11-tc-2",
        "input": {
          "start": -2,
          "end": 2,
          "step": 2
        },
        "expectedOutput": [
          -2,
          0,
          2
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-range-step-11-tc-3",
        "input": {
          "start": 5,
          "end": 3,
          "step": 1
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-range-step-11-tc-4",
        "input": {
          "start": 1,
          "end": 3,
          "step": 0
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-range-step-11-tc-5",
        "input": {
          "start": 3,
          "end": 9,
          "step": 3
        },
        "expectedOutput": [
          3,
          6,
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-factorial-12",
    "slug": "loop-factorial-12",
    "title": "반복문 · 조건 라우터 필터링 미션 12",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "loop",
      "math",
      "number"
    ],
    "description": "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function loopFactorial12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopFactorial12;",
    "explanation": "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요. / 원문 주제: 팩토리얼 계산",
    "hints": [
      "n이 음수인지 먼저 처리하세요.",
      "n이 0일 때는 반복 없이 1을 반환합니다.",
      "곱셈 누적값은 1에서 시작해야 합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-factorial-12-tc-1",
        "input": 5,
        "expectedOutput": 120,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-factorial-12-tc-2",
        "input": 0,
        "expectedOutput": 1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-factorial-12-tc-3",
        "input": -1,
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-factorial-12-tc-4",
        "input": 5,
        "expectedOutput": 120,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-factorial-12-tc-5",
        "input": 1,
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-sum-to-n-13",
    "slug": "loop-sum-to-n-13",
    "title": "반복문 · 응답 포매터 재조합 미션 13",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "for",
      "loop",
      "number"
    ],
    "description": "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function loopSumToN13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopSumToN13;",
    "explanation": "for문으로 누적합 변수를 업데이트하면 됩니다. / 원문 주제: 1부터 N까지 합 구하기",
    "hints": [
      "합계를 담을 변수를 0으로 시작하세요.",
      "반복 범위를 1부터 n까지 정확히 맞추세요.",
      "n이 0 이하인 경우를 먼저 처리하면 안전합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-sum-to-n-13-tc-1",
        "input": 5,
        "expectedOutput": 15,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-sum-to-n-13-tc-2",
        "input": 1,
        "expectedOutput": 1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-sum-to-n-13-tc-3",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-sum-to-n-13-tc-4",
        "input": 10,
        "expectedOutput": 55,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-sum-to-n-13-tc-5",
        "input": -3,
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-count-char-14",
    "slug": "loop-count-char-14",
    "title": "반복문 · 전처리 워커 합성 미션 14",
    "difficulty": "MEDIUM",
    "category": "반복문",
    "tags": [
      "for",
      "string",
      "condition"
    ],
    "description": "입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: d) 추가 규칙: 기존 계산 결과에 13을 곱해 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function loopCountChar14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopCountChar14;",
    "explanation": "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다. / 원문 주제: 문자 개수 세기",
    "hints": [
      "text와 target을 모두 소문자로 맞추세요.",
      "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
      "빈 문자열일 때 결과가 0인지 확인하세요.",
      "변형 규칙: 기존 계산 결과에 13을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-count-char-14-tc-1",
        "input": {
          "text": "Addb",
          "target": "d"
        },
        "expectedOutput": 26,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-count-char-14-tc-2",
        "input": {
          "text": "JavaScript",
          "target": "a"
        },
        "expectedOutput": 26,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-count-char-14-tc-3",
        "input": {
          "text": "",
          "target": "d"
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-count-char-14-tc-4",
        "input": {
          "text": "BBBBbb",
          "target": "e"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-count-char-14-tc-5",
        "input": {
          "text": "12345",
          "target": "e"
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-range-step-15",
    "slug": "loop-range-step-15",
    "title": "반복문 · 검증 파이프 재검증 미션 15",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "while",
      "loop",
      "array"
    ],
    "description": "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function loopRangeStep15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopRangeStep15;",
    "explanation": "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다. / 원문 주제: 간격 배열 만들기",
    "hints": [
      "step이 0 이하인지 먼저 확인하세요.",
      "현재 값이 end를 넘기 전까지 반복하세요.",
      "음수 시작값이나 start > end도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-range-step-15-tc-1",
        "input": {
          "start": 0,
          "end": 9,
          "step": 2
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-range-step-15-tc-2",
        "input": {
          "start": -2,
          "end": 2,
          "step": 2
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-range-step-15-tc-3",
        "input": {
          "start": 5,
          "end": 3,
          "step": 1
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-range-step-15-tc-4",
        "input": {
          "start": 1,
          "end": 4,
          "step": 0
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-range-step-15-tc-5",
        "input": {
          "start": 3,
          "end": 9,
          "step": 3
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-factorial-16",
    "slug": "loop-factorial-16",
    "title": "반복문 · 검증 파이프 추출 미션 16",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "loop",
      "math",
      "number"
    ],
    "description": "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function loopFactorial16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopFactorial16;",
    "explanation": "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요. / 원문 주제: 팩토리얼 계산",
    "hints": [
      "n이 음수인지 먼저 처리하세요.",
      "n이 0일 때는 반복 없이 1을 반환합니다.",
      "곱셈 누적값은 1에서 시작해야 합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-factorial-16-tc-1",
        "input": 3,
        "expectedOutput": -6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-factorial-16-tc-2",
        "input": 0,
        "expectedOutput": -1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-factorial-16-tc-3",
        "input": -1,
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-factorial-16-tc-4",
        "input": 5,
        "expectedOutput": -120,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-factorial-16-tc-5",
        "input": 1,
        "expectedOutput": -1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-sum-to-n-17",
    "slug": "loop-sum-to-n-17",
    "title": "반복문 · 필터 유틸 검산 미션 17",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "for",
      "loop",
      "number"
    ],
    "description": "정수 n이 주어질 때 1부터 n까지의 합을 반환하세요. n이 1보다 작으면 0을 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function loopSumToN17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopSumToN17;",
    "explanation": "for문으로 누적합 변수를 업데이트하면 됩니다. / 원문 주제: 1부터 N까지 합 구하기",
    "hints": [
      "합계를 담을 변수를 0으로 시작하세요.",
      "반복 범위를 1부터 n까지 정확히 맞추세요.",
      "n이 0 이하인 경우를 먼저 처리하면 안전합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-sum-to-n-17-tc-1",
        "input": 5,
        "expectedOutput": -15,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-sum-to-n-17-tc-2",
        "input": 1,
        "expectedOutput": -1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-sum-to-n-17-tc-3",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-sum-to-n-17-tc-4",
        "input": 10,
        "expectedOutput": -55,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-sum-to-n-17-tc-5",
        "input": -3,
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-count-char-18",
    "slug": "loop-count-char-18",
    "title": "반복문 · 에러 방어기 교정 미션 18",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "for",
      "string",
      "condition"
    ],
    "description": "입력은 { text, target }입니다. text에서 target 문자가 몇 번 나오는지 반환하세요. 대소문자는 구분하지 않습니다. (변형 키: e) 추가 규칙: 기존 계산 결과에서 15를 빼서 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function loopCountChar18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopCountChar18;",
    "explanation": "문자열을 소문자로 바꾼 뒤 순회하며 카운트합니다. / 원문 주제: 문자 개수 세기",
    "hints": [
      "text와 target을 모두 소문자로 맞추세요.",
      "for...of로 한 글자씩 순회하면 읽기 쉽습니다.",
      "빈 문자열일 때 결과가 0인지 확인하세요.",
      "변형 규칙: 기존 계산 결과에서 15를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-count-char-18-tc-1",
        "input": {
          "text": "Aeeb",
          "target": "e"
        },
        "expectedOutput": -13,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-count-char-18-tc-2",
        "input": {
          "text": "JavaScript",
          "target": "a"
        },
        "expectedOutput": -13,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-count-char-18-tc-3",
        "input": {
          "text": "",
          "target": "e"
        },
        "expectedOutput": -15,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-count-char-18-tc-4",
        "input": {
          "text": "BBBBbb",
          "target": "b"
        },
        "expectedOutput": -9,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-count-char-18-tc-5",
        "input": {
          "text": "12345",
          "target": "b"
        },
        "expectedOutput": -15,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-range-step-19",
    "slug": "loop-range-step-19",
    "title": "반복문 · 정렬 처리기 안정화 미션 19",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "while",
      "loop",
      "array"
    ],
    "description": "입력은 { start, end, step }입니다. start부터 end 이하까지 step 간격 숫자를 배열로 반환하세요. step이 0 이하이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function loopRangeStep19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopRangeStep19;",
    "explanation": "while문에서 현재 값을 증가시키며 배열에 push하면 됩니다. / 원문 주제: 간격 배열 만들기",
    "hints": [
      "step이 0 이하인지 먼저 확인하세요.",
      "현재 값이 end를 넘기 전까지 반복하세요.",
      "음수 시작값이나 start > end도 테스트해 보세요.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-range-step-19-tc-1",
        "input": {
          "start": 0,
          "end": 10,
          "step": 2
        },
        "expectedOutput": [
          10,
          8,
          6,
          4,
          2,
          0
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-range-step-19-tc-2",
        "input": {
          "start": -2,
          "end": 2,
          "step": 2
        },
        "expectedOutput": [
          2,
          0,
          -2
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-range-step-19-tc-3",
        "input": {
          "start": 5,
          "end": 3,
          "step": 1
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-range-step-19-tc-4",
        "input": {
          "start": 1,
          "end": 5,
          "step": 0
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-range-step-19-tc-5",
        "input": {
          "start": 3,
          "end": 9,
          "step": 3
        },
        "expectedOutput": [
          9,
          6,
          3
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-loop-factorial-20",
    "slug": "loop-factorial-20",
    "title": "반복문 · 로그 정규화기 압축 미션 20",
    "difficulty": "EASY",
    "category": "반복문",
    "tags": [
      "loop",
      "math",
      "number"
    ],
    "description": "정수 n(0 이상)이 주어질 때 n! 값을 반환하세요. n이 0이면 1입니다. n이 음수이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에 16를 더해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function loopFactorial20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = loopFactorial20;",
    "explanation": "곱셈 누적 변수를 사용하고 1부터 n까지 반복하세요. / 원문 주제: 팩토리얼 계산",
    "hints": [
      "n이 음수인지 먼저 처리하세요.",
      "n이 0일 때는 반복 없이 1을 반환합니다.",
      "곱셈 누적값은 1에서 시작해야 합니다.",
      "변형 규칙: 기존 계산 결과에 16를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "loop-factorial-20-tc-1",
        "input": 4,
        "expectedOutput": 40,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "loop-factorial-20-tc-2",
        "input": 0,
        "expectedOutput": 17,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "loop-factorial-20-tc-3",
        "input": -1,
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "loop-factorial-20-tc-4",
        "input": 5,
        "expectedOutput": 136,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "loop-factorial-20-tc-5",
        "input": 1,
        "expectedOutput": 17,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-1",
    "slug": "arr-basic-max-1",
    "title": "배열 기본 · 후처리 워커 보정 미션 1",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과를 4로 나눈 나머지를 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrBasicMax1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax1;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과를 4로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-1-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-1-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": -2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-1-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-1-tc-4",
        "input": [
          10,
          3,
          10,
          1
        ],
        "expectedOutput": 2,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-1-tc-5",
        "input": [
          0
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-2",
    "slug": "arr-basic-remove-duplicates-2",
    "title": "배열 기본 · 문자열 분석기 표준화 미션 2",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrBasicRemoveDuplicates2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates2;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-2-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-2-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          "a",
          "b"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-2-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-2-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-2-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": [
          "A",
          "a"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-3",
    "slug": "arr-basic-chunk-3",
    "title": "배열 기본 · 문자열 분석기 표준화 미션 3",
    "difficulty": "HARD",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 2) 추가 규칙: 기존 계산 결과 배열의 뒤에서 3개만 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function arrBasicChunk3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk3;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 3개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-3-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            3,
            4
          ],
          [
            5
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-3-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-3-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-3-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            "a",
            "b"
          ],
          [
            "c",
            "d"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-3-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-4",
    "slug": "arr-basic-rotate-left-4",
    "title": "배열 기본 · 집계 모듈 재매핑 미션 4",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrBasicRotateLeft4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft4;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-4-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 1
        },
        "expectedOutput": [
          1,
          4,
          3,
          2
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-4-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-4-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-4-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": [
          3,
          2,
          1
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-4-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": [
          2,
          1,
          3
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-5",
    "slug": "arr-basic-pair-sum-5",
    "title": "배열 기본 · 객체 매퍼 보호 미션 5",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열의 앞에서 4개만 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrBasicPairSum5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum5;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 4개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-5-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          3,
          5
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-5-tc-2",
        "input": [
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-5-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": [
          0,
          0,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-5-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0,
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-5-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-6",
    "slug": "arr-basic-max-6",
    "title": "배열 기본 · 에러 방어기 확장 미션 6",
    "difficulty": "HARD",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에 6를 더해 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function arrBasicMax6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax6;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과에 6를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-6-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": 10,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-6-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": 4,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-6-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-6-tc-4",
        "input": [
          11,
          3,
          11,
          1
        ],
        "expectedOutput": 17,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-6-tc-5",
        "input": [
          0
        ],
        "expectedOutput": 6,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-7",
    "slug": "arr-basic-remove-duplicates-7",
    "title": "배열 기본 · 데이터 변환기 표준화 미션 7",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrBasicRemoveDuplicates7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates7;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-7-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": "1|2|3",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-7-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": "a|b",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-7-tc-3",
        "input": [],
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-7-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": "0",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-7-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": "A|a",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-8",
    "slug": "arr-basic-chunk-8",
    "title": "배열 기본 · 필터 유틸 재매핑 미션 8",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 3) 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrBasicChunk8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk8;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-8-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 3
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ],
          [
            4,
            5
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-8-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-8-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-8-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            "a",
            "b"
          ],
          [
            "c",
            "d"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-8-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-9",
    "slug": "arr-basic-rotate-left-9",
    "title": "배열 기본 · 집계 모듈 정리 미션 9",
    "difficulty": "HARD",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrBasicRotateLeft9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft9;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-9-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 2
        },
        "expectedOutput": 4,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-9-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-9-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-9-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-9-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-10",
    "slug": "arr-basic-pair-sum-10",
    "title": "배열 기본 · 입력 정제기 재조합 미션 10",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrBasicPairSum10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum10;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-10-tc-1",
        "input": [
          1,
          2,
          4
        ],
        "expectedOutput": [
          3,
          6
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-10-tc-2",
        "input": [
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-10-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-10-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-10-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-11",
    "slug": "arr-basic-max-11",
    "title": "배열 기본 · 입력 정제기 표준화 미션 11",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrBasicMax11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax11;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-11-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": -4,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-11-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-11-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-11-tc-4",
        "input": [
          12,
          3,
          12,
          1
        ],
        "expectedOutput": -12,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-11-tc-5",
        "input": [
          0
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-12",
    "slug": "arr-basic-remove-duplicates-12",
    "title": "배열 기본 · 로그 정규화기 필터링 미션 12",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 뒤에서 10개만 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function arrBasicRemoveDuplicates12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates12;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 10개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-12-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-12-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          "a",
          "b"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-12-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-12-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-12-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": [
          "A",
          "a"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-13",
    "slug": "arr-basic-chunk-13",
    "title": "배열 기본 · 객체 매퍼 집약 미션 13",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 2) 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrBasicChunk13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk13;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-13-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            5
          ],
          [
            3,
            4
          ],
          [
            1,
            2
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-13-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-13-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-13-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            "c",
            "d"
          ],
          [
            "a",
            "b"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-13-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-14",
    "slug": "arr-basic-rotate-left-14",
    "title": "배열 기본 · 전처리 워커 합성 미션 14",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 앞에서 11개만 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrBasicRotateLeft14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft14;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 11개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-14-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 3
        },
        "expectedOutput": [
          4,
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-14-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-14-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-14-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-14-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": [
          3,
          1,
          2
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-15",
    "slug": "arr-basic-pair-sum-15",
    "title": "배열 기본 · 상태 판별기 최적화 미션 15",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrBasicPairSum15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum15;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-15-tc-1",
        "input": [
          1,
          2,
          5
        ],
        "expectedOutput": "3|7",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-15-tc-2",
        "input": [
          5
        ],
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-15-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": "0|0|0",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-15-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": "0|0",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-15-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": "0",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-16",
    "slug": "arr-basic-max-16",
    "title": "배열 기본 · 에러 방어기 재검증 미션 16",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrBasicMax16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax16;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-16-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": 4,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-16-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": -2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-16-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-16-tc-4",
        "input": [
          13,
          3,
          13,
          1
        ],
        "expectedOutput": 13,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-16-tc-5",
        "input": [
          0
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-17",
    "slug": "arr-basic-remove-duplicates-17",
    "title": "배열 기본 · 포인트 처리기 합성 미션 17",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function arrBasicRemoveDuplicates17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates17;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-17-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-17-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          "a",
          "b"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-17-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-17-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-17-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": [
          "a",
          "A"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-18",
    "slug": "arr-basic-chunk-18",
    "title": "배열 기본 · 내보내기 모듈 합성 미션 18",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 3) 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function arrBasicChunk18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk18;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-18-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 3
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-18-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-18-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-18-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": 2,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-18-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-19",
    "slug": "arr-basic-rotate-left-19",
    "title": "배열 기본 · 리포트 생성기 최적화 미션 19",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function arrBasicRotateLeft19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft19;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-19-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 1
        },
        "expectedOutput": [
          2,
          3,
          4,
          1
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-19-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-19-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-19-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-19-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": [
          3,
          1,
          2
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-20",
    "slug": "arr-basic-pair-sum-20",
    "title": "배열 기본 · 내보내기 모듈 보정 미션 20",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열의 뒤에서 15개만 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrBasicPairSum20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum20;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 15개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-20-tc-1",
        "input": [
          1,
          2,
          6
        ],
        "expectedOutput": [
          3,
          8
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-20-tc-2",
        "input": [
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-20-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": [
          0,
          0,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-20-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0,
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-20-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-21",
    "slug": "arr-basic-max-21",
    "title": "배열 기본 · 상태 판별기 추출 미션 21",
    "difficulty": "MEDIUM",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에서 17를 빼서 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrBasicMax21(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax21;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과에서 17를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-21-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": -13,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-21-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": -19,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-21-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-21-tc-4",
        "input": [
          14,
          3,
          14,
          1
        ],
        "expectedOutput": -3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-21-tc-5",
        "input": [
          0
        ],
        "expectedOutput": -17,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-22",
    "slug": "arr-basic-remove-duplicates-22",
    "title": "배열 기본 · 입력 정제기 보호 미션 22",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrBasicRemoveDuplicates22(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates22;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-22-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": [
          3,
          2,
          1
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-22-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          "b",
          "a"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-22-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-22-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-22-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": [
          "a",
          "A"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-23",
    "slug": "arr-basic-chunk-23",
    "title": "배열 기본 · 내보내기 모듈 보호 미션 23",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 2) 추가 규칙: 기존 계산 결과 배열의 앞에서 18개만 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function arrBasicChunk23(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk23;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 18개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-23-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            1,
            2
          ],
          [
            3,
            4
          ],
          [
            5
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-23-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-23-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-23-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            "a",
            "b"
          ],
          [
            "c",
            "d"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-23-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-24",
    "slug": "arr-basic-rotate-left-24",
    "title": "배열 기본 · 스코어 계산기 필터링 미션 24",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrBasicRotateLeft24(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft24;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-24-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 2
        },
        "expectedOutput": "3|4|1|2",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-24-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-24-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": "x",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-24-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": "1|2|3",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-24-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": "3|1|2",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-25",
    "slug": "arr-basic-pair-sum-25",
    "title": "배열 기본 · 배열 가공기 필터링 미션 25",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrBasicPairSum25(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum25;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-25-tc-1",
        "input": [
          1,
          2,
          7
        ],
        "expectedOutput": [
          3,
          9
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-25-tc-2",
        "input": [
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-25-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": [
          0,
          0,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-25-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0,
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-25-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-max-26",
    "slug": "arr-basic-max-26",
    "title": "배열 기본 · 로그 정규화기 보호 미션 26",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "max",
      "loop"
    ],
    "description": "숫자 배열 input이 주어질 때 최댓값을 반환하세요. 빈 배열이면 null을 반환하세요. 추가 규칙: 기존 계산 결과에 22을 곱해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrBasicMax26(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicMax26;",
    "explanation": "첫 원소를 기준값으로 두고 순회하며 더 큰 값을 찾습니다. / 원문 주제: 배열 최댓값 찾기",
    "hints": [
      "빈 배열인지 먼저 검사하세요.",
      "기준값을 input[0]으로 시작하면 비교가 쉽습니다.",
      "음수만 있는 배열도 올바르게 처리해야 합니다.",
      "변형 규칙: 기존 계산 결과에 22을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-max-26-tc-1",
        "input": [
          1,
          4,
          2
        ],
        "expectedOutput": 88,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-max-26-tc-2",
        "input": [
          -5,
          -2,
          -9
        ],
        "expectedOutput": -44,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-max-26-tc-3",
        "input": [],
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-max-26-tc-4",
        "input": [
          15,
          3,
          15,
          1
        ],
        "expectedOutput": 330,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-max-26-tc-5",
        "input": [
          0
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-remove-duplicates-27",
    "slug": "arr-basic-remove-duplicates-27",
    "title": "배열 기본 · 스코어 계산기 안정화 미션 27",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "set",
      "dedupe"
    ],
    "description": "배열 input에서 중복 원소를 제거하되, 처음 등장한 순서는 유지한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function arrBasicRemoveDuplicates27(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRemoveDuplicates27;",
    "explanation": "Set으로 본 원소를 기록하고 처음 본 값만 결과 배열에 넣습니다. / 원문 주제: 중복 제거 후 순서 유지",
    "hints": [
      "원본 배열을 직접 수정하지 말고 새 배열을 만드세요.",
      "이미 본 값인지 확인하는 자료구조가 필요합니다.",
      "숫자/문자열이 섞여 있어도 순서가 유지돼야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-remove-duplicates-27-tc-1",
        "input": [
          1,
          1,
          2,
          3,
          2
        ],
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-remove-duplicates-27-tc-2",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-remove-duplicates-27-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-remove-duplicates-27-tc-4",
        "input": [
          0,
          0,
          0,
          0
        ],
        "expectedOutput": 1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-remove-duplicates-27-tc-5",
        "input": [
          "A",
          "a",
          "A",
          "a"
        ],
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-chunk-28",
    "slug": "arr-basic-chunk-28",
    "title": "배열 기본 · 전처리 워커 집약 미션 28",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "slice",
      "loop"
    ],
    "description": "입력은 { items, size }입니다. items를 size 크기 묶음 배열로 나눠 반환하세요. size가 0 이하이면 빈 배열을 반환합니다. (기본 size 예시: 3) 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrBasicChunk28(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicChunk28;",
    "explanation": "인덱스를 size씩 증가시키며 slice를 사용합니다. / 원문 주제: 배열 청크 나누기",
    "hints": [
      "size가 유효한지 먼저 검사하세요.",
      "마지막 묶음은 size보다 작을 수 있습니다.",
      "빈 배열 입력도 그대로 빈 배열을 반환하세요.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-chunk-28-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4,
            5
          ],
          "size": 3
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ],
          [
            4,
            5
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-chunk-28-tc-2",
        "input": {
          "items": [],
          "size": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-chunk-28-tc-3",
        "input": {
          "items": [
            1,
            2
          ],
          "size": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-chunk-28-tc-4",
        "input": {
          "items": [
            "a",
            "b",
            "c",
            "d"
          ],
          "size": 2
        },
        "expectedOutput": [
          [
            "a",
            "b"
          ],
          [
            "c",
            "d"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-chunk-28-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "size": 5
        },
        "expectedOutput": [
          [
            1,
            2,
            3
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-rotate-left-29",
    "slug": "arr-basic-rotate-left-29",
    "title": "배열 기본 · 전처리 워커 표준화 미션 29",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "index",
      "mod"
    ],
    "description": "입력은 { items, k }입니다. items를 왼쪽으로 k칸 회전한 새 배열을 반환하세요. 빈 배열이면 빈 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 뒤에서 22개만 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrBasicRotateLeft29(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicRotateLeft29;",
    "explanation": "k를 배열 길이로 나눈 나머지를 이용하면 과도한 회전을 줄일 수 있습니다. / 원문 주제: 배열 왼쪽 회전",
    "hints": [
      "k가 길이보다 커도 정상 동작해야 합니다.",
      "slice 두 번을 이어 붙이면 구현이 간단합니다.",
      "원본 배열은 변경하지 마세요.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 22개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-rotate-left-29-tc-1",
        "input": {
          "items": [
            1,
            2,
            3,
            4
          ],
          "k": 3
        },
        "expectedOutput": [
          4,
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-rotate-left-29-tc-2",
        "input": {
          "items": [],
          "k": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-rotate-left-29-tc-3",
        "input": {
          "items": [
            "x"
          ],
          "k": 10
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-rotate-left-29-tc-4",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 3
        },
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-rotate-left-29-tc-5",
        "input": {
          "items": [
            1,
            2,
            3
          ],
          "k": 5
        },
        "expectedOutput": [
          3,
          1,
          2
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-basic-pair-sum-30",
    "slug": "arr-basic-pair-sum-30",
    "title": "배열 기본 · 상태 판별기 재검증 미션 30",
    "difficulty": "EASY",
    "category": "배열 기본",
    "tags": [
      "array",
      "sum",
      "loop"
    ],
    "description": "숫자 배열 input에서 인접한 두 원소의 합을 순서대로 담은 새 배열을 반환하세요. 원소가 2개 미만이면 빈 배열을 반환합니다. 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function arrBasicPairSum30(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrBasicPairSum30;",
    "explanation": "i와 i+1을 더하며 length-1까지 순회합니다. / 원문 주제: 인접 원소 합 배열",
    "hints": [
      "반복 종료 조건을 length - 1로 두세요.",
      "원소가 하나뿐인 경우 빈 배열입니다.",
      "음수와 0이 섞여도 정확히 계산해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-basic-pair-sum-30-tc-1",
        "input": [
          1,
          2,
          8
        ],
        "expectedOutput": [
          10,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-basic-pair-sum-30-tc-2",
        "input": [
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-basic-pair-sum-30-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": [
          0,
          0,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-basic-pair-sum-30-tc-4",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0,
          0
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-basic-pair-sum-30-tc-5",
        "input": [
          10,
          -10
        ],
        "expectedOutput": [
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-reverse-1",
    "slug": "str-reverse-1",
    "title": "문자열 · 배열 가공기 표준화 미션 1",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "reverse",
      "loop"
    ],
    "description": "문자열 input을 뒤집은 새 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function strReverse1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strReverse1;",
    "explanation": "split/reverse/join 또는 반복문으로 구현할 수 있습니다. / 원문 주제: 문자열 뒤집기",
    "hints": [
      "빈 문자열도 정상 처리되어야 합니다.",
      "원본 문자열은 변경되지 않습니다.",
      "대소문자와 숫자는 그대로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-reverse-1-tc-1",
        "input": "JavaScript",
        "expectedOutput": "tpircSavaJ",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-reverse-1-tc-2",
        "input": "",
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-reverse-1-tc-3",
        "input": "aB1",
        "expectedOutput": "1Ba",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-reverse-1-tc-4",
        "input": "level",
        "expectedOutput": "level",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-reverse-1-tc-5",
        "input": "  ab",
        "expectedOutput": "ba_",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-normalize-space-2",
    "slug": "str-normalize-space-2",
    "title": "문자열 · 객체 매퍼 가공 미션 2",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "trim",
      "split"
    ],
    "description": "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function strNormalizeSpace2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strNormalizeSpace2;",
    "explanation": "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다. / 원문 주제: 공백 정규화",
    "hints": [
      "먼저 trim으로 양쪽 공백을 제거하세요.",
      "split(\" \") 후 빈 항목 제거가 핵심입니다.",
      "공백만 있는 입력은 빈 문자열을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-normalize-space-2-tc-1",
        "input": "  hello   world  ",
        "expectedOutput": "dlrow olleh",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-normalize-space-2-tc-2",
        "input": "a   b c",
        "expectedOutput": "c b a",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-normalize-space-2-tc-3",
        "input": "   ",
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-normalize-space-2-tc-4",
        "input": "one",
        "expectedOutput": "eno",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-normalize-space-2-tc-5",
        "input": "  JS   syntax   trainer ",
        "expectedOutput": "reniart xatnys SJ",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-is-palindrome-3",
    "slug": "str-is-palindrome-3",
    "title": "문자열 · 집계 모듈 표준화 미션 3",
    "difficulty": "HARD",
    "category": "문자열",
    "tags": [
      "string",
      "palindrome",
      "condition"
    ],
    "description": "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다. 추가 규칙: 기존 계산 결과와 관계없이 true를 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function strIsPalindrome3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strIsPalindrome3;",
    "explanation": "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다. / 원문 주제: 회문 문자열 검사",
    "hints": [
      "비교 전 소문자로 통일하세요.",
      "영문자/숫자 외 문자는 제거하세요.",
      "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요.",
      "변형 규칙: 기존 계산 결과와 관계없이 true를 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-is-palindrome-3-tc-1",
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": true,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-is-palindrome-3-tc-2",
        "input": "hello",
        "expectedOutput": true,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-is-palindrome-3-tc-3",
        "input": "",
        "expectedOutput": true,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-is-palindrome-3-tc-4",
        "input": "No lemon, no melon",
        "expectedOutput": true,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-is-palindrome-3-tc-5",
        "input": "123abccba321",
        "expectedOutput": true,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-count-word-4",
    "slug": "str-count-word-4",
    "title": "문자열 · 포인트 처리기 집약 미션 4",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "split",
      "count"
    ],
    "description": "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function strCountWord4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strCountWord4;",
    "explanation": "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다. / 원문 주제: 단어 개수 세기",
    "hints": [
      "trim 후 split(\" \")을 사용해 보세요.",
      "빈 문자열은 단어 수 0입니다.",
      "연속 공백이 있어도 정확히 세야 합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-count-word-4-tc-1",
        "input": "hello world",
        "expectedOutput": -2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-count-word-4-tc-2",
        "input": "  one   two  three ",
        "expectedOutput": -3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-count-word-4-tc-3",
        "input": "",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-count-word-4-tc-4",
        "input": "    ",
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-count-word-4-tc-5",
        "input": "JS syntax trainer app",
        "expectedOutput": -4,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-mask-last-5",
    "slug": "str-mask-last-5",
    "title": "문자열 · 필터 유틸 필터링 미션 5",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "slice",
      "format"
    ],
    "description": "입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(2)개는 그대로 노출합니다. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function strMaskLast5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strMaskLast5;",
    "explanation": "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다. / 원문 주제: 문자열 뒤쪽 마스킹",
    "hints": [
      "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
      "마스킹 길이는 text.length - visible입니다.",
      "repeat를 사용하면 * 문자열 생성이 편리합니다.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-mask-last-5-tc-1",
        "input": {
          "text": "abcdef",
          "visible": 2
        },
        "expectedOutput": "****ef_S3",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-mask-last-5-tc-2",
        "input": {
          "text": "ab",
          "visible": 2
        },
        "expectedOutput": "ab_S3",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-mask-last-5-tc-3",
        "input": {
          "text": "",
          "visible": 2
        },
        "expectedOutput": "_S3",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-mask-last-5-tc-4",
        "input": {
          "text": "1234567890",
          "visible": 2
        },
        "expectedOutput": "********90_S3",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-mask-last-5-tc-5",
        "input": {
          "text": "xyz",
          "visible": 0
        },
        "expectedOutput": "***_S3",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-reverse-6",
    "slug": "str-reverse-6",
    "title": "문자열 · 전처리 워커 보호 미션 6",
    "difficulty": "HARD",
    "category": "문자열",
    "tags": [
      "string",
      "reverse",
      "loop"
    ],
    "description": "문자열 input을 뒤집은 새 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function strReverse6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strReverse6;",
    "explanation": "split/reverse/join 또는 반복문으로 구현할 수 있습니다. / 원문 주제: 문자열 뒤집기",
    "hints": [
      "빈 문자열도 정상 처리되어야 합니다.",
      "원본 문자열은 변경되지 않습니다.",
      "대소문자와 숫자는 그대로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-reverse-6-tc-1",
        "input": "JavaScript",
        "expectedOutput": "tpircSavaJ_S5",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-reverse-6-tc-2",
        "input": "",
        "expectedOutput": "_S5",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-reverse-6-tc-3",
        "input": "aB1",
        "expectedOutput": "1Ba_S5",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-reverse-6-tc-4",
        "input": "level",
        "expectedOutput": "level_S5",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-reverse-6-tc-5",
        "input": "  ab",
        "expectedOutput": "ba  _S5",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-normalize-space-7",
    "slug": "str-normalize-space-7",
    "title": "문자열 · 상태 판별기 추출 미션 7",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "trim",
      "split"
    ],
    "description": "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function strNormalizeSpace7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strNormalizeSpace7;",
    "explanation": "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다. / 원문 주제: 공백 정규화",
    "hints": [
      "먼저 trim으로 양쪽 공백을 제거하세요.",
      "split(\" \") 후 빈 항목 제거가 핵심입니다.",
      "공백만 있는 입력은 빈 문자열을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-normalize-space-7-tc-1",
        "input": "  hello   world  ",
        "expectedOutput": "HELLO WORLD",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-normalize-space-7-tc-2",
        "input": "a   b c",
        "expectedOutput": "A B C",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-normalize-space-7-tc-3",
        "input": "   ",
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-normalize-space-7-tc-4",
        "input": "one",
        "expectedOutput": "ONE",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-normalize-space-7-tc-5",
        "input": "  JS   syntax   trainer ",
        "expectedOutput": "JS SYNTAX TRAINER",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-is-palindrome-8",
    "slug": "str-is-palindrome-8",
    "title": "문자열 · 스코어 계산기 재검증 미션 8",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "palindrome",
      "condition"
    ],
    "description": "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다. 추가 규칙: 기존 계산 결과 boolean 값을 그대로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function strIsPalindrome8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strIsPalindrome8;",
    "explanation": "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다. / 원문 주제: 회문 문자열 검사",
    "hints": [
      "비교 전 소문자로 통일하세요.",
      "영문자/숫자 외 문자는 제거하세요.",
      "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요.",
      "변형 규칙: 기존 계산 결과 boolean 값을 그대로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-is-palindrome-8-tc-1",
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": true,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-is-palindrome-8-tc-2",
        "input": "hello",
        "expectedOutput": false,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-is-palindrome-8-tc-3",
        "input": "",
        "expectedOutput": true,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-is-palindrome-8-tc-4",
        "input": "No lemon, no melon",
        "expectedOutput": true,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-is-palindrome-8-tc-5",
        "input": "123abccba321",
        "expectedOutput": true,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-count-word-9",
    "slug": "str-count-word-9",
    "title": "문자열 · 요약 엔진 보호 미션 9",
    "difficulty": "HARD",
    "category": "문자열",
    "tags": [
      "string",
      "split",
      "count"
    ],
    "description": "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function strCountWord9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strCountWord9;",
    "explanation": "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다. / 원문 주제: 단어 개수 세기",
    "hints": [
      "trim 후 split(\" \")을 사용해 보세요.",
      "빈 문자열은 단어 수 0입니다.",
      "연속 공백이 있어도 정확히 세야 합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-count-word-9-tc-1",
        "input": "hello world",
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-count-word-9-tc-2",
        "input": "  one   two  three ",
        "expectedOutput": 3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-count-word-9-tc-3",
        "input": "",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-count-word-9-tc-4",
        "input": "    ",
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-count-word-9-tc-5",
        "input": "JS syntax trainer app",
        "expectedOutput": 4,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-mask-last-10",
    "slug": "str-mask-last-10",
    "title": "문자열 · 후처리 워커 보정 미션 10",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "slice",
      "format"
    ],
    "description": "입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(3)개는 그대로 노출합니다. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function strMaskLast10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strMaskLast10;",
    "explanation": "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다. / 원문 주제: 문자열 뒤쪽 마스킹",
    "hints": [
      "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
      "마스킹 길이는 text.length - visible입니다.",
      "repeat를 사용하면 * 문자열 생성이 편리합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-mask-last-10-tc-1",
        "input": {
          "text": "abcdef",
          "visible": 3
        },
        "expectedOutput": "fed***",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-mask-last-10-tc-2",
        "input": {
          "text": "ab",
          "visible": 3
        },
        "expectedOutput": "ba",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-mask-last-10-tc-3",
        "input": {
          "text": "",
          "visible": 3
        },
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-mask-last-10-tc-4",
        "input": {
          "text": "1234567890",
          "visible": 3
        },
        "expectedOutput": "098*******",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-mask-last-10-tc-5",
        "input": {
          "text": "xyz",
          "visible": 0
        },
        "expectedOutput": "***",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-reverse-11",
    "slug": "str-reverse-11",
    "title": "문자열 · 스코어 계산기 가공 미션 11",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "reverse",
      "loop"
    ],
    "description": "문자열 input을 뒤집은 새 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function strReverse11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strReverse11;",
    "explanation": "split/reverse/join 또는 반복문으로 구현할 수 있습니다. / 원문 주제: 문자열 뒤집기",
    "hints": [
      "빈 문자열도 정상 처리되어야 합니다.",
      "원본 문자열은 변경되지 않습니다.",
      "대소문자와 숫자는 그대로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-reverse-11-tc-1",
        "input": "JavaScript",
        "expectedOutput": "JavaScript",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-reverse-11-tc-2",
        "input": "",
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-reverse-11-tc-3",
        "input": "aB1",
        "expectedOutput": "aB1",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-reverse-11-tc-4",
        "input": "level",
        "expectedOutput": "level",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-reverse-11-tc-5",
        "input": "  ab",
        "expectedOutput": "  ab",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-normalize-space-12",
    "slug": "str-normalize-space-12",
    "title": "문자열 · 후처리 워커 필터링 미션 12",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "trim",
      "split"
    ],
    "description": "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function strNormalizeSpace12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strNormalizeSpace12;",
    "explanation": "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다. / 원문 주제: 공백 정규화",
    "hints": [
      "먼저 trim으로 양쪽 공백을 제거하세요.",
      "split(\" \") 후 빈 항목 제거가 핵심입니다.",
      "공백만 있는 입력은 빈 문자열을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-normalize-space-12-tc-1",
        "input": "  hello   world  ",
        "expectedOutput": 11,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-normalize-space-12-tc-2",
        "input": "a   b c",
        "expectedOutput": 5,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-normalize-space-12-tc-3",
        "input": "   ",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-normalize-space-12-tc-4",
        "input": "one",
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-normalize-space-12-tc-5",
        "input": "  JS   syntax   trainer ",
        "expectedOutput": 17,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-is-palindrome-13",
    "slug": "str-is-palindrome-13",
    "title": "문자열 · 검증 파이프 추출 미션 13",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "palindrome",
      "condition"
    ],
    "description": "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다. 추가 규칙: 기존 계산 결과 boolean 값을 숫자(참=1, 거짓=0)로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function strIsPalindrome13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strIsPalindrome13;",
    "explanation": "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다. / 원문 주제: 회문 문자열 검사",
    "hints": [
      "비교 전 소문자로 통일하세요.",
      "영문자/숫자 외 문자는 제거하세요.",
      "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요.",
      "변형 규칙: 기존 계산 결과 boolean 값을 숫자(참=1, 거짓=0)로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-is-palindrome-13-tc-1",
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": 1,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-is-palindrome-13-tc-2",
        "input": "hello",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-is-palindrome-13-tc-3",
        "input": "",
        "expectedOutput": 1,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-is-palindrome-13-tc-4",
        "input": "No lemon, no melon",
        "expectedOutput": 1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-is-palindrome-13-tc-5",
        "input": "123abccba321",
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-count-word-14",
    "slug": "str-count-word-14",
    "title": "문자열 · 전처리 워커 압축 미션 14",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "split",
      "count"
    ],
    "description": "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다. 추가 규칙: 기존 계산 결과에서 10를 빼서 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function strCountWord14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strCountWord14;",
    "explanation": "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다. / 원문 주제: 단어 개수 세기",
    "hints": [
      "trim 후 split(\" \")을 사용해 보세요.",
      "빈 문자열은 단어 수 0입니다.",
      "연속 공백이 있어도 정확히 세야 합니다.",
      "변형 규칙: 기존 계산 결과에서 10를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-count-word-14-tc-1",
        "input": "hello world",
        "expectedOutput": -8,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-count-word-14-tc-2",
        "input": "  one   two  three ",
        "expectedOutput": -7,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-count-word-14-tc-3",
        "input": "",
        "expectedOutput": -10,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-count-word-14-tc-4",
        "input": "    ",
        "expectedOutput": -10,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-count-word-14-tc-5",
        "input": "JS syntax trainer app",
        "expectedOutput": -6,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-mask-last-15",
    "slug": "str-mask-last-15",
    "title": "문자열 · 캐시 정리기 표준화 미션 15",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "slice",
      "format"
    ],
    "description": "입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(4)개는 그대로 노출합니다. 추가 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function strMaskLast15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strMaskLast15;",
    "explanation": "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다. / 원문 주제: 문자열 뒤쪽 마스킹",
    "hints": [
      "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
      "마스킹 길이는 text.length - visible입니다.",
      "repeat를 사용하면 * 문자열 생성이 편리합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-mask-last-15-tc-1",
        "input": {
          "text": "abcdef",
          "visible": 4
        },
        "expectedOutput": "**CDEF",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-mask-last-15-tc-2",
        "input": {
          "text": "ab",
          "visible": 4
        },
        "expectedOutput": "AB",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-mask-last-15-tc-3",
        "input": {
          "text": "",
          "visible": 4
        },
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-mask-last-15-tc-4",
        "input": {
          "text": "1234567890",
          "visible": 4
        },
        "expectedOutput": "******7890",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-mask-last-15-tc-5",
        "input": {
          "text": "xyz",
          "visible": 0
        },
        "expectedOutput": "***",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-reverse-16",
    "slug": "str-reverse-16",
    "title": "문자열 · 요약 엔진 안정화 미션 16",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "reverse",
      "loop"
    ],
    "description": "문자열 input을 뒤집은 새 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function strReverse16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strReverse16;",
    "explanation": "split/reverse/join 또는 반복문으로 구현할 수 있습니다. / 원문 주제: 문자열 뒤집기",
    "hints": [
      "빈 문자열도 정상 처리되어야 합니다.",
      "원본 문자열은 변경되지 않습니다.",
      "대소문자와 숫자는 그대로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-reverse-16-tc-1",
        "input": "JavaScript",
        "expectedOutput": "TPIRCSAVAJ",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-reverse-16-tc-2",
        "input": "",
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-reverse-16-tc-3",
        "input": "aB1",
        "expectedOutput": "1BA",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-reverse-16-tc-4",
        "input": "level",
        "expectedOutput": "LEVEL",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-reverse-16-tc-5",
        "input": "  ab",
        "expectedOutput": "BA  ",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-normalize-space-17",
    "slug": "str-normalize-space-17",
    "title": "문자열 · 객체 매퍼 필터링 미션 17",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "trim",
      "split"
    ],
    "description": "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function strNormalizeSpace17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strNormalizeSpace17;",
    "explanation": "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다. / 원문 주제: 공백 정규화",
    "hints": [
      "먼저 trim으로 양쪽 공백을 제거하세요.",
      "split(\" \") 후 빈 항목 제거가 핵심입니다.",
      "공백만 있는 입력은 빈 문자열을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-normalize-space-17-tc-1",
        "input": "  hello   world  ",
        "expectedOutput": "P13_hello world",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-normalize-space-17-tc-2",
        "input": "a   b c",
        "expectedOutput": "P13_a b c",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-normalize-space-17-tc-3",
        "input": "   ",
        "expectedOutput": "P13_",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-normalize-space-17-tc-4",
        "input": "one",
        "expectedOutput": "P13_one",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-normalize-space-17-tc-5",
        "input": "  JS   syntax   trainer ",
        "expectedOutput": "P13_JS syntax trainer",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-is-palindrome-18",
    "slug": "str-is-palindrome-18",
    "title": "문자열 · 문자열 분석기 표준화 미션 18",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "palindrome",
      "condition"
    ],
    "description": "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다. 추가 규칙: 기존 계산 결과와 관계없이 false를 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function strIsPalindrome18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strIsPalindrome18;",
    "explanation": "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다. / 원문 주제: 회문 문자열 검사",
    "hints": [
      "비교 전 소문자로 통일하세요.",
      "영문자/숫자 외 문자는 제거하세요.",
      "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요.",
      "변형 규칙: 기존 계산 결과와 관계없이 false를 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-is-palindrome-18-tc-1",
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": false,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-is-palindrome-18-tc-2",
        "input": "hello",
        "expectedOutput": false,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-is-palindrome-18-tc-3",
        "input": "",
        "expectedOutput": false,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-is-palindrome-18-tc-4",
        "input": "No lemon, no melon",
        "expectedOutput": false,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-is-palindrome-18-tc-5",
        "input": "123abccba321",
        "expectedOutput": false,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-count-word-19",
    "slug": "str-count-word-19",
    "title": "문자열 · 상태 판별기 집약 미션 19",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "split",
      "count"
    ],
    "description": "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다. 추가 규칙: 기존 계산 결과에 15을 곱해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function strCountWord19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strCountWord19;",
    "explanation": "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다. / 원문 주제: 단어 개수 세기",
    "hints": [
      "trim 후 split(\" \")을 사용해 보세요.",
      "빈 문자열은 단어 수 0입니다.",
      "연속 공백이 있어도 정확히 세야 합니다.",
      "변형 규칙: 기존 계산 결과에 15을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-count-word-19-tc-1",
        "input": "hello world",
        "expectedOutput": 30,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-count-word-19-tc-2",
        "input": "  one   two  three ",
        "expectedOutput": 45,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-count-word-19-tc-3",
        "input": "",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-count-word-19-tc-4",
        "input": "    ",
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-count-word-19-tc-5",
        "input": "JS syntax trainer app",
        "expectedOutput": 60,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-mask-last-20",
    "slug": "str-mask-last-20",
    "title": "문자열 · 포인트 처리기 안정화 미션 20",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "slice",
      "format"
    ],
    "description": "입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(2)개는 그대로 노출합니다. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function strMaskLast20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strMaskLast20;",
    "explanation": "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다. / 원문 주제: 문자열 뒤쪽 마스킹",
    "hints": [
      "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
      "마스킹 길이는 text.length - visible입니다.",
      "repeat를 사용하면 * 문자열 생성이 편리합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-mask-last-20-tc-1",
        "input": {
          "text": "abcdef",
          "visible": 2
        },
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-mask-last-20-tc-2",
        "input": {
          "text": "ab",
          "visible": 2
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-mask-last-20-tc-3",
        "input": {
          "text": "",
          "visible": 2
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-mask-last-20-tc-4",
        "input": {
          "text": "1234567890",
          "visible": 2
        },
        "expectedOutput": 10,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-mask-last-20-tc-5",
        "input": {
          "text": "xyz",
          "visible": 0
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-reverse-21",
    "slug": "str-reverse-21",
    "title": "문자열 · 응답 포매터 필터링 미션 21",
    "difficulty": "MEDIUM",
    "category": "문자열",
    "tags": [
      "string",
      "reverse",
      "loop"
    ],
    "description": "문자열 input을 뒤집은 새 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function strReverse21(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strReverse21;",
    "explanation": "split/reverse/join 또는 반복문으로 구현할 수 있습니다. / 원문 주제: 문자열 뒤집기",
    "hints": [
      "빈 문자열도 정상 처리되어야 합니다.",
      "원본 문자열은 변경되지 않습니다.",
      "대소문자와 숫자는 그대로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-reverse-21-tc-1",
        "input": "JavaScript",
        "expectedOutput": 10,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-reverse-21-tc-2",
        "input": "",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-reverse-21-tc-3",
        "input": "aB1",
        "expectedOutput": 3,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-reverse-21-tc-4",
        "input": "level",
        "expectedOutput": 5,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-reverse-21-tc-5",
        "input": "  ab",
        "expectedOutput": 4,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-normalize-space-22",
    "slug": "str-normalize-space-22",
    "title": "문자열 · 포인트 처리기 안정화 미션 22",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "trim",
      "split"
    ],
    "description": "문자열 input에서 앞뒤 공백을 제거하고, 단어 사이의 연속 공백을 하나의 공백으로 바꿔 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function strNormalizeSpace22(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strNormalizeSpace22;",
    "explanation": "trim 후 공백 기준 split/filter/join을 사용하면 깔끔합니다. / 원문 주제: 공백 정규화",
    "hints": [
      "먼저 trim으로 양쪽 공백을 제거하세요.",
      "split(\" \") 후 빈 항목 제거가 핵심입니다.",
      "공백만 있는 입력은 빈 문자열을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-normalize-space-22-tc-1",
        "input": "  hello   world  ",
        "expectedOutput": "hello world",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-normalize-space-22-tc-2",
        "input": "a   b c",
        "expectedOutput": "a b c",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-normalize-space-22-tc-3",
        "input": "   ",
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-normalize-space-22-tc-4",
        "input": "one",
        "expectedOutput": "one",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-normalize-space-22-tc-5",
        "input": "  JS   syntax   trainer ",
        "expectedOutput": "js syntax trainer",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-is-palindrome-23",
    "slug": "str-is-palindrome-23",
    "title": "문자열 · 포인트 처리기 재매핑 미션 23",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "palindrome",
      "condition"
    ],
    "description": "문자열 input이 회문인지 검사해 boolean을 반환하세요. 영문자/숫자만 비교하며 대소문자는 무시합니다. 추가 규칙: 기존 계산 결과 boolean 값을 두 번 반전해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function strIsPalindrome23(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strIsPalindrome23;",
    "explanation": "정규식으로 비교 대상 문자를 정리한 뒤 양끝 비교를 하면 됩니다. / 원문 주제: 회문 문자열 검사",
    "hints": [
      "비교 전 소문자로 통일하세요.",
      "영문자/숫자 외 문자는 제거하세요.",
      "인덱스 양끝에서 가운데로 좁혀 오며 검사해 보세요.",
      "변형 규칙: 기존 계산 결과 boolean 값을 두 번 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-is-palindrome-23-tc-1",
        "input": "A man, a plan, a canal: Panama",
        "expectedOutput": true,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-is-palindrome-23-tc-2",
        "input": "hello",
        "expectedOutput": false,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-is-palindrome-23-tc-3",
        "input": "",
        "expectedOutput": true,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-is-palindrome-23-tc-4",
        "input": "No lemon, no melon",
        "expectedOutput": true,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-is-palindrome-23-tc-5",
        "input": "123abccba321",
        "expectedOutput": true,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-count-word-24",
    "slug": "str-count-word-24",
    "title": "문자열 · 에러 방어기 안정화 미션 24",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "split",
      "count"
    ],
    "description": "문자열 input에서 단어 개수를 반환하세요. 단어는 공백으로 구분되며, 연속 공백은 무시합니다. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function strCountWord24(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strCountWord24;",
    "explanation": "공백 정규화와 동일하게 빈 항목을 제거한 배열 길이를 사용합니다. / 원문 주제: 단어 개수 세기",
    "hints": [
      "trim 후 split(\" \")을 사용해 보세요.",
      "빈 문자열은 단어 수 0입니다.",
      "연속 공백이 있어도 정확히 세야 합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-count-word-24-tc-1",
        "input": "hello world",
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-count-word-24-tc-2",
        "input": "  one   two  three ",
        "expectedOutput": 3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-count-word-24-tc-3",
        "input": "",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-count-word-24-tc-4",
        "input": "    ",
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-count-word-24-tc-5",
        "input": "JS syntax trainer app",
        "expectedOutput": 4,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-str-mask-last-25",
    "slug": "str-mask-last-25",
    "title": "문자열 · 응답 포매터 재조합 미션 25",
    "difficulty": "EASY",
    "category": "문자열",
    "tags": [
      "string",
      "slice",
      "format"
    ],
    "description": "입력은 { text, visible }입니다. text의 앞부분은 그대로 두고 뒤쪽 문자를 '*'로 마스킹해 반환하세요. 뒤에서 visible(3)개는 그대로 노출합니다. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function strMaskLast25(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = strMaskLast25;",
    "explanation": "보일 길이와 마스킹 길이를 나눠 slice와 repeat로 합칩니다. / 원문 주제: 문자열 뒤쪽 마스킹",
    "hints": [
      "문자열 길이가 visible보다 짧거나 같으면 원본을 반환하세요.",
      "마스킹 길이는 text.length - visible입니다.",
      "repeat를 사용하면 * 문자열 생성이 편리합니다.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "str-mask-last-25-tc-1",
        "input": {
          "text": "abcdef",
          "visible": 3
        },
        "expectedOutput": "P18_***def",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "str-mask-last-25-tc-2",
        "input": {
          "text": "ab",
          "visible": 3
        },
        "expectedOutput": "P18_ab",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "str-mask-last-25-tc-3",
        "input": {
          "text": "",
          "visible": 3
        },
        "expectedOutput": "P18_",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "str-mask-last-25-tc-4",
        "input": {
          "text": "1234567890",
          "visible": 3
        },
        "expectedOutput": "P18_*******890",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "str-mask-last-25-tc-5",
        "input": {
          "text": "xyz",
          "visible": 0
        },
        "expectedOutput": "P18_***",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-pick-1",
    "slug": "obj-pick-1",
    "title": "객체 · 필터 유틸 검산 미션 1",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "key",
      "loop"
    ],
    "description": "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다. 추가 규칙: 기존 계산 결과 객체를 그대로 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function objPick1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objPick1;",
    "explanation": "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요. / 원문 주제: 객체 키 선택하기",
    "hints": [
      "결과 객체는 빈 객체에서 시작하세요.",
      "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
      "없는 키를 넣지 않도록 주의하세요.",
      "변형 규칙: 기존 계산 결과 객체를 그대로 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-pick-1-tc-1",
        "input": {
          "source": {
            "a": 1,
            "b": 2,
            "c": 3
          },
          "keys": [
            "a",
            "c"
          ]
        },
        "expectedOutput": {
          "a": 1,
          "c": 3
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-pick-1-tc-2",
        "input": {
          "source": {
            "name": "kim"
          },
          "keys": [
            "name",
            "age"
          ]
        },
        "expectedOutput": {
          "name": "kim"
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-pick-1-tc-3",
        "input": {
          "source": {},
          "keys": [
            "x"
          ]
        },
        "expectedOutput": {},
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-pick-1-tc-4",
        "input": {
          "source": {
            "x": 0,
            "y": 1
          },
          "keys": []
        },
        "expectedOutput": {},
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-pick-1-tc-5",
        "input": {
          "source": {
            "p": "v",
            "q": "w"
          },
          "keys": [
            "q",
            "p"
          ]
        },
        "expectedOutput": {
          "q": "w",
          "p": "v"
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-count-values-2",
    "slug": "obj-count-values-2",
    "title": "객체 · 정렬 처리기 재매핑 미션 2",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "frequency",
      "array"
    ],
    "description": "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다. 추가 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function objCountValues2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objCountValues2;",
    "explanation": "누적 객체를 만들고 이미 있으면 +1 하세요. / 원문 주제: 값 빈도 객체 만들기",
    "hints": [
      "초기값이 없는 키는 0 대신 1부터 시작하세요.",
      "대소문자는 그대로 구분합니다.",
      "빈 배열이면 빈 객체를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-count-values-2-tc-1",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          2,
          1
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-count-values-2-tc-2",
        "input": [
          "JS",
          "js"
        ],
        "expectedOutput": [
          1,
          1
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-count-values-2-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-count-values-2-tc-4",
        "input": [
          "x",
          "x",
          "x"
        ],
        "expectedOutput": [
          3
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-count-values-2-tc-5",
        "input": [
          "a",
          "b",
          "c",
          "a",
          "b"
        ],
        "expectedOutput": [
          2,
          2,
          1
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-invert-3",
    "slug": "obj-invert-3",
    "title": "객체 · 필터 유틸 정규화 미션 3",
    "difficulty": "HARD",
    "category": "객체",
    "tags": [
      "object",
      "entries",
      "transform"
    ],
    "description": "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다. 추가 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function objInvert3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objInvert3;",
    "explanation": "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요. / 원문 주제: 객체 키-값 뒤집기",
    "hints": [
      "반환 객체의 키는 문자열입니다.",
      "중복 값이 있으면 마지막 키가 남습니다.",
      "입력이 빈 객체일 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-invert-3-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": "1,2",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-invert-3-tc-2",
        "input": {
          "x": "yes"
        },
        "expectedOutput": "yes",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-invert-3-tc-3",
        "input": {},
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-invert-3-tc-4",
        "input": {
          "k1": "same",
          "k2": "same"
        },
        "expectedOutput": "same",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-invert-3-tc-5",
        "input": {
          "one": 1,
          "two": 2,
          "three": 3
        },
        "expectedOutput": "1,2,3",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-merge-sum-4",
    "slug": "obj-merge-sum-4",
    "title": "객체 · 캐시 정리기 집약 미션 4",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "merge",
      "number"
    ],
    "description": "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function objMergeSum4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objMergeSum4;",
    "explanation": "두 객체를 순회하며 누적 객체에 더해 주세요. / 원문 주제: 숫자 객체 합치기",
    "hints": [
      "결과 객체를 먼저 빈 객체로 만드세요.",
      "없는 키는 0으로 보고 더하면 편합니다.",
      "음수 값도 그대로 합산되어야 합니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-merge-sum-4-tc-1",
        "input": {
          "left": {
            "a": 1,
            "b": 2
          },
          "right": {
            "b": 3,
            "c": 4
          }
        },
        "expectedOutput": [
          "a",
          "b",
          "c"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-merge-sum-4-tc-2",
        "input": {
          "left": {},
          "right": {
            "x": 1
          }
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-merge-sum-4-tc-3",
        "input": {
          "left": {
            "k": -2
          },
          "right": {
            "k": 1
          }
        },
        "expectedOutput": [
          "k"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-merge-sum-4-tc-4",
        "input": {
          "left": {
            "p": 10
          },
          "right": {}
        },
        "expectedOutput": [
          "p"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-merge-sum-4-tc-5",
        "input": {
          "left": {
            "x": 1,
            "y": 1
          },
          "right": {
            "x": 2,
            "y": -1
          }
        },
        "expectedOutput": [
          "x",
          "y"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-safe-get-5",
    "slug": "obj-safe-get-5",
    "title": "객체 · 후처리 워커 추출 미션 5",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "optional",
      "default"
    ],
    "description": "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function objSafeGet5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objSafeGet5;",
    "explanation": "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다. / 원문 주제: 중첩 값 안전 조회",
    "hints": [
      "중간 단계에서 null/undefined인지 항상 확인하세요.",
      "경로 배열이 비어 있으면 source 자체를 반환합니다.",
      "존재하지 않으면 defaultValue를 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-safe-get-5-tc-1",
        "input": {
          "source": {
            "user": {
              "name": "Kim"
            }
          },
          "path": [
            "user",
            "name"
          ],
          "defaultValue": "-"
        },
        "expectedOutput": "Kim_S3",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-safe-get-5-tc-2",
        "input": {
          "source": {
            "user": {}
          },
          "path": [
            "user",
            "age"
          ],
          "defaultValue": 0
        },
        "expectedOutput": -3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-safe-get-5-tc-3",
        "input": {
          "source": {
            "x": 1
          },
          "path": [],
          "defaultValue": null
        },
        "expectedOutput": [
          [
            "x",
            1
          ]
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-safe-get-5-tc-4",
        "input": {
          "source": null,
          "path": [
            "a"
          ],
          "defaultValue": "none"
        },
        "expectedOutput": "none_S3",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-safe-get-5-tc-5",
        "input": {
          "source": {
            "a": {
              "b": {
                "c": 3
              }
            }
          },
          "path": [
            "a",
            "b",
            "c"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-pick-6",
    "slug": "obj-pick-6",
    "title": "객체 · 배열 가공기 정리 미션 6",
    "difficulty": "HARD",
    "category": "객체",
    "tags": [
      "object",
      "key",
      "loop"
    ],
    "description": "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다. 추가 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function objPick6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objPick6;",
    "explanation": "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요. / 원문 주제: 객체 키 선택하기",
    "hints": [
      "결과 객체는 빈 객체에서 시작하세요.",
      "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
      "없는 키를 넣지 않도록 주의하세요.",
      "변형 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-pick-6-tc-1",
        "input": {
          "source": {
            "a": 1,
            "b": 2,
            "c": 3
          },
          "keys": [
            "a",
            "c"
          ]
        },
        "expectedOutput": [
          [
            "a",
            1
          ],
          [
            "c",
            3
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-pick-6-tc-2",
        "input": {
          "source": {
            "name": "kim"
          },
          "keys": [
            "name",
            "age"
          ]
        },
        "expectedOutput": [
          [
            "name",
            "kim"
          ]
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-pick-6-tc-3",
        "input": {
          "source": {},
          "keys": [
            "x"
          ]
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-pick-6-tc-4",
        "input": {
          "source": {
            "x": 0,
            "y": 1
          },
          "keys": []
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-pick-6-tc-5",
        "input": {
          "source": {
            "p": "v",
            "q": "w"
          },
          "keys": [
            "q",
            "p"
          ]
        },
        "expectedOutput": [
          [
            "p",
            "v"
          ],
          [
            "q",
            "w"
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-count-values-7",
    "slug": "obj-count-values-7",
    "title": "객체 · 후처리 워커 필터링 미션 7",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "frequency",
      "array"
    ],
    "description": "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function objCountValues7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objCountValues7;",
    "explanation": "누적 객체를 만들고 이미 있으면 +1 하세요. / 원문 주제: 값 빈도 객체 만들기",
    "hints": [
      "초기값이 없는 키는 0 대신 1부터 시작하세요.",
      "대소문자는 그대로 구분합니다.",
      "빈 배열이면 빈 객체를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-count-values-7-tc-1",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": {
          "a": 2,
          "b": 1
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-count-values-7-tc-2",
        "input": [
          "JS",
          "js"
        ],
        "expectedOutput": {
          "js": 1,
          "JS": 1
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-count-values-7-tc-3",
        "input": [],
        "expectedOutput": {},
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-count-values-7-tc-4",
        "input": [
          "x",
          "x",
          "x"
        ],
        "expectedOutput": {
          "x": 3
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-count-values-7-tc-5",
        "input": [
          "a",
          "b",
          "c",
          "a",
          "b"
        ],
        "expectedOutput": {
          "a": 2,
          "b": 2,
          "c": 1
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-invert-8",
    "slug": "obj-invert-8",
    "title": "객체 · 요약 엔진 검산 미션 8",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "entries",
      "transform"
    ],
    "description": "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다. 추가 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function objInvert8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objInvert8;",
    "explanation": "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요. / 원문 주제: 객체 키-값 뒤집기",
    "hints": [
      "반환 객체의 키는 문자열입니다.",
      "중복 값이 있으면 마지막 키가 남습니다.",
      "입력이 빈 객체일 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-invert-8-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-invert-8-tc-2",
        "input": {
          "x": "yes"
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-invert-8-tc-3",
        "input": {},
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-invert-8-tc-4",
        "input": {
          "k1": "same",
          "k2": "same"
        },
        "expectedOutput": 1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-invert-8-tc-5",
        "input": {
          "one": 1,
          "two": 2,
          "three": 3
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-merge-sum-9",
    "slug": "obj-merge-sum-9",
    "title": "객체 · 포인트 처리기 표준화 미션 9",
    "difficulty": "HARD",
    "category": "객체",
    "tags": [
      "object",
      "merge",
      "number"
    ],
    "description": "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체를 그대로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function objMergeSum9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objMergeSum9;",
    "explanation": "두 객체를 순회하며 누적 객체에 더해 주세요. / 원문 주제: 숫자 객체 합치기",
    "hints": [
      "결과 객체를 먼저 빈 객체로 만드세요.",
      "없는 키는 0으로 보고 더하면 편합니다.",
      "음수 값도 그대로 합산되어야 합니다.",
      "변형 규칙: 기존 계산 결과 객체를 그대로 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-merge-sum-9-tc-1",
        "input": {
          "left": {
            "a": 1,
            "b": 2
          },
          "right": {
            "b": 3,
            "c": 4
          }
        },
        "expectedOutput": {
          "a": 1,
          "b": 5,
          "c": 4
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-merge-sum-9-tc-2",
        "input": {
          "left": {},
          "right": {
            "x": 1
          }
        },
        "expectedOutput": {
          "x": 1
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-merge-sum-9-tc-3",
        "input": {
          "left": {
            "k": -2
          },
          "right": {
            "k": 1
          }
        },
        "expectedOutput": {
          "k": -1
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-merge-sum-9-tc-4",
        "input": {
          "left": {
            "p": 10
          },
          "right": {}
        },
        "expectedOutput": {
          "p": 10
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-merge-sum-9-tc-5",
        "input": {
          "left": {
            "x": 1,
            "y": 1
          },
          "right": {
            "x": 2,
            "y": -1
          }
        },
        "expectedOutput": {
          "x": 3,
          "y": 0
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-safe-get-10",
    "slug": "obj-safe-get-10",
    "title": "객체 · 조건 라우터 분해 미션 10",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "optional",
      "default"
    ],
    "description": "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function objSafeGet10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objSafeGet10;",
    "explanation": "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다. / 원문 주제: 중첩 값 안전 조회",
    "hints": [
      "중간 단계에서 null/undefined인지 항상 확인하세요.",
      "경로 배열이 비어 있으면 source 자체를 반환합니다.",
      "존재하지 않으면 defaultValue를 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-safe-get-10-tc-1",
        "input": {
          "source": {
            "user": {
              "name": "Kim"
            }
          },
          "path": [
            "user",
            "name"
          ],
          "defaultValue": "-"
        },
        "expectedOutput": "miK",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-safe-get-10-tc-2",
        "input": {
          "source": {
            "user": {}
          },
          "path": [
            "user",
            "age"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-safe-get-10-tc-3",
        "input": {
          "source": {
            "x": 1
          },
          "path": [],
          "defaultValue": null
        },
        "expectedOutput": [
          1
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-safe-get-10-tc-4",
        "input": {
          "source": null,
          "path": [
            "a"
          ],
          "defaultValue": "none"
        },
        "expectedOutput": "enon",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-safe-get-10-tc-5",
        "input": {
          "source": {
            "a": {
              "b": {
                "c": 3
              }
            }
          },
          "path": [
            "a",
            "b",
            "c"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 24,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-pick-11",
    "slug": "obj-pick-11",
    "title": "객체 · 객체 매퍼 가공 미션 11",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "key",
      "loop"
    ],
    "description": "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다. 추가 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function objPick11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objPick11;",
    "explanation": "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요. / 원문 주제: 객체 키 선택하기",
    "hints": [
      "결과 객체는 빈 객체에서 시작하세요.",
      "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
      "없는 키를 넣지 않도록 주의하세요.",
      "변형 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-pick-11-tc-1",
        "input": {
          "source": {
            "a": 1,
            "b": 2,
            "c": 3
          },
          "keys": [
            "a",
            "c"
          ]
        },
        "expectedOutput": [
          1,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-pick-11-tc-2",
        "input": {
          "source": {
            "name": "kim"
          },
          "keys": [
            "name",
            "age"
          ]
        },
        "expectedOutput": [
          "kim"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-pick-11-tc-3",
        "input": {
          "source": {},
          "keys": [
            "x"
          ]
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-pick-11-tc-4",
        "input": {
          "source": {
            "x": 0,
            "y": 1
          },
          "keys": []
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-pick-11-tc-5",
        "input": {
          "source": {
            "p": "v",
            "q": "w"
          },
          "keys": [
            "q",
            "p"
          ]
        },
        "expectedOutput": [
          "w",
          "v"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-count-values-12",
    "slug": "obj-count-values-12",
    "title": "객체 · 내보내기 모듈 정리 미션 12",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "frequency",
      "array"
    ],
    "description": "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다. 추가 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function objCountValues12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objCountValues12;",
    "explanation": "누적 객체를 만들고 이미 있으면 +1 하세요. / 원문 주제: 값 빈도 객체 만들기",
    "hints": [
      "초기값이 없는 키는 0 대신 1부터 시작하세요.",
      "대소문자는 그대로 구분합니다.",
      "빈 배열이면 빈 객체를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-count-values-12-tc-1",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": "a,b",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-count-values-12-tc-2",
        "input": [
          "JS",
          "js"
        ],
        "expectedOutput": "js,JS",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-count-values-12-tc-3",
        "input": [],
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-count-values-12-tc-4",
        "input": [
          "x",
          "x",
          "x"
        ],
        "expectedOutput": "x",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-count-values-12-tc-5",
        "input": [
          "a",
          "b",
          "c",
          "a",
          "b"
        ],
        "expectedOutput": "a,b,c",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-invert-13",
    "slug": "obj-invert-13",
    "title": "객체 · 포인트 처리기 보호 미션 13",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "entries",
      "transform"
    ],
    "description": "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다. 추가 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function objInvert13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objInvert13;",
    "explanation": "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요. / 원문 주제: 객체 키-값 뒤집기",
    "hints": [
      "반환 객체의 키는 문자열입니다.",
      "중복 값이 있으면 마지막 키가 남습니다.",
      "입력이 빈 객체일 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-invert-13-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": [
          "1",
          "2"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-invert-13-tc-2",
        "input": {
          "x": "yes"
        },
        "expectedOutput": [
          "yes"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-invert-13-tc-3",
        "input": {},
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-invert-13-tc-4",
        "input": {
          "k1": "same",
          "k2": "same"
        },
        "expectedOutput": [
          "same"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-invert-13-tc-5",
        "input": {
          "one": 1,
          "two": 2,
          "three": 3
        },
        "expectedOutput": [
          "1",
          "2",
          "3"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-merge-sum-14",
    "slug": "obj-merge-sum-14",
    "title": "객체 · 문자열 분석기 안정화 미션 14",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "merge",
      "number"
    ],
    "description": "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function objMergeSum14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objMergeSum14;",
    "explanation": "두 객체를 순회하며 누적 객체에 더해 주세요. / 원문 주제: 숫자 객체 합치기",
    "hints": [
      "결과 객체를 먼저 빈 객체로 만드세요.",
      "없는 키는 0으로 보고 더하면 편합니다.",
      "음수 값도 그대로 합산되어야 합니다.",
      "변형 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-merge-sum-14-tc-1",
        "input": {
          "left": {
            "a": 1,
            "b": 2
          },
          "right": {
            "b": 3,
            "c": 4
          }
        },
        "expectedOutput": [
          [
            "a",
            1
          ],
          [
            "b",
            5
          ],
          [
            "c",
            4
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-merge-sum-14-tc-2",
        "input": {
          "left": {},
          "right": {
            "x": 1
          }
        },
        "expectedOutput": [
          [
            "x",
            1
          ]
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-merge-sum-14-tc-3",
        "input": {
          "left": {
            "k": -2
          },
          "right": {
            "k": 1
          }
        },
        "expectedOutput": [
          [
            "k",
            -1
          ]
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-merge-sum-14-tc-4",
        "input": {
          "left": {
            "p": 10
          },
          "right": {}
        },
        "expectedOutput": [
          [
            "p",
            10
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-merge-sum-14-tc-5",
        "input": {
          "left": {
            "x": 1,
            "y": 1
          },
          "right": {
            "x": 2,
            "y": -1
          }
        },
        "expectedOutput": [
          [
            "x",
            3
          ],
          [
            "y",
            0
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-safe-get-15",
    "slug": "obj-safe-get-15",
    "title": "객체 · 포인트 처리기 가공 미션 15",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "optional",
      "default"
    ],
    "description": "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function objSafeGet15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objSafeGet15;",
    "explanation": "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다. / 원문 주제: 중첩 값 안전 조회",
    "hints": [
      "중간 단계에서 null/undefined인지 항상 확인하세요.",
      "경로 배열이 비어 있으면 source 자체를 반환합니다.",
      "존재하지 않으면 defaultValue를 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 대문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-safe-get-15-tc-1",
        "input": {
          "source": {
            "user": {
              "name": "Kim"
            }
          },
          "path": [
            "user",
            "name"
          ],
          "defaultValue": "-"
        },
        "expectedOutput": "KIM",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-safe-get-15-tc-2",
        "input": {
          "source": {
            "user": {}
          },
          "path": [
            "user",
            "age"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-safe-get-15-tc-3",
        "input": {
          "source": {
            "x": 1
          },
          "path": [],
          "defaultValue": null
        },
        "expectedOutput": {
          "x": 1
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-safe-get-15-tc-4",
        "input": {
          "source": null,
          "path": [
            "a"
          ],
          "defaultValue": "none"
        },
        "expectedOutput": "NONE",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-safe-get-15-tc-5",
        "input": {
          "source": {
            "a": {
              "b": {
                "c": 3
              }
            }
          },
          "path": [
            "a",
            "b",
            "c"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-pick-16",
    "slug": "obj-pick-16",
    "title": "객체 · 문자열 분석기 정리 미션 16",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "key",
      "loop"
    ],
    "description": "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function objPick16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objPick16;",
    "explanation": "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요. / 원문 주제: 객체 키 선택하기",
    "hints": [
      "결과 객체는 빈 객체에서 시작하세요.",
      "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
      "없는 키를 넣지 않도록 주의하세요.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-pick-16-tc-1",
        "input": {
          "source": {
            "a": 1,
            "b": 2,
            "c": 3
          },
          "keys": [
            "a",
            "c"
          ]
        },
        "expectedOutput": {
          "a": 1,
          "c": 3
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-pick-16-tc-2",
        "input": {
          "source": {
            "name": "kim"
          },
          "keys": [
            "name",
            "age"
          ]
        },
        "expectedOutput": {
          "name": "kim"
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-pick-16-tc-3",
        "input": {
          "source": {},
          "keys": [
            "x"
          ]
        },
        "expectedOutput": {},
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-pick-16-tc-4",
        "input": {
          "source": {
            "x": 0,
            "y": 1
          },
          "keys": []
        },
        "expectedOutput": {},
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-pick-16-tc-5",
        "input": {
          "source": {
            "p": "v",
            "q": "w"
          },
          "keys": [
            "q",
            "p"
          ]
        },
        "expectedOutput": {
          "p": "v",
          "q": "w"
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-count-values-17",
    "slug": "obj-count-values-17",
    "title": "객체 · 내보내기 모듈 안정화 미션 17",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "frequency",
      "array"
    ],
    "description": "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다. 추가 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function objCountValues17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objCountValues17;",
    "explanation": "누적 객체를 만들고 이미 있으면 +1 하세요. / 원문 주제: 값 빈도 객체 만들기",
    "hints": [
      "초기값이 없는 키는 0 대신 1부터 시작하세요.",
      "대소문자는 그대로 구분합니다.",
      "빈 배열이면 빈 객체를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-count-values-17-tc-1",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-count-values-17-tc-2",
        "input": [
          "JS",
          "js"
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-count-values-17-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-count-values-17-tc-4",
        "input": [
          "x",
          "x",
          "x"
        ],
        "expectedOutput": 1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-count-values-17-tc-5",
        "input": [
          "a",
          "b",
          "c",
          "a",
          "b"
        ],
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-invert-18",
    "slug": "obj-invert-18",
    "title": "객체 · 포인트 처리기 추출 미션 18",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "entries",
      "transform"
    ],
    "description": "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다. 추가 규칙: 기존 계산 결과 객체를 그대로 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function objInvert18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objInvert18;",
    "explanation": "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요. / 원문 주제: 객체 키-값 뒤집기",
    "hints": [
      "반환 객체의 키는 문자열입니다.",
      "중복 값이 있으면 마지막 키가 남습니다.",
      "입력이 빈 객체일 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체를 그대로 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-invert-18-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": {
          "1": "a",
          "2": "b"
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-invert-18-tc-2",
        "input": {
          "x": "yes"
        },
        "expectedOutput": {
          "yes": "x"
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-invert-18-tc-3",
        "input": {},
        "expectedOutput": {},
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-invert-18-tc-4",
        "input": {
          "k1": "same",
          "k2": "same"
        },
        "expectedOutput": {
          "same": "k2"
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-invert-18-tc-5",
        "input": {
          "one": 1,
          "two": 2,
          "three": 3
        },
        "expectedOutput": {
          "1": "one",
          "2": "two",
          "3": "three"
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-merge-sum-19",
    "slug": "obj-merge-sum-19",
    "title": "객체 · 내보내기 모듈 추출 미션 19",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "merge",
      "number"
    ],
    "description": "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function objMergeSum19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objMergeSum19;",
    "explanation": "두 객체를 순회하며 누적 객체에 더해 주세요. / 원문 주제: 숫자 객체 합치기",
    "hints": [
      "결과 객체를 먼저 빈 객체로 만드세요.",
      "없는 키는 0으로 보고 더하면 편합니다.",
      "음수 값도 그대로 합산되어야 합니다.",
      "변형 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-merge-sum-19-tc-1",
        "input": {
          "left": {
            "a": 1,
            "b": 2
          },
          "right": {
            "b": 3,
            "c": 4
          }
        },
        "expectedOutput": [
          1,
          5,
          4
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-merge-sum-19-tc-2",
        "input": {
          "left": {},
          "right": {
            "x": 1
          }
        },
        "expectedOutput": [
          1
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-merge-sum-19-tc-3",
        "input": {
          "left": {
            "k": -2
          },
          "right": {
            "k": 1
          }
        },
        "expectedOutput": [
          -1
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-merge-sum-19-tc-4",
        "input": {
          "left": {
            "p": 10
          },
          "right": {}
        },
        "expectedOutput": [
          10
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-merge-sum-19-tc-5",
        "input": {
          "left": {
            "x": 1,
            "y": 1
          },
          "right": {
            "x": 2,
            "y": -1
          }
        },
        "expectedOutput": [
          3,
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-safe-get-20",
    "slug": "obj-safe-get-20",
    "title": "객체 · 응답 포매터 재매핑 미션 20",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "optional",
      "default"
    ],
    "description": "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function objSafeGet20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objSafeGet20;",
    "explanation": "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다. / 원문 주제: 중첩 값 안전 조회",
    "hints": [
      "중간 단계에서 null/undefined인지 항상 확인하세요.",
      "경로 배열이 비어 있으면 source 자체를 반환합니다.",
      "존재하지 않으면 defaultValue를 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-safe-get-20-tc-1",
        "input": {
          "source": {
            "user": {
              "name": "Kim"
            }
          },
          "path": [
            "user",
            "name"
          ],
          "defaultValue": "-"
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-safe-get-20-tc-2",
        "input": {
          "source": {
            "user": {}
          },
          "path": [
            "user",
            "age"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-safe-get-20-tc-3",
        "input": {
          "source": {
            "x": 1
          },
          "path": [],
          "defaultValue": null
        },
        "expectedOutput": "x",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-safe-get-20-tc-4",
        "input": {
          "source": null,
          "path": [
            "a"
          ],
          "defaultValue": "none"
        },
        "expectedOutput": 4,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-safe-get-20-tc-5",
        "input": {
          "source": {
            "a": {
              "b": {
                "c": 3
              }
            }
          },
          "path": [
            "a",
            "b",
            "c"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-pick-21",
    "slug": "obj-pick-21",
    "title": "객체 · 내보내기 모듈 보정 미션 21",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "key",
      "loop"
    ],
    "description": "입력은 { source, keys }입니다. source에서 keys에 있는 키만 뽑아 새 객체를 반환하세요. 없는 키는 무시합니다. 추가 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function objPick21(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objPick21;",
    "explanation": "keys를 순회하면서 source에 실제로 존재하는 키만 복사하세요. / 원문 주제: 객체 키 선택하기",
    "hints": [
      "결과 객체는 빈 객체에서 시작하세요.",
      "Object.prototype.hasOwnProperty.call로 존재 여부를 확인하세요.",
      "없는 키를 넣지 않도록 주의하세요.",
      "변형 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-pick-21-tc-1",
        "input": {
          "source": {
            "a": 1,
            "b": 2,
            "c": 3
          },
          "keys": [
            "a",
            "c"
          ]
        },
        "expectedOutput": "a,c",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-pick-21-tc-2",
        "input": {
          "source": {
            "name": "kim"
          },
          "keys": [
            "name",
            "age"
          ]
        },
        "expectedOutput": "name",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-pick-21-tc-3",
        "input": {
          "source": {},
          "keys": [
            "x"
          ]
        },
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-pick-21-tc-4",
        "input": {
          "source": {
            "x": 0,
            "y": 1
          },
          "keys": []
        },
        "expectedOutput": "",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-pick-21-tc-5",
        "input": {
          "source": {
            "p": "v",
            "q": "w"
          },
          "keys": [
            "q",
            "p"
          ]
        },
        "expectedOutput": "p,q",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-count-values-22",
    "slug": "obj-count-values-22",
    "title": "객체 · 검증 파이프 정리 미션 22",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "frequency",
      "array"
    ],
    "description": "문자열 배열 input이 주어질 때 각 문자열 출현 횟수를 객체로 반환하세요. 키는 문자열, 값은 횟수입니다. 추가 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function objCountValues22(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objCountValues22;",
    "explanation": "누적 객체를 만들고 이미 있으면 +1 하세요. / 원문 주제: 값 빈도 객체 만들기",
    "hints": [
      "초기값이 없는 키는 0 대신 1부터 시작하세요.",
      "대소문자는 그대로 구분합니다.",
      "빈 배열이면 빈 객체를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-count-values-22-tc-1",
        "input": [
          "a",
          "b",
          "a"
        ],
        "expectedOutput": [
          "a",
          "b"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-count-values-22-tc-2",
        "input": [
          "JS",
          "js"
        ],
        "expectedOutput": [
          "js",
          "JS"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-count-values-22-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-count-values-22-tc-4",
        "input": [
          "x",
          "x",
          "x"
        ],
        "expectedOutput": [
          "x"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-count-values-22-tc-5",
        "input": [
          "a",
          "b",
          "c",
          "a",
          "b"
        ],
        "expectedOutput": [
          "a",
          "b",
          "c"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-invert-23",
    "slug": "obj-invert-23",
    "title": "객체 · 집계 모듈 재검증 미션 23",
    "difficulty": "MEDIUM",
    "category": "객체",
    "tags": [
      "object",
      "entries",
      "transform"
    ],
    "description": "입력 객체의 키와 값을 뒤집은 새 객체를 반환하세요. 값은 문자열로 변환해 키로 사용합니다. 추가 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function objInvert23(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objInvert23;",
    "explanation": "Object.entries로 순회하며 result[String(value)] = key 형태로 저장하세요. / 원문 주제: 객체 키-값 뒤집기",
    "hints": [
      "반환 객체의 키는 문자열입니다.",
      "중복 값이 있으면 마지막 키가 남습니다.",
      "입력이 빈 객체일 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-invert-23-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": [
          [
            "1",
            "a"
          ],
          [
            "2",
            "b"
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-invert-23-tc-2",
        "input": {
          "x": "yes"
        },
        "expectedOutput": [
          [
            "yes",
            "x"
          ]
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-invert-23-tc-3",
        "input": {},
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-invert-23-tc-4",
        "input": {
          "k1": "same",
          "k2": "same"
        },
        "expectedOutput": [
          [
            "same",
            "k2"
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-invert-23-tc-5",
        "input": {
          "one": 1,
          "two": 2,
          "three": 3
        },
        "expectedOutput": [
          [
            "1",
            "one"
          ],
          [
            "2",
            "two"
          ],
          [
            "3",
            "three"
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-merge-sum-24",
    "slug": "obj-merge-sum-24",
    "title": "객체 · 테스트 헬퍼 재조합 미션 24",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "merge",
      "number"
    ],
    "description": "입력은 { left, right }입니다. 같은 키가 있으면 값을 더하고, 한쪽에만 있으면 그대로 두어 새 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function objMergeSum24(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objMergeSum24;",
    "explanation": "두 객체를 순회하며 누적 객체에 더해 주세요. / 원문 주제: 숫자 객체 합치기",
    "hints": [
      "결과 객체를 먼저 빈 객체로 만드세요.",
      "없는 키는 0으로 보고 더하면 편합니다.",
      "음수 값도 그대로 합산되어야 합니다.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-merge-sum-24-tc-1",
        "input": {
          "left": {
            "a": 1,
            "b": 2
          },
          "right": {
            "b": 3,
            "c": 4
          }
        },
        "expectedOutput": {
          "a": 1,
          "b": 5,
          "c": 4
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-merge-sum-24-tc-2",
        "input": {
          "left": {},
          "right": {
            "x": 1
          }
        },
        "expectedOutput": {
          "x": 1
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-merge-sum-24-tc-3",
        "input": {
          "left": {
            "k": -2
          },
          "right": {
            "k": 1
          }
        },
        "expectedOutput": {
          "k": -1
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-merge-sum-24-tc-4",
        "input": {
          "left": {
            "p": 10
          },
          "right": {}
        },
        "expectedOutput": {
          "p": 10
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-merge-sum-24-tc-5",
        "input": {
          "left": {
            "x": 1,
            "y": 1
          },
          "right": {
            "x": 2,
            "y": -1
          }
        },
        "expectedOutput": {
          "x": 3,
          "y": 0
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-obj-safe-get-25",
    "slug": "obj-safe-get-25",
    "title": "객체 · 배열 가공기 추출 미션 25",
    "difficulty": "EASY",
    "category": "객체",
    "tags": [
      "object",
      "optional",
      "default"
    ],
    "description": "입력은 { source, path, defaultValue }입니다. path 배열 경로를 따라 값을 조회하고, 없으면 defaultValue를 반환하세요. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function objSafeGet25(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = objSafeGet25;",
    "explanation": "현재 객체를 한 단계씩 내려가며 경로를 탐색합니다. / 원문 주제: 중첩 값 안전 조회",
    "hints": [
      "중간 단계에서 null/undefined인지 항상 확인하세요.",
      "경로 배열이 비어 있으면 source 자체를 반환합니다.",
      "존재하지 않으면 defaultValue를 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "obj-safe-get-25-tc-1",
        "input": {
          "source": {
            "user": {
              "name": "Kim"
            }
          },
          "path": [
            "user",
            "name"
          ],
          "defaultValue": "-"
        },
        "expectedOutput": "P18_Kim",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "obj-safe-get-25-tc-2",
        "input": {
          "source": {
            "user": {}
          },
          "path": [
            "user",
            "age"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 18,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "obj-safe-get-25-tc-3",
        "input": {
          "source": {
            "x": 1
          },
          "path": [],
          "defaultValue": null
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "obj-safe-get-25-tc-4",
        "input": {
          "source": null,
          "path": [
            "a"
          ],
          "defaultValue": "none"
        },
        "expectedOutput": "P18_none",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "obj-safe-get-25-tc-5",
        "input": {
          "source": {
            "a": {
              "b": {
                "c": 3
              }
            }
          },
          "path": [
            "a",
            "b",
            "c"
          ],
          "defaultValue": 0
        },
        "expectedOutput": 21,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-default-arg-1",
    "slug": "fn-scope-default-arg-1",
    "title": "함수/스코프/클로저 기초 · 에러 방어기 안정화 미션 1",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "default",
      "parameter"
    ],
    "description": "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요. 추가 규칙: 기존 계산 결과에서 2를 빼서 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function fnScopeDefaultArg1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeDefaultArg1;",
    "explanation": "null 병합 연산자(??)를 활용하면 간단합니다. / 원문 주제: 기본값 인자 처리",
    "hints": [
      "b가 0일 때는 기본값을 쓰면 안 됩니다.",
      "undefined와 null만 기본값으로 치환하세요.",
      "객체 입력의 필드 접근 오타를 주의하세요.",
      "변형 규칙: 기존 계산 결과에서 2를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-default-arg-1-tc-1",
        "input": {
          "a": 5,
          "b": 2
        },
        "expectedOutput": 5,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-default-arg-1-tc-2",
        "input": {
          "a": 5
        },
        "expectedOutput": 13,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-default-arg-1-tc-3",
        "input": {
          "a": 1,
          "b": null
        },
        "expectedOutput": 9,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-default-arg-1-tc-4",
        "input": {
          "a": -3,
          "b": 0
        },
        "expectedOutput": -5,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-default-arg-1-tc-5",
        "input": {
          "a": 10,
          "b": 20
        },
        "expectedOutput": 28,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-block-scope-2",
    "slug": "fn-scope-block-scope-2",
    "title": "함수/스코프/클로저 기초 · 로그 정규화기 집약 미션 2",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "scope",
      "let",
      "loop"
    ],
    "description": "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function fnScopeBlockScope2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeBlockScope2;",
    "explanation": "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다. / 원문 주제: 블록 스코프 합산",
    "hints": [
      "0은 양수에 포함하지 않습니다.",
      "for...of 안에서 조건에 맞을 때만 더하세요.",
      "빈 배열이면 0을 반환합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-block-scope-2-tc-1",
        "input": [
          1,
          -1,
          2,
          0
        ],
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-block-scope-2-tc-2",
        "input": [
          -3,
          -2
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-block-scope-2-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-block-scope-2-tc-4",
        "input": [
          10,
          20,
          -5
        ],
        "expectedOutput": 30,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-block-scope-2-tc-5",
        "input": [
          0,
          0,
          1
        ],
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-closure-counter-3",
    "slug": "fn-scope-closure-counter-3",
    "title": "함수/스코프/클로저 기초 · 규칙 실행기 추출 미션 3",
    "difficulty": "HARD",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "closure",
      "function",
      "array"
    ],
    "description": "입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: 0) 추가 규칙: 기존 계산 결과 배열의 앞에서 3개만 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function fnScopeClosureCounter3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeClosureCounter3;",
    "explanation": "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다. / 원문 주제: 클로저 카운터 시뮬레이션",
    "hints": [
      "함수 안에 함수(클로저)를 만들어 보세요.",
      "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
      "steps가 0이면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 3개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-closure-counter-3-tc-1",
        "input": {
          "start": 0,
          "steps": 3
        },
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-closure-counter-3-tc-2",
        "input": {
          "start": 10,
          "steps": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-closure-counter-3-tc-3",
        "input": {
          "start": -2,
          "steps": 2
        },
        "expectedOutput": [
          -1,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-closure-counter-3-tc-4",
        "input": {
          "start": 0,
          "steps": 5
        },
        "expectedOutput": [
          1,
          2,
          3
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-closure-counter-3-tc-5",
        "input": {
          "start": 100,
          "steps": 1
        },
        "expectedOutput": [
          101
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-compose-4",
    "slug": "fn-scope-compose-4",
    "title": "함수/스코프/클로저 기초 · 전처리 워커 정규화 미션 4",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "composition",
      "math"
    ],
    "description": "숫자 input에 대해 add(x)=x+2, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function fnScopeCompose4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeCompose4;",
    "explanation": "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요. / 원문 주제: 함수 조합 계산",
    "hints": [
      "연산 순서는 add 후 mul입니다.",
      "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
      "음수 입력도 동일 규칙으로 계산하세요.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-compose-4-tc-1",
        "input": 1,
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-compose-4-tc-2",
        "input": 0,
        "expectedOutput": 4,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-compose-4-tc-3",
        "input": -3,
        "expectedOutput": -2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-compose-4-tc-4",
        "input": 10,
        "expectedOutput": 24,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-compose-4-tc-5",
        "input": -10,
        "expectedOutput": -16,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-default-arg-5",
    "slug": "fn-scope-default-arg-5",
    "title": "함수/스코프/클로저 기초 · 스코어 계산기 보호 미션 5",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "default",
      "parameter"
    ],
    "description": "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function fnScopeDefaultArg5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeDefaultArg5;",
    "explanation": "null 병합 연산자(??)를 활용하면 간단합니다. / 원문 주제: 기본값 인자 처리",
    "hints": [
      "b가 0일 때는 기본값을 쓰면 안 됩니다.",
      "undefined와 null만 기본값으로 치환하세요.",
      "객체 입력의 필드 접근 오타를 주의하세요.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-default-arg-5-tc-1",
        "input": {
          "a": 5,
          "b": 2
        },
        "expectedOutput": 7,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-default-arg-5-tc-2",
        "input": {
          "a": 5
        },
        "expectedOutput": 15,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-default-arg-5-tc-3",
        "input": {
          "a": 1,
          "b": null
        },
        "expectedOutput": 11,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-default-arg-5-tc-4",
        "input": {
          "a": -3,
          "b": 0
        },
        "expectedOutput": -3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-default-arg-5-tc-5",
        "input": {
          "a": 10,
          "b": 20
        },
        "expectedOutput": 30,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-block-scope-6",
    "slug": "fn-scope-block-scope-6",
    "title": "함수/스코프/클로저 기초 · 상태 판별기 필터링 미션 6",
    "difficulty": "HARD",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "scope",
      "let",
      "loop"
    ],
    "description": "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요. 추가 규칙: 기존 계산 결과에 7을 곱해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function fnScopeBlockScope6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeBlockScope6;",
    "explanation": "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다. / 원문 주제: 블록 스코프 합산",
    "hints": [
      "0은 양수에 포함하지 않습니다.",
      "for...of 안에서 조건에 맞을 때만 더하세요.",
      "빈 배열이면 0을 반환합니다.",
      "변형 규칙: 기존 계산 결과에 7을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-block-scope-6-tc-1",
        "input": [
          1,
          -1,
          2,
          0
        ],
        "expectedOutput": 21,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-block-scope-6-tc-2",
        "input": [
          -3,
          -2
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-block-scope-6-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-block-scope-6-tc-4",
        "input": [
          10,
          20,
          -5
        ],
        "expectedOutput": 210,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-block-scope-6-tc-5",
        "input": [
          0,
          0,
          1
        ],
        "expectedOutput": 7,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-closure-counter-7",
    "slug": "fn-scope-closure-counter-7",
    "title": "함수/스코프/클로저 기초 · 테스트 헬퍼 분해 미션 7",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "closure",
      "function",
      "array"
    ],
    "description": "입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: 1) 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function fnScopeClosureCounter7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeClosureCounter7;",
    "explanation": "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다. / 원문 주제: 클로저 카운터 시뮬레이션",
    "hints": [
      "함수 안에 함수(클로저)를 만들어 보세요.",
      "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
      "steps가 0이면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-closure-counter-7-tc-1",
        "input": {
          "start": 1,
          "steps": 3
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-closure-counter-7-tc-2",
        "input": {
          "start": 10,
          "steps": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-closure-counter-7-tc-3",
        "input": {
          "start": -2,
          "steps": 2
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-closure-counter-7-tc-4",
        "input": {
          "start": 0,
          "steps": 5
        },
        "expectedOutput": 5,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-closure-counter-7-tc-5",
        "input": {
          "start": 100,
          "steps": 1
        },
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-compose-8",
    "slug": "fn-scope-compose-8",
    "title": "함수/스코프/클로저 기초 · 로그 정규화기 재매핑 미션 8",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "composition",
      "math"
    ],
    "description": "숫자 input에 대해 add(x)=x+3, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function fnScopeCompose8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeCompose8;",
    "explanation": "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요. / 원문 주제: 함수 조합 계산",
    "hints": [
      "연산 순서는 add 후 mul입니다.",
      "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
      "음수 입력도 동일 규칙으로 계산하세요.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-compose-8-tc-1",
        "input": 1,
        "expectedOutput": -8,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-compose-8-tc-2",
        "input": 0,
        "expectedOutput": -6,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-compose-8-tc-3",
        "input": -3,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-compose-8-tc-4",
        "input": 10,
        "expectedOutput": -26,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-compose-8-tc-5",
        "input": -10,
        "expectedOutput": 14,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-default-arg-9",
    "slug": "fn-scope-default-arg-9",
    "title": "함수/스코프/클로저 기초 · 배열 가공기 가공 미션 9",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "default",
      "parameter"
    ],
    "description": "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function fnScopeDefaultArg9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeDefaultArg9;",
    "explanation": "null 병합 연산자(??)를 활용하면 간단합니다. / 원문 주제: 기본값 인자 처리",
    "hints": [
      "b가 0일 때는 기본값을 쓰면 안 됩니다.",
      "undefined와 null만 기본값으로 치환하세요.",
      "객체 입력의 필드 접근 오타를 주의하세요.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-default-arg-9-tc-1",
        "input": {
          "a": 5,
          "b": 2
        },
        "expectedOutput": -7,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-default-arg-9-tc-2",
        "input": {
          "a": 5
        },
        "expectedOutput": -15,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-default-arg-9-tc-3",
        "input": {
          "a": 1,
          "b": null
        },
        "expectedOutput": -11,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-default-arg-9-tc-4",
        "input": {
          "a": -3,
          "b": 0
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-default-arg-9-tc-5",
        "input": {
          "a": 10,
          "b": 20
        },
        "expectedOutput": -30,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-block-scope-10",
    "slug": "fn-scope-block-scope-10",
    "title": "함수/스코프/클로저 기초 · 상태 판별기 안정화 미션 10",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "scope",
      "let",
      "loop"
    ],
    "description": "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요. 추가 규칙: 기존 계산 결과에서 9를 빼서 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function fnScopeBlockScope10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeBlockScope10;",
    "explanation": "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다. / 원문 주제: 블록 스코프 합산",
    "hints": [
      "0은 양수에 포함하지 않습니다.",
      "for...of 안에서 조건에 맞을 때만 더하세요.",
      "빈 배열이면 0을 반환합니다.",
      "변형 규칙: 기존 계산 결과에서 9를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-block-scope-10-tc-1",
        "input": [
          1,
          -1,
          2,
          0
        ],
        "expectedOutput": -6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-block-scope-10-tc-2",
        "input": [
          -3,
          -2
        ],
        "expectedOutput": -9,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-block-scope-10-tc-3",
        "input": [],
        "expectedOutput": -9,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-block-scope-10-tc-4",
        "input": [
          10,
          20,
          -5
        ],
        "expectedOutput": 21,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-block-scope-10-tc-5",
        "input": [
          0,
          0,
          1
        ],
        "expectedOutput": -8,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-closure-counter-11",
    "slug": "fn-scope-closure-counter-11",
    "title": "함수/스코프/클로저 기초 · 정렬 처리기 정리 미션 11",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "closure",
      "function",
      "array"
    ],
    "description": "입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: 2) 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function fnScopeClosureCounter11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeClosureCounter11;",
    "explanation": "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다. / 원문 주제: 클로저 카운터 시뮬레이션",
    "hints": [
      "함수 안에 함수(클로저)를 만들어 보세요.",
      "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
      "steps가 0이면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-closure-counter-11-tc-1",
        "input": {
          "start": 2,
          "steps": 3
        },
        "expectedOutput": [
          5,
          4,
          3
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-closure-counter-11-tc-2",
        "input": {
          "start": 10,
          "steps": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-closure-counter-11-tc-3",
        "input": {
          "start": -2,
          "steps": 2
        },
        "expectedOutput": [
          0,
          -1
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-closure-counter-11-tc-4",
        "input": {
          "start": 0,
          "steps": 5
        },
        "expectedOutput": [
          5,
          4,
          3,
          2,
          1
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-closure-counter-11-tc-5",
        "input": {
          "start": 100,
          "steps": 1
        },
        "expectedOutput": [
          101
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-compose-12",
    "slug": "fn-scope-compose-12",
    "title": "함수/스코프/클로저 기초 · 배열 가공기 재검증 미션 12",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "composition",
      "math"
    ],
    "description": "숫자 input에 대해 add(x)=x+4, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요. 추가 규칙: 기존 계산 결과에 10를 더해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function fnScopeCompose12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeCompose12;",
    "explanation": "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요. / 원문 주제: 함수 조합 계산",
    "hints": [
      "연산 순서는 add 후 mul입니다.",
      "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
      "음수 입력도 동일 규칙으로 계산하세요.",
      "변형 규칙: 기존 계산 결과에 10를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-compose-12-tc-1",
        "input": 1,
        "expectedOutput": 20,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-compose-12-tc-2",
        "input": 0,
        "expectedOutput": 18,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-compose-12-tc-3",
        "input": -3,
        "expectedOutput": 12,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-compose-12-tc-4",
        "input": 10,
        "expectedOutput": 38,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-compose-12-tc-5",
        "input": -10,
        "expectedOutput": -2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-default-arg-13",
    "slug": "fn-scope-default-arg-13",
    "title": "함수/스코프/클로저 기초 · 상태 판별기 보호 미션 13",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "default",
      "parameter"
    ],
    "description": "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요. 추가 규칙: 기존 계산 결과에 12를 더해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function fnScopeDefaultArg13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeDefaultArg13;",
    "explanation": "null 병합 연산자(??)를 활용하면 간단합니다. / 원문 주제: 기본값 인자 처리",
    "hints": [
      "b가 0일 때는 기본값을 쓰면 안 됩니다.",
      "undefined와 null만 기본값으로 치환하세요.",
      "객체 입력의 필드 접근 오타를 주의하세요.",
      "변형 규칙: 기존 계산 결과에 12를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-default-arg-13-tc-1",
        "input": {
          "a": 5,
          "b": 2
        },
        "expectedOutput": 19,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-default-arg-13-tc-2",
        "input": {
          "a": 5
        },
        "expectedOutput": 27,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-default-arg-13-tc-3",
        "input": {
          "a": 1,
          "b": null
        },
        "expectedOutput": 23,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-default-arg-13-tc-4",
        "input": {
          "a": -3,
          "b": 0
        },
        "expectedOutput": 9,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-default-arg-13-tc-5",
        "input": {
          "a": 10,
          "b": 20
        },
        "expectedOutput": 42,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-block-scope-14",
    "slug": "fn-scope-block-scope-14",
    "title": "함수/스코프/클로저 기초 · 스코어 계산기 집약 미션 14",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "scope",
      "let",
      "loop"
    ],
    "description": "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function fnScopeBlockScope14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeBlockScope14;",
    "explanation": "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다. / 원문 주제: 블록 스코프 합산",
    "hints": [
      "0은 양수에 포함하지 않습니다.",
      "for...of 안에서 조건에 맞을 때만 더하세요.",
      "빈 배열이면 0을 반환합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-block-scope-14-tc-1",
        "input": [
          1,
          -1,
          2,
          0
        ],
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-block-scope-14-tc-2",
        "input": [
          -3,
          -2
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-block-scope-14-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-block-scope-14-tc-4",
        "input": [
          10,
          20,
          -5
        ],
        "expectedOutput": 30,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-block-scope-14-tc-5",
        "input": [
          0,
          0,
          1
        ],
        "expectedOutput": 1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-closure-counter-15",
    "slug": "fn-scope-closure-counter-15",
    "title": "함수/스코프/클로저 기초 · 규칙 실행기 합성 미션 15",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "closure",
      "function",
      "array"
    ],
    "description": "입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: 3) 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function fnScopeClosureCounter15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeClosureCounter15;",
    "explanation": "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다. / 원문 주제: 클로저 카운터 시뮬레이션",
    "hints": [
      "함수 안에 함수(클로저)를 만들어 보세요.",
      "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
      "steps가 0이면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-closure-counter-15-tc-1",
        "input": {
          "start": 3,
          "steps": 3
        },
        "expectedOutput": [
          4,
          5,
          6
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-closure-counter-15-tc-2",
        "input": {
          "start": 10,
          "steps": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-closure-counter-15-tc-3",
        "input": {
          "start": -2,
          "steps": 2
        },
        "expectedOutput": [
          -1,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-closure-counter-15-tc-4",
        "input": {
          "start": 0,
          "steps": 5
        },
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-closure-counter-15-tc-5",
        "input": {
          "start": 100,
          "steps": 1
        },
        "expectedOutput": [
          101
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-compose-16",
    "slug": "fn-scope-compose-16",
    "title": "함수/스코프/클로저 기초 · 조건 라우터 최적화 미션 16",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "composition",
      "math"
    ],
    "description": "숫자 input에 대해 add(x)=x+5, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요. 추가 규칙: 기존 계산 결과를 15로 나눈 나머지를 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function fnScopeCompose16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeCompose16;",
    "explanation": "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요. / 원문 주제: 함수 조합 계산",
    "hints": [
      "연산 순서는 add 후 mul입니다.",
      "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
      "음수 입력도 동일 규칙으로 계산하세요.",
      "변형 규칙: 기존 계산 결과를 15로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-compose-16-tc-1",
        "input": 1,
        "expectedOutput": 12,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-compose-16-tc-2",
        "input": 0,
        "expectedOutput": 10,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-compose-16-tc-3",
        "input": -3,
        "expectedOutput": 4,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-compose-16-tc-4",
        "input": 10,
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-compose-16-tc-5",
        "input": -10,
        "expectedOutput": -10,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-default-arg-17",
    "slug": "fn-scope-default-arg-17",
    "title": "함수/스코프/클로저 기초 · 캐시 정리기 안정화 미션 17",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "default",
      "parameter"
    ],
    "description": "입력은 { a, b }입니다. b가 undefined 또는 null이면 10을 기본값으로 사용해 a + b를 반환하세요. 추가 규칙: 기존 계산 결과를 17로 나눈 나머지를 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function fnScopeDefaultArg17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeDefaultArg17;",
    "explanation": "null 병합 연산자(??)를 활용하면 간단합니다. / 원문 주제: 기본값 인자 처리",
    "hints": [
      "b가 0일 때는 기본값을 쓰면 안 됩니다.",
      "undefined와 null만 기본값으로 치환하세요.",
      "객체 입력의 필드 접근 오타를 주의하세요.",
      "변형 규칙: 기존 계산 결과를 17로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-default-arg-17-tc-1",
        "input": {
          "a": 5,
          "b": 2
        },
        "expectedOutput": 7,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-default-arg-17-tc-2",
        "input": {
          "a": 5
        },
        "expectedOutput": 15,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-default-arg-17-tc-3",
        "input": {
          "a": 1,
          "b": null
        },
        "expectedOutput": 11,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-default-arg-17-tc-4",
        "input": {
          "a": -3,
          "b": 0
        },
        "expectedOutput": -3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-default-arg-17-tc-5",
        "input": {
          "a": 10,
          "b": 20
        },
        "expectedOutput": 13,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-block-scope-18",
    "slug": "fn-scope-block-scope-18",
    "title": "함수/스코프/클로저 기초 · 배열 가공기 최적화 미션 18",
    "difficulty": "MEDIUM",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "scope",
      "let",
      "loop"
    ],
    "description": "숫자 배열 input에서 양수만 더한 값을 반환하세요. 합산용 변수는 함수 스코프 안에서 선언해 사용하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function fnScopeBlockScope18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeBlockScope18;",
    "explanation": "let으로 누적 변수를 만들고 조건문으로 양수만 누적합니다. / 원문 주제: 블록 스코프 합산",
    "hints": [
      "0은 양수에 포함하지 않습니다.",
      "for...of 안에서 조건에 맞을 때만 더하세요.",
      "빈 배열이면 0을 반환합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-block-scope-18-tc-1",
        "input": [
          1,
          -1,
          2,
          0
        ],
        "expectedOutput": -3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-block-scope-18-tc-2",
        "input": [
          -3,
          -2
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-block-scope-18-tc-3",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-block-scope-18-tc-4",
        "input": [
          10,
          20,
          -5
        ],
        "expectedOutput": -30,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-block-scope-18-tc-5",
        "input": [
          0,
          0,
          1
        ],
        "expectedOutput": -1,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-closure-counter-19",
    "slug": "fn-scope-closure-counter-19",
    "title": "함수/스코프/클로저 기초 · 집계 모듈 재매핑 미션 19",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "closure",
      "function",
      "array"
    ],
    "description": "입력은 { start, steps }입니다. 내부에 현재 값을 기억하는 함수를 만들고, steps 길이만큼 1씩 증가한 값을 배열로 반환하세요. (증가 단위는 항상 1, 시작 오프셋: 4) 추가 규칙: 기존 계산 결과 배열의 뒤에서 16개만 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function fnScopeClosureCounter19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeClosureCounter19;",
    "explanation": "외부 변수 current를 캡처한 내부 함수를 반복 호출하면 됩니다. / 원문 주제: 클로저 카운터 시뮬레이션",
    "hints": [
      "함수 안에 함수(클로저)를 만들어 보세요.",
      "호출할 때마다 current를 증가시킨 뒤 반환합니다.",
      "steps가 0이면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 16개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-closure-counter-19-tc-1",
        "input": {
          "start": 4,
          "steps": 3
        },
        "expectedOutput": [
          5,
          6,
          7
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-closure-counter-19-tc-2",
        "input": {
          "start": 10,
          "steps": 0
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-closure-counter-19-tc-3",
        "input": {
          "start": -2,
          "steps": 2
        },
        "expectedOutput": [
          -1,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-closure-counter-19-tc-4",
        "input": {
          "start": 0,
          "steps": 5
        },
        "expectedOutput": [
          1,
          2,
          3,
          4,
          5
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-closure-counter-19-tc-5",
        "input": {
          "start": 100,
          "steps": 1
        },
        "expectedOutput": [
          101
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-fn-scope-compose-20",
    "slug": "fn-scope-compose-20",
    "title": "함수/스코프/클로저 기초 · 전처리 워커 분해 미션 20",
    "difficulty": "EASY",
    "category": "함수/스코프/클로저 기초",
    "tags": [
      "function",
      "composition",
      "math"
    ],
    "description": "숫자 input에 대해 add(x)=x+6, mul(x)=x*2를 순서대로 적용한 결과를 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function fnScopeCompose20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = fnScopeCompose20;",
    "explanation": "작은 함수를 분리한 뒤 add 결과를 mul에 전달하세요. / 원문 주제: 함수 조합 계산",
    "hints": [
      "연산 순서는 add 후 mul입니다.",
      "중간 결과를 변수에 저장하면 가독성이 좋아집니다.",
      "음수 입력도 동일 규칙으로 계산하세요.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "fn-scope-compose-20-tc-1",
        "input": 1,
        "expectedOutput": 14,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "fn-scope-compose-20-tc-2",
        "input": 0,
        "expectedOutput": 12,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "fn-scope-compose-20-tc-3",
        "input": -3,
        "expectedOutput": 6,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "fn-scope-compose-20-tc-4",
        "input": 10,
        "expectedOutput": 32,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "fn-scope-compose-20-tc-5",
        "input": -10,
        "expectedOutput": 8,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-map-square-1",
    "slug": "arr-hof-map-square-1",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 요약 엔진 안정화 미션 1",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "map",
      "number"
    ],
    "description": "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 앞에서 2개만 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrHofMapSquare1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofMapSquare1;",
    "explanation": "map 콜백에서 value * value를 반환하면 됩니다. / 원문 주제: map으로 제곱 배열 만들기",
    "hints": [
      "원본 배열은 변경하지 마세요.",
      "음수도 제곱하면 양수가 됩니다.",
      "빈 배열은 빈 배열을 반환합니다.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 2개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-map-square-1-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          1,
          4
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-map-square-1-tc-2",
        "input": [
          -2,
          0,
          5
        ],
        "expectedOutput": [
          4,
          0
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-map-square-1-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-map-square-1-tc-4",
        "input": [
          10
        ],
        "expectedOutput": [
          100
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-map-square-1-tc-5",
        "input": [
          3,
          -3,
          3
        ],
        "expectedOutput": [
          9,
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-filter-even-2",
    "slug": "arr-hof-filter-even-2",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 정렬 처리기 교정 미션 2",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "filter",
      "condition"
    ],
    "description": "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrHofFilterEven2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFilterEven2;",
    "explanation": "filter 콜백에서 value % 2 === 0 조건을 사용합니다. / 원문 주제: filter로 짝수 추출",
    "hints": [
      "0도 짝수입니다.",
      "홀수만 있으면 빈 배열입니다.",
      "음수 짝수도 포함해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-filter-even-2-tc-1",
        "input": [
          1,
          2,
          3,
          4
        ],
        "expectedOutput": "2|4",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-filter-even-2-tc-2",
        "input": [
          1,
          3,
          5
        ],
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-filter-even-2-tc-3",
        "input": [
          0,
          -2,
          -3
        ],
        "expectedOutput": "0|-2",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-filter-even-2-tc-4",
        "input": [],
        "expectedOutput": "",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-filter-even-2-tc-5",
        "input": [
          8,
          8,
          7
        ],
        "expectedOutput": "8|8",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-reduce-sum-3",
    "slug": "arr-hof-reduce-sum-3",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 규칙 실행기 정규화 미션 3",
    "difficulty": "HARD",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "reduce",
      "accumulator"
    ],
    "description": "숫자 배열 input의 합계를 reduce로 계산해 반환하세요. 추가 규칙: 기존 계산 결과에 4을 곱해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function arrHofReduceSum3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofReduceSum3;",
    "explanation": "초기값 0을 주고 누적합을 더합니다. / 원문 주제: reduce로 총합 계산",
    "hints": [
      "reduce 초기값을 반드시 지정하세요.",
      "빈 배열은 0을 반환해야 합니다.",
      "양수/음수 혼합 케이스를 확인하세요.",
      "변형 규칙: 기존 계산 결과에 4을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-reduce-sum-3-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": 24,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-reduce-sum-3-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-reduce-sum-3-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-reduce-sum-3-tc-4",
        "input": [
          100,
          200
        ],
        "expectedOutput": 1200,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-reduce-sum-3-tc-5",
        "input": [
          -5,
          -5,
          10
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-find-first-4",
    "slug": "arr-hof-find-first-4",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 지표 계산기 압축 미션 4",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "find",
      "object"
    ],
    "description": "입력은 { items, threshold }입니다. items에서 score가 threshold(60) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function arrHofFindFirst4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFindFirst4;",
    "explanation": "find로 객체를 찾고 결과가 없으면 null을 반환합니다. / 원문 주제: 조건 만족 첫 항목 찾기",
    "hints": [
      "items는 { name, score } 형태입니다.",
      "조건을 만족하는 첫 번째 항목만 반환하세요.",
      "없을 때 undefined 대신 null을 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-find-first-4-tc-1",
        "input": {
          "items": [
            {
              "name": "a",
              "score": 40
            },
            {
              "name": "b",
              "score": 70
            }
          ],
          "threshold": 60
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-find-first-4-tc-2",
        "input": {
          "items": [
            {
              "name": "x",
              "score": 10
            }
          ],
          "threshold": 50
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-find-first-4-tc-3",
        "input": {
          "items": [],
          "threshold": 0
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-find-first-4-tc-4",
        "input": {
          "items": [
            {
              "name": "kim",
              "score": 90
            },
            {
              "name": "lee",
              "score": 95
            }
          ],
          "threshold": 90
        },
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-find-first-4-tc-5",
        "input": {
          "items": [
            {
              "name": "solo",
              "score": 89
            }
          ],
          "threshold": 90
        },
        "expectedOutput": null,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-some-every-5",
    "slug": "arr-hof-some-every-5",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 규칙 실행기 가공 미션 5",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "some",
      "every"
    ],
    "description": "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다. 추가 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrHofSomeEvery5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofSomeEvery5;",
    "explanation": "some과 every를 각각 한 번씩 사용해 계산합니다. / 원문 주제: some/every 판별",
    "hints": [
      "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
      "allFinite는 Number.isFinite를 활용하세요.",
      "빈 배열에서 every는 true를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-some-every-5-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          "allFinite",
          "hasNegative"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-some-every-5-tc-2",
        "input": [
          -1,
          2
        ],
        "expectedOutput": [
          "allFinite",
          "hasNegative"
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-some-every-5-tc-3",
        "input": [
          null,
          1
        ],
        "expectedOutput": [
          "allFinite",
          "hasNegative"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-some-every-5-tc-4",
        "input": [],
        "expectedOutput": [
          "allFinite",
          "hasNegative"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-some-every-5-tc-5",
        "input": [
          null,
          0
        ],
        "expectedOutput": [
          "allFinite",
          "hasNegative"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-map-square-6",
    "slug": "arr-hof-map-square-6",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 요약 엔진 보정 미션 6",
    "difficulty": "HARD",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "map",
      "number"
    ],
    "description": "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrHofMapSquare6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofMapSquare6;",
    "explanation": "map 콜백에서 value * value를 반환하면 됩니다. / 원문 주제: map으로 제곱 배열 만들기",
    "hints": [
      "원본 배열은 변경하지 마세요.",
      "음수도 제곱하면 양수가 됩니다.",
      "빈 배열은 빈 배열을 반환합니다.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-map-square-6-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          1,
          4,
          9
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-map-square-6-tc-2",
        "input": [
          -2,
          0,
          5
        ],
        "expectedOutput": [
          4,
          0,
          25
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-map-square-6-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-map-square-6-tc-4",
        "input": [
          10
        ],
        "expectedOutput": [
          100
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-map-square-6-tc-5",
        "input": [
          3,
          -3,
          3
        ],
        "expectedOutput": [
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-filter-even-7",
    "slug": "arr-hof-filter-even-7",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 문자열 분석기 합성 미션 7",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "filter",
      "condition"
    ],
    "description": "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 뒤에서 6개만 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrHofFilterEven7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFilterEven7;",
    "explanation": "filter 콜백에서 value % 2 === 0 조건을 사용합니다. / 원문 주제: filter로 짝수 추출",
    "hints": [
      "0도 짝수입니다.",
      "홀수만 있으면 빈 배열입니다.",
      "음수 짝수도 포함해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 6개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-filter-even-7-tc-1",
        "input": [
          1,
          2,
          3,
          4
        ],
        "expectedOutput": [
          2,
          4
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-filter-even-7-tc-2",
        "input": [
          1,
          3,
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-filter-even-7-tc-3",
        "input": [
          0,
          -2,
          -3
        ],
        "expectedOutput": [
          0,
          -2
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-filter-even-7-tc-4",
        "input": [],
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-filter-even-7-tc-5",
        "input": [
          8,
          8,
          7
        ],
        "expectedOutput": [
          8,
          8
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-reduce-sum-8",
    "slug": "arr-hof-reduce-sum-8",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 테스트 헬퍼 추출 미션 8",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "reduce",
      "accumulator"
    ],
    "description": "숫자 배열 input의 합계를 reduce로 계산해 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrHofReduceSum8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofReduceSum8;",
    "explanation": "초기값 0을 주고 누적합을 더합니다. / 원문 주제: reduce로 총합 계산",
    "hints": [
      "reduce 초기값을 반드시 지정하세요.",
      "빈 배열은 0을 반환해야 합니다.",
      "양수/음수 혼합 케이스를 확인하세요.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-reduce-sum-8-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-reduce-sum-8-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-reduce-sum-8-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-reduce-sum-8-tc-4",
        "input": [
          100,
          200
        ],
        "expectedOutput": 300,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-reduce-sum-8-tc-5",
        "input": [
          -5,
          -5,
          10
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-find-first-9",
    "slug": "arr-hof-find-first-9",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 후처리 워커 보호 미션 9",
    "difficulty": "HARD",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "find",
      "object"
    ],
    "description": "입력은 { items, threshold }입니다. items에서 score가 threshold(61) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrHofFindFirst9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFindFirst9;",
    "explanation": "find로 객체를 찾고 결과가 없으면 null을 반환합니다. / 원문 주제: 조건 만족 첫 항목 찾기",
    "hints": [
      "items는 { name, score } 형태입니다.",
      "조건을 만족하는 첫 번째 항목만 반환하세요.",
      "없을 때 undefined 대신 null을 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-find-first-9-tc-1",
        "input": {
          "items": [
            {
              "name": "a",
              "score": 40
            },
            {
              "name": "b",
              "score": 70
            }
          ],
          "threshold": 61
        },
        "expectedOutput": "P7_b",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-find-first-9-tc-2",
        "input": {
          "items": [
            {
              "name": "x",
              "score": 10
            }
          ],
          "threshold": 50
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-find-first-9-tc-3",
        "input": {
          "items": [],
          "threshold": 0
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-find-first-9-tc-4",
        "input": {
          "items": [
            {
              "name": "kim",
              "score": 90
            },
            {
              "name": "lee",
              "score": 95
            }
          ],
          "threshold": 90
        },
        "expectedOutput": "P7_kim",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-find-first-9-tc-5",
        "input": {
          "items": [
            {
              "name": "solo",
              "score": 89
            }
          ],
          "threshold": 90
        },
        "expectedOutput": null,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-some-every-10",
    "slug": "arr-hof-some-every-10",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 객체 매퍼 집약 미션 10",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "some",
      "every"
    ],
    "description": "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다. 추가 규칙: 기존 계산 결과 객체를 그대로 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrHofSomeEvery10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofSomeEvery10;",
    "explanation": "some과 every를 각각 한 번씩 사용해 계산합니다. / 원문 주제: some/every 판별",
    "hints": [
      "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
      "allFinite는 Number.isFinite를 활용하세요.",
      "빈 배열에서 every는 true를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체를 그대로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-some-every-10-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": {
          "hasNegative": false,
          "allFinite": true
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-some-every-10-tc-2",
        "input": [
          -1,
          2
        ],
        "expectedOutput": {
          "hasNegative": true,
          "allFinite": true
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-some-every-10-tc-3",
        "input": [
          null,
          1
        ],
        "expectedOutput": {
          "hasNegative": false,
          "allFinite": false
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-some-every-10-tc-4",
        "input": [],
        "expectedOutput": {
          "hasNegative": false,
          "allFinite": true
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-some-every-10-tc-5",
        "input": [
          null,
          0
        ],
        "expectedOutput": {
          "hasNegative": false,
          "allFinite": false
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-map-square-11",
    "slug": "arr-hof-map-square-11",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 조건 라우터 최적화 미션 11",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "map",
      "number"
    ],
    "description": "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrHofMapSquare11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofMapSquare11;",
    "explanation": "map 콜백에서 value * value를 반환하면 됩니다. / 원문 주제: map으로 제곱 배열 만들기",
    "hints": [
      "원본 배열은 변경하지 마세요.",
      "음수도 제곱하면 양수가 됩니다.",
      "빈 배열은 빈 배열을 반환합니다.",
      "변형 규칙: 기존 계산 결과 배열을 문자열로 합쳐 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-map-square-11-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": "1|4|9",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-map-square-11-tc-2",
        "input": [
          -2,
          0,
          5
        ],
        "expectedOutput": "4|0|25",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-map-square-11-tc-3",
        "input": [],
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-map-square-11-tc-4",
        "input": [
          10
        ],
        "expectedOutput": "100",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-map-square-11-tc-5",
        "input": [
          3,
          -3,
          3
        ],
        "expectedOutput": "9|9|9",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-filter-even-12",
    "slug": "arr-hof-filter-even-12",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 요약 엔진 필터링 미션 12",
    "difficulty": "HARD",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "filter",
      "condition"
    ],
    "description": "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrHofFilterEven12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFilterEven12;",
    "explanation": "filter 콜백에서 value % 2 === 0 조건을 사용합니다. / 원문 주제: filter로 짝수 추출",
    "hints": [
      "0도 짝수입니다.",
      "홀수만 있으면 빈 배열입니다.",
      "음수 짝수도 포함해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-filter-even-12-tc-1",
        "input": [
          1,
          2,
          3,
          4
        ],
        "expectedOutput": [
          2,
          4
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-filter-even-12-tc-2",
        "input": [
          1,
          3,
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-filter-even-12-tc-3",
        "input": [
          0,
          -2,
          -3
        ],
        "expectedOutput": [
          -2,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-filter-even-12-tc-4",
        "input": [],
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-filter-even-12-tc-5",
        "input": [
          8,
          8,
          7
        ],
        "expectedOutput": [
          8,
          8
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-reduce-sum-13",
    "slug": "arr-hof-reduce-sum-13",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 후처리 워커 표준화 미션 13",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "reduce",
      "accumulator"
    ],
    "description": "숫자 배열 input의 합계를 reduce로 계산해 반환하세요. 추가 규칙: 기존 계산 결과를 12로 나눈 나머지를 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function arrHofReduceSum13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofReduceSum13;",
    "explanation": "초기값 0을 주고 누적합을 더합니다. / 원문 주제: reduce로 총합 계산",
    "hints": [
      "reduce 초기값을 반드시 지정하세요.",
      "빈 배열은 0을 반환해야 합니다.",
      "양수/음수 혼합 케이스를 확인하세요.",
      "변형 규칙: 기존 계산 결과를 12로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-reduce-sum-13-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-reduce-sum-13-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-reduce-sum-13-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-reduce-sum-13-tc-4",
        "input": [
          100,
          200
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-reduce-sum-13-tc-5",
        "input": [
          -5,
          -5,
          10
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-find-first-14",
    "slug": "arr-hof-find-first-14",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 배열 가공기 보호 미션 14",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "find",
      "object"
    ],
    "description": "입력은 { items, threshold }입니다. items에서 score가 threshold(62) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다. 추가 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrHofFindFirst14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFindFirst14;",
    "explanation": "find로 객체를 찾고 결과가 없으면 null을 반환합니다. / 원문 주제: 조건 만족 첫 항목 찾기",
    "hints": [
      "items는 { name, score } 형태입니다.",
      "조건을 만족하는 첫 번째 항목만 반환하세요.",
      "없을 때 undefined 대신 null을 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-find-first-14-tc-1",
        "input": {
          "items": [
            {
              "name": "a",
              "score": 40
            },
            {
              "name": "b",
              "score": 70
            }
          ],
          "threshold": 62
        },
        "expectedOutput": "b",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-find-first-14-tc-2",
        "input": {
          "items": [
            {
              "name": "x",
              "score": 10
            }
          ],
          "threshold": 50
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-find-first-14-tc-3",
        "input": {
          "items": [],
          "threshold": 0
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-find-first-14-tc-4",
        "input": {
          "items": [
            {
              "name": "kim",
              "score": 90
            },
            {
              "name": "lee",
              "score": 95
            }
          ],
          "threshold": 90
        },
        "expectedOutput": "kim",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-find-first-14-tc-5",
        "input": {
          "items": [
            {
              "name": "solo",
              "score": 89
            }
          ],
          "threshold": 90
        },
        "expectedOutput": null,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-some-every-15",
    "slug": "arr-hof-some-every-15",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 테스트 헬퍼 재조합 미션 15",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "some",
      "every"
    ],
    "description": "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다. 추가 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrHofSomeEvery15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofSomeEvery15;",
    "explanation": "some과 every를 각각 한 번씩 사용해 계산합니다. / 원문 주제: some/every 판별",
    "hints": [
      "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
      "allFinite는 Number.isFinite를 활용하세요.",
      "빈 배열에서 every는 true를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 엔트리 배열([key, value])을 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-some-every-15-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          [
            "allFinite",
            true
          ],
          [
            "hasNegative",
            false
          ]
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-some-every-15-tc-2",
        "input": [
          -1,
          2
        ],
        "expectedOutput": [
          [
            "allFinite",
            true
          ],
          [
            "hasNegative",
            true
          ]
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-some-every-15-tc-3",
        "input": [
          null,
          1
        ],
        "expectedOutput": [
          [
            "allFinite",
            false
          ],
          [
            "hasNegative",
            false
          ]
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-some-every-15-tc-4",
        "input": [],
        "expectedOutput": [
          [
            "allFinite",
            true
          ],
          [
            "hasNegative",
            false
          ]
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-some-every-15-tc-5",
        "input": [
          null,
          0
        ],
        "expectedOutput": [
          [
            "allFinite",
            false
          ],
          [
            "hasNegative",
            false
          ]
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-map-square-16",
    "slug": "arr-hof-map-square-16",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 스코어 계산기 최적화 미션 16",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "map",
      "number"
    ],
    "description": "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 뒤에서 13개만 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrHofMapSquare16(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofMapSquare16;",
    "explanation": "map 콜백에서 value * value를 반환하면 됩니다. / 원문 주제: map으로 제곱 배열 만들기",
    "hints": [
      "원본 배열은 변경하지 마세요.",
      "음수도 제곱하면 양수가 됩니다.",
      "빈 배열은 빈 배열을 반환합니다.",
      "변형 규칙: 기존 계산 결과 배열의 뒤에서 13개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-map-square-16-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          1,
          4,
          9
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-map-square-16-tc-2",
        "input": [
          -2,
          0,
          5
        ],
        "expectedOutput": [
          4,
          0,
          25
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-map-square-16-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-map-square-16-tc-4",
        "input": [
          10
        ],
        "expectedOutput": [
          100
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-map-square-16-tc-5",
        "input": [
          3,
          -3,
          3
        ],
        "expectedOutput": [
          9,
          9,
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-filter-even-17",
    "slug": "arr-hof-filter-even-17",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 규칙 실행기 보정 미션 17",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "filter",
      "condition"
    ],
    "description": "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 역순으로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function arrHofFilterEven17(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFilterEven17;",
    "explanation": "filter 콜백에서 value % 2 === 0 조건을 사용합니다. / 원문 주제: filter로 짝수 추출",
    "hints": [
      "0도 짝수입니다.",
      "홀수만 있으면 빈 배열입니다.",
      "음수 짝수도 포함해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열을 역순으로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-filter-even-17-tc-1",
        "input": [
          1,
          2,
          3,
          4
        ],
        "expectedOutput": [
          4,
          2
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-filter-even-17-tc-2",
        "input": [
          1,
          3,
          5
        ],
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-filter-even-17-tc-3",
        "input": [
          0,
          -2,
          -3
        ],
        "expectedOutput": [
          -2,
          0
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-filter-even-17-tc-4",
        "input": [],
        "expectedOutput": [],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-filter-even-17-tc-5",
        "input": [
          8,
          8,
          7
        ],
        "expectedOutput": [
          8,
          8
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-reduce-sum-18",
    "slug": "arr-hof-reduce-sum-18",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 지표 계산기 집약 미션 18",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "reduce",
      "accumulator"
    ],
    "description": "숫자 배열 input의 합계를 reduce로 계산해 반환하세요. 추가 규칙: 기존 계산 결과에 14를 더해 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function arrHofReduceSum18(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofReduceSum18;",
    "explanation": "초기값 0을 주고 누적합을 더합니다. / 원문 주제: reduce로 총합 계산",
    "hints": [
      "reduce 초기값을 반드시 지정하세요.",
      "빈 배열은 0을 반환해야 합니다.",
      "양수/음수 혼합 케이스를 확인하세요.",
      "변형 규칙: 기존 계산 결과에 14를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-reduce-sum-18-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": 20,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-reduce-sum-18-tc-2",
        "input": [],
        "expectedOutput": 14,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-reduce-sum-18-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": 14,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-reduce-sum-18-tc-4",
        "input": [
          100,
          200
        ],
        "expectedOutput": 314,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-reduce-sum-18-tc-5",
        "input": [
          -5,
          -5,
          10
        ],
        "expectedOutput": 14,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-find-first-19",
    "slug": "arr-hof-find-first-19",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 전처리 워커 집약 미션 19",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "find",
      "object"
    ],
    "description": "입력은 { items, threshold }입니다. items에서 score가 threshold(63) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function arrHofFindFirst19(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFindFirst19;",
    "explanation": "find로 객체를 찾고 결과가 없으면 null을 반환합니다. / 원문 주제: 조건 만족 첫 항목 찾기",
    "hints": [
      "items는 { name, score } 형태입니다.",
      "조건을 만족하는 첫 번째 항목만 반환하세요.",
      "없을 때 undefined 대신 null을 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-find-first-19-tc-1",
        "input": {
          "items": [
            {
              "name": "a",
              "score": 40
            },
            {
              "name": "b",
              "score": 70
            }
          ],
          "threshold": 63
        },
        "expectedOutput": "b",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-find-first-19-tc-2",
        "input": {
          "items": [
            {
              "name": "x",
              "score": 10
            }
          ],
          "threshold": 50
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-find-first-19-tc-3",
        "input": {
          "items": [],
          "threshold": 0
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-find-first-19-tc-4",
        "input": {
          "items": [
            {
              "name": "kim",
              "score": 90
            },
            {
              "name": "lee",
              "score": 95
            }
          ],
          "threshold": 90
        },
        "expectedOutput": "kim",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-find-first-19-tc-5",
        "input": {
          "items": [
            {
              "name": "solo",
              "score": 89
            }
          ],
          "threshold": 90
        },
        "expectedOutput": null,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-some-every-20",
    "slug": "arr-hof-some-every-20",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 포인트 처리기 보호 미션 20",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "some",
      "every"
    ],
    "description": "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다. 추가 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function arrHofSomeEvery20(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofSomeEvery20;",
    "explanation": "some과 every를 각각 한 번씩 사용해 계산합니다. / 원문 주제: some/every 판별",
    "hints": [
      "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
      "allFinite는 Number.isFinite를 활용하세요.",
      "빈 배열에서 every는 true를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-some-every-20-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          false,
          true
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-some-every-20-tc-2",
        "input": [
          -1,
          2
        ],
        "expectedOutput": [
          true,
          true
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-some-every-20-tc-3",
        "input": [
          null,
          1
        ],
        "expectedOutput": [
          false,
          false
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-some-every-20-tc-4",
        "input": [],
        "expectedOutput": [
          false,
          true
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-some-every-20-tc-5",
        "input": [
          null,
          0
        ],
        "expectedOutput": [
          false,
          false
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-map-square-21",
    "slug": "arr-hof-map-square-21",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 후처리 워커 안정화 미션 21",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "map",
      "number"
    ],
    "description": "숫자 배열 input의 각 원소를 제곱한 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function arrHofMapSquare21(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofMapSquare21;",
    "explanation": "map 콜백에서 value * value를 반환하면 됩니다. / 원문 주제: map으로 제곱 배열 만들기",
    "hints": [
      "원본 배열은 변경하지 마세요.",
      "음수도 제곱하면 양수가 됩니다.",
      "빈 배열은 빈 배열을 반환합니다.",
      "변형 규칙: 기존 계산 결과 배열을 오름차순 정렬해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-map-square-21-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": [
          1,
          4,
          9
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-map-square-21-tc-2",
        "input": [
          -2,
          0,
          5
        ],
        "expectedOutput": [
          0,
          4,
          25
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-map-square-21-tc-3",
        "input": [],
        "expectedOutput": [],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-map-square-21-tc-4",
        "input": [
          10
        ],
        "expectedOutput": [
          100
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-map-square-21-tc-5",
        "input": [
          3,
          -3,
          3
        ],
        "expectedOutput": [
          9,
          9,
          9
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-filter-even-22",
    "slug": "arr-hof-filter-even-22",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 에러 방어기 필터링 미션 22",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "filter",
      "condition"
    ],
    "description": "숫자 배열 input에서 짝수만 남긴 새 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrHofFilterEven22(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFilterEven22;",
    "explanation": "filter 콜백에서 value % 2 === 0 조건을 사용합니다. / 원문 주제: filter로 짝수 추출",
    "hints": [
      "0도 짝수입니다.",
      "홀수만 있으면 빈 배열입니다.",
      "음수 짝수도 포함해야 합니다.",
      "변형 규칙: 기존 계산 결과 배열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-filter-even-22-tc-1",
        "input": [
          1,
          2,
          3,
          4
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-filter-even-22-tc-2",
        "input": [
          1,
          3,
          5
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-filter-even-22-tc-3",
        "input": [
          0,
          -2,
          -3
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-filter-even-22-tc-4",
        "input": [],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-filter-even-22-tc-5",
        "input": [
          8,
          8,
          7
        ],
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-reduce-sum-23",
    "slug": "arr-hof-reduce-sum-23",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 집계 모듈 확장 미션 23",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "reduce",
      "accumulator"
    ],
    "description": "숫자 배열 input의 합계를 reduce로 계산해 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function arrHofReduceSum23(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofReduceSum23;",
    "explanation": "초기값 0을 주고 누적합을 더합니다. / 원문 주제: reduce로 총합 계산",
    "hints": [
      "reduce 초기값을 반드시 지정하세요.",
      "빈 배열은 0을 반환해야 합니다.",
      "양수/음수 혼합 케이스를 확인하세요.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-reduce-sum-23-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": -6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-reduce-sum-23-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-reduce-sum-23-tc-3",
        "input": [
          -1,
          1,
          -1,
          1
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-reduce-sum-23-tc-4",
        "input": [
          100,
          200
        ],
        "expectedOutput": -300,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-reduce-sum-23-tc-5",
        "input": [
          -5,
          -5,
          10
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-find-first-24",
    "slug": "arr-hof-find-first-24",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 캐시 정리기 재조합 미션 24",
    "difficulty": "MEDIUM",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "find",
      "object"
    ],
    "description": "입력은 { items, threshold }입니다. items에서 score가 threshold(64) 이상인 첫 객체의 name을 반환하세요. 없으면 null을 반환합니다. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function arrHofFindFirst24(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofFindFirst24;",
    "explanation": "find로 객체를 찾고 결과가 없으면 null을 반환합니다. / 원문 주제: 조건 만족 첫 항목 찾기",
    "hints": [
      "items는 { name, score } 형태입니다.",
      "조건을 만족하는 첫 번째 항목만 반환하세요.",
      "없을 때 undefined 대신 null을 반환합니다.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-find-first-24-tc-1",
        "input": {
          "items": [
            {
              "name": "a",
              "score": 40
            },
            {
              "name": "b",
              "score": 70
            }
          ],
          "threshold": 64
        },
        "expectedOutput": "b_S18",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-find-first-24-tc-2",
        "input": {
          "items": [
            {
              "name": "x",
              "score": 10
            }
          ],
          "threshold": 50
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-find-first-24-tc-3",
        "input": {
          "items": [],
          "threshold": 0
        },
        "expectedOutput": null,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-find-first-24-tc-4",
        "input": {
          "items": [
            {
              "name": "kim",
              "score": 90
            },
            {
              "name": "lee",
              "score": 95
            }
          ],
          "threshold": 90
        },
        "expectedOutput": "kim_S18",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-find-first-24-tc-5",
        "input": {
          "items": [
            {
              "name": "solo",
              "score": 89
            }
          ],
          "threshold": 90
        },
        "expectedOutput": null,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-arr-hof-some-every-25",
    "slug": "arr-hof-some-every-25",
    "title": "배열 고차함수(map/filter/reduce/find/some/every) · 상태 판별기 재조합 미션 25",
    "difficulty": "EASY",
    "category": "배열 고차함수(map/filter/reduce/find/some/every)",
    "tags": [
      "array",
      "some",
      "every"
    ],
    "description": "숫자 배열 input에 대해 { hasNegative, allFinite } 객체를 반환하세요. hasNegative는 음수가 하나라도 있는지, allFinite는 모든 값이 유한수인지입니다. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function arrHofSomeEvery25(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = arrHofSomeEvery25;",
    "explanation": "some과 every를 각각 한 번씩 사용해 계산합니다. / 원문 주제: some/every 판별",
    "hints": [
      "hasNegative는 조건을 만족하는 값이 하나라도 있으면 true입니다.",
      "allFinite는 Number.isFinite를 활용하세요.",
      "빈 배열에서 every는 true를 반환합니다.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "arr-hof-some-every-25-tc-1",
        "input": [
          1,
          2,
          3
        ],
        "expectedOutput": {
          "allFinite": true,
          "hasNegative": false
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "arr-hof-some-every-25-tc-2",
        "input": [
          -1,
          2
        ],
        "expectedOutput": {
          "allFinite": true,
          "hasNegative": true
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "arr-hof-some-every-25-tc-3",
        "input": [
          null,
          1
        ],
        "expectedOutput": {
          "allFinite": false,
          "hasNegative": false
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "arr-hof-some-every-25-tc-4",
        "input": [],
        "expectedOutput": {
          "allFinite": true,
          "hasNegative": false
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "arr-hof-some-every-25-tc-5",
        "input": [
          null,
          0
        ],
        "expectedOutput": {
          "allFinite": false,
          "hasNegative": false
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-pad-two-1",
    "slug": "dnr-pad-two-1",
    "title": "날짜/숫자/정규식 기초 · 입력 정제기 가공 미션 1",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "string",
      "format"
    ],
    "description": "정수 input을 두 자리 문자열로 반환하세요. 10 미만이면 앞에 0을 붙입니다. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function dnrPadTwo1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrPadTwo1;",
    "explanation": "String과 padStart를 사용하면 간단합니다. / 원문 주제: 두 자리 숫자 포맷",
    "hints": [
      "음수는 그대로 문자열로 반환합니다.",
      "한 자리 양수만 0을 붙이면 됩니다.",
      "0 입력 결과를 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-pad-two-1-tc-1",
        "input": 3,
        "expectedOutput": "03",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-pad-two-1-tc-2",
        "input": 12,
        "expectedOutput": "12",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-pad-two-1-tc-3",
        "input": 0,
        "expectedOutput": "00",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-pad-two-1-tc-4",
        "input": 9,
        "expectedOutput": "09",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-pad-two-1-tc-5",
        "input": -1,
        "expectedOutput": "-1",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-round-step-2",
    "slug": "dnr-round-step-2",
    "title": "날짜/숫자/정규식 기초 · 리포트 생성기 표준화 미션 2",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "math",
      "round"
    ],
    "description": "입력은 { value }입니다. value를 5 단위로 반올림한 값을 반환하세요. 추가 규칙: 기존 계산 결과에 3을 곱해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function dnrRoundStep2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrRoundStep2;",
    "explanation": "value / step을 반올림한 뒤 step을 곱합니다. / 원문 주제: 배수 단위 반올림",
    "hints": [
      "반올림 단위를 변수로 분리하세요.",
      "음수도 Math.round 규칙에 따라 처리됩니다.",
      "정수 결과를 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과에 3을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-round-step-2-tc-1",
        "input": {
          "value": 12
        },
        "expectedOutput": 30,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-round-step-2-tc-2",
        "input": {
          "value": 2
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-round-step-2-tc-3",
        "input": {
          "value": -7
        },
        "expectedOutput": -15,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-round-step-2-tc-4",
        "input": {
          "value": 0
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-round-step-2-tc-5",
        "input": {
          "value": 123
        },
        "expectedOutput": 375,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-extract-digits-3",
    "slug": "dnr-extract-digits-3",
    "title": "날짜/숫자/정규식 기초 · 필터 유틸 집약 미션 3",
    "difficulty": "HARD",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "string",
      "match"
    ],
    "description": "문자열 input에서 숫자 문자(0-9)만 이어 붙인 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function dnrExtractDigits3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrExtractDigits3;",
    "explanation": "정규식 /d/g로 추출한 뒤 join하면 됩니다. / 원문 주제: 문자열에서 숫자만 추출",
    "hints": [
      "숫자가 하나도 없으면 빈 문자열입니다.",
      "match 결과가 null일 수 있습니다.",
      "문자 순서는 원본 기준으로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열의 길이를 숫자로 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-extract-digits-3-tc-1",
        "input": "a1b2c3",
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-extract-digits-3-tc-2",
        "input": "hello",
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-extract-digits-3-tc-3",
        "input": "2026-06-29",
        "expectedOutput": 8,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-extract-digits-3-tc-4",
        "input": "0abc00",
        "expectedOutput": 3,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-extract-digits-3-tc-5",
        "input": "room 101",
        "expectedOutput": 3,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-weekday-4",
    "slug": "dnr-weekday-4",
    "title": "날짜/숫자/정규식 기초 · 응답 포매터 재검증 미션 4",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "date",
      "utc",
      "format"
    ],
    "description": "입력은 YYYY-MM-DD 형식 문자열입니다. 해당 날짜의 UTC 요일을 영문 3글자(Sun~Sat)로 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function dnrWeekday4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrWeekday4;",
    "explanation": "Date를 만들고 getUTCDay 결과를 요일 배열에서 찾습니다. / 원문 주제: UTC 요일 문자열",
    "hints": [
      "로컬 타임존 대신 UTC 기준으로 계산하세요.",
      "요일 배열 순서는 Sun부터 Sat까지입니다.",
      "문자열 뒤에 T00:00:00Z를 붙여 Date를 생성하세요.",
      "변형 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-weekday-4-tc-1",
        "input": "2026-06-29",
        "expectedOutput": "mon",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-weekday-4-tc-2",
        "input": "2024-02-29",
        "expectedOutput": "thu",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-weekday-4-tc-3",
        "input": "2025-01-01",
        "expectedOutput": "wed",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-weekday-4-tc-4",
        "input": "1970-01-01",
        "expectedOutput": "thu",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-weekday-4-tc-5",
        "input": "2030-12-25",
        "expectedOutput": "wed",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-email-basic-5",
    "slug": "dnr-email-basic-5",
    "title": "날짜/숫자/정규식 기초 · 문자열 분석기 보정 미션 5",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "validation",
      "string"
    ],
    "description": "문자열 input이 간단한 이메일 형식인지 boolean을 반환하세요. 규칙: 공백 없음, @ 1개, @ 앞뒤에 최소 1글자, 점(.)이 도메인에 1개 이상. 추가 규칙: 기존 계산 결과 boolean 값을 두 번 반전해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function dnrEmailBasic5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrEmailBasic5;",
    "explanation": "기초 정규식으로 전체 문자열을 검사하세요. / 원문 주제: 이메일 형식 기초 검사",
    "hints": [
      "양끝 공백을 허용하지 않으므로 전체 매칭(^$)을 사용하세요.",
      "@는 정확히 한 번만 등장해야 합니다.",
      "도메인에 점이 포함되어야 합니다.",
      "변형 규칙: 기존 계산 결과 boolean 값을 두 번 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-email-basic-5-tc-1",
        "input": "user@example.com",
        "expectedOutput": true,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-email-basic-5-tc-2",
        "input": "wrong@domain",
        "expectedOutput": false,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-email-basic-5-tc-3",
        "input": "a b@c.com",
        "expectedOutput": false,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-email-basic-5-tc-4",
        "input": "x@y.z",
        "expectedOutput": true,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-email-basic-5-tc-5",
        "input": "@example.com",
        "expectedOutput": false,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-pad-two-6",
    "slug": "dnr-pad-two-6",
    "title": "날짜/숫자/정규식 기초 · 로그 정규화기 집약 미션 6",
    "difficulty": "HARD",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "string",
      "format"
    ],
    "description": "정수 input을 두 자리 문자열로 반환하세요. 10 미만이면 앞에 0을 붙입니다. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "function dnrPadTwo6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrPadTwo6;",
    "explanation": "String과 padStart를 사용하면 간단합니다. / 원문 주제: 두 자리 숫자 포맷",
    "hints": [
      "음수는 그대로 문자열로 반환합니다.",
      "한 자리 양수만 0을 붙이면 됩니다.",
      "0 입력 결과를 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-pad-two-6-tc-1",
        "input": 3,
        "expectedOutput": "03_S5",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-pad-two-6-tc-2",
        "input": 12,
        "expectedOutput": "12_S5",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-pad-two-6-tc-3",
        "input": 0,
        "expectedOutput": "00_S5",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-pad-two-6-tc-4",
        "input": 9,
        "expectedOutput": "09_S5",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-pad-two-6-tc-5",
        "input": -1,
        "expectedOutput": "-1_S5",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-round-step-7",
    "slug": "dnr-round-step-7",
    "title": "날짜/숫자/정규식 기초 · 테스트 헬퍼 집약 미션 7",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "math",
      "round"
    ],
    "description": "입력은 { value }입니다. value를 6 단위로 반올림한 값을 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function dnrRoundStep7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrRoundStep7;",
    "explanation": "value / step을 반올림한 뒤 step을 곱합니다. / 원문 주제: 배수 단위 반올림",
    "hints": [
      "반올림 단위를 변수로 분리하세요.",
      "음수도 Math.round 규칙에 따라 처리됩니다.",
      "정수 결과를 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-round-step-7-tc-1",
        "input": {
          "value": 13
        },
        "expectedOutput": 12,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-round-step-7-tc-2",
        "input": {
          "value": 2
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-round-step-7-tc-3",
        "input": {
          "value": -7
        },
        "expectedOutput": 6,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-round-step-7-tc-4",
        "input": {
          "value": 0
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-round-step-7-tc-5",
        "input": {
          "value": 123
        },
        "expectedOutput": 126,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-extract-digits-8",
    "slug": "dnr-extract-digits-8",
    "title": "날짜/숫자/정규식 기초 · 리포트 생성기 안정화 미션 8",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "string",
      "match"
    ],
    "description": "문자열 input에서 숫자 문자(0-9)만 이어 붙인 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function dnrExtractDigits8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrExtractDigits8;",
    "explanation": "정규식 /d/g로 추출한 뒤 join하면 됩니다. / 원문 주제: 문자열에서 숫자만 추출",
    "hints": [
      "숫자가 하나도 없으면 빈 문자열입니다.",
      "match 결과가 null일 수 있습니다.",
      "문자 순서는 원본 기준으로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열 앞에 고정 접두사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-extract-digits-8-tc-1",
        "input": "a1b2c3",
        "expectedOutput": "P6_123",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-extract-digits-8-tc-2",
        "input": "hello",
        "expectedOutput": "P6_",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-extract-digits-8-tc-3",
        "input": "2026-06-29",
        "expectedOutput": "P6_20260629",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-extract-digits-8-tc-4",
        "input": "0abc00",
        "expectedOutput": "P6_000",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-extract-digits-8-tc-5",
        "input": "room 101",
        "expectedOutput": "P6_101",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-weekday-9",
    "slug": "dnr-weekday-9",
    "title": "날짜/숫자/정규식 기초 · 규칙 실행기 정리 미션 9",
    "difficulty": "HARD",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "date",
      "utc",
      "format"
    ],
    "description": "입력은 YYYY-MM-DD 형식 문자열입니다. 해당 날짜의 UTC 요일을 영문 3글자(Sun~Sat)로 반환하세요. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "function dnrWeekday9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrWeekday9;",
    "explanation": "Date를 만들고 getUTCDay 결과를 요일 배열에서 찾습니다. / 원문 주제: UTC 요일 문자열",
    "hints": [
      "로컬 타임존 대신 UTC 기준으로 계산하세요.",
      "요일 배열 순서는 Sun부터 Sat까지입니다.",
      "문자열 뒤에 T00:00:00Z를 붙여 Date를 생성하세요.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-weekday-9-tc-1",
        "input": "2026-06-29",
        "expectedOutput": "Mon",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-weekday-9-tc-2",
        "input": "2024-02-29",
        "expectedOutput": "Thu",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-weekday-9-tc-3",
        "input": "2025-01-01",
        "expectedOutput": "Wed",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-weekday-9-tc-4",
        "input": "1970-01-01",
        "expectedOutput": "Thu",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-weekday-9-tc-5",
        "input": "2030-12-25",
        "expectedOutput": "Wed",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-email-basic-10",
    "slug": "dnr-email-basic-10",
    "title": "날짜/숫자/정규식 기초 · 규칙 실행기 보정 미션 10",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "validation",
      "string"
    ],
    "description": "문자열 input이 간단한 이메일 형식인지 boolean을 반환하세요. 규칙: 공백 없음, @ 1개, @ 앞뒤에 최소 1글자, 점(.)이 도메인에 1개 이상. 추가 규칙: 기존 계산 결과 boolean 값을 문자열(\"true\"/\"false\")로 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function dnrEmailBasic10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrEmailBasic10;",
    "explanation": "기초 정규식으로 전체 문자열을 검사하세요. / 원문 주제: 이메일 형식 기초 검사",
    "hints": [
      "양끝 공백을 허용하지 않으므로 전체 매칭(^$)을 사용하세요.",
      "@는 정확히 한 번만 등장해야 합니다.",
      "도메인에 점이 포함되어야 합니다.",
      "변형 규칙: 기존 계산 결과 boolean 값을 문자열(\"true\"/\"false\")로 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-email-basic-10-tc-1",
        "input": "user@example.com",
        "expectedOutput": "true",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-email-basic-10-tc-2",
        "input": "wrong@domain",
        "expectedOutput": "false",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-email-basic-10-tc-3",
        "input": "a b@c.com",
        "expectedOutput": "false",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-email-basic-10-tc-4",
        "input": "x@y.z",
        "expectedOutput": "true",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-email-basic-10-tc-5",
        "input": "@example.com",
        "expectedOutput": "false",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-pad-two-11",
    "slug": "dnr-pad-two-11",
    "title": "날짜/숫자/정규식 기초 · 검증 파이프 보정 미션 11",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "string",
      "format"
    ],
    "description": "정수 input을 두 자리 문자열로 반환하세요. 10 미만이면 앞에 0을 붙입니다. 추가 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function dnrPadTwo11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrPadTwo11;",
    "explanation": "String과 padStart를 사용하면 간단합니다. / 원문 주제: 두 자리 숫자 포맷",
    "hints": [
      "음수는 그대로 문자열로 반환합니다.",
      "한 자리 양수만 0을 붙이면 됩니다.",
      "0 입력 결과를 확인하세요.",
      "변형 규칙: 기존 계산 결과 문자열을 뒤집어 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-pad-two-11-tc-1",
        "input": 3,
        "expectedOutput": "30",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-pad-two-11-tc-2",
        "input": 12,
        "expectedOutput": "21",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-pad-two-11-tc-3",
        "input": 0,
        "expectedOutput": "00",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-pad-two-11-tc-4",
        "input": 9,
        "expectedOutput": "90",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-pad-two-11-tc-5",
        "input": -1,
        "expectedOutput": "1-",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-round-step-12",
    "slug": "dnr-round-step-12",
    "title": "날짜/숫자/정규식 기초 · 집계 모듈 분해 미션 12",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "number",
      "math",
      "round"
    ],
    "description": "입력은 { value }입니다. value를 7 단위로 반올림한 값을 반환하세요. 추가 규칙: 기존 계산 결과를 11로 나눈 나머지를 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function dnrRoundStep12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrRoundStep12;",
    "explanation": "value / step을 반올림한 뒤 step을 곱합니다. / 원문 주제: 배수 단위 반올림",
    "hints": [
      "반올림 단위를 변수로 분리하세요.",
      "음수도 Math.round 규칙에 따라 처리됩니다.",
      "정수 결과를 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과를 11로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-round-step-12-tc-1",
        "input": {
          "value": 14
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-round-step-12-tc-2",
        "input": {
          "value": 2
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-round-step-12-tc-3",
        "input": {
          "value": -7
        },
        "expectedOutput": -7,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-round-step-12-tc-4",
        "input": {
          "value": 0
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-round-step-12-tc-5",
        "input": {
          "value": 123
        },
        "expectedOutput": 5,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-extract-digits-13",
    "slug": "dnr-extract-digits-13",
    "title": "날짜/숫자/정규식 기초 · 집계 모듈 검산 미션 13",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "string",
      "match"
    ],
    "description": "문자열 input에서 숫자 문자(0-9)만 이어 붙인 문자열을 반환하세요. 추가 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function dnrExtractDigits13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrExtractDigits13;",
    "explanation": "정규식 /d/g로 추출한 뒤 join하면 됩니다. / 원문 주제: 문자열에서 숫자만 추출",
    "hints": [
      "숫자가 하나도 없으면 빈 문자열입니다.",
      "match 결과가 null일 수 있습니다.",
      "문자 순서는 원본 기준으로 유지됩니다.",
      "변형 규칙: 기존 계산 결과 문자열을 소문자로 변환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-extract-digits-13-tc-1",
        "input": "a1b2c3",
        "expectedOutput": "123",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-extract-digits-13-tc-2",
        "input": "hello",
        "expectedOutput": "",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-extract-digits-13-tc-3",
        "input": "2026-06-29",
        "expectedOutput": "20260629",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-extract-digits-13-tc-4",
        "input": "0abc00",
        "expectedOutput": "000",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-extract-digits-13-tc-5",
        "input": "room 101",
        "expectedOutput": "101",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-weekday-14",
    "slug": "dnr-weekday-14",
    "title": "날짜/숫자/정규식 기초 · 상태 판별기 합성 미션 14",
    "difficulty": "EASY",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "date",
      "utc",
      "format"
    ],
    "description": "입력은 YYYY-MM-DD 형식 문자열입니다. 해당 날짜의 UTC 요일을 영문 3글자(Sun~Sat)로 반환하세요. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function dnrWeekday14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrWeekday14;",
    "explanation": "Date를 만들고 getUTCDay 결과를 요일 배열에서 찾습니다. / 원문 주제: UTC 요일 문자열",
    "hints": [
      "로컬 타임존 대신 UTC 기준으로 계산하세요.",
      "요일 배열 순서는 Sun부터 Sat까지입니다.",
      "문자열 뒤에 T00:00:00Z를 붙여 Date를 생성하세요.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-weekday-14-tc-1",
        "input": "2026-06-29",
        "expectedOutput": "Mon_S10",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-weekday-14-tc-2",
        "input": "2024-02-29",
        "expectedOutput": "Thu_S10",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-weekday-14-tc-3",
        "input": "2025-01-01",
        "expectedOutput": "Wed_S10",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-weekday-14-tc-4",
        "input": "1970-01-01",
        "expectedOutput": "Thu_S10",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-weekday-14-tc-5",
        "input": "2030-12-25",
        "expectedOutput": "Wed_S10",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-dnr-email-basic-15",
    "slug": "dnr-email-basic-15",
    "title": "날짜/숫자/정규식 기초 · 조건 라우터 검산 미션 15",
    "difficulty": "MEDIUM",
    "category": "날짜/숫자/정규식 기초",
    "tags": [
      "regex",
      "validation",
      "string"
    ],
    "description": "문자열 input이 간단한 이메일 형식인지 boolean을 반환하세요. 규칙: 공백 없음, @ 1개, @ 앞뒤에 최소 1글자, 점(.)이 도메인에 1개 이상. 추가 규칙: 기존 계산 결과 boolean 값을 반전해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function dnrEmailBasic15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = dnrEmailBasic15;",
    "explanation": "기초 정규식으로 전체 문자열을 검사하세요. / 원문 주제: 이메일 형식 기초 검사",
    "hints": [
      "양끝 공백을 허용하지 않으므로 전체 매칭(^$)을 사용하세요.",
      "@는 정확히 한 번만 등장해야 합니다.",
      "도메인에 점이 포함되어야 합니다.",
      "변형 규칙: 기존 계산 결과 boolean 값을 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "dnr-email-basic-15-tc-1",
        "input": "user@example.com",
        "expectedOutput": false,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "dnr-email-basic-15-tc-2",
        "input": "wrong@domain",
        "expectedOutput": true,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "dnr-email-basic-15-tc-3",
        "input": "a b@c.com",
        "expectedOutput": true,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "dnr-email-basic-15-tc-4",
        "input": "x@y.z",
        "expectedOutput": false,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "dnr-email-basic-15-tc-5",
        "input": "@example.com",
        "expectedOutput": true,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-double-after-await-1",
    "slug": "async-double-after-await-1",
    "title": "비동기 Promise/async/await · 스코어 계산기 합성 미션 1",
    "difficulty": "EASY",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "await",
      "promise"
    ],
    "description": "숫자 input을 Promise.resolve로 한 번 감싼 뒤 await으로 받아 2배 값을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "async function asyncDoubleAfterAwait1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncDoubleAfterAwait1;",
    "explanation": "await Promise.resolve(input)으로 값을 받은 뒤 계산하면 됩니다. / 원문 주제: await 후 2배 반환",
    "hints": [
      "함수 선언을 async로 시작하세요.",
      "Promise.resolve를 await으로 풀어 값을 얻으세요.",
      "반환값은 숫자이며 자동으로 Promise로 감싸집니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-double-after-await-1-tc-1",
        "input": 3,
        "expectedOutput": -6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-double-after-await-1-tc-2",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-double-after-await-1-tc-3",
        "input": -2,
        "expectedOutput": 4,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-double-after-await-1-tc-4",
        "input": 100,
        "expectedOutput": -200,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-double-after-await-1-tc-5",
        "input": 1,
        "expectedOutput": -2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-sum-object-2",
    "slug": "async-sum-object-2",
    "title": "비동기 Promise/async/await · 입력 정제기 재조합 미션 2",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "object",
      "await"
    ],
    "description": "입력은 { a, b }입니다. Promise.resolve({ a, b })를 await 한 뒤 a + b를 반환하세요. 추가 규칙: 기존 계산 결과에서 2를 빼서 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "async function asyncSumObject2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSumObject2;",
    "explanation": "비동기에서 객체를 받아 구조 분해로 합산하면 됩니다. / 원문 주제: Promise 객체 합산",
    "hints": [
      "await 결과를 변수에 담아 사용하세요.",
      "숫자 합산이므로 문자열 결합이 되지 않게 주의하세요.",
      "음수 입력도 정상 처리되어야 합니다.",
      "변형 규칙: 기존 계산 결과에서 2를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-sum-object-2-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-sum-object-2-tc-2",
        "input": {
          "a": 0,
          "b": 0
        },
        "expectedOutput": -2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-sum-object-2-tc-3",
        "input": {
          "a": -5,
          "b": 3
        },
        "expectedOutput": -4,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-sum-object-2-tc-4",
        "input": {
          "a": 100,
          "b": 200
        },
        "expectedOutput": 298,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-sum-object-2-tc-5",
        "input": {
          "a": 7,
          "b": -7
        },
        "expectedOutput": -2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-all-length-3",
    "slug": "async-all-length-3",
    "title": "비동기 Promise/async/await · 정렬 처리기 보정 미션 3",
    "difficulty": "HARD",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "promise-all",
      "array"
    ],
    "description": "문자열 배열 input을 Promise.all로 처리한 뒤 전체 문자열 길이 합을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "async function asyncAllLength3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncAllLength3;",
    "explanation": "input.map(Promise.resolve) 후 Promise.all 결과를 reduce로 합산하면 됩니다. / 원문 주제: Promise.all 문자열 길이 합",
    "hints": [
      "Promise.all은 배열을 그대로 유지해 반환합니다.",
      "길이 합산은 reduce가 편리합니다.",
      "빈 배열이면 0을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-all-length-3-tc-1",
        "input": [
          "a",
          "bc"
        ],
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-all-length-3-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-all-length-3-tc-3",
        "input": [
          "JS",
          "TS",
          "Node"
        ],
        "expectedOutput": 8,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-all-length-3-tc-4",
        "input": [
          "",
          ""
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-all-length-3-tc-5",
        "input": [
          "hello"
        ],
        "expectedOutput": 5,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-safe-await-4",
    "slug": "async-safe-await-4",
    "title": "비동기 Promise/async/await · 내보내기 모듈 재매핑 미션 4",
    "difficulty": "EASY",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "try-catch",
      "error"
    ],
    "description": "입력은 { shouldFail, value }입니다. shouldFail이 true면 에러를 catch하여 -1을 반환하고, 아니면 value를 반환하세요. 추가 규칙: 기존 계산 결과에 3를 더해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "async function asyncSafeAwait4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSafeAwait4;",
    "explanation": "try/catch 안에서 Promise reject/resolve를 분기하면 됩니다. / 원문 주제: await 예외 안전 처리",
    "hints": [
      "shouldFail에 따라 resolve/reject를 만들 수 있습니다.",
      "catch에서는 고정값 -1을 반환하세요.",
      "성공 케이스는 value를 그대로 반환합니다.",
      "변형 규칙: 기존 계산 결과에 3를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-safe-await-4-tc-1",
        "input": {
          "shouldFail": false,
          "value": 3
        },
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-safe-await-4-tc-2",
        "input": {
          "shouldFail": true,
          "value": 10
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-safe-await-4-tc-3",
        "input": {
          "shouldFail": false,
          "value": -2
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-safe-await-4-tc-4",
        "input": {
          "shouldFail": true,
          "value": 0
        },
        "expectedOutput": 2,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-safe-await-4-tc-5",
        "input": {
          "shouldFail": false,
          "value": 100
        },
        "expectedOutput": 103,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-chain-5",
    "slug": "async-chain-5",
    "title": "비동기 Promise/async/await · 응답 포매터 재검증 미션 5",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "promise",
      "then",
      "async"
    ],
    "description": "숫자 input을 Promise 체인으로 처리해 (input + 1) * 3 값을 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 테스트에 없는 입력에서도 예측 가능한 결과를 내세요.",
    "starterCode": "async function asyncChain5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncChain5;",
    "explanation": "Promise.resolve(input).then(...).then(...) 패턴을 사용하면 됩니다. / 원문 주제: Promise 체인 계산",
    "hints": [
      "첫 then에서 덧셈을 처리하세요.",
      "다음 then에서 곱셈을 처리합니다.",
      "최종 결과는 숫자 하나여야 합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-chain-5-tc-1",
        "input": 1,
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-chain-5-tc-2",
        "input": 0,
        "expectedOutput": 3,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-chain-5-tc-3",
        "input": -4,
        "expectedOutput": -9,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-chain-5-tc-4",
        "input": 10,
        "expectedOutput": 33,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-chain-5-tc-5",
        "input": 100,
        "expectedOutput": 303,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-double-after-await-6",
    "slug": "async-double-after-await-6",
    "title": "비동기 Promise/async/await · 전처리 워커 재조합 미션 6",
    "difficulty": "HARD",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "await",
      "promise"
    ],
    "description": "숫자 input을 Promise.resolve로 한 번 감싼 뒤 await으로 받아 2배 값을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "async function asyncDoubleAfterAwait6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncDoubleAfterAwait6;",
    "explanation": "await Promise.resolve(input)으로 값을 받은 뒤 계산하면 됩니다. / 원문 주제: await 후 2배 반환",
    "hints": [
      "함수 선언을 async로 시작하세요.",
      "Promise.resolve를 await으로 풀어 값을 얻으세요.",
      "반환값은 숫자이며 자동으로 Promise로 감싸집니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-double-after-await-6-tc-1",
        "input": 3,
        "expectedOutput": 6,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-double-after-await-6-tc-2",
        "input": 0,
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-double-after-await-6-tc-3",
        "input": -2,
        "expectedOutput": -4,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-double-after-await-6-tc-4",
        "input": 100,
        "expectedOutput": 200,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-double-after-await-6-tc-5",
        "input": 1,
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-sum-object-7",
    "slug": "async-sum-object-7",
    "title": "비동기 Promise/async/await · 테스트 헬퍼 분해 미션 7",
    "difficulty": "EASY",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "object",
      "await"
    ],
    "description": "입력은 { a, b }입니다. Promise.resolve({ a, b })를 await 한 뒤 a + b를 반환하세요. 추가 규칙: 기존 계산 결과에 7을 곱해 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "async function asyncSumObject7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSumObject7;",
    "explanation": "비동기에서 객체를 받아 구조 분해로 합산하면 됩니다. / 원문 주제: Promise 객체 합산",
    "hints": [
      "await 결과를 변수에 담아 사용하세요.",
      "숫자 합산이므로 문자열 결합이 되지 않게 주의하세요.",
      "음수 입력도 정상 처리되어야 합니다.",
      "변형 규칙: 기존 계산 결과에 7을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-sum-object-7-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": 21,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-sum-object-7-tc-2",
        "input": {
          "a": 0,
          "b": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-sum-object-7-tc-3",
        "input": {
          "a": -5,
          "b": 3
        },
        "expectedOutput": -14,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-sum-object-7-tc-4",
        "input": {
          "a": 100,
          "b": 200
        },
        "expectedOutput": 2100,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-sum-object-7-tc-5",
        "input": {
          "a": 7,
          "b": -7
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-all-length-8",
    "slug": "async-all-length-8",
    "title": "비동기 Promise/async/await · 후처리 워커 재조합 미션 8",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "promise-all",
      "array"
    ],
    "description": "문자열 배열 input을 Promise.all로 처리한 뒤 전체 문자열 길이 합을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과를 8로 나눈 나머지를 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "async function asyncAllLength8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncAllLength8;",
    "explanation": "input.map(Promise.resolve) 후 Promise.all 결과를 reduce로 합산하면 됩니다. / 원문 주제: Promise.all 문자열 길이 합",
    "hints": [
      "Promise.all은 배열을 그대로 유지해 반환합니다.",
      "길이 합산은 reduce가 편리합니다.",
      "빈 배열이면 0을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과를 8로 나눈 나머지를 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-all-length-8-tc-1",
        "input": [
          "a",
          "bc"
        ],
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-all-length-8-tc-2",
        "input": [],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-all-length-8-tc-3",
        "input": [
          "JS",
          "TS",
          "Node"
        ],
        "expectedOutput": 0,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-all-length-8-tc-4",
        "input": [
          "",
          ""
        ],
        "expectedOutput": 0,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-all-length-8-tc-5",
        "input": [
          "hello"
        ],
        "expectedOutput": 5,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-safe-await-9",
    "slug": "async-safe-await-9",
    "title": "비동기 Promise/async/await · 규칙 실행기 최적화 미션 9",
    "difficulty": "HARD",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "try-catch",
      "error"
    ],
    "description": "입력은 { shouldFail, value }입니다. shouldFail이 true면 에러를 catch하여 -1을 반환하고, 아니면 value를 반환하세요. 추가 규칙: 기존 계산 결과의 부호를 반전해 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "async function asyncSafeAwait9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSafeAwait9;",
    "explanation": "try/catch 안에서 Promise reject/resolve를 분기하면 됩니다. / 원문 주제: await 예외 안전 처리",
    "hints": [
      "shouldFail에 따라 resolve/reject를 만들 수 있습니다.",
      "catch에서는 고정값 -1을 반환하세요.",
      "성공 케이스는 value를 그대로 반환합니다.",
      "변형 규칙: 기존 계산 결과의 부호를 반전해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-safe-await-9-tc-1",
        "input": {
          "shouldFail": false,
          "value": 3
        },
        "expectedOutput": -3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-safe-await-9-tc-2",
        "input": {
          "shouldFail": true,
          "value": 10
        },
        "expectedOutput": 1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-safe-await-9-tc-3",
        "input": {
          "shouldFail": false,
          "value": -2
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-safe-await-9-tc-4",
        "input": {
          "shouldFail": true,
          "value": 0
        },
        "expectedOutput": 1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-safe-await-9-tc-5",
        "input": {
          "shouldFail": false,
          "value": 100
        },
        "expectedOutput": -100,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-chain-10",
    "slug": "async-chain-10",
    "title": "비동기 Promise/async/await · 지표 계산기 검산 미션 10",
    "difficulty": "EASY",
    "category": "비동기 Promise/async/await",
    "tags": [
      "promise",
      "then",
      "async"
    ],
    "description": "숫자 input을 Promise 체인으로 처리해 (input + 2) * 3 값을 반환하세요. 추가 규칙: 기존 계산 결과에서 7를 빼서 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "async function asyncChain10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncChain10;",
    "explanation": "Promise.resolve(input).then(...).then(...) 패턴을 사용하면 됩니다. / 원문 주제: Promise 체인 계산",
    "hints": [
      "첫 then에서 덧셈을 처리하세요.",
      "다음 then에서 곱셈을 처리합니다.",
      "최종 결과는 숫자 하나여야 합니다.",
      "변형 규칙: 기존 계산 결과에서 7를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-chain-10-tc-1",
        "input": 1,
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-chain-10-tc-2",
        "input": 0,
        "expectedOutput": -1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-chain-10-tc-3",
        "input": -4,
        "expectedOutput": -13,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-chain-10-tc-4",
        "input": 10,
        "expectedOutput": 29,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-chain-10-tc-5",
        "input": 100,
        "expectedOutput": 299,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-double-after-await-11",
    "slug": "async-double-after-await-11",
    "title": "비동기 Promise/async/await · 검증 파이프 필터링 미션 11",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "await",
      "promise"
    ],
    "description": "숫자 input을 Promise.resolve로 한 번 감싼 뒤 await으로 받아 2배 값을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과에서 9를 빼서 반환하세요. 유의사항: 불필요한 형 변환 없이 결과를 반환하세요.",
    "starterCode": "async function asyncDoubleAfterAwait11(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncDoubleAfterAwait11;",
    "explanation": "await Promise.resolve(input)으로 값을 받은 뒤 계산하면 됩니다. / 원문 주제: await 후 2배 반환",
    "hints": [
      "함수 선언을 async로 시작하세요.",
      "Promise.resolve를 await으로 풀어 값을 얻으세요.",
      "반환값은 숫자이며 자동으로 Promise로 감싸집니다.",
      "변형 규칙: 기존 계산 결과에서 9를 빼서 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-double-after-await-11-tc-1",
        "input": 3,
        "expectedOutput": -3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-double-after-await-11-tc-2",
        "input": 0,
        "expectedOutput": -9,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-double-after-await-11-tc-3",
        "input": -2,
        "expectedOutput": -13,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-double-after-await-11-tc-4",
        "input": 100,
        "expectedOutput": 191,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-double-after-await-11-tc-5",
        "input": 1,
        "expectedOutput": -7,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-sum-object-12",
    "slug": "async-sum-object-12",
    "title": "비동기 Promise/async/await · 규칙 실행기 필터링 미션 12",
    "difficulty": "EASY",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "object",
      "await"
    ],
    "description": "입력은 { a, b }입니다. Promise.resolve({ a, b })를 await 한 뒤 a + b를 반환하세요. 추가 규칙: 기존 계산 결과의 절댓값을 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "async function asyncSumObject12(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSumObject12;",
    "explanation": "비동기에서 객체를 받아 구조 분해로 합산하면 됩니다. / 원문 주제: Promise 객체 합산",
    "hints": [
      "await 결과를 변수에 담아 사용하세요.",
      "숫자 합산이므로 문자열 결합이 되지 않게 주의하세요.",
      "음수 입력도 정상 처리되어야 합니다.",
      "변형 규칙: 기존 계산 결과의 절댓값을 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-sum-object-12-tc-1",
        "input": {
          "a": 1,
          "b": 2
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-sum-object-12-tc-2",
        "input": {
          "a": 0,
          "b": 0
        },
        "expectedOutput": 0,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-sum-object-12-tc-3",
        "input": {
          "a": -5,
          "b": 3
        },
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-sum-object-12-tc-4",
        "input": {
          "a": 100,
          "b": 200
        },
        "expectedOutput": 300,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-sum-object-12-tc-5",
        "input": {
          "a": 7,
          "b": -7
        },
        "expectedOutput": 0,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-all-length-13",
    "slug": "async-all-length-13",
    "title": "비동기 Promise/async/await · 객체 매퍼 합성 미션 13",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "promise-all",
      "array"
    ],
    "description": "문자열 배열 input을 Promise.all로 처리한 뒤 전체 문자열 길이 합을 반환하는 async 함수를 작성하세요. 추가 규칙: 기존 계산 결과에 10를 더해 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "async function asyncAllLength13(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncAllLength13;",
    "explanation": "input.map(Promise.resolve) 후 Promise.all 결과를 reduce로 합산하면 됩니다. / 원문 주제: Promise.all 문자열 길이 합",
    "hints": [
      "Promise.all은 배열을 그대로 유지해 반환합니다.",
      "길이 합산은 reduce가 편리합니다.",
      "빈 배열이면 0을 반환해야 합니다.",
      "변형 규칙: 기존 계산 결과에 10를 더해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-all-length-13-tc-1",
        "input": [
          "a",
          "bc"
        ],
        "expectedOutput": 13,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-all-length-13-tc-2",
        "input": [],
        "expectedOutput": 10,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-all-length-13-tc-3",
        "input": [
          "JS",
          "TS",
          "Node"
        ],
        "expectedOutput": 18,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-all-length-13-tc-4",
        "input": [
          "",
          ""
        ],
        "expectedOutput": 10,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-all-length-13-tc-5",
        "input": [
          "hello"
        ],
        "expectedOutput": 15,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-safe-await-14",
    "slug": "async-safe-await-14",
    "title": "비동기 Promise/async/await · 객체 매퍼 정규화 미션 14",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "async",
      "try-catch",
      "error"
    ],
    "description": "입력은 { shouldFail, value }입니다. shouldFail이 true면 에러를 catch하여 -1을 반환하고, 아니면 value를 반환하세요. 추가 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "async function asyncSafeAwait14(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncSafeAwait14;",
    "explanation": "try/catch 안에서 Promise reject/resolve를 분기하면 됩니다. / 원문 주제: await 예외 안전 처리",
    "hints": [
      "shouldFail에 따라 resolve/reject를 만들 수 있습니다.",
      "catch에서는 고정값 -1을 반환하세요.",
      "성공 케이스는 value를 그대로 반환합니다.",
      "변형 규칙: 기존 계산 결과를 반올림한 정수로 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-safe-await-14-tc-1",
        "input": {
          "shouldFail": false,
          "value": 3
        },
        "expectedOutput": 3,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-safe-await-14-tc-2",
        "input": {
          "shouldFail": true,
          "value": 10
        },
        "expectedOutput": -1,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-safe-await-14-tc-3",
        "input": {
          "shouldFail": false,
          "value": -2
        },
        "expectedOutput": -2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-safe-await-14-tc-4",
        "input": {
          "shouldFail": true,
          "value": 0
        },
        "expectedOutput": -1,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-safe-await-14-tc-5",
        "input": {
          "shouldFail": false,
          "value": 100
        },
        "expectedOutput": 100,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-async-chain-15",
    "slug": "async-chain-15",
    "title": "비동기 Promise/async/await · 캐시 정리기 압축 미션 15",
    "difficulty": "MEDIUM",
    "category": "비동기 Promise/async/await",
    "tags": [
      "promise",
      "then",
      "async"
    ],
    "description": "숫자 input을 Promise 체인으로 처리해 (input + 3) * 3 값을 반환하세요. 추가 규칙: 기존 계산 결과에 12을 곱해 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "async function asyncChain15(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = asyncChain15;",
    "explanation": "Promise.resolve(input).then(...).then(...) 패턴을 사용하면 됩니다. / 원문 주제: Promise 체인 계산",
    "hints": [
      "첫 then에서 덧셈을 처리하세요.",
      "다음 then에서 곱셈을 처리합니다.",
      "최종 결과는 숫자 하나여야 합니다.",
      "변형 규칙: 기존 계산 결과에 12을 곱해 반환하세요."
    ],
    "testCases": [
      {
        "id": "async-chain-15-tc-1",
        "input": 1,
        "expectedOutput": 144,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "async-chain-15-tc-2",
        "input": 0,
        "expectedOutput": 108,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "async-chain-15-tc-3",
        "input": -4,
        "expectedOutput": -36,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "async-chain-15-tc-4",
        "input": 10,
        "expectedOutput": 468,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "async-chain-15-tc-5",
        "input": 100,
        "expectedOutput": 3708,
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-todo-summary-1",
    "slug": "mini-todo-summary-1",
    "title": "종합 실전 미니 문제 · 입력 정제기 보정 미션 1",
    "difficulty": "EASY",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "object",
      "count"
    ],
    "description": "입력은 { todos }이며 todos는 { done: boolean } 객체 배열입니다. { total, done, pending } 요약 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 대소문자와 공백 처리를 일관되게 유지하세요.",
    "starterCode": "function miniTodoSummary1(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniTodoSummary1;",
    "explanation": "총 개수와 완료 개수를 구해 미완료를 계산하면 됩니다. / 원문 주제: 할 일 목록 요약",
    "hints": [
      "total은 배열 길이입니다.",
      "done은 done=true 개수입니다.",
      "pending은 total - done으로 계산할 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-todo-summary-1-tc-1",
        "input": {
          "todos": [
            {
              "done": true
            },
            {
              "done": false
            },
            {
              "done": true
            }
          ]
        },
        "expectedOutput": {
          "done": 2,
          "pending": 1,
          "total": 3
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-todo-summary-1-tc-2",
        "input": {
          "todos": []
        },
        "expectedOutput": {
          "done": 0,
          "pending": 0,
          "total": 0
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-todo-summary-1-tc-3",
        "input": {
          "todos": [
            {
              "done": false
            }
          ]
        },
        "expectedOutput": {
          "done": 0,
          "pending": 1,
          "total": 1
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-todo-summary-1-tc-4",
        "input": {
          "todos": [
            {
              "done": true
            }
          ]
        },
        "expectedOutput": {
          "done": 1,
          "pending": 0,
          "total": 1
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-todo-summary-1-tc-5",
        "input": {
          "todos": [
            {
              "done": false
            },
            {
              "done": false
            }
          ]
        },
        "expectedOutput": {
          "done": 0,
          "pending": 2,
          "total": 2
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-inventory-alert-2",
    "slug": "mini-inventory-alert-2",
    "title": "종합 실전 미니 문제 · 배열 가공기 재조합 미션 2",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "filter",
      "object"
    ],
    "description": "입력은 { items }이며 items는 { name, qty } 배열입니다. qty가 3 이하인 상품 이름 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열의 앞에서 2개만 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function miniInventoryAlert2(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniInventoryAlert2;",
    "explanation": "filter 후 map으로 이름만 추출하면 됩니다. / 원문 주제: 재고 부족 상품 찾기",
    "hints": [
      "임계값 이하(<=) 조건을 사용하세요.",
      "결과는 이름 문자열 배열입니다.",
      "해당 상품이 없으면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열의 앞에서 2개만 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-inventory-alert-2-tc-1",
        "input": {
          "items": [
            {
              "name": "pen",
              "qty": 2
            },
            {
              "name": "notebook",
              "qty": 10
            }
          ],
          "threshold": 3
        },
        "expectedOutput": [
          "pen"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-inventory-alert-2-tc-2",
        "input": {
          "items": [],
          "threshold": 3
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-inventory-alert-2-tc-3",
        "input": {
          "items": [
            {
              "name": "eraser",
              "qty": 3
            },
            {
              "name": "ruler",
              "qty": 4
            }
          ],
          "threshold": 3
        },
        "expectedOutput": [
          "eraser"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-inventory-alert-2-tc-4",
        "input": {
          "items": [
            {
              "name": "a",
              "qty": 0
            },
            {
              "name": "b",
              "qty": 100
            }
          ],
          "threshold": 3
        },
        "expectedOutput": [
          "a"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-inventory-alert-2-tc-5",
        "input": {
          "items": [
            {
              "name": "x",
              "qty": 4
            }
          ],
          "threshold": 3
        },
        "expectedOutput": [],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-message-clean-3",
    "slug": "mini-message-clean-3",
    "title": "종합 실전 미니 문제 · 내보내기 모듈 안정화 미션 3",
    "difficulty": "HARD",
    "category": "종합 실전 미니 문제",
    "tags": [
      "string",
      "regex",
      "format"
    ],
    "description": "문자열 input을 정리해 반환하세요. 규칙: 양끝 공백 제거, 연속 공백 1개로 축소, 전체 소문자 변환. 추가 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요. 유의사항: 반환 타입을 문제 설명과 정확히 맞추세요.",
    "starterCode": "function miniMessageClean3(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniMessageClean3;",
    "explanation": "trim, 정규식 치환, toLowerCase 순으로 적용하면 됩니다. / 원문 주제: 메시지 정리 파이프라인",
    "hints": [
      "공백 축소는 /s+/g 정규식을 사용할 수 있습니다.",
      "입력이 빈 문자열이어도 동작해야 합니다.",
      "대문자 문자열도 소문자로 바꿔야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열의 공백을 밑줄로 치환해 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-message-clean-3-tc-1",
        "input": "  HELLO   WORLD ",
        "expectedOutput": "hello_world",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-message-clean-3-tc-2",
        "input": "JS",
        "expectedOutput": "js",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-message-clean-3-tc-3",
        "input": "   ",
        "expectedOutput": "",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-message-clean-3-tc-4",
        "input": "  A   b   C  ",
        "expectedOutput": "a_b_c",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-message-clean-3-tc-5",
        "input": "No-Change",
        "expectedOutput": "no-change",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-score-board-4",
    "slug": "mini-score-board-4",
    "title": "종합 실전 미니 문제 · 조건 라우터 재조합 미션 4",
    "difficulty": "EASY",
    "category": "종합 실전 미니 문제",
    "tags": [
      "object",
      "reduce",
      "math"
    ],
    "description": "숫자 배열 input에 대해 { sum, avg, max } 객체를 반환하세요. 빈 배열이면 { sum:0, avg:0, max:null }을 반환합니다. 추가 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요. 유의사항: 원본 입력은 절대 변경하지 마세요.",
    "starterCode": "function miniScoreBoard4(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniScoreBoard4;",
    "explanation": "합계와 최댓값을 구한 뒤 평균을 계산합니다. / 원문 주제: 점수판 통계 만들기",
    "hints": [
      "빈 배열 예외 처리를 먼저 하세요.",
      "avg는 sum / length입니다.",
      "max는 Math.max 또는 순회로 계산할 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 값 배열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-score-board-4-tc-1",
        "input": [
          10,
          20,
          30
        ],
        "expectedOutput": [
          60,
          20,
          30
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-score-board-4-tc-2",
        "input": [],
        "expectedOutput": [
          0,
          0,
          null
        ],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-score-board-4-tc-3",
        "input": [
          5
        ],
        "expectedOutput": [
          5,
          5,
          5
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-score-board-4-tc-4",
        "input": [
          -1,
          -2,
          -3
        ],
        "expectedOutput": [
          -6,
          -2,
          -1
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-score-board-4-tc-5",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": [
          0,
          0,
          0
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-student-pass-5",
    "slug": "mini-student-pass-5",
    "title": "종합 실전 미니 문제 · 전처리 워커 재매핑 미션 5",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "every",
      "some"
    ],
    "description": "입력은 점수 배열 input입니다. { allPass, hasPerfect }를 반환하세요. 통과 기준은 60점 이상입니다. 추가 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요. 유의사항: 숨김 테스트에서 중복 데이터가 포함될 수 있습니다.",
    "starterCode": "function miniStudentPass5(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniStudentPass5;",
    "explanation": "every와 some으로 두 조건을 각각 계산합니다. / 원문 주제: 학생 통과 판정",
    "hints": [
      "allPass는 모든 점수가 기준 이상인지 검사합니다.",
      "hasPerfect는 100점이 하나라도 있는지 검사합니다.",
      "빈 배열에서 every 결과는 true입니다.",
      "변형 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-student-pass-5-tc-1",
        "input": [
          80,
          90,
          100
        ],
        "expectedOutput": "allPass,hasPerfect",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-student-pass-5-tc-2",
        "input": [
          50,
          70
        ],
        "expectedOutput": "allPass,hasPerfect",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-student-pass-5-tc-3",
        "input": [],
        "expectedOutput": "allPass,hasPerfect",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-student-pass-5-tc-4",
        "input": [
          60,
          60,
          60
        ],
        "expectedOutput": "allPass,hasPerfect",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-student-pass-5-tc-5",
        "input": [
          99,
          100
        ],
        "expectedOutput": "allPass,hasPerfect",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-todo-summary-6",
    "slug": "mini-todo-summary-6",
    "title": "종합 실전 미니 문제 · 필터 유틸 최적화 미션 6",
    "difficulty": "EASY",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "object",
      "count"
    ],
    "description": "입력은 { todos }이며 todos는 { done: boolean } 객체 배열입니다. { total, done, pending } 요약 객체를 반환하세요. 추가 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요. 유의사항: 빈 입력에서도 예외 없이 동작해야 합니다.",
    "starterCode": "function miniTodoSummary6(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniTodoSummary6;",
    "explanation": "총 개수와 완료 개수를 구해 미완료를 계산하면 됩니다. / 원문 주제: 할 일 목록 요약",
    "hints": [
      "total은 배열 길이입니다.",
      "done은 done=true 개수입니다.",
      "pending은 total - done으로 계산할 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체의 키를 정렬한 뒤 콤마로 연결한 문자열을 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-todo-summary-6-tc-1",
        "input": {
          "todos": [
            {
              "done": true
            },
            {
              "done": false
            },
            {
              "done": true
            }
          ]
        },
        "expectedOutput": "done,pending,total",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-todo-summary-6-tc-2",
        "input": {
          "todos": []
        },
        "expectedOutput": "done,pending,total",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-todo-summary-6-tc-3",
        "input": {
          "todos": [
            {
              "done": false
            }
          ]
        },
        "expectedOutput": "done,pending,total",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-todo-summary-6-tc-4",
        "input": {
          "todos": [
            {
              "done": true
            }
          ]
        },
        "expectedOutput": "done,pending,total",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-todo-summary-6-tc-5",
        "input": {
          "todos": [
            {
              "done": false
            },
            {
              "done": false
            }
          ]
        },
        "expectedOutput": "done,pending,total",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-inventory-alert-7",
    "slug": "mini-inventory-alert-7",
    "title": "종합 실전 미니 문제 · 요약 엔진 추출 미션 7",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "filter",
      "object"
    ],
    "description": "입력은 { items }이며 items는 { name, qty } 배열입니다. qty가 4 이하인 상품 이름 배열을 반환하세요. 추가 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요. 유의사항: 조건 분기 순서가 결과를 깨지 않게 하세요.",
    "starterCode": "function miniInventoryAlert7(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniInventoryAlert7;",
    "explanation": "filter 후 map으로 이름만 추출하면 됩니다. / 원문 주제: 재고 부족 상품 찾기",
    "hints": [
      "임계값 이하(<=) 조건을 사용하세요.",
      "결과는 이름 문자열 배열입니다.",
      "해당 상품이 없으면 빈 배열입니다.",
      "변형 규칙: 기존 계산 결과 배열에서 중복을 제거해 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-inventory-alert-7-tc-1",
        "input": {
          "items": [
            {
              "name": "pen",
              "qty": 2
            },
            {
              "name": "notebook",
              "qty": 10
            }
          ],
          "threshold": 4
        },
        "expectedOutput": [
          "pen"
        ],
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-inventory-alert-7-tc-2",
        "input": {
          "items": [],
          "threshold": 4
        },
        "expectedOutput": [],
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-inventory-alert-7-tc-3",
        "input": {
          "items": [
            {
              "name": "eraser",
              "qty": 3
            },
            {
              "name": "ruler",
              "qty": 4
            }
          ],
          "threshold": 4
        },
        "expectedOutput": [
          "eraser",
          "ruler"
        ],
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-inventory-alert-7-tc-4",
        "input": {
          "items": [
            {
              "name": "a",
              "qty": 0
            },
            {
              "name": "b",
              "qty": 100
            }
          ],
          "threshold": 4
        },
        "expectedOutput": [
          "a"
        ],
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-inventory-alert-7-tc-5",
        "input": {
          "items": [
            {
              "name": "x",
              "qty": 4
            }
          ],
          "threshold": 4
        },
        "expectedOutput": [
          "x"
        ],
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-message-clean-8",
    "slug": "mini-message-clean-8",
    "title": "종합 실전 미니 문제 · 테스트 헬퍼 표준화 미션 8",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "string",
      "regex",
      "format"
    ],
    "description": "문자열 input을 정리해 반환하세요. 규칙: 양끝 공백 제거, 연속 공백 1개로 축소, 전체 소문자 변환. 추가 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요. 유의사항: 경계값과 음수 입력을 반드시 고려하세요.",
    "starterCode": "function miniMessageClean8(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniMessageClean8;",
    "explanation": "trim, 정규식 치환, toLowerCase 순으로 적용하면 됩니다. / 원문 주제: 메시지 정리 파이프라인",
    "hints": [
      "공백 축소는 /s+/g 정규식을 사용할 수 있습니다.",
      "입력이 빈 문자열이어도 동작해야 합니다.",
      "대문자 문자열도 소문자로 바꿔야 합니다.",
      "변형 규칙: 기존 계산 결과 문자열 뒤에 고정 접미사를 붙여 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-message-clean-8-tc-1",
        "input": "  HELLO   WORLD ",
        "expectedOutput": "hello world_S6",
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-message-clean-8-tc-2",
        "input": "JS",
        "expectedOutput": "js_S6",
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-message-clean-8-tc-3",
        "input": "   ",
        "expectedOutput": "_S6",
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-message-clean-8-tc-4",
        "input": "  A   b   C  ",
        "expectedOutput": "a b c_S6",
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-message-clean-8-tc-5",
        "input": "No-Change",
        "expectedOutput": "no-change_S6",
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-score-board-9",
    "slug": "mini-score-board-9",
    "title": "종합 실전 미니 문제 · 검증 파이프 재매핑 미션 9",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "object",
      "reduce",
      "math"
    ],
    "description": "숫자 배열 input에 대해 { sum, avg, max } 객체를 반환하세요. 빈 배열이면 { sum:0, avg:0, max:null }을 반환합니다. 추가 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function miniScoreBoard9(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniScoreBoard9;",
    "explanation": "합계와 최댓값을 구한 뒤 평균을 계산합니다. / 원문 주제: 점수판 통계 만들기",
    "hints": [
      "빈 배열 예외 처리를 먼저 하세요.",
      "avg는 sum / length입니다.",
      "max는 Math.max 또는 순회로 계산할 수 있습니다.",
      "변형 규칙: 기존 계산 결과 객체를 키 기준 오름차순으로 정렬한 객체를 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-score-board-9-tc-1",
        "input": [
          10,
          20,
          30
        ],
        "expectedOutput": {
          "avg": 20,
          "max": 30,
          "sum": 60
        },
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-score-board-9-tc-2",
        "input": [],
        "expectedOutput": {
          "avg": 0,
          "max": null,
          "sum": 0
        },
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-score-board-9-tc-3",
        "input": [
          5
        ],
        "expectedOutput": {
          "avg": 5,
          "max": 5,
          "sum": 5
        },
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-score-board-9-tc-4",
        "input": [
          -1,
          -2,
          -3
        ],
        "expectedOutput": {
          "avg": -2,
          "max": -1,
          "sum": -6
        },
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-score-board-9-tc-5",
        "input": [
          0,
          0,
          0
        ],
        "expectedOutput": {
          "avg": 0,
          "max": 0,
          "sum": 0
        },
        "isHidden": true,
        "order": 5
      }
    ]
  },
  {
    "id": "pb-mini-student-pass-10",
    "slug": "mini-student-pass-10",
    "title": "종합 실전 미니 문제 · 집계 모듈 합성 미션 10",
    "difficulty": "MEDIUM",
    "category": "종합 실전 미니 문제",
    "tags": [
      "array",
      "every",
      "some"
    ],
    "description": "입력은 점수 배열 input입니다. { allPass, hasPerfect }를 반환하세요. 통과 기준은 61점 이상입니다. 추가 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요. 유의사항: 배열/객체 길이가 0인 경우도 처리해야 합니다.",
    "starterCode": "function miniStudentPass10(input) {\n  // 여기에 코드를 작성하세요.\n}\n\nmodule.exports = miniStudentPass10;",
    "explanation": "every와 some으로 두 조건을 각각 계산합니다. / 원문 주제: 학생 통과 판정",
    "hints": [
      "allPass는 모든 점수가 기준 이상인지 검사합니다.",
      "hasPerfect는 100점이 하나라도 있는지 검사합니다.",
      "빈 배열에서 every 결과는 true입니다.",
      "변형 규칙: 기존 계산 결과 객체의 키 개수를 반환하세요."
    ],
    "testCases": [
      {
        "id": "mini-student-pass-10-tc-1",
        "input": [
          80,
          90,
          100
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 1
      },
      {
        "id": "mini-student-pass-10-tc-2",
        "input": [
          50,
          70
        ],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 2
      },
      {
        "id": "mini-student-pass-10-tc-3",
        "input": [],
        "expectedOutput": 2,
        "isHidden": false,
        "order": 3
      },
      {
        "id": "mini-student-pass-10-tc-4",
        "input": [
          60,
          60,
          60
        ],
        "expectedOutput": 2,
        "isHidden": true,
        "order": 4
      },
      {
        "id": "mini-student-pass-10-tc-5",
        "input": [
          99,
          100
        ],
        "expectedOutput": 2,
        "isHidden": true,
        "order": 5
      }
    ]
  }
];
