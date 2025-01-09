/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums.sort((a, b) => a - b)
    let closet = Infinity;

	for (let i=0; i < nums.length; i++) {
		if (i > 0 && nums[i] == nums[i-1]) continue;
		
		let l = i+1;
		let r = nums.length-1;
		while (l < r) {
			let sum = nums[i] + nums[l] + nums[r];

            // método abs calcula valor absoluto (distância em relação a zero)
			if (Math.abs(sum-target) < Math.abs(closet - target)) closet = sum;

			if (sum == target) return sum;

			else if (sum < target) l++;

			else r--;
		}
	}
    return closet;
};