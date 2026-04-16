const returnStartCycleNode = (head) => {
  // start both the pointers at the head
  let slow = head;
  let fast = head;
  // let found = false;
  // run a loop as long as fast pointer can traverse


  while (fast && fast.next) {
    // move slow pointer one step at a time
    slow = slow.next;
    // move fast pointer two steps at a time
    fast = fast.next.next;
    // let the distance from head to the point be x ,so s is equal to the no of nodes traversed by slow pointer
    if (slow === fast) {
      // found = true;
      slow = head;
      break;
    }

  }
  // check if there is a cycle or not if there is no cycle it should proceed to the loop
  if (!fast || !fast.next) return null;
  while (slow !== fast) {
    slow = slow.next;
    // move fast pointer one step at a tine
    fast = fast.next

    if (slow === fast) return slow;
  }
  return false;
};









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