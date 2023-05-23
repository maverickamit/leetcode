function containsDuplicate(nums: number[]): boolean {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    const val = nums[i];
    if (set.has(val)) {
      return true;
    } else {
      set.add(val);
    }
  }
  return false;
}
