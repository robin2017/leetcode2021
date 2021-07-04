//https://leetcode-cn.com/problems/two-sum/
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
