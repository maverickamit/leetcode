interface NumberIndex {
  [key: number]: number[]; // value of number : all indexes of number in the given array
}
interface NumberCount {
  [key: number]: number; // for keeping count of the count of numbers
}

function threeSum(nums: number[]): number[][] {
  let ans: number[][] = [];
  const ansSet = new Set();

  let numIndex: NumberIndex = {};
  let numCount: NumberCount = {};

  const sortArray = (arr: number[]) => {
    arr.sort(function (a, b) {
      return a - b;
    });
  };
  //Modifying nums array to remove duplicate elements with more than 3 copies
  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];
    numCount[element]
      ? numCount[element] > 3
        ? null
        : numCount[element]++
      : (numCount[element] = 1);
  }
  nums = [];
  Object.keys(numCount).forEach((key) => {
    let newArr: number[] = new Array(numCount[+key]);
    newArr.fill(+key);
    nums.push(...newArr);
  });

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    numIndex[key] ? numIndex[key].push(i) : (numIndex[key] = [i]);
  }

  for (let i = 0; i < nums.length; i++) {
    let fixed = nums[i];
    for (let j = 0; j < nums.length && j !== i; j++) {
      let diffVal = 0 - fixed - nums[j];
      let diffValIndex = 0;
      let indexArray = numIndex[diffVal] ? numIndex[diffVal] : [];
      indexArray.forEach((index) => {
        if (index !== i && index !== j) diffValIndex = index;
      });

      if (diffValIndex) {
        let newAnsEntry = [fixed, nums[j], diffVal];
        sortArray(newAnsEntry);
        let key = newAnsEntry.toString();
        if (!ansSet.has(key)) {
          ansSet.add(key);
          ans.push(newAnsEntry);
        }
      }
    }
  }
  return ans;
}
