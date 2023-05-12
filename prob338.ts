function countBits(n: number): number[] {
  let ans: number[] = [];
  for (let i = 0; i < n + 1; i++) {
    ans.push(hammingWeight(i, 0));
  }
  return ans;
}
function hammingWeight(n: number, i: number): number {
  if (!n) return i;
  if ((n & 1) > 0) return hammingWeight(n >>> 1, i + 1);
  return hammingWeight(n >>> 1, i);
}
