const LinkedList = require('./circular_linked_list');

// Example usage
let list = new LinkedList();
list.pushBack(10);
list.pushBack(20);
list.pushFront(5);
console.log([...list]); // Output: 5 10 20

console.log('Popped from front:', list.popFront());
console.log('Popped from back:', list.popBack());
console.log([...list]); // Output: 10
list.clear();

list.pushBack('apple');
list.pushBack('banana');
list.pushFront('cherry');
console.log([...list]); // Output: cherry apple banana

console.log('Popped from front:', list.popFront());
console.log('Popped from back:', list.popBack());
console.log([...list]);
