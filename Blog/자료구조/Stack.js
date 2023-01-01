class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let tmp = this.first;
      this.first = newNode;
      this.first.next = tmp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let tmp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return tmp.value;
  }

  print() {
    let current = this.first;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.print();
