/*
  From Data Structures + Algorithms by Andrei Neagoie
  Arrays pros:
    * Fast lookups
    * Fast push/pop
    * Ordered
  Arrays cons:
    * Slow inserts 
    * Slow deletes
    * Fixed size (when using static arrays)
  Time complexities:
  Average and worst cases:
  	Access	Search	Insertion	Deletion	
  	 O(1)    O(n)	    O(n)    	O(n)	
  Space complexity: O(n)
*/

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  deleteAtIndex(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
  insert(item) {
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = item;
    this.length++;
  }
  eject() {
    const item = this.data[0];
    for (let i = 1; i < this.length; i++) {
      this.data[i - 1] = this.data[i];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}

const myArray = new MyArray();
myArray.push("hi");
myArray.push("you");
myArray.push("!");
console.log(myArray);
myArray.pop();
myArray.push("are");
myArray.push("nice");
myArray.deleteAtIndex(0);
myArray.shiftItems(0);
console.log(myArray);
myArray.insert("Hello");
myArray.insert("Goodbye");
console.log(myArray);
myArray.eject();
console.log(myArray);
