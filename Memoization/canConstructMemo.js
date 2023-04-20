// function canCon(targetWord,  wordArr) {
//     if(targetWord === "") return true

//     for ( word of wordArr){
//         if( targetWord.indexOf(word) === 0 ){
//             const remWord = targetWord.slice(word.length)
//             const result = canCon(remWord,wordArr)
//             if ( result) return true
//         }
//     }
//     return false
// }

// console.log(canCon("abcdef",["ab","abc","cd","def","abcd"]))



function canCon(targetWord,  wordArr, memo={}) {
    if ( targetWord in memo) return memo[targetWord]
    if(targetWord === "") return true

    for ( word of wordArr){
        if( targetWord.indexOf(word) === 0 ){
            const remWord = targetWord.slice(word.length)
            const result = canCon(remWord,wordArr,memo)
            if ( result) {
                memo[targetWord] = true
                return true
            }

        }
    }
    memo[targetWord] = false
    return false
}

console.log(canCon("abcdefgggggggggggg",["ab","abc","cd","g","def","abcd"]))