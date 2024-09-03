let arr = [3, 32, 542, 154, 23, 6523, 4, 124, 25, 324532, 4]
let arr2 = [46543, 5, 4, 12, 4332, 634, 7543, 543]

let newArr = [...arr, ...arr2] //[43242342, 3, 32, 542, 154, 23, 6523, 4, 124, 25, 324532, 4,46543, 5, 4, 12, 4332, 634, 7543, 543]
// console.log(newArr)
let output = arr.find((x) => x == 5)
let str = 'helo my name is jatin'
output = str.includes('jatin')
console.log(output)


let total = arr.reduce((t, x) => {
    return t += x
}, 0)
console.log(total)