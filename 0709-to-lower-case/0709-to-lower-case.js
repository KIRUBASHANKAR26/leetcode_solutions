/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    for(let i=0;i<s.length;i++){
        if(s[i].charCodeAt(s[i])<=90 && s[i].charCodeAt(s[i])>=65){
            s = s.replace(s[i],String.fromCharCode(s[i].charCodeAt(s[i]) + 32))
        }
    }
    return s
};