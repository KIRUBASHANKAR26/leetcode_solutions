/**
 * @param {string} s
 * @return {boolean}
 */
// var repeatedSubstringPattern = function(s) {
//     if(s.length <= 1){
//         return false
//     }
//      const map = new Map()
//     for(let i=0;i<s.length;i++){
//         if(map.get(s[i])){
//            map.set(s[i], map.get(s[i]) + 1)
//         }else{
//             map.set(s[i],1)
//         }
//     }
//     const iterator1 = map.values();
//     const arr = []
//     while(iterator1){
//         arr.push(iterator1.next().value)
//     }
//     return arr.every(i => arr[0]===i)
// };

var repeatedSubstringPattern = function(s) {
    let str = s + s;
    let newStr = str.substring(1, str.length - 1);
    console.log(newStr)
    if(newStr.includes(s)) {
        return true;
    }else {
        return false;
    }
};