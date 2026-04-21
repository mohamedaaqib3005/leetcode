// //Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

// Input: head = [1, 2]
// Output: [2, 1]

import { SinglyLinkedList } from './utils/singly-linkedlist.js';

const reverseLinkedList = (head) => {
  let prev = null;
  let current = head;
  while (current) { // if current is not null
    // Save next node
    let nextTemp = current.next;
    // Reverse the link
    current.next = prev;
    // Move prev forward
    prev = current;
    // Move current forward
    current = nextTemp;
  }
  return prev; // Return new head
};