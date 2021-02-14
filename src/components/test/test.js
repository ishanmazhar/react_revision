var a = [1,2,3,4,5,6,7];
var b = a.slice(); // copy an array using slice()
var c = a.map(item => item); // copy an array using map()
var d = [...a] // copy an array using spread operator 

console.log('a = ' + a);
console.log('b = ' + b);
console.log('c = ' + c); 
console.log('d = ' + d); 
