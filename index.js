function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key], key, collection);
        }
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    let result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i, collection));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key, collection));
        }
      }
    }
  
    return result;
  }
  function myReduce(collection, callback, acc) {
    let startIndex = 0;
  
    if (acc === undefined) {
      if (Array.isArray(collection)) {
        acc = collection[0];
        startIndex = 1;
      } else if (typeof collection === 'object') {
        const keys = Object.keys(collection);
        acc = collection[keys[0]];
        startIndex = 1;
      }
    }
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
      }
    }
  
    return acc;
  }
function myFind(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        return arr[i];
      }
    }
    return undefined;
  }
function myFilter(collection, callback) {
    const result = [];
  
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object' && collection !== null) {
      for (let key in collection) {
        if (collection.hasOwnProperty(key) && callback(collection[key])) {
          result.push(collection[key]);
        }
      }
    }
  
    return result;
  }
function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
      return Object.keys(collection).length;
    }
    return 0;
  }
function myFirst(arr, n) {
    if (!Array.isArray(arr)) {
      throw new Error("First argument must be an array");
    }
    if (n === undefined) {
      return arr[0];
    } else {
      return arr.slice(0, n);
    }
  }
function myLast(arr, n) {
    if (!Array.isArray(arr)) {
      throw new Error("First argument must be an array");
    }
    if (n === undefined) {
      return arr[arr.length - 1];
    } else {
      return arr.slice(-n);
    }
  }
function myKeys(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Argument must be an object");
    }
    return Object.keys(obj);
  }
function myValues(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error("Argument must be an object");
    }
    return Object.values(obj);
  }
  
                