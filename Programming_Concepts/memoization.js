// a simple memoize function that takes in a function
// and returns a memoized function
const memoizeFunction = (fn) => {
  let cache = {}
  return (...args) => {
    let n = args[0] // just taking one argument here
    if (n in cache) {
      console.log('Fetching from cache')
      return cache[n]
    } else {
      console.log('Calculating result')
      let result = fn(n)
      cache[n] = result
      return result
    }
  }
}

function fib(n) {
  if (n <= 0) {
    return 0
  } else if (n === 1) {
    return 1
  } else {
    return fib(n - 1) + fib(n - 2)
  }
}

const memoFib = memoizeFunction(fib)

console.time('Fib')
console.log(memoFib(5))
console.timeEnd('Fib')

console.time('Fib')
console.log(memoFib(45))
console.timeEnd('Fib')

console.time('Fib')
console.log(memoFib(45))
console.timeEnd('Fib')