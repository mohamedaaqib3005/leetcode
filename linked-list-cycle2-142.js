// const returnStartCycleNode = (head) => {
//   // start both the pointers at the head
//   let slow = head;
//   let fast = head;
//   // let found = false;
//   // run a loop as long as fast pointer can traverse


//   while (fast && fast.next) {  // change the condition as long as slow and fast meet
//     // move slow pointer one step at a time
//     slow = slow.next;
//     // move fast pointer two steps at a time
//     fast = fast.next.next;
//     // let the distance from head to the point be x ,so s is equal to the no of nodes traversed by slow pointer
//     if (slow === fast) {
//       // found = true;
//       slow = head;
//       break;
//     }

//   }
//   // check if there is a cycle or not if there is no cycle it should proceed to the loop
//   if (!fast || !fast.next) return null;
//   while (slow !== fast) {
//     slow = slow.next;
//     // move fast pointer one step at a tine
//     fast = fast.next

//     if (slow === fast) return slow;
//   }
// }

const returnStartCycleNode = () => {
  // Edgecases
  // check if head and head.next pointer exist
  if (!head || !head.next) return null;//if there is no head and no head.next exit

  let slow = head.next;
  let fast = slow.next;

  // run a loop as long as the slow and fast pointers meet
  while (slow !== fast) {
    // if the fast cannot traverse there is no cycle
    if (!fast || !fast.next) {
      return null;
    }
    slow = slow.next;// move slow pointers one step
    fast = fast.next.next;// move fast pointer two steps
  }

  while (head !== slow) {
    head = head.next;//move head one step at a time
    slow = slow.next;// move slow from meeting point
  }
  return head;

}


const linkedListCycle = () => {
  // edgecases
  //  1.if there is only one node

  let slow = head.next;
  let fast = slow.next.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return null;

    slow = slow.next;
    fast = slow.next.next;
  }

  while (head !== slow) {
    head = head.next;
    slow = slow.next;
  }
  return null;
}












  ;
// Hint :
// index of x = x + x + y








// position = steps % cycle length (modulo)
// for ex:
//   A, B, C, D, E think runner is running in loop
// steps = 7
// position = steps % cyclelength
//          = 7 % 5 = 2
//          so it is at B
// when fast and slow meet both have same position
// k % cyclelength = 2k % cyclelength
// k = n * cycle_length; because if k % cyclelenght = 0 then it will be a proper loop

// At meeting:

// slow position = fast position

// That only happens when:

// extra distance = full loops

//Which means:

// k % cycle_length = 0

// since fast is 2 times slow
// fast travels extra distance
//