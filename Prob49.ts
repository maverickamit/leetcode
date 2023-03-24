interface Characters {
  [charIndex: number]: number; //charIndex starts at 0 for a to 25 for z
}

interface GroupedAnagrams {
  [jsonKey: string]: string[];
}

function groupAnagrams(strs: string[]) {
  let groupedAnagrams: GroupedAnagrams = {};
  //Counting values of characters against their index number
  for (let i = 0; i < strs.length; i++) {
    let val = strs[i];
    let charactersObj: Characters = {};

    for (let j = 0; j < 26; j++) {
      charactersObj[j] = 0;
    }
    if (val.length) {
      //Only count characters if the string length is greater than 0
      for (let i = 0; i < val.length; i++) {
        charactersObj[val[i].charCodeAt(0) - 97]++;
      }
    }
    let jsonKey = JSON.stringify(charactersObj);
    if (groupedAnagrams[jsonKey]) {
      groupedAnagrams[jsonKey].push(val);
    } else {
      groupedAnagrams[jsonKey] = [val];
    }
  }

  return Object.values(groupedAnagrams);
}
