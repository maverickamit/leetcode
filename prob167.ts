function twoSum(numbers: number[], target: number): number[] {
  let i = 0,
    j = numbers.length - 1;
  let ans: number[] = [];

  while (i + j < numbers.length * 2) {
    if (numbers[i] + numbers[j] == target) {
      ans = [i + 1, j + 1]; //We are not using zero indexing for the answer
      break;
    } else if (numbers[i] + numbers[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return ans;
}
