
"use strict"

let theString = 'Hello, my name is Brad and I love JavaScript';

// startsWith()
// endsWith()
// includes()

console.log(theString.startsWith('Hello'));
console.log(theString.endsWith('JavaScript'));
console.log(theString.includes('love'));

//Hex
console.log(0xFF); # 255
// Binary
console.log(0b101011); # 43
// Octal
console.log(0o543); # 355

console.log(Number.isFinite(NaN));
console.log(Number.isNaN('string'));
console.log(Number.isInteger(Infinity));