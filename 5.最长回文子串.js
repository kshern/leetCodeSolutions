/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let temp = {},
    length = 0,
    maxLength = 0,
    i = 0;
    while (i < s.length) {
        // if (temp[s[i]]===undefined) {
        //     length++;
        //     temp[s[i]] = i;
        //     if (length > maxLength) {
        //         maxLength = length;
        //     }
        //     i++;
        // } else {
        //     i = temp[s[i]]+1;
        //     length = 0;
        //     temp = {};
        // }
        
    }
    return maxLength;
};
// @lc code=end

