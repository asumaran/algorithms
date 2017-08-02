var Node = require('./node.js');

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

    if (current === null) {
      return;
    }

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

  getLast() {
    let current = this.head;

    if (current === null) {
      return;
    }

    while(current.next !== null) {
      current = current.next;
    }

    return current;
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

module.exports = LinkedList;
