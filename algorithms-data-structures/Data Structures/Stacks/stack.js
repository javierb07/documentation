/*
  From Data Structures + Algorithms by Andrei Neagoie
  Stacks pros:
    * Fast operation
    * Fast peek
    * Ordered
  Stacks cons:
    * Slow lookup
  Time complexities:
  Average and worst cases:
  	Access	Search	Insertion	Deletion	
     Θ(n)	 Θ(n)      Θ(1)	      Θ(1)		
  Space complexity: O(n)
  Stacks can be implemented using either arrays or linked lists
*/

// Array implementation
class StackWithArray {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
    return this;
  }
}

const myStack = new StackWithArray();
myStack.peek();
myStack.push("google");
myStack.push("udemy");
myStack.push("discord");
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();

// Linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class StackWithLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myStackWithList = new StackWithLinkedList();
myStackWithList.peek();
myStackWithList.push("google");
myStackWithList.push("udemy");
myStackWithList.push("discord");
console.log(myStackWithList.peek());
console.log(myStackWithList.isEmpty());
myStackWithList.pop();
myStackWithList.pop();
myStackWithList.pop();
console.log(myStackWithList.isEmpty());
