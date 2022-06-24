function findFactorialRecursive(number) {
  if (number === 1) return 1;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let result = number;

  for (let current = number - 1; current > 0; current--) {
    result = result * current;
  }

  return result;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
