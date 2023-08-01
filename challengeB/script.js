const span = document.getElementById('span');

span.addEventListener('click', toggleMenu);
function toggleMenu() {
    const menu = document.querySelector('.menu');
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}