/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let inverse = '';
    
    for (let i = str.length - 1; i >= 0; i--) { 
        inverse += str[i]; 
    }
    
    if (str == inverse) {
        return true;
    }
    else {
        return false;
    }
};