// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter( (num) => num % 2 === 0);

const findMin = (...nums) => nums.reduce( (min, next) => min<next ? min : next);

const mergeObjects = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

const doubleAndReturnArgs = (arr, ...nums) => {
    const doubledArr = nums.map( (num) => num * 2);
    return [...arr, ...doubledArr];
}






/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
    const randomIndex = Math.floor(Math.random() * (items.length-1));
    const arr1 = items.slice(0, randomIndex);
    const arr2 = items.slice(randomIndex);
    return [...arr1, ...arr2]
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
    const newObj={...obj};
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
    delete obj[key];
    return obj;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

function update(obj, key, val) {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}