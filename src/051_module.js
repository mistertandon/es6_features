/**
 * Below code demonstrate how to create <module> in es6
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
export class TerrestrialAnimalClass{
    
    constructor(name, speed, rank){

        this.name = name;
        this.speed = speed;
        this.rank = rank;
    }
    
    getDescription(){
        
        return `${this.name} is able to run at ${this.speed}, having ${this.rank} rank among fastest animal.`.trim();
    }
}