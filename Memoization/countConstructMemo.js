// function countConstruct(targetWord, wordArr) {
//     if(targetWord == "") return 1

//     let count = 0
//     for (let word of wordArr ){
//         if(targetWord.indexOf(word) == 0){
//             const remWord = targetWord.slice(word.length)
//             count += countConstruct(remWord, wordArr)
//         }
//     }
//     return count
// }

// console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd","ef"]))



function countConstruct(targetWord, wordArr,memo={}) {
    if ( targetWord in memo) return memo[targetWord]
    if(targetWord == "") return 1

    let count = 0
    for (let word of wordArr ){
        if(targetWord.indexOf(word) == 0){
            const remWord = targetWord.slice(word.length)
            count += countConstruct(remWord, wordArr,memo)
            memo[targetWord]= count
        }
    }
    return count
}

console.log(countConstruct("abcdef",["a","b","abc","cd","def","abcd","ef"]))
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"]))


// console.log(countConstruct("abcdefgfgfggfgfgfgfgfggggggggggggh",["ab","abc","cd","f","g","def","abcd"]))