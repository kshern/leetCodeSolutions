/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let temp = {},
		length = 0,
		maxLength = 0,
		i = 0;
	while (i < s.length) {
		if (temp[s[i]]===undefined) {
			length++;
			temp[s[i]] = i;
			if (length > maxLength) {
				maxLength = length;
			}
			i++;
		} else {
			i = temp[s[i]]+1;
			length = 0;
			temp = {};
		}
	}
	return maxLength;
};
// @lc code=end


// @after-stub-for-debug-begin
lengthOfLongestSubstring('abcabcbb');
// @after-stub-for-debug-end