/* global console */
/*
Nos aportan más valor que los arrays.
Por ejemplo, sólo puede tener una copia de un elemento del set.
Los set son llamados Strong Sets, por ejemplo, si pusieramos a null
la variable key, el set seguiría teniendo una referencia al valor de key
 */

let set = new Set();
set.add('foo');
console.log(set.has('foo')); // true
console.log(set.entries()); // SetIterator { [ 'foo', 'foo' ] } --> implementa un iterator
set.forEach(v => console.log(v));

var myArray = ['value1', 'value2', 'value3'];
var mySet = new Set(myArray);
console.log(mySet.has('value1')); // true
console.log([...mySet]); // ['value1', 'value2', 'value3']


var myArray2 = ['value1', 'value1', 'value2', 'value2', 'value3'];
var mySet2 = new Set(myArray2);
console.log(mySet2); // ['value1', 'value2', 'value3'] nos elimina los elementos repetidos


var key = {};
let set2 = new Set();
set2.add(key);
console.log(set2); // Set { {} }
key = null;
console.log(set2); // Set { {} }
key = [...set2][0];
console.log(key); // {}

