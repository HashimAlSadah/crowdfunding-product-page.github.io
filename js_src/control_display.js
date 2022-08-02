const body = document.querySelector("body");
const module = document.querySelector(".module");
const thankYouCard = document.querySelector(".thank-you-card");
const bookmarkBtn = document.querySelector(".bookmark-btn");
const moduleCloseBtn = document.querySelector(".close-btn");

export const openModule = ()=> {
    body.classList.add("active");
    module.classList.add("active");
}

export const closeModule = ()=>{
    body.classList.remove("active");
    module.classList.remove("active");
    thankYouCard.classList.remove("active");
};

export const displayThankYou = ()=>{
    module.classList.remove("active");
    thankYouCard.classList.add("active");
}

export const bookMarkHandler = ()=> {
    bookmarkBtn.addEventListener("click", ()=>{
        bookmarkBtn.classList.toggle("active");
    });
}

export const closeBtnHandler = ()=> {
    moduleCloseBtn.addEventListener("click", ()=>{
        closeModule();
    });
}

