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

//https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/submissions/
export function to5_replaceSpace(s: string): string {
  return s.replace(/\s/g,'%20')
};