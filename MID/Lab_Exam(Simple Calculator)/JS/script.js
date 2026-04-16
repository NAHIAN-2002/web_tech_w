function addToDisplay(input){
    const display = document.getElementById("display");
    if(display.value=='undefined' || display.value=='Error' || display.value=='NaN')
        {
            clearDisplay();
        }
        display.value += input;
    }

    function clearDisplay(){
        const display = document.getElementById("display");
        display.value = "";
    }

    function backspace()
    {
        const display = document.getElementById("display");
        display.value = display.value.toString().slice(0,-1);
    }

    function calculate(){
        const display = document.getElementById("display");
        if(display.value=='' || display.value=='Invalid' || display.value.includes("Infinity") ||display.value=='undefined' || display.value=='Error' || display.value=='NaN')
        {
            clearDisplay();
        }
        else{
            try{
                if(display.value.includes("//") || display.value.includes("//") ){
                    display.value= "Error";
                }
                else{
                    display.value = eval(display.value);

                }
            }
            catch(error){
                display.value = "Error";
            }
        }
        
    }

