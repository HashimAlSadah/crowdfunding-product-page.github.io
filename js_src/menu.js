const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header .menu");
const header = document.querySelector(".header");

export const menuHandler = () => {
    hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
    header.classList.toggle("active");
});
};