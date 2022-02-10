/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var newNum = [],len = nums1.length+nums2.length
    for (var i = 0; i < len; i++) {
        if(nums1[0]===undefined){
            newNum.push(nums2.shift())
        }else if(nums2[0]===undefined){
            newNum.push(nums1.shift())
        }else{
            if(nums1[0] < nums2[0]){
                newNum.push(nums1.shift())
            }else{
                newNum.push(nums2.shift())
            }
        }
    }

    let index = 0;
    midLen = len/2;
    if(len%2==1){
        index = Math.floor(midLen)
        return newNum[index]
    }else{
        index = Math.floor(midLen)-1
         return ((newNum[index]+newNum[index+1])/2)
    }

};
// @lc code=end

findMedianSortedArrays([0,0],[0,0])