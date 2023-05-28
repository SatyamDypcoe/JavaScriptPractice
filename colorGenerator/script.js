const btn1 = document.getElementById('btn')
let num2 = document.getElementById('rndm')

function randomNum() {
    const num = Math.floor(Math.random() * 16777215)
    let randomCode = '#' + num.toString(16)
    document.body.style.background = randomCode
    
    num2.innerText = randomCode
}
btn1.addEventListener('click', randomNum)
randomNum()