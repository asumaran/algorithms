class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a node to the list
  append(data) {
    if (this.head === null) {
      this.head = new Node(data);
      return;
    }

    let current = this.head;

    while (current.next !== null) {
      current = current.next
    }

    current.next = new Node(data);
  }

  prepend(data) {
    let newHead = new Node(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  deleteWithData(data) {
    if (this.head === null) {
      return;
    }

    let current = this.head;

    while(current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  show() {
    let current = this.head;
    let message = [];

    while(current.next !== null) {
      if(current.isCycle === true) {
        message.push(`${current.data} -> \n\t ${current.next.data} -> ${current.next.next.data} -> ${current.next.next.next.data} -> ${current.next.next.next.next.data} -> ${current.next.next.next.next.next.data}...`);
        break;
      }

      message.push(`${current.data} -> `);
      current = current.next;
    }

    if (!current.isCycle) {
      message.push(current.data);
    }

    console.log(message.join(''));
  }

  getCount() {
    let count = 0;
    let current = this.head;
    while(current !== null) {
      count += 1;
      current = current.next;
    }
    return count;
  }

  // For technical purposes
  createCycle() {
    let r = 5; //Math.floor(Math.random() * this.getCount());
    let randomNode = null;
    let endNode = null;
    let current = this.head;

    while(current.next !== null) {
      r -= 1;
      if (!r) {
        randomNode = current;
      }
      current = current.next;
    }
    endNode = current;
    endNode.next = randomNode;
    endNode.isCycle = true;
  }
}


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

var list  = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.append('f');
list.append('g');

list.show();
console.log(detectCycle(list));
list.createCycle();
list.show();
console.log(detectCycle(list));
