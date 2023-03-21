function containsDuplicate(nums: number[]): boolean {
  nums.sort(function (a, b) {
    return a - b;
  });
  let ans = false;
  let length = nums.length - 1;
  for (let i = 0; i < length; i++) {
    if (nums[i] === nums[i + 1]) {
      ans = true;
    }
  }
  return ans;
}
