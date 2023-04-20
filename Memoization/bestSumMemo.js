
// function bestSum(target, numbers) {
//     if(target === 0) return []
//     if (target < 0) return null

//     let shortestCombination = null

//     for ( let num of numbers){
//         const remainder= target - num
//         const remainingArr = bestSum(remainder, numbers)
//         if( remainingArr !== null){
//             const combination = [...remainingArr, num]
//             if( shortestCombination=== null || shortestCombination.length > combination.length){
//                 shortestCombination = combination
//             }
//     }}
//     return shortestCombination 
// }

// console.log(bestSum(70,[14,7]))
// console.log(bestSum(7,[5,3,4]))


function bestSum(target, numbers, memo={}) {
    if (target in memo) return memo[target]
    if(target === 0) return []
    if (target < 0) return null

    let shortestCombination = null

    for ( let num of numbers){
        const remainder= target - num
        const remainingArr = bestSum(remainder, numbers, memo)
        if( remainingArr !== null){
            const combination = [...remainingArr, num]
            if( shortestCombination=== null || shortestCombination.length > combination.length){
                shortestCombination = combination
            }
    }}
    memo[target]= shortestCombination 
    return shortestCombination 
}

console.log(bestSum(100,[1,2,5,7,25]))
// console.log(bestSum(7,[5,3,4]))