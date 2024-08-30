let arr = [434, 343, 53, 53, 52, 34, 6, 4, 3236, 4, 437, 6443, 6, 4, 7, 5476, 4356, 54]
// arr.push('jatin')
// arr.pop()

// arr.shift()
// arr.unshift('magan')


// arr.splice(4, 0, 'jatin')


// let part = arr.slice(3, 6)



// arr.sort((a, b) => b - a)
// arr.reverse()

let total = arr.reduce((t, x) => {
    return t += x
}, 0)
console.log(total)