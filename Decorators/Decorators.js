/*
Propuesta para ES2016
Es una expresión
Evalúa una función
Toma el target, name y el descriptor del decorador como argumentos
Opcionalmente retorna un descriptor de decorator para instalar en el objeto target.
 */

class Person {
  constructor({first, last}) {
    this.first = first;
    this.last = last;
  }

  @readonly // decorator, nadie podrá sobreescribir la propiedad name, ver definición
  name() {
    return `${this.first} ${this.last}`;
  }
}

/**
 * Decorador readonly
 * @params {{}} Target: objeto al que le queremos modificar su definición de propiedades.
 * @params {string}  Name: el nombre de la propiedad a modificar.
 * @params {{}} Descriptor: La descriptción de la propiedad del objeto, que a su vez es:
 * configurable: indica si puede ser modificada.
 * enumerable: se puede usar con un "for...of"
 * value: valor asociado a la propiedad.
 * writable: indica si la propiedad puede ser cambiada con una asignación.
 * get: indica si la propiedad es un getter.
 * set: indica si la propiedad es un setter.
 */

// Decorador readonly
const readonly = (target, name, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};