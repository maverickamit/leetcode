function isPalindrome(s: string): boolean {
  let str = s.replace(/[^a-z0-9]/gi, "");
  str = str.toLowerCase();
  let len = str.length;
  let ans = true;
  for (let i = 0; i < len; i++) {
    if (str[i] !== str[len - 1 - i]) {
      ans = false;
      break;
    }
  }
  return ans;
}
