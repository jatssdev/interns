let seconds = 0
let date = setInterval(() => {
    seconds = new Date().getSeconds()
    console.log(seconds)
}, 1000)

// if (10 < 100) {
//     clearInterval(date)
// }
let time = setTimeout(() => {


    clearInterval(date)
}, 30 * 1000)



// if (10 < 100) {
//     clearTimeout(time)
// }
