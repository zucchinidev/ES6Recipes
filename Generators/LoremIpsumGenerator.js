/* global console */
class LoremIpsumGenerator {
  constructor(text) {
    this._text = text;
  }

  *words() {
    const rExp = /\S+/g;
    let match;
    while (match = rExp.exec(this._text)) {
      yield match[0];
    }
  }
}

const txt = [
  'Lorem Ipsum es simplemente el texto de relleno de las imprentas',
  ' y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar ',
  'de las industrias desde el año 1500, cuando un impresor ',
  '(N. del T. persona que se dedica a la imprenta) desconocido ',
  'usó una galería de textos y los mezcló de tal manera que logró ',
  'hacer un libro de textos especimen. No sólo sobrevivió 500 años, ',
  'sino que tambien ingresó como texto de relleno en documentos electrónicos, ',
  'quedando esencialmente igual al original. Fue popularizado en los 60s con la ',
  'creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, ',
  'y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, ',
  'el cual incluye versiones de Lorem Ipsum.'
];
const lorem = new LoremIpsumGenerator(txt.join(''));
for (const word of lorem.words()) {
  console.log(word);
}
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
 imprentas
 y
 archivos
 de
 texto.
 Lorem
 Ipsum
 ha
 sido
 el
 texto
 de
 relleno
 estándar
 de
 las
 industrias
 desde
 el
 año
 1500,
 cuando
 ....
*/