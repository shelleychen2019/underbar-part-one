(function () {
  'use strict';

  window._ = {};

  // Returns whatever value is passed as the argument. This function doesn't
  // seem very useful, but remember it--if a function needs to provide an
  // iterator when the user does not pass one in, this will be handy.
  _.identity = function (val) {
    /* START SOLUTION */
    return val;
    /* END SOLUTION */
  };

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   *
   *
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.

  _.first = function (array, n) {
    /* START SOLUTION */
    // var array = arguments[0]; 
    //   var n = arguments.length > 1 ? arguments[1] : undefined; // If there's only the "array" argument ("n" is not provided), set "n" to 1
    //   // And now your code, which has nice checks just in case the values are invalid

  // it('Argument can not be passed as object', function() {
  //   expect(_.first({ plantName: 'caccicity' })).to.equal(undefined);
  // });

    if (typeof (array) === 'object' && !Array.isArray(array) && typeof (n) == 'number') {
      return [];
    }

  // it('Returns empty array if object is passed with a second argument', function() {
  //   expect(_.first({ plantName: 'caccicity' }, 4)).to.deep.equal([]);
  // });
    if (typeof (array) === 'object' && !Array.isArray(array)) {
      return undefined;
    }
  // it('Returns empty array if second argument is invalid', function() {
  //   expect(_.first('Any String', 'Elle')).to.deep.equal([]);
  //   expect(_.first([], 2)).to.deep.equal([]);
  // });
    //cannot have invalid type for n
    //cannot have empty array and n
    // n doesn't have to be a number because of forced type conversion

    if (array.length == 0 && n > 0 | !Array.isArray(array)| (Number(n)) == NaN| n < 0) {
      return [];
    }
    // if (array.length == 0 && n > 0 | !Array.isArray(array)| (Number(n)) == NaN| n < 0) {
    //   return [];
    // }

    if (n === undefined) {
      return array[0]
    }
    else {
    //slice includes first index, doesn't include second index
      return array.slice(0, n)
    }
    // Don't worry if slice is bigger than the array length. It will just work, and also always return a copy of the array instead of the array itself.

    /* END SOLUTION */
  };


  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function (array, n) {
    /* START SOLUTION */
 if (n === undefined){
   return array[array.length-1]
 } else if (n <= 0) {
   return []
 } else if (n > array.length){
   return array
 } else {
   return array.slice(array.length - n, array.length)
 }
    /* END SOLUTION */
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function (collection, iterator) {
    /* START SOLUTION */
    for (i = 1; i < collection.length; i++){
      iterator(collection[i]);
    }
    /* END SOLUTION */
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function (array, target) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function (collection, test) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Return all elements of an array that don't pass a truth test.
  _.reject = function (collection, test) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function (array, isSorted, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };


  // Return the results of applying an iterator to each element.
  _.map = function (collection, iterator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function (collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    /* START SOLUTION */

    /* END SOLUTION */
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as its second argument.
  //
  _.reduce = function (collection, iterator, accumulator) {
    /* START SOLUTION */

    /* END SOLUTION */
  };

}());