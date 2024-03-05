/*
  From Data Structures + Algorithms by Andrei Neagoie
  Queues pros:
    * Fast operation
    * Fast peek
    * Ordered
  Queues cons:
    * Slow lookup
  Time complexities:
  Average and worst cases:
  	Access	Search	Insertion	Deletion	
     Θ(n)	 Θ(n)      Θ(1)	      Θ(1)		
  Space complexity: O(n)
  Queues can be implemented using either arrays or linked lists, but using arrays is
  a VERY inefficient implementation
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return this;
  }
  isEmpty() {
    return this.length === 0;
  }
}

const myQueue = new Queue();
myQueue.peek();
myQueue.enqueue("Joy");
myQueue.enqueue("Matt");
myQueue.enqueue("Pavel");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();
