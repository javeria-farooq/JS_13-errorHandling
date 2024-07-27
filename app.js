/*//without error handling:
let a = 5
let b = 10

console.log(`a + b = ${a + b}`)
console.log(`a + b = ${a + b}`)
console.log(`a + b = ${a + b}`)
console.log(`a + b = ${a + c}`) // throws error and stop execution from here
console.log(`a + b = ${a + b}`)
console.log(`a + b = ${a + b}`)*/

//error handling
let a = 5;
let b = 10;

console.log(`a = ${a}`)
console.log(`a+b = ${a+b}`)
console.log(`a+b = ${a+b}`)
try{
    console.log(`a+b = ${a+c}`)
}
catch(err) {
    console.log(`error = ${err}`)
    console.log(`error name : ${err.name}`)
    console.log(`error message : ${err.message}`)
    console.log(`error stack : ${err.stack}`)
} // continuing execution

console.log(`a+b = ${a+b}`)
console.log(`a+b = ${a+b}`)
console.log(`a+b = ${a+b}`)
console.log(`a+b = ${a+b}`)