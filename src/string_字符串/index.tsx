//https://leetcode-cn.com/problems/length-of-last-word/submissions/
export function t58_lengthOfLastWord(s: string): number {
  let a: any[] = s.split(' ');
  let arr = a.reverse();
  while (arr.length > 0 && arr[0] === '') {
    arr.shift();
  }
  if (a[0] === undefined) return 0;
  return a[0].length;
}
