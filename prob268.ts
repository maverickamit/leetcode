function missingNumber(nums: number[]): number {
  let len = nums.length;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }
  return (len * (len + 1)) / 2 - sum;
}
