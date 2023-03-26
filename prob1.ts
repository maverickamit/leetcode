interface Nums {
  [key: number]: number; // value of number : index of number
}

function twoSum(nums: number[], target: number): number[] {
  let length = nums.length;
  let ans: number[] = [];

  //Creating a nums object with the number as key and index as value
  let numsObj: Nums = {};
  for (let i = 0; i < length; i++) {
    numsObj[nums[i]] = i;
  }
  //Checking if difference value exists in the nums object and if it does
  //getting the index of it.
  for (let i = 0; i < length; i++) {
    let val = target - nums[i];
    let index = numsObj[val];
    if (index && index !== i) {
      //Making sure we get two unique indexes
      ans = [i, index];
      break;
    }
  }

  return ans;
}
