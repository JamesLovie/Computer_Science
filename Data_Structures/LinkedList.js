class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // add(data)
  add(data) {
    // If the list is empty, then add the data and it will be the HEAD of the LinkedList. HEAD -> Data(1) NEXT -> Null
    // If the list is not empty, then loop through to the end of the list, add the data at the end of the list. Adjust size.
    // create a new node.
    const node = new Node(data);

    // to store the current node.
    let current;

    // if the LinkedList is empty, add the data and then make it the head of the list HEAD -> Data(1) NEXT -> Null
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      // loop through to the end of the LinkedList
      while (current.next) {
        current = current.next;
      }

      // add the node to the end of the LinkedList.
      current.next = node;
    }
    // increment the size to include the new data item.
    this.size++;
  }
  // insertAt(data, location)
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return false;
    } else {
      // creates a new node.
      let node = new Node(data);
      let current, previous;

      current = this.head;

      // add the data to the first index.
      // if the index is 0 / at the beginning of the LinkedList, insert at the beginning, then update the HEAD to point to the new node.
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        current = this.head;
        let i = 0;

        // loop through the list to find the position to insert data into.
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        // add the data.
        node.next = current;
        previous.next = node;
      }
      // increment the size to include the new data item.
      this.size++;
    }
  }

  // removeFrom (location)
  removeFrom(index) {
    if (index > 0 && index > this.size) {
      return -1;
    } else {
      let current, previous
      let i = 0;
      current = this.head;
      previous = current;

      // remove the first data item.
      if (index == 0) {
        this.head = current.next;
      } else {
        // loop through the list to the position to remove the data item.
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }

        // remove the data item at the index.
        previous.next = current.next;
      }
      // decrement the size to account for removing the new data item.
      this.size--;
    }
  }

  // removeData(data)
  removeData(data) {
    let current = this.head;
    let previous = null;

    // loop through the LinkedList.
    while (current != null) {
      // compare the data passed into the function with the current element, if matched, then remove and return true.
      if (current.data == data) {
        if (prev = null) {
          this.head = current.next;
        } else {
          previous.next = current.next;
        }
        // decrement the size to account for removing the new data item.
        this.size--;
        return current.data;
      }
      return -1;
    }
  }

  // indexOf(data)
  indexOf(data) {
    let count = 0;
    let current = this.head;

    // loop through the LinkedList
    while (current != null) {
      // compare each data item in the list, with the data item passed into the function.
      if (current.data == data) {
        console.log(count);
        return count;
      }
      count++;
      current = current.next;
    }
    // If not found, return -1.
    console.log('Data not found..');
    return -1;
  }

  // isEmpty
  isEmpty() {
    return this.size == 0;
  }

  // size_Of_List
  sizeOfList() {
    console.log(this.size);
  }

  // printList
  printList() {
    let current = this.head;
    let string = 'HEAD ';
    while (current) {
      string += current.data + ' -> ';
      current = current.next;
    }
    string += 'NULL'
    return string;
  }
}

let linkedList = new LinkedList();
linkedList.add('James');
linkedList.add('Paul');
linkedList.insertAt('Tom', 2);
linkedList.add('Kelly');
console.log(linkedList.printList());
linkedList.removeData('Kelly');
console.log(linkedList.printList());

exports.Node = Node;
exports.LinkedList = LinkedList;