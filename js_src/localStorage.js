const [totalDonation, donaters] = document.querySelectorAll("#donation-amount, #donaters-number");
const bambooStandNumberLeft = document.querySelectorAll(".bamboo-stand-left-number");
const blackEditionNumberLeft = document.querySelectorAll(".black-edition-left-number");

export const uploadLocalStorageContent = ()=>{
    Object.keys(localStorage).forEach(key => {
        if(key === "totalDonation"){
            totalDonation.innerText = localStorage[key];
        }
        if(key === "donaters"){
            donaters.innerText = localStorage[key];
        }
        if(key === "bambooStandNumberLeft"){
            bambooStandNumberLeft.forEach(entry => entry.innerText = localStorage[key]);
        }
        if(key === "blackEditionNumberLeft"){
            blackEditionNumberLeft.forEach(entry => entry.innerText = localStorage[key]);
        }
    })

}