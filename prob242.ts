function isAnagram(s: string, t: string): boolean {
  let charactersMapS = new Map<string, number>();
  let charactersMapT = new Map<string, number>();

  if (s.length !== t.length) return false;

  if (s.length) {
    //Only count characters if the string length is greater than 0
    for (let i = 0; i < s.length; i++) {
      let val = charactersMapS.get(s[i]);
      if (val) {
        charactersMapS.set(s[i], val + 1);
      } else {
        charactersMapS.set(s[i], 1);
      }
    }
  }

  if (t.length) {
    //Only count characters if the string length is greater than 0
    for (let i = 0; i < t.length; i++) {
      let val = charactersMapT.get(t[i]);
      if (val) {
        charactersMapT.set(t[i], val + 1);
      } else {
        charactersMapT.set(t[i], 1);
      }
    }
  }

  for (let [key, value] of charactersMapS) {
    if (charactersMapT.get(key) !== value) return false;
  }

  return true;
}
