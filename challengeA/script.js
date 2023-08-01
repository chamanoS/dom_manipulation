
button.addEventListener('click', toggleBtn)
const button = document.getElementById('btn');

function toggleBtn() {
    const buttonText = button.innerText;
    console.log(button)
    if (buttonText === "On") {
        button.innerText = "Off";
        button.style.backgroundColor = "green";
    } else if (buttonText === "Off") {
        button.innerText = "On";
        button.style.backgroundColor = "transparent";
    }
}

