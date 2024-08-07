let buttons = document.querySelector('.buttons')
let btn = document.querySelectorAll('span')
let value = document.getElementById('value')
let toggleBtn = document.querySelector('.toggleBtn')
let body = document.querySelector('body')

// Handle button clicks
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        handleInput(this.innerHTML)
    });
}

// Function to handle input from buttons or keyboard
function handleInput(input) {
    if (input == "=") {
        try {
            value.innerHTML = eval(value.innerHTML)
        } catch (err) {
            alert("Enter valid input")
        }
    } else {
        if (input == "AC")
            value.innerHTML = ""
        else if (input == "C")
            value.innerHTML = value.innerHTML.slice(0, -1)
        else
            value.innerHTML += input
    }
}

// Toggle light/dark mode
toggleBtn.onclick = function(){
    body.classList.toggle('dark')
}

// Handle keyboard input
document.addEventListener('keydown', function(event) {
    const key = event.key
    if (!isNaN(key) || ['+', '-', '*', '/', '.'].includes(key))
        value.innerHTML += key
    else if (key === 'Enter')
        handleInput('=')
    else if (key === 'Backspace')
        handleInput('C')
    else if (key.toUpperCase() === 'CE')
        handleInput('AC')
})
