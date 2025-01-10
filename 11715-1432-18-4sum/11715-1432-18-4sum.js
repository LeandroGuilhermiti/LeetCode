/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b)
	let out = [];

	if (nums.length < 4 || nums.length > 200) return [];
	if (target < -(10**9) || target > 10**9) return [];

	for (let i=0; i < nums.length-3; i++) {
		for (let j= i+1; j < nums.length-2; j++) {
			let l = j+1;
			let r = nums.length-1;

			while(l<r) {
				let sum = nums[i] + nums[j] + nums[l] + nums[r];

				if (sum === target) {
					out.push([nums[i], nums[j], nums[l], nums[r]]);
					while(nums[l] === nums[l+1]) l++;
					while(nums[r] === nums[r-1]) r--;
					l++;
					r--;
				} else if (sum < target) {
					l++;
				} else {
					r--;
				}
			}
			while(nums[j] === nums[j+1]) j++;
		}
		while(nums[i] === nums[i+1]) i++;
	}
	return out
};