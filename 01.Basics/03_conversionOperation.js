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
