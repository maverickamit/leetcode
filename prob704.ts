function search(nums: number[], target: number): number {
  let ans = -1;
  let startIndex = 0;
  let endIndex = nums.length - 1;
  while (true) {
    let middleIndex = Math.ceil((endIndex + startIndex) / 2);
    let value = nums[middleIndex];
    if (endIndex - startIndex < 2) {
      nums[startIndex] == target
        ? (ans = startIndex)
        : nums[endIndex] == target
        ? (ans = endIndex)
        : null;
      break;
    }
    if (value > target) {
      endIndex = middleIndex;
    } else if (value < target) {
      startIndex = middleIndex;
    } else {
      ans = middleIndex;
      break;
    }
  }
  return ans;
}
