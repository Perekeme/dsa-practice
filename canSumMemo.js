
// function canSum(target,numbers) {
//     if( target === 0) return true
//     if( target < 0) return false

//     for (let num of numbers){
//         remainder = target - num
//         if(canSum(remainder,numbers) === true){
//             return true
//         } 
//     }
//     return false
// }

// console.log(canSum(7,[5,3,4,7]))

function canSum(target,numbers,memo={}) {
    if (target in memo) return memo[target]
    if( target === 0) return true
    if( target < 0) return false

    for (let num of numbers){
        remainder = target - num
        if(canSum(remainder,numbers,memo) === true){
            memo[target] = true
            return true
        } 
    }
    memo[target] = false
    return false
    // return memo[target]
}

console.log(canSum(7,[5,3,4,7]))