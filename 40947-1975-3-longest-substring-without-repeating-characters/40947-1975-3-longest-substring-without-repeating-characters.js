/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let longest = 0;
	let set = new Set();

	let l = 0;
	let r = 0;

	while(r < s.length) {
		let char = s[r];

		if (!set.has(char)) {
			set.add(char);
			longest = Math.max(longest, set.size);
			r++;
		} else {
			set.delete(s[l]);
			l++;
		}
	}
	return longest
};