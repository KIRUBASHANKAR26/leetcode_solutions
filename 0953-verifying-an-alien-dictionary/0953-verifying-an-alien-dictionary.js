/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    for(let i=0;i<words.length - 1;i++){
        const a = words[i]
        const b = words[i+1]
        const max = Math.max(a.length,b.length)
        for(let j=0;j<max;j++){
            const comp1 = order.indexOf(a[j])
            const comp2 = order.indexOf(b[j])
            if(comp2<comp1){
               return false
            }
           
            if(comp1<comp2){
                 console.log(j,a[j],b[j],a,b) 
                j = max
               
            }
            
        }
    }
        return true
};