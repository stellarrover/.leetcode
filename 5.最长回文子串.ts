/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
  if (s.length < 2) return s;
  if (s.length === 2) return s[0] === s[1] ? s : s[0];
  const resultArr: string[] = [];
  for (let i = 1; i < s.length; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    resultArr.push(s.slice(left + 1, right));
  }
  for (let i = 1; i < s.length; i++) {
    let left = i;
    let right = i + 1;

    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    resultArr.push(s.slice(left + 1, right));
  }
  return resultArr.sort((a, b) => b.length - a.length)[0];
}
// @lc code=end
