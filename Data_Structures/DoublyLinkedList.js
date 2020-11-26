class Node {
  constructor(data, next, prev) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // prependData(data)
  prependData(data) {
    // Create a new node with the data passed into the function.
    // This new node will be the new head of the list.
    const newNode = new DoublyLinkedList(data, this.head);

    // If there is already a head, then will need to point it to the new node.
    if (this.head) {
      this.head.prev = newNode;
    }
    // Then mark the new node as the head of the list.
    this.head = newNode;

    // If there isn't a tail for the list, make the new node a tail.
    if (!this.tail) {
      this.tail = newNode;
    }
    // increment the size to include the new data item.
    this.size++;
    console.log('Prepended ' + data + ' to the list.');
  }

  // appendData(data)
  appendData(data) {
    // Create a new node with the data passed into the function.
    const newNode = new DoublyLinkedList(data);

    // If there is no head for the list, make this new node the head and make tail point to the node.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // increment the size to include the new data item.
      this.size++;
      console.log(data + ' has been appended to the list.');
    } else {
      // Attach the new node to the end of the list.
      this.tail.next = newNode;

      // Attach the current tail to the new node's previous reference.
      newNode.prev = this.tail;

      // Set the new node to be the tail of the list.
      this.tail = newNode;
      // increment the size to include the new data item.
      this.size++;
      console.log(data + ' has been appended to the list.');
    }
  }

  // removeData(data)
  removeData(data) {
    // Check if there is no head, and list is empty, therefore nothing to delete.
    if (!this.head) {
      console.log('List is empty.');
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    // Traverse through the list, compare values with the data value that was passed in.
    // If a match is found, delete the node.
    while (currentNode) {
      if (currentNode.data === data) {
        deletedNode = currentNode;

        // If the head of the list is going to be deleted.
        // Then set the head to the second node, which will become the new head of the list.
        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          // Set the new head's prev to null.
          if (this.head) {
            this.head.prev = null;
          }

          // If all nodes in the list have the same value that was passed in
          // then all the nodes will get deleted, and the tail will need to be updated.
          if (deletedNode === this.tail) {
            this.tail = null;
          }
          // If the tail of the list is going to be deleted.
        } else if (deletedNode === this.tail) {
          // Set the tail to the second last node, which will become the new tail of the list.
          this.tail = deletedNode.prev;
          this.tail.next = null;
          // If a node from the middle is going to be deleted.
        } else {
          // Set the node before the deleted node and the one after.
          const prevNode = deletedNode.prev;
          const nextNode = deletedNode.next;

          // Set the previous node to point to the node after the deleted one.
          prevNode.next = nextNode;
          // Set the next node to point to the node before the deleted one.
          nextNode.prev = prevNode;
        }
      }
      // Iterate through the list.
      currentNode = currentNode.next;
    }
    // increment the size to include the new data item.
    this.size--;
    console.log(data + ' Node has been removed from the list.');
  }

  // size_Of_List
  sizeOfList() {
    console.log(this.size);
  }

  // printList
  printList() {
    let current = this.head;
    let string = 'HEAD -> ';
    while (current) {
      string += current.data + ' -> ';
      current = current.next;
    }
    string += ' <- TAIL';
    return string;
  }
}

let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.appendData(1);
console.log(doublyLinkedList);