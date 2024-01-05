// DataTypes : Primitive || Referance (Non-Primitive)

// Primitive
let name = "Faraz"        //symbol
console.log(name , typeof name)

let age = 22              //int
console.log(age , typeof age)

let score = 2n            //BigInt
console.log(score , typeof score)


let isAlive = true          //boolean
console.log(isAlive , typeof isAlive)

let futurePlans;          //undefined
console.log(futurePlans , typeof futurePlans)

let newYearPlans = null;  //null
console.log(newYearPlans , typeof newYearPlans)  //type --> object

let id = Symbol("32")     //symbol
console.log(id , typeof id)

let newId = Symbol("32")
console.log(newId)

console.log(id === newId)  //false  , creates unique symbol even when values are also same


// ============= NonPrimitive =================== 
// returns type object of all non-primitive data types

// Arrays
const grades = [32,33,43,34,53]
console.log(grades , typeof grades)  //type --> object

//objects
const person = {
    name: "faraz",
    age: 22,
    isStudent: true
}
console.log(person , typeof person)  //object

//functions   -- function(){}
let myFunction = function(){
    console.log("Hello World")
}
console.log(myFunction , typeof myFunction)  //function also call function object


