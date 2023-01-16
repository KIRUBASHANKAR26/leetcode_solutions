var freqAlphabets = function(s) {
    const CHAR_CODE_OFFSET = 96;
    let solStr = ''; 
    for (let i = 0; i < s.length; i++) {
        let currNumber = s[i];
        
        if (s[i + 2] === '#') {
            currNumber = s.slice(i, i + 2);
            i += 2;
        }
            
        solStr += String.fromCharCode(parseInt(currNumber) + CHAR_CODE_OFFSET);
    }
    
    return solStr;
};