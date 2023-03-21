function isAnagram(s: string, t: string): boolean {
  let length1 = s.length;
  let length2 = t.length;
  let ans = true;
  if (length1 !== length2) return false;

  let i = 0;
  while (length1 - i > 0) {
    if (s.includes(t[0])) {
      s = s.replace(t[0], "");
      t = t.replace(t[0], "");
      i++;
    } else {
      ans = false;
      break;
    }
  }
  return ans;
}
