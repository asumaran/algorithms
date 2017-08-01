var LinkedList = require('./linkedList');
var detectCycle = require('./detectCycle');

var list  = new LinkedList();
list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');
list.append('f');
list.append('g');

list.show();
console.log(detectCycle(list));
list.createCycle();
list.show();
console.log(detectCycle(list));
