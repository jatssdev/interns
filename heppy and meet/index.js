function change() {
    let heading = document.getElementById('heading')
    heading.innerHTML = 'Coding Cloud'
    heading.style.color = 'red'
}
function Dark() {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
}

function Light() {
    document.body.style.backgroundColor = 'white'
    document.body.style.color = 'black'
}
function On() {
    document.getElementById('image').src = 'https://www.w3schools.com/js/pic_bulbon.gif'
}
function Off() {
    document.getElementById('image').src = 'https://www.w3schools.com/js/pic_bulboff.gif'
}
let number = 0
function Slide() {
    number = number + 100
    document.getElementById('box').style.transform = 'translate(' + number + 'px)'
}