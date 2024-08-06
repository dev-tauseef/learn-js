//Number Conversion

let score = 7
let stringscore = "7abc"
let nullscore = null
let varscore = undefined

//console.log(score)
//console.log(typeof score)
// console.log(typeof (score))

let stringConvert = String(score);
console.log(typeof stringConvert)

console.log(stringConvert)

let numberConvert = Number(stringscore)
console.log(typeof numberConvert)

console.log(numberConvert)


//"33" => 33
//"33abc" => NaN (Not a Number) [Type of NaN is number]
//true => 1; false => 0;


//Boolean Conversion

let isLoggedIn = 1
let booleanConvert = Boolean(isLoggedIn);
console.log(booleanConvert);
console.log(typeof booleanConvert)

// 1 => true 1; 0 => false;
// "" => false
// "abc" => true


//String Conversion

let aNumber = 123
let convertString = String(aNumber)
console.log(convertString)
console.log(typeof convertString)


// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); [Exponent]
// console.log(2/3);
// console.log(2%3);  [Remainder or Modulus]

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment