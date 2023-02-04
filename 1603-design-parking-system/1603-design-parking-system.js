/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
class ParkingSystem  {
    constructor(big,medium,small){
        this.big = big;
        this.medium = medium;
        this.small = small;
    }
    addCar(carType){
        if(carType === 1){
            this.big--;
            return this.big>=0
        }
        else if(carType === 2){
            this.medium--;
            return this.medium>=0
        }
        else if(carType === 3){
            this.small--;
            return this.small>=0
        }
    }
};

/** 
 * @param {number} carType
 * @return {boolean}
 */

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */