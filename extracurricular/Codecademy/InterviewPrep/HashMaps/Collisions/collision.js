const LinkedList = require("./LinkedList");
const Node = require("./Node");

class HashMap {
  constructor(size = 0) {
    this.hashmap = new Array(size);
  }

  /*
  The hash function calculates the hash code for a given key
  by summing the character codes of the key's characters.
  This determines the array index where the key-value pair
  will be stored in the hash map.
   */
  hash(key) {
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode += hashCode + key.charCodeAt(i);
    }
    return hashCode % this.hashmap.length;
  }

  /*
  The assign method takes a key and value as input and assigns the value to the element at the calculated arrayIndex in the hash map.
   */
  assign(key, value) {
    const arrayIndex = this.hash(key);
    this.hashmap[arrayIndex] = value;
  }

  /**
  The retrieve method takes a key as input and retrieves the value associated with that key from the hash map by using the hash function to calculate the array index and accessing the corresponding element in the hash map.
   */
  retrieve(key) {
    const arrayIndex = this.hash(key);
    return this.hashmap[arrayIndex];
  }
}

module.exports = HashMap;
/*
In the given example, the key-value pairs 'reed': 'marsh plant' and 'deer': 'forest animal' are assigned to the hash map.
 
However, a collision occurs because both key-value pairs are assigned to the same index, 0, in the hash map.

As a result, the value 'marsh plant' is overwritten by the value 'forest animal' at index 0.
When we retrieve the values using the retrieve method, we get 'forest animal' for both 'reed' and 'deer' keys, as they are stored at the same index due to the collision.
*/

const parkInventory = new HashMap(2);

// Assigning key-value pairs to the hash map
parkInventory.assign("reed", "marsh plant");
parkInventory.assign("deer", "forest animal");

// Retrieving values from the hash map
console.log(parkInventory.retrieve("reed"));
console.log(parkInventory.retrieve("deer"));
