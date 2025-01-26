/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
	let rows = Array.from({ length: numRows }, () => []);
	const ordemBase = [
		...Array.from({ length: numRows }, (_, i) => i), 
		...Array.from({ length: numRows - 2 }, (_, i) => numRows - 2 - i)
	  ];
	const ordemZigZag = Array.from({ length: s.length }, (_, i) => ordemBase[i % ordemBase.length]);

	for (let i = 0; i < s.length; i++) {
		let index = ordemZigZag[i];
		rows[index].push(s[i]);
	}
	return rows.flat().join("");
};