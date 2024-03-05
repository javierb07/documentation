/*
  From Data Structures + Algorithms by Andrei Neagoie
  Hash table pros:
    * Fast lookups (Good collision resolution needed)
    * Fast inserts
    * Flexible keys
  Hash table cons:
    * Unordered
    * Slow key itearion
  Time complexities:
  Average:
      Access    Search    Insertion    Deletion    
      N/A       Θ(1)         Θ(1)        Θ(1)    
  Worst case (when there ara hash collisions and dynamic array resizing, but unlikely):
    Access    Search    Insertion    Deletion
      N/A       O(n)      O(n)        O(n)    
  Space complexity: O(n)
*/

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]); // Array is inefficient, a better implementation would use linked lists
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    if (!this.data.length) {
      return undefined;
    }
    let result = [];
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
      // if it's not an empty memory cell
      if (this.data[i] && this.data[i].length) {
        // but also loop through all the potential collisions
        if (this.data.length > 1) {
          for (let j = 0; j < this.data[i].length; j++) {
            result.push(this.data[i][j][0]);
          }
        } else {
          result.push(this.data[i][0]);
        }
      }
    }
    return result;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.set("apples", 9));
console.log(myHashTable.get("apples"));
console.log(myHashTable.keys());
