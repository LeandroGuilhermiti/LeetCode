/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let swap;
    do {
        swap = false
        for (let i=0; i<nums.length-1; i++) {
            if (nums[i] - nums[i+1] < 0) continue;
            if (nums[i] - nums[i+1] > 0) {
                [nums[i], nums[i+1]] = [nums[i+1], nums[i]];
                swap = true;
            }
        }
    } while (swap);

    return nums;
};