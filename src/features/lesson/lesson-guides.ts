export type LessonGuide = {
  title: string;
  goal: string;
  concepts: string[];
  explanation: string;
  exampleCode: string;
  exampleExplanation: string[];
  thinkingSteps: string[];
  cautions: string[];
};

const DEFAULT_GUIDE: LessonGuide = {
  title: "핵심 로직을 단계로 나누기",
  goal: "입력값을 읽고 조건에 따라 값을 누적해 원하는 결과를 반환할 수 있다.",
  concepts: [
    "문제를 입력, 처리, 반환 3단계로 나눈다.",
    "반복/조건/누적 중 필요한 도구를 먼저 선택한다.",
    "중간 값을 변수로 관리해 디버깅 가능하게 만든다.",
    "마지막 반환 타입이 요구사항과 일치하는지 확인한다."
  ],
  explanation: "문제를 한 번에 풀려고 하지 말고 작은 단계로 쪼개면 실수가 줄어듭니다. 먼저 어떤 값을 순회할지 정하고, 조건을 통과한 값만 누적한 뒤 최종 결과를 반환하세요.",
  exampleCode: `function solve(numbers) {
  let total = 0;

  for (const number of numbers) {
    if (number > 0) {
      total += number;
    }
  }

  return total;
}

module.exports = solve;`,
  exampleExplanation: [
    "total은 조건을 통과한 값의 누적 결과를 저장합니다.",
    "for...of로 배열 값을 하나씩 확인합니다.",
    "조건을 만족하는 값만 total에 반영합니다.",
    "반복이 끝난 뒤 total을 반환합니다."
  ],
  thinkingSteps: [
    "결과를 저장할 변수를 만든다.",
    "입력을 순회한다.",
    "조건을 검사한다.",
    "조건을 만족한 값만 반영한다.",
    "최종 결과를 반환한다."
  ],
  cautions: [
    "반복문 안에서 성급하게 return하면 모든 입력을 처리하지 못합니다.",
    "초기값을 잘못 주면 합계/개수 계산이 틀어질 수 있습니다."
  ]
};

