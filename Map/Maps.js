/* global console */
/*
Funciona prácticamente igual que un set pero mediante clave/valor
Mediante un set añadimos valores
 */

let course = new Map();
course.set('title', 'Aprendiendo ECMAScript 2015');
console.log(course.get('title')); // Aprendiendo ECMAScript 2015

let map = new Map();
let key1 = {};
let key2 = {};
map.set(key1, 5);
map.set(key2, 42);

console.log(map.get(key1)); // 5
console.log(map.get(key2)); // 42

console.log(...course); // [ 'title', 'Aprendiendo ECMAScript 2015' ] por lo tanto implementa iterator
