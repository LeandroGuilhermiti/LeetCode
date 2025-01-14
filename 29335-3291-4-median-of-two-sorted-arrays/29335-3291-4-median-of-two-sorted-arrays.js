/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	let merge = (nums1.concat(nums2)).sort((a,b) => a-b);
	if (merge.length%2 == 0) {
		let median = (merge[(merge.length/2)-1] + merge[(merge.length/2)]) / 2;
		return Number(median.toFixed(5));
	}
	else {
		let median = merge[Math.floor(merge.length/2)];
		return Number(median.toFixed(5));
	}
};