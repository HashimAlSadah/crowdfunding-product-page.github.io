//-------------imports------------
import { openModule, closeModule, bookMarkHandler, closeBtnHandler} from "./control_display.js";
import { updateProgressBar } from "./update_info.js";
import { moduleEvents } from "./module_handler.js";
import { moduleInputHandler } from "./module_input_handler.js";
import { menuHandler } from "./menu.js";
import { uploadLocalStorageContent } from "./localStorage.js";
//-----------Prepare the page-------------
uploadLocalStorageContent();
updateProgressBar(); 
//-------------Event Listeners--------------
menuHandler();
bookMarkHandler();
moduleEvents();
closeBtnHandler();

//----------Document EventListeners----------------
document.addEventListener("click", (event)=>{
    if(event.target.classList.contains("display-module")){
        openModule();
        return;
    }

    if (event.target.tagName == "BODY" && event.target.classList.contains("active")){
        closeModule();
        return;
    }

    if(event.target.classList.contains("Continue-btn")){
        moduleInputHandler(event);
    }

    if(event.target.id == "thank-you-card__btn"){
        closeModule();
    }
});