const LESSON_GUIDES_BY_CATEGORY: Record<string, LessonGuide> = {
  "배열 기본": {
    title: "배열 순회와 조건 처리",
    goal: "배열을 순회하며 조건에 맞는 값을 선택하거나 누적할 수 있다.",
    concepts: [
      "for...of로 배열 요소를 순서대로 꺼낸다.",
      "if문으로 현재 값이 조건에 맞는지 판별한다.",
      "누적 변수(합계, 개수, 결과 배열)를 목적에 맞게 선택한다.",
      "반복 종료 후 누적 결과를 반환한다."
    ],
    explanation: "배열 문제의 핵심은 순회와 누적입니다. 먼저 어떤 값을 순회할지 결정하고, 조건을 통과한 값만 반영하면 대부분의 기본 문제를 안정적으로 해결할 수 있습니다.",
    exampleCode: `function countPositive(numbers) {
  let count = 0;

  for (const number of numbers) {
    if (number > 0) {
      count += 1;
    }
  }

  return count;
}

module.exports = countPositive;`,
    exampleExplanation: [
      "count는 양수 개수를 저장합니다.",
      "for...of는 numbers의 각 값을 순회합니다.",
      "number > 0이면 count를 1 증가시킵니다.",
      "모든 값을 확인한 뒤 count를 반환합니다."
    ],
    thinkingSteps: [
      "결과를 저장할 변수를 만든다.",
      "배열을 순회한다.",
      "조건을 검사한다.",
      "조건을 만족하면 결과 변수에 반영한다.",
      "반복이 끝나면 결과를 반환한다."
    ],
    cautions: [
      "반복 도중 return하면 남은 요소를 확인하지 못합니다.",
      "개수(count)와 합계(sum)는 누적 방식이 다릅니다."
    ]
  },
  "배열 고차함수(map/filter/reduce/find/some/every)": {
    title: "배열 고차함수로 의도 표현하기",
    goal: "map/filter/reduce/find/some/every를 상황에 맞게 선택해 문제를 해결할 수 있다.",
    concepts: [
      "map은 동일 길이 변환, filter는 조건 추출에 사용한다.",
      "reduce는 누적 결과를 하나로 만들 때 사용한다.",
      "find/some/every는 탐색/검증 목적에 맞게 선택한다.",
      "콜백 반환값의 의미(true/false, 누적값)를 명확히 구분한다."
    ],
    explanation: "고차함수는 반복문을 대체하는 것이 아니라 의도를 드러내는 도구입니다. 문제 목표가 변환인지, 필터링인지, 검증인지 먼저 정하면 적절한 함수를 빠르게 선택할 수 있습니다.",
    exampleCode: `function getAdultNames(users) {
  return users
    .filter((user) => user.age >= 20)
    .map((user) => user.name);
}

module.exports = getAdultNames;`,
    exampleExplanation: [
      "filter로 성인 사용자만 남깁니다.",
      "map으로 이름만 추출합니다.",
      "중간 배열을 명확하게 분리해 의도를 읽기 쉽게 만듭니다."
    ],
    thinkingSteps: [
      "문제 목표를 변환/추출/검증 중 하나로 분류한다.",
      "해당 목표에 맞는 고차함수를 선택한다.",
      "콜백 반환값이 올바른 의미를 갖는지 확인한다.",
      "필요하면 체이닝으로 단계별 처리한다.",
      "최종 결과 타입을 검증한다."
    ],
    cautions: [
      "reduce 초기값을 누락하면 빈 배열에서 오류가 날 수 있습니다.",
      "map 내부에서 조건 분기만 하고 반환을 빼먹기 쉽습니다."
    ]
  },
  문자열: {
    title: "문자열 분해와 재조합",
    goal: "문자열을 분해하고 가공한 뒤 원하는 형태로 다시 결합할 수 있다.",
    concepts: [
      "trim/split/replace로 입력 문자열을 정규화한다.",
      "toLowerCase/toUpperCase로 비교 기준을 맞춘다.",
      "indexOf/includes/startsWith로 패턴 존재를 확인한다.",
      "join/template literal로 결과 문자열을 조합한다."
    ],
    explanation: "문자열 문제는 비교 전에 입력을 먼저 정규화하는 습관이 중요합니다. 공백, 대소문자, 구분자 처리를 먼저 통일하면 조건 분기와 반환 로직이 단순해집니다.",
    exampleCode: `function normalizeTag(text) {
  return text
    .trim()
    .toLowerCase()
    .replaceAll(" ", "-");
}

module.exports = normalizeTag;`,
    exampleExplanation: [
      "trim으로 앞뒤 공백을 제거합니다.",
      "toLowerCase로 비교 기준을 통일합니다.",
      "공백을 하이픈으로 바꿔 slug 형태로 만듭니다."
    ],
    thinkingSteps: [
      "입력 문자열의 노이즈(공백/대소문자)를 정리한다.",
      "조건 비교 기준을 통일한다.",
      "필요한 패턴을 치환하거나 추출한다.",
      "최종 문자열 형태를 맞춘다.",
      "경계 케이스(빈 문자열)를 확인한다."
    ],
    cautions: [
      "replace는 기본적으로 첫 번째 항목만 바꿉니다.",
      "문자열 비교 전에 대소문자 통일을 빼먹으면 테스트가 실패할 수 있습니다."
    ]
  },
  객체: {
    title: "객체 접근과 안전한 갱신",
    goal: "객체의 키를 읽고 조건에 따라 값을 안전하게 갱신할 수 있다.",
    concepts: [
      "점 표기법과 대괄호 표기법을 구분해 사용한다.",
      "없는 키 접근 시 기본값을 지정해 방어한다.",
      "원본 변경이 필요한지 복사 후 변경이 필요한지 판단한다.",
      "Object.keys/entries를 이용해 반복 처리한다."
    ],
    explanation: "객체 문제는 키 존재 여부와 원본 변경 여부를 먼저 결정하면 안정적으로 풀 수 있습니다. 특히 집계 문제에서는 기본값 초기화 패턴을 익혀두면 속도가 빨라집니다.",
    exampleCode: `function countByType(items) {
  const counts = {};

  for (const item of items) {
    const key = item.type;
    counts[key] = (counts[key] ?? 0) + 1;
  }

  return counts;
}

module.exports = countByType;`,
    exampleExplanation: [
      "counts는 타입별 개수를 저장합니다.",
      "기존 값이 없으면 0을 기본값으로 사용합니다.",
      "각 항목을 순회하며 키별로 개수를 증가시킵니다."
    ],
    thinkingSteps: [
      "결과 객체 구조를 먼저 정한다.",
      "반복 중 사용할 키를 추출한다.",
      "기본값 초기화 후 누적한다.",
      "필요한 키만 포함되었는지 점검한다.",
      "원본 데이터 변경 여부를 확인한다."
    ],
    cautions: [
      "중첩 객체 접근 시 undefined 체크를 빼먹기 쉽습니다.",
      "원본 객체를 직접 변경하면 예상치 못한 부작용이 생길 수 있습니다."
    ]
  },
  "변수/연산/조건문": {
    title: "조건 분기와 기본 연산",
    goal: "입력값을 해석하고 조건 분기를 통해 정확한 결과를 반환할 수 있다.",
    concepts: [
      "변수명을 의미 있게 정해 의도를 드러낸다.",
      "if/else if/else 순서를 조건 우선순위에 맞춘다.",
      "비교 연산자와 논리 연산자를 정확히 조합한다.",
      "경계값(0, 음수, 빈 값)을 별도로 점검한다."
    ],
    explanation: "초급 알고리즘 문제는 복잡한 문법보다 조건 우선순위가 핵심입니다. 가장 예외적인 케이스부터 처리할지, 일반 케이스부터 처리할지 먼저 정하면 실수를 크게 줄일 수 있습니다.",
    exampleCode: `function gradeScore(score) {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  return "C";
}

module.exports = gradeScore;`,
    exampleExplanation: [
      "점수가 높은 조건부터 순서대로 검사합니다.",
      "첫 조건을 만족하면 즉시 반환합니다.",
      "나머지 케이스는 기본값 C를 반환합니다."
    ],
    thinkingSteps: [
      "입력 범위와 경계값을 적는다.",
      "조건 우선순위를 정한다.",
      "분기문을 순서대로 작성한다.",
      "각 분기가 반환하는 값을 검증한다.",
      "경계 케이스 테스트를 해본다."
    ],
    cautions: [
      "조건 순서가 잘못되면 하위 조건이 도달 불가능해질 수 있습니다.",
      "== 대신 === 사용을 기본으로 두는 것이 안전합니다."
    ]
  },
  "함수/스코프/클로저 기초": {
    title: "함수 분리와 스코프 이해",
    goal: "함수를 역할별로 분리하고 스코프를 이해해 안정적으로 값을 다룰 수 있다.",
    concepts: [
      "함수 입력과 반환을 명확히 정의한다.",
      "지역 변수와 외부 변수의 범위를 구분한다.",
      "클로저가 외부 값을 기억하는 구조를 이해한다.",
      "작은 함수 조합으로 복잡도를 낮춘다."
    ],
    explanation: "함수/스코프 문제는 값이 어디서 만들어지고 어디서 참조되는지 추적하는 연습입니다. 데이터 흐름을 함수 단위로 분리하면 디버깅이 쉬워집니다.",
    exampleCode: `function createMultiplier(factor) {
  return function multiply(value) {
    return value * factor;
  };
}

module.exports = createMultiplier;`,
    exampleExplanation: [
      "createMultiplier는 factor를 기억하는 함수를 반환합니다.",
      "내부 함수 multiply는 외부 스코프의 factor를 참조합니다.",
      "이 패턴이 클로저의 핵심입니다."
    ],
    thinkingSteps: [
      "함수의 입력/출력을 먼저 정의한다.",
      "중간 계산을 지역 변수로 분리한다.",
      "외부 변수 참조가 필요한지 판단한다.",
      "함수 합성이 가능한지 확인한다.",
      "테스트 입력으로 스코프 오류를 점검한다."
    ],
    cautions: [
      "var 사용은 의도치 않은 스코프 문제를 만들 수 있습니다.",
      "클로저로 큰 객체를 붙잡으면 메모리 사용이 커질 수 있습니다."
    ]
  },
  "비동기 Promise/async/await": {
    title: "비동기 흐름 제어",
    goal: "Promise와 async/await를 사용해 비동기 로직을 순차/병렬로 제어할 수 있다.",
    concepts: [
      "await는 Promise 완료를 기다린 뒤 다음 줄로 진행한다.",
      "try/catch로 비동기 에러를 처리한다.",
      "Promise.all로 병렬 실행 결과를 모은다.",
      "반환 타입이 Promise인지 일반 값인지 구분한다."
    ],
    explanation: "비동기 문제는 실행 순서를 눈으로 추적하는 습관이 중요합니다. 어떤 작업을 기다려야 하는지, 병렬로 처리할 수 있는지를 먼저 정리하면 코드가 단순해집니다.",
    exampleCode: `async function loadUserName(fetchUser) {
  try {
    const user = await fetchUser();
    return user.name;
  } catch {
    return "unknown";
  }
}

module.exports = loadUserName;`,
    exampleExplanation: [
      "fetchUser Promise가 끝날 때까지 await로 대기합니다.",
      "성공하면 user.name을 반환합니다.",
      "실패하면 catch에서 기본값을 반환합니다."
    ],
    thinkingSteps: [
      "비동기 작업 경계를 식별한다.",
      "순차/병렬 실행 전략을 결정한다.",
      "await 위치를 명확히 배치한다.",
      "에러 처리 경로를 정의한다.",
      "반환 Promise 결과를 검증한다."
    ],
    cautions: [
      "await를 빼먹으면 Promise 객체가 그대로 반환될 수 있습니다.",
      "forEach 내부 await는 기대대로 동작하지 않을 수 있습니다."
    ]
  },
  "날짜/숫자/정규식 기초": {
    title: "값 형식 다루기",
    goal: "날짜/숫자/문자열 패턴을 안정적으로 파싱하고 검증할 수 있다.",
    concepts: [
      "Number 변환과 NaN 체크를 함께 사용한다.",
      "Date 생성과 비교 시 타임존 영향을 의식한다.",
      "정규식은 검증 범위를 명확히 제한한다.",
      "포맷팅과 검증 로직을 분리한다."
    ],
    explanation: "형식 처리 문제는 입력값이 항상 깨끗하다고 가정하면 실패합니다. 파싱 전 검증, 실패 시 대체값 반환 같은 방어 전략을 먼저 준비하세요.",
    exampleCode: `function isValidPhone(text) {
  const pattern = /^010-\d{4}-\d{4}$/;
  return pattern.test(text);
}

module.exports = isValidPhone;`,
    exampleExplanation: [
      "정규식으로 허용 형식을 명확히 고정합니다.",
      "test 결과를 boolean으로 바로 반환합니다.",
      "허용 범위가 좁을수록 예외 처리가 쉬워집니다."
    ],
    thinkingSteps: [
      "입력 형식 규칙을 먼저 정의한다.",
      "파싱 전 유효성 검사를 수행한다.",
      "검증 실패 시 처리 정책을 정한다.",
      "필요한 포맷으로 변환한다.",
      "경계 입력을 테스트한다."
    ],
    cautions: [
      "Date 파싱은 런타임/타임존에 따라 달라질 수 있습니다.",
      "과도하게 넓은 정규식은 잘못된 입력을 통과시킬 수 있습니다."
    ]
  },
  반복문: {
    title: "반복문 제어와 중단 조건",
    goal: "반복문의 시작, 종료, 누적 규칙을 명확히 설계해 정확히 순회할 수 있다.",
    concepts: [
      "for/while의 종료 조건을 먼저 정의한다.",
      "continue와 break를 의도적으로 사용한다.",
      "반복마다 바뀌는 상태 변수를 추적한다.",
      "반복 후 반환 값을 누적 변수에서 읽는다."
    ],
    explanation: "반복문 문제는 종료 조건 하나만 틀려도 무한 루프나 누락이 생깁니다. 인덱스 변화, 종료 시점, 누적 변수 변경 시점을 단계적으로 점검하세요.",
    exampleCode: `function sumUntilLimit(numbers, limit) {
  let total = 0;

  for (const number of numbers) {
    if (total + number > limit) {
      break;
    }

    total += number;
  }

  return total;
}

module.exports = sumUntilLimit;`,
    exampleExplanation: [
      "합계가 limit를 넘기기 전까지만 누적합니다.",
      "조건을 넘으면 break로 반복을 중단합니다.",
      "중단 시점까지의 total을 반환합니다."
    ],
    thinkingSteps: [
      "반복 대상과 종료 조건을 적는다.",
      "각 반복에서 바뀌는 상태를 정한다.",
      "중단/건너뛰기 조건을 구현한다.",
      "누적 결과를 업데이트한다.",
      "반복 종료 후 반환한다."
    ],
    cautions: [
      "while문에서 인덱스 증가를 빼먹으면 무한 루프가 발생합니다.",
      "break/continue 사용 시 누적 로직 누락에 주의해야 합니다."
    ]
  },
  "종합 실전 미니 문제": {
    title: "복합 조건 문제 분해",
    goal: "여러 개념이 섞인 문제를 단계별로 분해해 안정적으로 해결할 수 있다.",
    concepts: [
      "요구사항을 입력/처리/출력으로 분리한다.",
      "중간 함수를 만들어 책임을 나눈다.",
      "예외 케이스를 먼저 처리해 본 흐름을 단순화한다.",
      "샘플 입력으로 단계별 결과를 검증한다."
    ],
    explanation: "실전형 문제는 한 번에 완성하려고 하면 오류가 커집니다. 먼저 작은 함수로 쪼개고, 각 단계의 출력이 맞는지 확인하면서 조립하면 통과율이 높아집니다.",
    exampleCode: `function solveReport(records) {
  const validRecords = records.filter((record) => record.score >= 0);
  const total = validRecords.reduce((sum, record) => sum + record.score, 0);

  return {
    count: validRecords.length,
    average: validRecords.length === 0 ? 0 : Math.round(total / validRecords.length)
  };
}

module.exports = solveReport;`,
    exampleExplanation: [
      "먼저 유효한 데이터만 필터링합니다.",
      "reduce로 총합을 계산합니다.",
      "개수와 평균을 조합해 최종 객체를 반환합니다."
    ],
    thinkingSteps: [
      "요구사항을 작은 단계로 나눈다.",
      "각 단계의 입력/출력을 정의한다.",
      "단계별 함수를 구현한다.",
      "샘플 데이터로 단계별 검증한다.",
      "최종 조합 결과를 반환한다."
    ],
    cautions: [
      "단계 분리를 하지 않으면 디버깅이 어려워집니다.",
      "빈 배열/누락 필드 같은 예외 입력을 반드시 확인하세요."
    ]
  }
};

export function getLessonGuideByCategory(category: string): LessonGuide {
  return LESSON_GUIDES_BY_CATEGORY[category] ?? DEFAULT_GUIDE;
}

export function hasLessonGuideForCategory(category: string) {
  return category in LESSON_GUIDES_BY_CATEGORY;
}
