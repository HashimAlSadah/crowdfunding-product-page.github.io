const module = document.querySelector(".module");
let activeRadio;
let activeDonationOption;
let activeHr;
let activeInsertDonationBlock;

export const moduleEvents = () =>{
    module.addEventListener("click", (event)=>{
    if(event.target.classList.contains("radio-input")){
        const donationOption = event.target.parentNode.parentNode.parentNode;
        const hr = donationOption.querySelector("hr"); 
        const insertDonationBlock = donationOption.querySelector(".insert-donation");
        if(activeRadio != undefined && activeRadio != event.target){
            activeRadio.classList.remove("active");
        }
        if(activeInsertDonationBlock && activeHr 
            && activeInsertDonationBlock != insertDonationBlock && activeHr != hr){
            activeHr.classList.remove("active");
            activeInsertDonationBlock.classList.remove("active");
        }
        //----Keep Track of the following elements----------
        activeRadio = event.target;
        activeDonationOption = donationOption;
        activeInsertDonationBlock = insertDonationBlock;
        activeHr = hr;
        //--------Activate the followig element-------------
        event.target.classList.toggle("active");
        if(donationOption  && hr){
            hr.classList.toggle("active");
            insertDonationBlock.classList.toggle("active");
        }
    }
});

}