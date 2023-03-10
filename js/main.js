// Add background to navbar when scroll past certain threshold
const navBar = document.querySelector('#navbar');
window.onscroll = () => {
    if (window.scrollY > 50) {
        navBar.classList.add("bg-black/20");
        navBar.classList.add("backdrop-blur-md");
    } else {
        navBar.classList.remove("bg-black/20");
        navBar.classList.remove("backdrop-blur-md");
    }
};