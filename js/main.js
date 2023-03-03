// Add background to navbar when scroll past certain threshold
const navBar = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navBar.classList.add("bg-white/10");
        navBar.classList.add("backdrop-blur-md");
    } else {
        navBar.classList.remove("bg-white/10");
        navBar.classList.remove("backdrop-blur-md");
    }
};