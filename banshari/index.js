let arr = [45, 34, 543, 543, 5, 435, 4356, 5453]


let newArr = arr.map((x) => {
    return '<h1>' + x + 2 + '</h1>'
})
// let newArr = arr.forEach((x) => {
//     return '<h1>' + x + 2 + '</h1>'
// })


let obj = {
    name: 'jatin',
    skill: 'mern stack developer'
}
let key = "skill"
obj = {
    ...obj, [key]: 'magan'
}

console.log(obj)