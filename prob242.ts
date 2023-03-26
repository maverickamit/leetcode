interface Characters {
  [charIndex: number]: number; //charIndex starts at 0 for a to 25 for z
}

function isAnagram(s: string, t: string): boolean {
  let charactersObj: Characters = {};
  for (let i = 0; i < 26; i++) {
    charactersObj[i] = 0;
  }
  if (s.length) {
    //Only count characters if the string length is greater than 0
    for (let i = 0; i < s.length; i++) {
      charactersObj[s[i].charCodeAt(0) - 97]++;
    }
  }
  if (t.length) {
    //Only count characters if the string length is greater than 0
    for (let i = 0; i < t.length; i++) {
      charactersObj[t[i].charCodeAt(0) - 97]--;
    }
  }
  let ans = true;
  Object.values(charactersObj).forEach((value) => {
    if (value !== 0) {
      ans = false;
    }
  });

  return ans;
}
