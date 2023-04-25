function searchMatrix(matrix: number[][], target: number): boolean {
  let ans = false;
  let startIndex = [0, 0];
  let endIndex = [matrix.length - 1, matrix[0].length - 1];
  while (true) {
    let middleIndex = [
      Math.ceil((endIndex[0] + startIndex[0]) / 2),
      Math.ceil((endIndex[1] + startIndex[1]) / 2),
    ];
    let value = matrix[middleIndex[0]][middleIndex[1]];
    if (endIndex[0] - startIndex[0] < 2) {
      for (let i = startIndex[0], j = startIndex[1]; i <= endIndex[0]; ) {
        if (matrix[i][j] == target) ans = true;
        if (j > matrix[0].length - 1) {
          i++;
          j = 0;
        } else {
          j++;
        }
      }
      break;
    }
    if (value > target) {
      endIndex = middleIndex;
    } else if (value < target) {
      startIndex = middleIndex;
    } else {
      ans = true;
      break;
    }
  }
  return ans;
}
