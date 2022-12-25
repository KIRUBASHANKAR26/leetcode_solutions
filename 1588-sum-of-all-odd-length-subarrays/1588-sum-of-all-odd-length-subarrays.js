/**
 * @param {number[]} arr
 * @return {number}
 */
const sumOftheArray = (arr,start,end) => {
    return arr.slice(start,end).reduce((a,b) => {
        return a + b
    },0)
}

var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    sum = sumOftheArray(arr,0,arr.length);
    let count = 2;
    while(count<arr.length){
        let currSum = sumOftheArray(arr,0,count+1);
        console.log("currSum1",currSum)
        sum+=currSum;
        for(let i=1;i<arr.length - count;i++){
            currSum-=arr[i-1]
            currSum+=arr[i+count]
            sum+=currSum;
        }
       count = count+2 
    }
    return sum
};