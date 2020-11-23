const { LinkedList, Node } = require('./LinkedList');

const linkedList = new LinkedList;

// Assign Item Values:
linkedList.head = new Node(1);
second = new Node(2);
third = new Node(3);

linkedList.head.next = second;
second.next = third;

console.log(linkedList);
console.log(third);
