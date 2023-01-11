/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    // solution 1
    for(let i=0;i<s.length;i++){
        if(s[i].charCodeAt(s[i])<=90 && s[i].charCodeAt(s[i])>=65){
            s = s.replace(s[i],String.fromCharCode(s[i].charCodeAt(s[i]) + 32))
        }
    }
    return s
     // solution 2
    //return s.toLowerCase()
};