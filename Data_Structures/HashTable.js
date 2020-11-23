const murmurhash = require('murmurhash');
const random = require('random-name');

class HashTable {
  constructor() {
    this.table = new Array(100000);
    this.size = 0;
  }

  getValue(key) {
    // Generate an index from the key that is passed in.
    let index = murmurhash.v2(key);

    // Limit the length of the index to the array length.
    index %= this.table.length;
    if (index < 1) {
      this.table.length - 1
    }

    // If the index for the key passed in, matches a index in the HashTable, return the value.
    if (index > -1) {
      for (let i = index; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.table[i];
        }
      }
    }
    return 'Key not found..';
  }

  addValue(key, value) {
    // Generate an index from the key that is passed in.
    let index = murmurhash.v2(key);

    // Limit the length of the index to the array length.
    index %= this.table.length;
    if (index < 1) {
      this.table.length - 1
    }

    // Add the item to the hash table.
    if (this.table[index] == undefined) {
      this.table[index] = value;
      this.size++;
    } else {
      // If there is already an item in that key location, iterate through till an empty slot, aka undefined, is available.
      console.log('Unable to insert value: ' + value + ' at index: ' + index);
      console.log('Applying linear probing technique of collision-resolution');
      while (this.table[index] !== undefined) {
        index++;
      }
      console.log('Adding value: ' + value + ' at index: ' + index);
      this.table[index] = value;
      this.size++;
    }
  }

  updateValue(key, value) {
    // Opening addressing: 
    /*
    Delete operation is interesting.If we simply delete a key, then the search may fail.
    So slots of deleted keys are marked specially as“ deleted”.
    The insert can insert an item in a deleted slot, but the search doesn’ t stop at a deleted slot.
    */
    // Generate a hash value for the key that is passed in.
    let index = murmurhash.v2(key);
    // Limit the length of the index to the array length.
    index %= this.table.length;
    if (index < 1) {
      this.table.length - 1
    }

    // If the index for the key passed in, matches a index in the HashTable, update the value with the value that was passed in.
    if (this.table[index]) {
      this.table[index] = value;
    } else {
      return 'Key does not exist..';
    }
  }

  removeValue(key) {
    /*
    Delete operation is interesting.If we simply delete a key, then the search may fail.
    So slots of deleted keys are marked specially as“ deleted”.
    The insert can insert an item in a deleted slot, but the search doesn’ t stop at a deleted slot.
    */
    // Generate a hash value for the key that is passed in.
    let index = murmurhash.v2(key);
    // Limit the length of the index to the array length.
    index %= this.table.length;
    if (index < 1) {
      this.table.length - 1
    }

    // If the index for the key passed in, matches a index in the HashTable, remove the value at the matching key in the array.
    if (this.table[index]) {
      this.table[index] = "";
      this.size--;
    } else {
      return 'Key does not exist..';
    }
  }

  // returns the number of items stored in the HashTable.
  getSize() {
    return this.size;
  }

  // shows the distribution of keys across the entire HashTable.
  showDistribution() {
    for (const index in this.table) {
      if (this.table[index] !== undefined) {
        console.log(index, ' : ', this.table[index]);
      }
    }
  }
}

exports.HashTable = HashTable;

const table = new HashTable();

function seedTable() {
  for (let i = 0; i < 300; i++) {
    let key = Math.floor((Math.random() * 9999999) + 1).toString();
    let value = random();
    table.addValue(key, value);
  }
}

seedTable();
table.showDistribution();
console.log(table.getSize());