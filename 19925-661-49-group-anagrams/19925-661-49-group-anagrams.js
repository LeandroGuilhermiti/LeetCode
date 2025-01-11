/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let out = {};
    
    for (let str of strs) {
        // Ordena os caracteres da string
        let sortedStr = str.split('').sort().join('');
        
        // Agrupa as palavras com a mesma versão ordenada
        if (out[sortedStr]) {
            out[sortedStr].push(str);
        } else {
            out[sortedStr] = [str];
        }
    }

    // Transforma o objeto em um array de grupos
    return Object.values(out);
};