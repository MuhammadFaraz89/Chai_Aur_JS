// "32" => string  after conversion => number 
// "32abc" => string  after conversion => number but actually --> NAN
// true/false => Boolean  after conversion => 1/0 
// "32" => string  after conversion => number 
/*
let score = 32;

console.log(typeof score)
console.log(typeof (score))         //same as above

let score1 = "32"
console.log(typeof score1)

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)

score1 = "32abc" 
console.log(typeof score1)//string
valueInNumber = Number(score1)
console.log(typeof valueInNumber)    //number
console.log(valueInNumber)          //Not A Number - NAN

*/
/*
// =========================== OPERATIONS===================  
let str1 = "Faraz"
let str2 = " Niaz"
let str3 = str1 +str2

console.log(str3)

console.log("1" + 2)             //12
console.log(1 + "2")             //12
console.log("1" + "2")           //12
console.log("1" + 2 + 3)         //123
console.log(1 + 2 + "3")         //33

*/
/*

//unique operatons important according to questions only ,not applicable in real life projects
console.log(true)  //true
console.log(false)  //false
console.log(+true)  //1
console.log(-true)  //-1
console.log(+false)  //0
console.log(-false)  //-0
console.log(+"")  //0
console.log(-"")  //-0

*/

// ================ PreFix/PostFix Operators ============== 
let gameCounter = 100;
++gameCounter;
console.log(gameCounter)  //101
--gameCounter;
console.log(gameCounter)  //100




 