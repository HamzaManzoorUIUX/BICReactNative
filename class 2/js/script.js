// const isPrimeNumber = (a) => {
//     for (let i = 2; i <= a; i++) {
//         if (a === i) {
//             return true
//         }
//         if (a % i === 0) {
//             return false
//         }
//     }
// }
// const findPrimeBetween = () => {
//     const a = +prompt("Enter first Value")
//     const b = +prompt("Enter Second Value")
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             if (isPrimeNumber(i)) {
//                 console.log(i, 'is a prime number');
//             }
//         }
//     }
//     else {
//         alert("Please Enter first vale lower then second");
//         findPrimeBetween()
//     }
// }
// findPrimeBetween()

const paramidCode = (a) => {
    for (let i = 0; i < a; i++) {
        let sti = ""
        for (let j = 0; j < (a - i); j++) {
            sti += " "
        }
        for (let j = 0; j < (i * 2) - 1; j++) {
            sti += "*"
        }
        console.log(sti);
    }
}
paramidCode(11)
paramidCode(20)