/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
        let out = []
    let lastRow = []
    for (let i=1; i<=numRows; i++) {
        if (out == 0) {
            lastRow = [i];
            out.push(lastRow);
			continue;
        }
		if (i == 2) {
			lastRow = [i-1, i-1];
			out.push(lastRow);
			continue;
		}
		let row = Array(i).fill(undefined);
		row[0] = 1;
		row[row.length-1] = 1;

		let l = 0;
		let r = 1;
		while (row.includes(undefined)) {
			row[l+1] = lastRow[l] + lastRow[r];
			r++;
			l++;
		}
		lastRow = row;
		out.push(lastRow);
    }
	return out;
};