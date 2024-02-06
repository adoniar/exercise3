// 3-1. flattening(list)
let arrays = [[1, 2, 3], [4, 5], [6]];
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
      current = combine(current, array[i]);
    return current;
  }

// 3-2. loop(value, test, update, body)
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
  }

  loop(3, n => n > 0, n => n - 1, console.log);

// 3-3. everyLoop(array, test)
// 3-4. everySome(array, test)
function everyLoop(array, test) 
{
  return !array.every(element => !test(element));
}

function everySome(array, test) 
{
    return !array.some(element => !test(element));
} 

console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true