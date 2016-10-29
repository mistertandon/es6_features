/**
 * Below code demonstrate reference of <Arrow function>.
 * 
 * Note: To get transpiled script
 * Step 1: Reach up to application root folder
 * Step 2: Run command > npm run build
 */
class TerrestrialAnimal{
    
    constructor(animalsName = []){
        
        this.animalsName = animalsName;
    }
    
    getAnimalNameUsingArrowFunction(){

        console.log('Demonstrate this pseudo variable value while using arrow funtion');
        this.animalsName.forEach(animalName => {

            console.log(this);
        });
    }
    getAnimalNameUsingGeneralFunction(){
        
        console.log('Demonstrate this pseudo variable value while using general funtion');
        this.animalsName.forEach(function(animalName){

            console.log(this);
        });
    }    
}

let terrestrialAnimalObj = new TerrestrialAnimal(['Lion', 'Camel', 'Panther']);
terrestrialAnimalObj.getAnimalNameUsingArrowFunction();
terrestrialAnimalObj.getAnimalNameUsingGeneralFunction();