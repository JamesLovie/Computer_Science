class Queue {
  stackNewestOnTop = [];
  stackOldestOnTop = [];

  enqueue(item) {
    this.stackNewestOnTop.push(item);
    console.log('An item has been added to the queue..');
  }

  peek() {
    if (this.stackOldestOnTop.length <= 0 && this.stackNewestOnTop.length <= 0) {
      console.log('The queue is empty..');
    } else {
      this.shiftStacks()
      console.log(this.stackOldestOnTop[this.stackOldestOnTop.length - 1])
    }
  }

  dequeue() {
    if (this.stackOldestOnTop.length <= 0 && this.stackNewestOnTop.length <= 0) {
      console.log('The queue is empty..');
    } else {
      this.shiftStacks()
      // Dequeue item from end of array.
      this.stackOldestOnTop.pop();
      console.log('An item has been removed from the queue..');
    }
  }

  isEmpty() {
    // return true if queue is empty.
    if (this.stackOldestOnTop.length <= 0 && this.stackNewestOnTop.length <= 0) {
      return true;
    } else {
      return false;
    }
  }

  printQueue() {
    let string = 'Queue -> ';
    let lengthOld = this.stackOldestOnTop.length;
    let lengthNew = this.stackNewestOnTop.length;

    if (this.stackOldestOnTop.length > 0) {
      for (let i = 0; i < lengthOld; i++) {
        string += this.stackOldestOnTop[(lengthOld - 1) - i].toString() + ' ';
      }
    }
    if (this.stackNewestOnTop.length > 0) {
      for (let i = 0; i < lengthNew; i++) {
        string += this.stackNewestOnTop[i].toString() + ' ';
      }
    }
    console.log(string);
  }

  shiftStacks() {
    if (this.stackOldestOnTop.length <= 0) {
      // move elements from stackNewest to stackOldest.
      const n = this.stackNewestOnTop.length;
      for (let i = 0; i < n; i++) {
        this.stackOldestOnTop[i] = this.stackNewestOnTop.pop()
      }
    }
  }
}

const queue = new Queue;

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.peek();
queue.dequeue(); // 1 gets delivered.
queue.dequeue(); // 2 gets delivered.
queue.peek(); // 3 is now next in line.
queue.enqueue(5);
queue.peek();
queue.enqueue(6);
queue.printQueue();
queue.enqueue(7);
queue.printQueue();
queue.dequeue(); // 3 gets delivered.
queue.peek(); // 4 is now next in line.
queue.printQueue();