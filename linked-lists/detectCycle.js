function detectCycle(linkedList) {
  const head = linkedList.head;
  let fast = head.next.next;
  let slow = head;

  while(fast !== null && fast.next !== null && slow !== null) {
    if (fast.data === slow.data) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }

  return false;
}

module.exports = detectCycle;
