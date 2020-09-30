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
    //cannot pass an object. no second argument
    //is type of undefined is undefined when n is undefined, 'undefined' is a string
    if (!(Array.isArray(array)) && n === undefined) {
      return undefined
    }
    //cannot pass an object with a second argument
    if (!Array.isArray(array) && typeof (n) === 'number') {
      return [];
    }
    //undefined is also not a number and will return wrong thing
    if (typeof (n) !== 'number' && !Array.isArray(array)) {
      return [];
    }
    // if array passed with no arguments
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
    if (n === undefined) {
      return array[array.length - 1]
    } else if (n <= 0) {
      return []
    } else if (n > array.length) {
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
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    }

    else {
      for (var key in collection) {
        iterator(collection[key], key, collection)
      }
    }
    /* END SOLUTION */
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function (array, target, start) {
    /* START SOLUTION */

    for (var i = start; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
    }

    for (var i = 0; i < array.length; i++) {
      if (array[i] === target) {
        return i;
      }
      else if (i == array.length - 1) {
        return -1;
      }
    }
    /* END SOLUTION */
  };

  _.findIndex = function (array, test) {
    /* START SOLUTION */

    for (var i = 0; i < array.length; i++) {
      if (test == undefined) {
        _.identity(array);
        return array
      }

      else if (test(array[i])) {
        return i;
      }
      else if (i == array.length - 1) {
        return -1;
      }
    }
    /* END SOLUTION */
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function (collection, test) {
    /* START SOLUTION */
    var arr = []
    for (var i = 0; i < collection.length; i++) {
      if (test(collection[i])) {
        arr.push(collection[i])
      }
    };
    return arr;
  }
  /* END SOLUTION */


  // Return all elements of an array that don't pass a truth test.
  _.reject = function (collection, test) {
    /* START SOLUTION */
    var array = []
    for (var i = 0; i < collection.length; i++) {
      if (!test(collection[i])) {
        array.push(collection[i])
      }
    };
    return array;
    /* END SOLUTION */
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function (array, isSorted, iterator) {
    /* START SOLUTION */
    //if (isSorted && iterator == undefined)
    var uniqArr = []
    if (iterator == undefined) {

      for (var i = 0; i < array.length; i++) {
        if (array[i] !== array[i + 1]) {
          uniqArr.push(array[i])
        }
      }
      return uniqArr;
    }
    //if (isSorted  == false && iterator == undefined)
    // else if (isSorted  == false && iterator == undefined){

    // }

    //if isSorted 
    else if (isSorted) {
      var itr = _.map(array, iterator) //true falses
      var arr2 = []
      var indexTrue = itr.indexOf(true)
      var indexFalse = itr.indexOf(false)
      if (indexTrue > indexFalse){
        arr2.push(array[indexFalse]) //check the parenthesis, and false is boolean not string
        arr2.push(array[indexTrue])
      }
      else {
        arr2.push(array[indexTrue]) //check the parenthesis, and false is boolean not string
        arr2.push(array[indexFalse])
      }
      
      return arr2;
      // for (var i = 0; i < itr.length; i++){
      //   if (itr[i]==false){
      //     result.push(sorted_arr[i])
      //   }
      // }
    }

    else {
      var itr = _.map(array, iterator)
      var arr2 = []
      arr2.push(array[itr.indexOf(false)])
      arr2.push(array[itr.indexOf(true)])
      return arr2;
    }
    // return _.filter(arr, iterator);
    // _.filter(array, _.indexOf(array, target) === index)
    /* END SOLUTION */
  };


  // Return the results of applying an iterator to each element.
  _.map = function (collection, iterator) {
    /* START SOLUTION */

    // var array2 = []
    // for (var i = 0; i< collection.length; i++){
    //   array2.push('element: '+ collection[i] + '| idx: ' + i)
    // }
    // return array2
    if (!Array.isArray(collection)) {
      var array = [];
      for (var key in collection) {
        array.push(iterator(collection[key]))
      }
      return array;
    }
    var array = []
    for (var i = 0; i < collection.length; i++) {
      var letter = collection[i];
      array.push(iterator(collection[i], i))
    }
    return array
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
    return _.map(collection, function (collection) {
      return collection[key];
    }
    )
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

    for (var i = 0; i < collection.length; i++) {
      if (accumulator == undefined) {
        accumulator = collection[i]
        // accumulator = iterator(accumulator, collection[i + 1])
        //this is redundant because of the logic of the else
      }
      else {
        accumulator = iterator(accumulator, collection[i])
      }
    }
    return accumulator
  };
  /* END SOLUTION */


}());

// function solution(N, A) {
//   // write your code in JavaScript (Node.js 8.9.4)
//    (arr = []).length = N ; 
//    var count = arr.fill(0)

//     for (var i = 0; i < A.length; i++){
//       if (A[i] < N){
//     count[A[i]-1] += 1
//      console.log(count)
//       }

//     else {
//         count = arr.fill(count.reduce(function(a,b)
//         {return Math.max(a,b);}
//         ))
//       }
//    }
//    return count
// }


//   console.log(solution(5, [3, 4, 4, 6, 1, 4, 4]))