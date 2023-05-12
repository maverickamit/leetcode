function missingNumber(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum ^ nums[i] ^ (i + 1);
  }
  return sum;
}
