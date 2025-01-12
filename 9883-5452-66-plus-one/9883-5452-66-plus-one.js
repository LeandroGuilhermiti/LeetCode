/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let str = digits.toString().split(',').join('');
    let sum = BigInt(str) + BigInt(1);
    let res = Array.from(String(sum), Number);
    return res;
};