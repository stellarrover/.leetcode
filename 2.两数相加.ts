// /*
//  * @lc app=leetcode.cn id=2 lang=typescript
//  *
//  * [2] 两数相加
//  */

// // @lc code=start
// /**
//  * Definition for singly-linked list.
//  * class ListNode {
//  *     val: number
//  *     next: ListNode | null
//  *     constructor(val?: number, next?: ListNode | null) {
//  *         this.val = (val===undefined ? 0 : val)
//  *         this.next = (next===undefined ? null : next)
//  *     }
//  * }
//  */

// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// function addTwoNumbers(
//   l1: ListNode | null,
//   l2: ListNode | null
// ): ListNode | null {
//   function traverse(
//     l1?: ListNode | null,
//     l2?: ListNode | null,
//     carry: number = 0
//   ): ListNode | null {
//     if (l1 === null && l2 === null && carry === 0) {
//       return null;
//     }
//     const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
//     const node = new ListNode(parseInt(String(sum % 10)));
//     node.next = traverse(l1?.next, l2?.next, Math.floor(sum / 10));
//     return node;
//   }

//   return traverse(l1, l2);
// }
// // @lc code=end
