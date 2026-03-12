function addToDisplay(input){
        const display = document.getElementById("display");
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
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }
