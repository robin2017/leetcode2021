//https://leetcode-cn.com/problems/two-sum/
// 技巧题：构造差值数组，看元素是否在差值数组中，且不是同一个位置
// 自己思路：利用arr.indexOf(value,start)
export function t1_twoSum(nums: number[], target: number): number[] {
  let arr = nums.map((item) => target - item);
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const last = arr.indexOf(nums[i], i + 1);
    if (last !== -1) return [i, last];
  }
  return [];
}


//https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
// 技巧题：左上角开始查找则是一颗发散且重叠的树，右上角开始查找则是一条曲线
export function to4_findNumberIn2DArray(matrix: number[][], target: number): boolean {
  const ii = matrix.length;
  if(ii===0) return false
  const jj = matrix[0].length;
  let i = 0;
  let j = jj- 1
 
  while(i<ii&&j>-1){
    if(matrix[i][j]===target){
      return true
    }
    if(matrix[i][j]>target){
      j--
    }else{
      i++
    }
  }
  return false
};