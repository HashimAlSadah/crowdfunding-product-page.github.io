export const parseIntg = (string) =>{
    let integer = "";
    for(let i = 0; i < string.length; i++){
        if( !isNaN(string[i]) ) integer += string[i];
    }
    return Number(integer);
}

export const addComma = (stringNumber) => {
    if (stringNumber.length <= 3){
        return stringNumber;
    }else{
        let outputStringNumber = "";
        let index = stringNumber.length - 1;
        for(let i = 0; i < stringNumber.length; i++){
            if(i !== 0 && i % 3 === 0){
                outputStringNumber = "," + outputStringNumber;
            }
            outputStringNumber = stringNumber[index] + outputStringNumber;
            index--;
        }
        return outputStringNumber;
    }
}


//--------------update info--------------





