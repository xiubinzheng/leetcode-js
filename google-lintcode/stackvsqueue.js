let stack = [];

for(let i=0;i<5;i++){
    stack.push(i);
}

let queue = [];

for(let i=0;i<5;i++){
    queue.push(i);
}

console.log('stack  '+stack);
console.log('stack.pop() '+stack.pop());
console.log('queue  '+queue);
console.log('queue.pop()  '+queue.shift());