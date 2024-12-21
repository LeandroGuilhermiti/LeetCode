/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const lista = new ListNode();
    let atual = lista;
    let sobra = 0;
    
    while (l1 || l2 || sobra) {
        let soma = sobra;
        
        if (l1) {
            soma += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            soma += l2.val;
            l2 = l2.next;
        }
        sobra = Math.floor(soma/10);
        atual.next = new ListNode(soma % 10);
        atual = atual.next;
        
    }
    return lista.next;
    
};