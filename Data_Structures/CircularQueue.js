class CircularQueue {
  // Circular queue avoids the wastage of space in a regular queue implementation using arrays.
  // When the user tries to increment the pointer and reaches the end of the queue, we start from the beginning of the queue.
  circularQueue = [];

  // Initially, set value of FRONT and REAR to -1.
  // FRONT track the first element of the queue.
  front = -1;

  // REAR track the last elements of the queue.
  rear = -1;

  constructor(queueSize) {
    this.queueSize = queueSize;
  }

  enqueue(data) {
    const currentSize = this.rear + 1;
    // 1. check if the queue is full.
    if (this.isFull()) {
      console.error('ERROR: Unable to enqueue. The circular queue is full.');
    } else {
      if (this.front === -1) {
        // for the first element, set value of FRONT to 0.
        this.front += 1;
        // circularly increase the REAR index by 1.
        this.rear += 1;
        // add the new element in the position pointed to by REAR.
        this.circularQueue[this.rear] = data;
      } else {
        if (currentSize >= this.queueSize) {
          // overflow.
          this.rear = (currentSize % this.queueSize);
          // add the new element in the position pointed to by REAR.
          this.circularQueue[this.rear] = data;
        } else {
          // circularly increase the REAR index by 1.
          this.rear += 1;
          // add the new element in the position pointed to by REAR.
          this.circularQueue[this.rear] = data;
        }
      }
    }
  }

  dequeue() {
    const currentSpot = this.front + 1;
    //1. check if the queue is empty
    if (this.isEmpty()) {
      console.error('ERROR: Unable to dequeue. The circular queue is empty.');
    } else {
      if (currentSpot === this.queueSize) {
        const dequeuedData = this.circularQueue[this.front];
        // replaces the new element in the position pointed to by FRONT by empty value.
        this.circularQueue.splice(this.front, 1, null);
        // for the last element, reset the values of FRONT and REAR to - 1.
        this.front = -1;
        this.rear = -1;
        // return the value pointed by FRONT.
        console.log('Data ' + dequeuedData + ' has been dequeued.');
        return dequeuedData;
      } else {
        const dequeuedData = this.circularQueue[this.front];
        // replaces the new element in the position pointed to by FRONT by empty value.
        this.circularQueue.splice(this.front, 1, null);
        // circularly increase the FRONT index by 1.
        this.front += 1;
        // return the value pointed by FRONT.
        console.log('Data ' + dequeuedData + ' has been dequeued.');
        return dequeuedData;
      }
    }
  }

  peek() {
    return this.circularQueue[this.front];
  }

  isFull() {
    // const sizeCheck = this.size - 1;
    // const lengthCheck = this.rear + 1;
    // if (this.front === 1 && this.rear === sizeCheck) {
    //   return true;
    // }
    // if (this.front === lengthCheck) {
    //   return true;
    // }
    // return false;
    const length = this.rear + 1;
    if (length % this.queueSize == this.front) {
      return true;
    } else {
      return false;
    }
  }

  isEmpty() {
    if (this.front === -1) {
      return true;
    } else {
      return false;
    }
  }
}

exports.CircularQueue = CircularQueue;

let circularQueue = new CircularQueue(5);
console.log(circularQueue);