let arr = [344, 3, 324, 32544, 2345, 3264436, 346, 3546, 35, 437563, 54]


// let val = arr.find((x) => x == 346)
// console.log(val)

let filtered = arr.filter((x) => x != 324)


let total = arr.reduce((acc, x) => {
    return acc += x
}, 0)


let str = 'hello coding cloud'

console.log(str.includes('coding2'))