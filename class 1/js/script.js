// const a=15
// let b=20
// a=95 //error
// b=20
// (()=>console.log("Hamza"))()
// const simpleFunc=()=>console.log("Hamza");
// simpleFunc()
// const abc=()=>{
//     console.log("Hamza");
// }
// abc()

// const findArea = (width, height) => {
//     if (width === height) {
//         return width * width
//     }
//     return width * height
// }
// console.log('findArea()', findArea(10, 10));
// console.log('findArea()', findArea(10, 20));

const findOdd = (a, b) => {
    if (a < b) {
        let i = a
        while (i <= b) {
            if (i % 2 != 0) {
                console.log(i);
            }
            i++
        }
    }
    else {
        alert("please enter first value lower then second");
    }
}
const a = +prompt("Enter first value")
const b = +prompt("Enter second value")
// console.log(typeof a,typeof b);
findOdd(a, b)
