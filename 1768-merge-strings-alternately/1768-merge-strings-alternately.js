/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const wordSplit = word1.split('')
    const wordSplit2 = word2.split('')
    let result = []
    for(let i=0;i<wordSplit.length;i++){
        result.push(wordSplit[i])
        result.push(wordSplit2[i])
    }
    const rem = wordSplit2.slice(wordSplit.length,wordSplit2.length).join("")
    console.log(rem)
    return result.join('') + rem
};