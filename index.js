//q1
// let ar = [1,2,3,4,6,9,85,695,5]
// let a = prompt("Enter a number?")
// a = Number.parseInt(a)
// ar.push(a)
// console.log(ar)

//q2
// let ar = [1,2,3,4,6,9,85,695,5]
// let a;
// do  {
  
//  a = prompt("Enter a number?")
// a = Number.parseInt(a)
// ar.push(a)
// }
//   while (a != 10)
// console.log(ar)

//q3
// let arry = [2,4,6,8,1,3,9,4,26,7]
// const ani = (x) =>{
//   return   x%2   == 0    
// }
// let ary  = arry.filter(ani)
// console.log(ary)

//q4
// let arry = [2,4,6,8,1,3,9,4,26,7]
// const ani = (x) =>{
//   return   x*x   
// }
// let ary  = arry.map(ani)
// console.log(ary)

//q5
let arry = [2,4,6,8,1,3,9,4,26,7]
const ani = (x,y) =>{
  return   x*y   
}
let ary  = arry.reduce(ani)
console.log(ary)