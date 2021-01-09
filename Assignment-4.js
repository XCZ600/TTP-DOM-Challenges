//buttons
document.getElementById('lButton').addEventListener("click", function () {
    const text1 = document.getElementById('text1')
    text1.innerText = "I'm right!"
})
document.getElementById('rButton').addEventListener("click", function () {
    const text2 = document.getElementById('text2')
    text2.innerText = "No, I'm right!"
})

//hover --completed--
const hover = document.getElementById('hovering')

hovering.onmouseover = function () {
    alert('Hey, I told you not to hover over me!')
}

//form --completed--
document.getElementById('subButton').addEventListener("click", function () {
    const password = document.getElementById('password').value
    const header = document.getElementById('formHeader')
    if(password === '12345678') {
        header.innerText = 'Logged In'
    }
    else {
        alert('wrong password')
    }
})