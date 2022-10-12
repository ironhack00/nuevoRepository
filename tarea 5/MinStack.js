function Node(value) {
  // Your code here:
  this.value = value;
  this.next = null;
  this.min = null;
}

function MinStack() {
  // Your code here:
  this.top = null;
}

MinStack.prototype.push = function (value) {
  const previousTop = this.top;
  this.top = new Node(value);
  this.top.next = previousTop;

  if (!previousTop) this.top.min = value;
  else if (value < previousTop.min) this.top.min = value;
  else this.top.min = previousTop.min;
};
MinStack.prototype.pop = function () {
  const popped = this.top.value;
  this.top = this.top.next;
  return popped;
};
MinStack.prototype.min = function () {
  // Complejidad temporal O(n)
  // let current = this.top;
  // let min = this.top.value;
  // while (current.next) {
  //   current = current.next;
  //   min <= current.value ? null : (min = current.value);
  // }
  // return min;
  // Complejidad temporal O(1)
  return this.top.min;
};
MinStack.prototype.peek = function () {
  return this.top.value;
};

const myStack = new MinStack();
console.log(myStack);
// MinStack { top: null }
myStack.push(4);
console.log(myStack);
myStack.push(7);
console.log(myStack);
// MinStack -> {top}
//     Node -> { value, next}
// MinStack.top -> nodes  newNode {vale, next}
// 1-Guardar nodes
// 2-Asigno newNode a this.top
// 3-Asigno nodes a this.top.next
myStack.pop();
console.log(myStack);

// Guardar mínimo en cada nodo!!!
//
// 8 -> 4
// 4 -> 4
// 5 -> 5
// 7 -> 6
// 6 -> 6

module.exports = {
  Node,
  MinStack,
};
