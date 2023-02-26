let numbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sumPositive = numbers.reduce((sum, elem) => elem > 0 ? sum + elem : sum, 0);    
let quantityPositive = numbers.filter(elem => elem > 0).length;                     
console.log(sumPositive);
console.log(quantityPositive);

let numMin = Math.min.apply(null, numbers);      
let numMinIndex = numbers.indexOf(numMin);
console.log(numMin);
console.log(numMinIndex);

let numMax = Math.max.apply(null, numbers);      
let numMaxIndex = numbers.indexOf(numMax);
console.log(numMax);
console.log(numMaxIndex);

let quantityNegative = numbers.filter(elem => elem < 0).length;       
console.log(quantityNegative);

let quantPosOdd = numbers.filter(elem => elem > 0 && elem % 2 !== 0).length;        
console.log(quantPosOdd);

let quantPosEven = numbers.filter(elem => elem > 0 && elem % 2 == 0).length;       
console.log(quantPosEven);

let sumPosEven = numbers.reduce((sum, elem) => elem > 0 && elem % 2 == 0 ? sum + elem : sum, 0);   
console.log(sumPosEven);

let sumPosOdd = numbers.reduce((sum, elem) => elem > 0 && elem % 2 !== 0 ? sum + elem : sum, 0);  
console.log(sumPosOdd);

let multPositive = numbers.reduce((mult, elem) => elem > 0 ? mult * elem : mult);      
console.log(multPositive);

let numLarge = Math.max.apply(null, numbers);      
let numZero = numbers.map(elem => elem == numLarge ? elem : 0);
console.log(numLarge);
console.log(numZero);



