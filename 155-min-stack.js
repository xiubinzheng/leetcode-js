/*
 Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

    push(x) -- Push element x onto stack.
    pop() -- Removes the element on top of the stack.
    top() -- Get the top element.
    getMin() -- Retrieve the minimum element in the stack.

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.


*/


class MinStack {
    constructor() {
        this.min = Number.MAX_VALUE;
        this.stack = new Array();
    }

    push(x) {
        if (x <= this.min) {
            this.stack.push(this.min);
            this.min = x;
        }
        this.stack.push(x);
    }

    pop() {
        if (this.stack.pop() === this.min) this.min = this.stack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.min;
    }
}


let myminstack = new MinStack();
console.log(myminstack.getMin());
console.log(myminstack.min);