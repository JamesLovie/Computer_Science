class Stack {
    // A stack is a LIFO data structure.
    // A pointer called top is used to keep track of the top element in the stack.
    // When initializing the stack, we set its value to -1 so that we can check if the stack is empty by comparing TOP == -1.
    top = -1;
    // The Stack uses a javascript array for storing values.
    stack = [];
    constructor(maxStackSize) {
        // Sets the fixed size of the stack.
        this.maxStackSize = maxStackSize;
    }
    // Methods

    // Push
    push(value) {
        // Add an element to the top of a stack.
        // Before pushing, we check if the stack is already full.
        if (!this.isFull()) {
            this.stack.push(value);
            console.log('Pushed data ' + value + ' onto the stack.');
            // On pushing an element, we increase the value of TOP and place the new element in the position pointed to by TOP.
            this.top += 1;
        } else {
            console.error('Error: Stack is full: Unable to push data onto the stack.');
        };
    }

    // Pop
    pop() {
        // Remove an element from the top of a stack.
        // Before popping, we check if the stack is already empty.
        if (!this.isEmpty()) {
            const poppedValue = this.stack[this.top];
            this.stack.pop();
            console.log('Popped data ' + poppedValue + ' off of the stack.');
            // On popping an element, we return the element pointed to by TOP and reduce its value.
            this.top -= 1;
        } else {
            console.error('Error: Stack is empty: Unable to pop data from the stack.');
        };
    }
    // Peek
    // Get the value of the top element without removing it.
    peek() {
        if (!this.isEmpty()) {
            return this.stack[this.top];
        }
    }

    //isEmpty
    // Check if the stack is empty.
    isEmpty() {
        const currentLength = this.top + 1;
        if (currentLength < 1) {
            return true;
        } else {
            return false;
        };
    }

    //isFull
    // Check if the stack is full.
    isFull() {
        const currentLength = this.top + 1;
        if (currentLength < this.maxStackSize) {
            return false;
        } else {
            return true;
        };
    }

}

exports.Stack = Stack;

let stack = new Stack(5);
console.log(stack);