


// function toggleMenu(event) {
//     const a  = event.replace("span_","span");
//     const span = document.getElementById(a);
  
//         const menu =  span.closest(".parent").querySelector(".menu");

//         if (menu.style.display === "block") {
//             menu.style.display = "none";
//         } else {
//             menu.style.display = "block";
//         }
  
// }
function toggleMenu(span) {
    const menu = span.parentElement.nextElementSibling; // Get the sibling menu element

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}


