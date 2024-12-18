/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    while (k > 0) {
        let min = nums[0];
        let pos = 0;

        for (let i= 0; i < nums.length; i++) {
            if (nums[i] < min) {
                min = nums[i];
                pos = i;
            }
            if (nums[i] == min) {
                continue;
            }
        }
        let x = min * multiplier;
        nums[pos] = x;

        k--;
    }
    return nums;
    
};