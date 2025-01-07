/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // Verifica se a string respeita as restrições
    if (s.length < 1 || s.length > 10**4) {
        return false;
    }

    //Pilha para armazenar colchetes abertos
    let stack = [];
    // Map para combinar colchetes de fechamento com os  colchetes abertos correspondentes
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            //Push dos colchetes abertos na pilha
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            // Verifica se no inicio tiver um fechamento retorna false, ou se no meio da string tiver primeiro um fechamento antes de um colchete aberto
            // Verifica se colchete de fechamento combina com o topo da pilha (stack.pop()),
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        } else {
            // char invalido
            return false;
        }
    }

    // Se a pilha estiver limpa deu certo
    return stack.length === 0;
};