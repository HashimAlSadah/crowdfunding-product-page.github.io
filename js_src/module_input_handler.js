import { displayThankYou } from "./control_display.js";
import { updateTotalDonation, updateDonatersNumber,updateNumbersLeft, updateProgressBar} from "./update_info.js";
import { displayErrorMessage, hideErrorMessage } from "./error_handler.js";

export const moduleInputHandler = (event) => {
    event.preventDefault();
        const continueBtn = event.target;
        const inputcontainer = continueBtn.previousElementSibling;
        if(inputcontainer == null){
            updateDonatersNumber();
            displayThankYou();
            return;
        }
        const inputAmount = Number(inputcontainer.children[0].value);
        const donationType = inputcontainer.dataset.donationType;
        const minimumAmount = inputcontainer.children[0].dataset.minimum;
        if(inputAmount < minimumAmount || isNaN(inputAmount)){
            displayErrorMessage(minimumAmount);
        }else{
            updateTotalDonation(inputAmount);
            updateDonatersNumber();
            updateNumbersLeft(donationType);
            updateProgressBar();
            hideErrorMessage();
            displayThankYou();
        }
}