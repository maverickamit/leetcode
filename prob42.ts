function trap(height: number[]): number {
  //sorted by descending order
  // let sortedArry = [...height].sort(function (a, b) {
  //   return b - a;
  // });

  let maxHeight = 0;
  let firstIterationEndIndex = 0;
  //iterate over the array to find maxHeight and it's index
  for (let i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      firstIterationEndIndex = i;
    }
  }
  // when we encounter maxHeight we break the loop and start calculating from the other side i.e. from the right most side

  //Where first iteration ends,i.e. the p2 pointer of first iteration
  let trappedWater = 0;

  //p1 is left pointer, p2 is right pointer
  let p1: number, p2: number;
  (p1 = 0), (p2 = 1);

  let currMaxHeight = getCurrentMaxHeight();

  function getCurrentMaxHeight() {
    return height[p1];
  }

  //first loop from left to right till firstIterationEndIndex
  while (p2 <= firstIterationEndIndex) {
    if (height[p2] >= height[p1]) {
      trappedWater += calculateTrappedWater(
        p1,
        p2,
        height,
        currMaxHeight,
        "first"
      );
      p1 = p2;
      currMaxHeight = getCurrentMaxHeight();
    }
    p2++;
  }
  //Second loop from right to left till firstIterationEndIndex
  //Since there can be multiple maxHeights
  p1 = p2 = height.length - 1;
  currMaxHeight = getCurrentMaxHeight();
  while (p1 >= firstIterationEndIndex) {
    if (height[p1] >= height[p2]) {
      trappedWater += calculateTrappedWater(
        p1,
        p2,
        height,
        currMaxHeight,
        "second"
      );
      p2 = p1;
      currMaxHeight = getCurrentMaxHeight();
    }
    p1--;
  }
  return trappedWater;
}

function calculateTrappedWater(
  p1: number,
  p2: number,
  height: number[],
  maxHeight: number,
  iteration: string
): number {
  let ans = 0;
  if (iteration == "first") {
    for (let i = p1; i < p2; i++) {
      ans += maxHeight - height[i];
    }
  }
  if (iteration == "second") {
    for (let i = p2; i > p1; i--) {
      ans += maxHeight - height[i];
    }
  }
  return ans;
}
let height = [0, 2, 0, 3, 1, 0, 1, 3, 2, 1];
console.log(trap(height));
