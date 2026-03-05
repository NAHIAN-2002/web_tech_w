
errorCounter=1;

function collect_data(){
    checker1=0;
    checker2=0;

    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;

    if(!email){
        document.getElementById("emailErr").innerHTML = "Email Is Required";
    } 
    else{
        if(!email.includes("@"))
        {
            document.getElementById("emailErr").innerHTML = "@ is Required";
        }
        else{
             document.getElementById("emailErr").innerHTML = "";
             checker1=1;
        }
       
    }
    if(!password){
        document.getElementById("passErr").innerHTML = "Password Is Required";
    } 
    else{
        
        if(password.length<6)
        {
            document.getElementById("passErr").innerHTML = "Password Needs to be Atleast 6 Characters Long";
        }
        else if(!password.includes("#"))
        {
            document.getElementById("passErr").innerHTML = "Password Needs to Contain #";
        }
        else
        {
            document.getElementById("passErr").innerHTML = "";
            checker2=1;
        }
        
    }

    if(checker1==0 || checker2==0)
    {
        document.getElementById("errorCount").innerHTML= "Error count: " + errorCounter ;

    }
    else
    {
        document.getElementById("errorCount").innerHTML= "";
        errorCounter=0;

    }
    errorCounter++;

    return false;
}

