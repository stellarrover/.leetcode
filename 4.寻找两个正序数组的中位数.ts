/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const totalLength = nums1.length + nums2.length;

  let i = 0;
  let j = 0;

  const sortedArr: number[] = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      sortedArr.push(nums1[i]);
      i++;
    } else {
      sortedArr.push(nums2[j]);
      j++;
    }
  }

  while (i < nums1.length) {
    sortedArr.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    sortedArr.push(nums2[j]);
    j++;
  }

  return totalLength % 2 === 0
    ? (sortedArr[totalLength / 2] + sortedArr[totalLength / 2 - 1]) / 2
    : sortedArr[Math.floor(totalLength / 2)];
}
// @lc code=end
const nums1 = [1, 2];
const nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
