interface Characters {
  [char: string]: number; //char range a to z
}

function groupAnagrams(strs: string[]) {
  let groupedAnagramsMap = new Map<string, string[]>();
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
    if (groupedAnagramsMap.has(jsonKey)) {
      let valuesArr = groupedAnagramsMap.get(jsonKey);
      if (valuesArr !== undefined) {
        valuesArr.push(val);
        groupedAnagramsMap.set(jsonKey, valuesArr);
      }
    } else {
      groupedAnagramsMap.set(jsonKey, [val]);
    }
  }
  return Array.from(groupedAnagramsMap.values());
}
