/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
	let out = new Array(triangle.length+1).fill(0);

	for (let i = triangle.length-1; i >= 0; i--) {
		let row = triangle[i];
		for (let j=0; j < row.length; j++) {
			out[j] = row[j] + Math.min(out[j], out[j+1]);
		}
	}
	return out[0];
};