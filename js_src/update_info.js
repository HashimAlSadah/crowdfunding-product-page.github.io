import { parseIntg, addComma} from "./functions.js";

export const updateTotalDonation = (inputAmount)=>{
    const totalDonation = document.querySelector("#donation-amount");
    let totalAmount = parseIntg(totalDonation.innerText);
    totalAmount += inputAmount;
    totalAmount = addComma(String(totalAmount));
    totalDonation.innerText = `$${totalAmount}`;
    localStorage.setItem("totalDonation", totalDonation.innerText);
}

export const updateProgressBar = ()=>{
    const totalDonation = document.querySelector("#donation-amount");
    const progressBarFiller = document.querySelector(".progress-bar__filler");
    let progressBarWidth = ( parseIntg(totalDonation.innerText) / 100000 ) * 100;
    progressBarWidth > 100 ? progressBarWidth = 100 : progressBarWidth;
    progressBarFiller.style.width = `${progressBarWidth}%`;
}

export const updateDonatersNumber = ()=>{
    const donaters = document.querySelector("#donaters-number");
    const donatersNumber = parseIntg(donaters.innerText);
    donaters.innerText = addComma(String(`${donatersNumber + 1}`));
    localStorage.setItem("donaters", donaters.innerText);
}

export const updateNumbersLeft = (donationType) =>{
    const blackEditionNumberLeft = document.querySelectorAll(".black-edition-left-number");
    const bambooStandNumberLeft = document.querySelectorAll(".bamboo-stand-left-number");
    if(donationType == "bamboo"){
        bambooStandNumberLeft.forEach(entry => {
            entry.innerText = Number(entry.innerText) - 1;
        });
        localStorage.setItem("bambooStandNumberLeft", bambooStandNumberLeft[0].innerText);
    }else if(donationType == "black edition"){
        blackEditionNumberLeft.forEach(entry => {
            entry.innerText = Number(entry.innerText) - 1;
        });
        localStorage.setItem("blackEditionNumberLeft", blackEditionNumberLeft[0].innerText);
    }

}