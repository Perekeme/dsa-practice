
const fibonacci = (n) => {
    if ( n <= 2){ return 1 }

    result = fibonacci(n-1) + fibonacci(n-2)
    return result
}

console.log(fibonacci(4))
console.log(fibonacci(6))



// Memoized version
const fibMzd = (n, memo={}) => {
    if (n in memo) return memo[n]
    if ( n <= 2){ return 1 }
    memo[n] = fibMzd(n-1,memo) + fibMzd(n-2,memo)
    return memo[n]
}


console.log(fibMzd(4))
console.log(fibMzd(6))