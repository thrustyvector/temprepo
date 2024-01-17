// console.log(__dirname)
// console.log(__filename)
// console.log(require)
// console.log(module)
// console.log(process)
// setInterval(()=>{
//     console.log("helloo world")
// },1000)

const names=require('./before-app')
const func1=require('./after-app')
const data=require('./anotherwaytomodule&require')
console.log(data)
console.log(names)
console.log(func1)

const rem=require('./mind_grenade')
//in order to receive things shared by using module.exports, we use the require keyword
//as a paramater to require we as the address where the module is located
//start the address with the ./ and ../ of two level up and .../ if three level up in single quotes ''
// func1(names.namee)
// func1(names.peter)
// func1("jimmy")