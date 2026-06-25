const problemHintsBySlug: Record<string, string[]> = {
  "double-numbers": [
    "입력 배열을 직접 수정하지 말고, 새 배열을 반환하는 방식으로 작성해 보세요.",
    "배열의 각 원소를 같은 순서로 2배 변환해야 합니다. map을 쓰면 간결합니다.",
    "빈 배열이 들어와도 오류 없이 []를 반환하는지 확인하세요."
  ],
  "count-vowels": [
    "모음 집합(a, e, i, o, u)을 먼저 정해 두고 문자별로 포함 여부를 검사해 보세요.",
    "대소문자 구분이 없으므로 문자열을 한 번 소문자로 바꾼 뒤 순회하면 편합니다.",
    "모음이 없는 문자열과 빈 문자열 케이스에서 0을 정확히 반환하는지 점검하세요."
  ]
};

export function getHintsByProblemSlug(slug: string): string[] | undefined {
  const hints = problemHintsBySlug[slug];

  return hints ? [...hints] : undefined;
}
