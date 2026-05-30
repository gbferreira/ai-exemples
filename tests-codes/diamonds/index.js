

function diamonds(l, c, s) {
  const diamondSize = s * 2;
  const rowsLength = l * diamondSize;
  const colsLength = c * diamondSize;
  let matrix = Array.from({ length: rowsLength }, () => new Array(colsLength).fill(0));

  for (let pivi = 0; pivi <= rowsLength - 1; pivi += s) {
    for (let pivj = 0; pivj <= colsLength - 1; pivj += s) {

      const blockI = pivi / s;
      const blockJ = pivj / s;

      if ((blockI % 2 == 0 && blockJ % 2 == 0) || (blockI % 2 != 0 && blockJ % 2 != 0)) {
        console.log('PIVO:', blockI, blockJ, -1);
        for (let i = pivi, j = (pivj + s - 1); i < (pivi + s); i++, j--) {
          matrix[i][j] = -1;
          console.log(i, j, matrix[i][j]);
        }
      }

      if ((blockI % 2 != 0 && blockJ % 2 == 0) || (blockI % 2 == 0 && blockJ % 2 != 0)) {
        console.log('PIVO:', blockI, blockJ, 1);
        for (let i = pivi, j = pivj; i < pivi + s, j < pivj + s; i++, j++) {
          console.log(i, j);
          matrix[i][j] = 1;
        }
      }
    }
  }

  let res = '';
  for (let i = 0; i < rowsLength; i++) {
    for (let j = 0; j < colsLength; j++) {
      if (matrix[i][j] == 1) res += '\\';
      else if (matrix[i][j] == -1) res += '\/';
      else res += '.';
    }
    res += '\n';
  }
  console.log(res);
}

diamonds(3, 1, 2);
