function twoSum(nums: number[], target: number): number[] {
  //Creating a nums map with the number as key and index as value
  let numsMap = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    //Checking if difference value exists in the nums map and if it does
    //getting the index of it.
    let diff = target - nums[i];
    if (numsMap.has(diff)) {
      let indexOfDiff = numsMap.get(diff);
      if (indexOfDiff !== undefined) return [i, indexOfDiff];
    }
    numsMap.set(nums[i], i);
  }
  return [];
}
