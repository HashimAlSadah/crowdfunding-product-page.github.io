const [errorMessage25, errorMessage75] = document.querySelectorAll(".module .error-message");

export const displayErrorMessage = (minimumAmount) =>{
    if(minimumAmount == 25){
        errorMessage25.classList.add("active");
    }else if(minimumAmount == 75){
        errorMessage75.classList.add("active");
    }
}

export const hideErrorMessage = ()=>{
    errorMessage25.classList.remove("active");
    errorMessage75.classList.remove("active");
}