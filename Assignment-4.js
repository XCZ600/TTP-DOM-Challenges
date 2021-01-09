//buttons
const text = document.getElementById('text')

document.getElementById('lbutton').addEventListener("click", function () {
    text.innerText = "I'm right!"
})
document.getElementById('rbutton').addEventListener("click", function () {
    text.innerText = "No, I'm right!"
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