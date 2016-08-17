/* global console */
/*
No es más que un tipo de datos cuyos valores son únicos e inmutables
Dichos valores pueden ser utilizados como identificadores de las propiedades de los objetos
Como parámetro se le pasa una pequeña descripción, que no tiene nada que ver con que los valores
son únicos

Cuando utilamos conceptos abstractos que deben disponer de una descripción o nombre
podemos utilizar símbolos, y por lo tanto cada uno de estos conceptos será único en nuestra
aplicación.

No tiene mucho sentido este ejemplo, al final de lo que se trata es de crear una unidad
de información única e inmutable
 */

let COLOR_RED = Symbol('RED');
let COLOR_GREEN = Symbol('GREEN');
let COLOR_ORANGE = Symbol('ORANGE');
let COLOR_YELLOW = Symbol('YELLOW');
let COLOR_BLUE = Symbol('BLUE');
let SKY_BLUE = Symbol('BLUE');

// COLOR_BLUE2 !== SKY_BLUE2

/*
Otro uso puede ser para valores de propiedades de los objetos
 */

var myObj = {};
var mySym = Symbol('foo');
var otherSym = Symbol('bar');
myObj['foo'] = 'bar';
myObj[mySym] = 'baz';
myObj[otherSym] = 'bing';
console.log(myObj.foo === 'bar'); // true
console.log(myObj[mySym] === 'baz'); // true
console.log(myObj[otherSym] === 'bing'); // true
// Los símbolos no son enumerables pero si son accesibles
// Si no queremos que existan problemas con nombres de propiedades que se crean de forma dinámica
// podemos utilizar un símbolo
console.log(Object.keys(myObj)); // [ 'foo' ]
console.log(Object.getOwnPropertySymbols(myObj)); // [ Symbol(foo), Symbol(bar) ]
console.log(Object.getOwnPropertySymbols(myObj)[0] === mySym); // true
/*
 Mixins are object fragments (sets of methods) that you can compose to augment the functionality of
  an object or a prototype. If their methods have symbols as keys, they can’t clash
  with other methods (of other mixins or of the object that they are added to), anymore.

 Public methods are seen by clients of the object a mixin is added to. For usability’s sake,
  you probably want those methods to have string keys. Internal methods are only known to
  the mixin or only needed to communicate with it. They profit from having symbols as keys.
 */
