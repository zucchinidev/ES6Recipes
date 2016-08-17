/* global console */
// Ejercicio: un objeto que itere sobre las palabras de un string de longitud variable. Hay que recorrer todas las
// palabras de ese string y almacenarlas en un array

class LoremIpsum {
  constructor(text) {
    this._text = text;
  }

  [Symbol.iterator]() {
    const re = /\S+/g;
    const text = this._text;
    return {
      next() {
        const match = re.exec(text);
        if (match) {
          return {
            value: match[0],
            done: false
          };
        }
        return  {
          value: undefined,
          done: true
        };
      }
    };
  }
}
let txt = 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.';

const lorem = new LoremIpsum(txt);
// lorem debe ser iterable porque implementa la interfaz Symbol.iterator
// console.log(lorem);

// for of permite recorrer iterables sin tener que hacer next()
for (let word of lorem) {
  console.log(word);
  /*
   Lorem
   Ipsum
   es
   simplemente
   el
   texto
   de
   relleno
   de
   las
   ...
   ...
   */
}

// OJO: algo iterable funciona con el operador de propagación, por lo tanto podemos
// popular un array con todos los strings de la siguiente forma
console.log([...lorem]); //[ Lorem, Ipsum, es, simplemente, el, texto, de, relleno, de, las ... ]

// OJO
console.log(...lorem);
 /*
 Al hacer un console log de lorem con el spread operator populamos todas las palabras como argumentos de
 la función console!!!!!
 Lorem
 Ipsum
 es
 simplemente
 el
 texto
 de
 relleno
 de
 las
 ...
 ...
 */

