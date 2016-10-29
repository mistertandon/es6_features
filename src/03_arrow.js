const MONTHS = ['January', 'Feburary', 'March', 'April'];

console.log('=== Case A: How we can pass key and value ===');

MONTHS.forEach((value, index )=> {
            console.log('Array index : '+index+', value : '+ value);
        });

console.log('=== Case B: How we can pass only value ===');

MONTHS.forEach(value=> {
            console.log('value : '+ value);
        });

console.log('=== Case C: when no value is available to pass ===');

MONTHS.forEach(()=> {
            console.log('General string is displaying.');
        });        
