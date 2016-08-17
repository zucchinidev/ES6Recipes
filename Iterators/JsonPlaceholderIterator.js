/* global console */
(function() {
  'use strict';
  var root = 'http://jsonplaceholder.typicode.com';
  var MyIterator = function() {

  };

  var fetch = function(p) {
    return $.ajax({
      url: root + "/posts/" + p,
      dataType : 'json'
    });
  };

  MyIterator.prototype = {
    [Symbol.iterator]: function() {
      var post = 0;
      return {
        next: function() {
          post += 1;
          return {
            value: fetch(post),
            done: (post === 5)
          };
        }
      };
    }
  };

  var myIterator = new MyIterator();
  // Obtener los 5 primeros artículos de JsonPlaceholderIterator
  for (var a of myIterator) {
    a.then(function(result) {
      console.log(result);
    }).fail(function(data) {
      console.log(data);
    });
  }

})();