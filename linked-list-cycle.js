// Given the head of a linked list,determine if the linked list has a cycle in it

// hashmap approach
const hasCycle = (head) => {
  // traverse through the linked list
  const hashmap = {};
  const current = head;
  let count = 0;
  while (current) {
    hashmap[current] = count + 1;
    if (hashmap[current] > 1) return true
    current = current.next;
  }
  return false
  // keep a count as values in hashmap hw times u are traversing through each element for eg: element:count
  // if the count is more than 1 then there is a cycle in the linkedlist

}

// Two pointers approach Floyd's cycle Detection
const hasCycle = (head) => {
  // if (!head) return false // reduntant
  let slow = head;
  let fast = head;
  while (fast && fast.next) { // run loop as long as fast can run two steps
    slow = slow.next;// move slow one value
    fast = fast.next.next;move fast two values;
    if (slow === fast) return true;
  }
  return false;
}

//Learnings:
// cannot use for loop in linked list because they are not iterable
// function should only true or false in this case not anything than that
//Avoid using return ternary in loops use it for producing values not control flows


