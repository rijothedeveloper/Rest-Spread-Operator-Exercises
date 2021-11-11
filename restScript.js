// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter( (num) => num % 2 === 0);

const findMin = (...nums) => nums.reduce( (min, next) => min<next ? min : next);