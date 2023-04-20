
// function allCon(targetWord, wordArr) {
//     if(targetWord === "")return [[]]

//     const result = []
//     for(let word of wordArr){
//         if(targetWord.indexOf(word)== 0){
//             const remWord = targetWord.slice(word.length)
//             const remWordWays = allCon(remWord, wordArr)
//             const targetWays = remWordWays.map(way => [word,...way]) 

//             result.push(...targetWays)
//         }
//     }
//     return result

// }

// console.log(allCon("enterapotentpot",["a","p","ent","enter","ot","o","t"]))



function allCon(targetWord, wordArr,memo={}) {
    if(targetWord in memo) return memo[targetWord]
    if(targetWord === "")return [[]]

    const result = []
    for(let word of wordArr){
        if(targetWord.indexOf(word)== 0){
            const remWord = targetWord.slice(word.length)
            const remWordWays = allCon(remWord, wordArr,memo)
            const targetWays = remWordWays.map(way => [word,...way]) 
            result.push(...targetWays)
        }
    }
    memo[targetWord]=result
    return result

}

console.log(allCon("enterapotentpot",["a","p","ent","enter","ot","o","t"]))