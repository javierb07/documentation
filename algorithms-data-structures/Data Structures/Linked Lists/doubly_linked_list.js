/*
  From Data Structures + Algorithms by Andrei Neagoie
  Linked lists pros:
    * Fast insertion
    * Fast deletion
    * Ordered
    * Flexible size
  Linked lists cons:
    * Slow lookup
    * More memory consuming (than arrays)
  Time complexities:
  Average and worst cases:
  	Access	Search	Insertion	Deletion	
     Θ(n)	 Θ(n)      Θ(1)	      Θ(1)		
  Space complexity: O(n)
*/

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
      prev: null,
    };
    const leader = this.traverseToIndexFromHead(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndexFromHead(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  traverseToIndexFromTail(index) {
    //Check parameters
    let counter = this.length - 1;
    let currentNode = this.tail;
    while (counter !== index) {
      currentNode = currentNode.prev;
      counter--;
    }
    return currentNode;
  }
  remove(index) {
    // Check Parameters
    let leader;
    if (index <= this.length / 2) {
      leader = this.traverseToIndexFromHead(index - 1);
    } else {
      leader = this.traverseToIndexFromTail(index - 1);
    }
    const unwantedNode = leader.next;
    const follower = unwantedNode.next;
    leader.next = follower;
    follower.prev = leader;
    this.length--;
    return this.printList();
  }
  reverse() {
    let temp = null;
    let current = this.head;
    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp != null) {
      this.head = temp.prev;
    }
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList.printList());
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
console.log(myLinkedList.traverseToIndexFromHead(3));
console.log(myLinkedList.traverseToIndexFromTail(3));
myLinkedList.remove(2);
console.log(myLinkedList.printList());
myLinkedList.reverse();
console.log(myLinkedList.printList());
