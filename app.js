// Creating a function that handles operations
alert("Leave spaces when writing");

function operateOnParameters(...param){
    let emptyErray = [];
    
    let result;
    if(param.includes("*")){
        result = 1 ;
        for(let i = 0; i < param.length; i++){
            if(param[i] != "*"){
                emptyErray.push(param[i]);
                result *= param[i]
            }else{
                continue;
            };

            
        }

        return result

    }

    else if(param.includes("+")){
        result = 0
        for(let i = 0; i < param.length; i++){
            if(param[i] != "+"){
                emptyErray.push(param[i])
                result += param[i];
            }else{
                continue;
            }
        }

        return result;

    }

    else if (param.includes("-")) {
        // Extract numbers only (skip "-" symbols)
        for (let i = 0; i < param.length; i++) {
            if (param[i] !== "-") {
                emptyErray.push(Number(param[i]));
            }
        }
    
        // Start result with the first number
        result = emptyErray[0];
    
        // Subtract all subsequent numbers
        for (let i = 1; i < emptyErray.length; i++) {
            result -= emptyErray[i];
        }
    
        return result;
    }

    else if(param.includes("/")){
        result;
        for(let i = 0; i < param.length; i++){
            if(param[i] != "/"){
                emptyErray.push(param[i]);
                if(emptyErray [0] && emptyErray[1]){
                    result = emptyErray[0] / emptyErray[1];
                }
                else{
                    result /= emptyErray[i];
                }
            }else{
                continue;
            }
            ;
        }

        return result

    }

    return emptyErray;
  
}


// const myOperation2 = operateOnParameters(10, "-", 9);
const myOperation1 = operateOnParameters(5, "+", 6, "+", 10);
const myOperation3 = operateOnParameters(30, "*", 20, "*", 2);
const myOperation4 = operateOnParameters(4, "/", 2, "/", 3);
const myOperation2  = operateOnParameters(5, "-", 2);

console.log(myOperation2);
// console.log(myOperation1);
// console.log(myOperation3);
// console.log(myOperation4);


const add = document.getElementById('add');
const mult = document.getElementById('mult');
const sub = document.getElementById('sub');
const div = document.getElementById('div');
const submit = document.getElementById('submit');
const myNumbers = document.getElementsByClassName("numbers")

const input = document.getElementById('input');

function handleInput(){
    let emptyPlace = input.value.trim();

    let splitValue;
    if(emptyPlace.includes(" ")){
        splitValue = emptyPlace.split(" ");
    }

    return splitValue;
}

submit.onclick = () => {
    let myInput = handleInput();
    let myArray = [];

    for(let i = 0; i < myInput.length; i++){
        if(myInput[i] != "*" && myInput[i] != "+" && myInput[i] != "-" && myInput[i] != "/"){
            myArray.push(Number(myInput[i]));
        }
        else if(myInput[i] == " "){
            continue;
        }
        else{
            myArray.push(myInput[i]);
        }
    }
    console.log(myArray);

    myArray = operateOnParameters(...myArray);
    console.log(myArray);
    input.value = myArray;


}


for(let i = 0; i < myNumbers.length; i++){
    myNumbers[i].onclick = () => {
        
        if(myNumbers[i].textContent == "+" || myNumbers[i].textContent == "*" || myNumbers[i].textContent == "-" || myNumbers[i].textContent == "/" ){
            input.value += " " + myNumbers[i].textContent + " ";
        }

        else if(myNumbers[i].textContent == "C"){
            input.value = "";
        }

        else{
            input.value += myNumbers[i].textContent;
        }
    }
}