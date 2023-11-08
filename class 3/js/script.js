const a = [1, 5, 9, 56, 89, 100, 120, 20, 50]
const b = a.map(obj => {
    return {
        name: "hamza",
        age: obj + 50
    }
})
// console.log(a[5]);
// console.log(a.indexOf(9));
// console.log(a.includes(91));
// console.log(a.push(123));
// console.log(a.pop());
// console.log("a", a);
// console.log(a.shift()); // remove first index
// console.log("a", a);
// console.log(a.unshift(12)); // remove last index
// console.log("a", a.length);
// console.log("a", a);
// console.log("a", a.slice(2,5));
// console.log("a", a.splice(1,6,12,56,90,90,90,90));
// console.log("a", a.map(obj=>obj+50));
// console.log("a", a.map(obj=>{
//     return {
//         name:"hamza",
//         age:obj+50
//     }
// }));
// console.log("b", b)
// console.log("b", b.find(obj=>{
//     if(obj.age>100){
//         return obj
//     }
//     else{
//         return null
//     }
// }));
// console.log("b", b.filter(obj=>{
//     if(obj.age>100){
//         return obj
//     }
//     else{
//         return null
//     }
// }));
// console.log("a", a);
const findOdd = (a, b) => {
    if (a < b) {
        const oddArray = []
        for (let i = a; i < b; i++) {
            if (i % 2 !== 0) {
                oddArray.push(i)
            }
        }
        return oddArray
    } else {
        alert("Please provide a less then b")
    }
}
const oddNumber = findOdd(0, 1000)
// console.log("oddNumber", );
const findGreaterValue = (arrayVal,limit) => {
    return arrayVal.filter(obj => {
        if (obj > limit)
            return obj
        return null
    })
}
console.log("findGreaterValue(oddNumber)",findGreaterValue(oddNumber,200));