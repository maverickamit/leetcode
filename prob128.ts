function longestConsecutive(nums: number[]): number {
  let intMap = new Map<number, boolean>();

  let result = 0;
  let accumulator = 0;

  for (let i = 0; i < nums.length; i++) {
    intMap.set(nums[i], true);
  }

  for (let i = 0; i < nums.length; i++) {
    //skip this loop because this number has already been checked
    if (!intMap.get(nums[i])) continue;
    accumulator = 0;
    let p1 = nums[i] - 1;
    let p2 = nums[i];

    //right pointer going to the right
    while (intMap.get(p2)) {
      //since this value has already been checked we don't need to check it again
      intMap.set(p2, false);
      accumulator++;
      p2++;
    }
    //left pointer going to the left
    while (intMap.get(p1)) {
      //since this value has already been checked we don't need to check it again
      intMap.set(p1, false);
      accumulator++;
      p1--;
    }
    if (accumulator > result) result = accumulator;
  }

  return result;
}

let x = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];

console.log(longestConsecutive(x));
