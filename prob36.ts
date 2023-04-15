interface Keys {
  [key: number]: number; // count of numbers
}

function isValidSudoku(board: string[][]): boolean {
  function isValidRow(row: string[]): boolean {
    let ans = true;
    let sudokuKeys = {} as Keys;

    for (let i = 0; i < 9; i++) {
      let value = row[i];
      if (value !== ".") {
        sudokuKeys[+value] ? sudokuKeys[+value]++ : (sudokuKeys[+value] = 1);
        ans = sudokuKeys[+value] <= 1;
      }
      if (!ans) break; //if ans is false then break out of for loop
    }
    return ans;
  }

  let rowAnswerArray = [];
  for (let i = 0; i < 9; i++) {
    rowAnswerArray.push(isValidRow(board[i]));
  }

  //In case of column, we treat each column as a row
  let columnAnswerArray = [];
  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    columnAnswerArray.push(isValidRow(column));
  }

  // In case of sub-boxes, we treat each sub-box as a row
  let subBoxAnswerArray = [];
  for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
      let subBox = [];
      for (let i = 3 * n; i < 3 * (n + 1); i++) {
        for (let j = 3 * m; j < 3 * (m + 1); j++) {
          subBox.push(board[i][j]);
        }
      }
      subBoxAnswerArray.push(isValidRow(subBox));
    }
  }

  return !(
    rowAnswerArray.includes(false) ||
    columnAnswerArray.includes(false) ||
    subBoxAnswerArray.includes(false)
  );
}
