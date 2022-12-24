/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */



var checkStraightLine = function(coordinates) {
    const xDiff = coordinates[1][0] - coordinates[0][0] 
     const yDiff = coordinates[1][1] - coordinates[0][1] 
     
     let currXdiff, currYdiff;
     for(i=2;i<coordinates.length;i++){
         currXdiff = coordinates[i][0] - coordinates[i - 1][0]
         currYdiff = coordinates[i][1] - coordinates[i - 1][1]
         if(yDiff*currXdiff !== currYdiff*xDiff){
             return false
         }
     }
    return true
};