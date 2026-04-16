console.log("Connected");
function collect_data(){
    var fname=document.getElementById("name1").value;
    var lname=document.getElementById("name2").value;
    console.log(fname);
    console.log(lname);
    if(fname=="" ||lname==""){
        document.getElementById("update").innerHTML="Can not be empty";
    }
    else if(fname.length<2 || lname.length < 2){
         document.getElementById("update").innerHTML="Must be more than 2 char";
    }
    else{
         document.getElementById("update").innerHTML="Submitted";
    }

    return false;
}