function findMin(nums: number[]): number {
  let leftPointer = 0,
    rightPointer = nums.length - 1,
    ans = 0,
    leftValue: number,
    middleValue: number,
    rightValue: number;

  while (leftPointer <= rightPointer) {
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    leftValue = nums[leftPointer];
    middleValue = nums[middlePointer];
    rightValue = nums[rightPointer];
    let leftDifference = middleValue - leftValue;
    let rightDifference = middleValue - rightValue;
    if (leftDifference < 0 && rightDifference < 0) {
      rightDifference = Math.abs(rightDifference);
      leftDifference = Math.abs(leftDifference);
    }
    ans = middleValue;
    if (middleValue < nums[middlePointer - 1]) {
      break;
    }
    if (leftDifference >= rightDifference) {
      rightPointer = middlePointer - 1;
    } else {
      leftPointer = middlePointer + 1;
    }
  }
  return ans;
}
