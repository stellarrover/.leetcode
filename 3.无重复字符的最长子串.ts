/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
  const map = new Map();
  let maxNum = 0,
    left = 0,
    right = 0;
  while (right < s.length) {
    left = map.has(s[right]) ? Math.max(map.get(s[right]) + 1, left) : left;
    map.set(s[right], right++);
    maxNum = Math.max(right - left, maxNum);
  }
  return maxNum;
}

// @lc code=end
const s = "ababcacdabcd";
console.log(lengthOfLongestSubstring(s));
