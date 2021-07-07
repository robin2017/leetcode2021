/**
 * Definition for a binary tree node.*/
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// https://leetcode-cn.com/problems/zhong-jian-er-cha-shu-lcof/
// 基础题
function to7_buildTree(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  return null
}
