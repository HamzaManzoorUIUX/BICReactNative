const GenerateRandomVal=(startVal,endVal)=>{
    return Math.round((Math.random()*(endVal-startVal))+startVal)
}
// let sumofAge=0
// console.log(sampleData.map(obj => {
//     const randomAge=GenerateRandomVal(25,65)
//     sumofAge+=randomAge
//     return {
//         ...obj,
//         age: randomAge,
//         Marks: GenerateRandomVal(50,100),
//     }
// }));

// const newSampleData=sampleData.map(obj => {
//     return {
//         ...obj,
//         age: GenerateRandomVal(25,65),
//     }
// })

console.log('newSampleData',sampleData.reduce((preVal,currentVal)=>{
    return preVal+currentVal.id
},0));