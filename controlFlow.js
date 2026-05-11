// const name  = "matt"
// let age = 37
// var backPain = true


// const sum = (a,b) => a+b;

// function sum2(a,b){
//   return a + b
// }

// console.log(sum2(1,3))

// let person ={
//   name:"Russ",
//   age:"22",
//   sayHi: () => console.log(`${person.name} says hello for ${person.age} years straight.`)
// }

// person.sayHi()


// function sum (a,b) {
//   if(typeof a == 'number' && typeof b == 'number'  ){
//     return a + b
//   }else{
//     return "GOT MORE THAN NUMBERS"
//   }
// }

// let outputA = sum(2,3)
// let outputB = sum(11,13)
// let outputC = sum(20,335)
// let outputD = sum(4, 'dog')

// console.log(outputA)
// console.log(outputB)
// console.log(outputC)
// console.log(outputD)

// for(let i = 0; i < 5; i++){
//   console.log(i, 'upper scope')
//   for(let j = 0; j <5; j++){
//     console.log(j, 'inner scope')
//   }
// }

// const person =  {
//   name:'Matt',
//   age:71,
//   awesome: true,
//   sayHi: console.log('Hello')
// }

// person.sayHi

// const person2 = {
//   firstName:'Art',
//   lastName:'Sarah',
//   age:102,
//   awesome:false
// }

// function howOld({name = "Jack",age}){
//   console.log(`${name} is ${age} years old.`)
// }

// howOld(person)
// howOld(person2)

// let arr = ['Here','Nike','Adidas','Puma']
// // let arr = []

// // arr.forEach((item)=>console.log(item))
// let newArr = arr.filter(item => item != 'Here' ) // ['Nike','Adidas','Puma']
//   .map( (x,index) => `${x.toUpperCase()} ${index}` ) // [ 'NIKE', 'ADIDAS', 'PUMA' ]
//   .filter( (item) => item != 'PUMA') // [ 'NIKE', 'ADIDAS' ]

// console.log(newArr)

//                    4
// for(let i =0; i < arr.length; i++){
//   console.log(arr[i])
// }

// for(let item of arr){
//   console.log(item)
// }



let months = ["March", "Jan", "Feb", "Dec"];
let mon = months.sort().map(x => x.toLocaleUpperCase())
console.log(months);
console.log(mon)

// months.sort();
// months.map(x => x.toUpperCase())

// console.log(months.filter(item => item != "Jan").sort())