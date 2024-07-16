function checkInclusion(s1: string, s2: string): boolean {
  let charMap = new Map<string, number>();

  s1.split("").forEach((char) =>
    charMap.set(char, (charMap.get(char) ?? 0) + 1)
  );

  function checkPermutation(): boolean {
    for (let value of charMap.values()) {
      if (value !== 0) return false;
    }
    return true;
  }

  let startIndex = 0;
  let endIndex = 0;

  while (endIndex < s2.length) {
    if (endIndex - startIndex + 1 > s1.length) {
      const startElem = s2[startIndex];
      if (charMap.has(startElem)) {
        charMap.set(startElem, charMap.get(startElem)! + 1);
      }
      startIndex++;
    }
    let elem = s2[endIndex];
    if (charMap.has(elem)) {
      charMap.set(elem, charMap.get(elem)! - 1);
    }
    if (checkPermutation()) {
      return true;
    }
    endIndex++;
  }
  return false;
}

let s1 = "ccc",
  s2 = "cbac";

console.log(checkInclusion(s1, s2));
