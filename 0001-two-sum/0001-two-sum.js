/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (2 <= nums.length && nums.length <= 10**4) {
        let soma = 0;
        let out = [];

        for (let i=0; i < (nums.length-1); i ++) {
            for (let j= i+1; j < nums.length; j++){
                if (nums[i] + nums[j] == target) {
                    out.push(i);
                    out.push(j);
                    return out;
                }
            }

        }
        return 0;
    }
    else {
        return 0
    }
};