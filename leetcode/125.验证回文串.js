/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 *
 * https://leetcode-cn.com/problems/valid-palindrome/description/
 *
 * algorithms
 * Easy (38.05%)
 * Total Accepted:    26K
 * Total Submissions: 67.9K
 * Testcase Example:  '"A man, a plan, a canal: Panama"'
 *
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "race a car"
 * 输出: false
 * 
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (!s.length) return true;
  let str = s.toLocaleLowerCase();
  let [left, right] = [0, str.length - 1];
  let [lChar, rChar] = [ str[left], str[right]];
  let reg = /[a-zA-Z0-9]/;
  while (left < right) {
    while (left < right && !reg.test(lChar)) {
      lChar = str[++left];
    }
    while (left < right && !reg.test(rChar)) {
      rChar = str[--right];
    }
    if (left < right && lChar !== rChar) {
      return false;
    }
    lChar = str[++left];
    rChar = str[--right];
  }
  return true;
};

console.log(isPalindrome("race a car"));
