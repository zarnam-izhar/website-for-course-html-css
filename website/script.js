function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active"); 

  
    const hamburgerIcon = document.getElementById("hamburger-icon");
    if (menu.classList.contains("active")) {
        hamburgerIcon.textContent = "✖";
    } else {
        hamburgerIcon.textContent = "☰"; 
    }
}
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
