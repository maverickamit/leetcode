function moveZeroes(nums: number[]): void {
  let i = 0,
    j = 0;
  let zeroCount = 0;
  let initLength = nums.length;

  while (i < initLength) {
    let item = nums.shift();
    if (item) nums.push(item);

    if (item === 0) zeroCount++;
    i++;
  }
  while (j < zeroCount) {
    nums.push(0);
    j++;
  }
}
let x = [0, 1, 0, 3, 12];

moveZeroes(x);
