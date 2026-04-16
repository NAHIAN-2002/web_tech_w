function collect(){
    var text=document.getElementById("txt").value ;
    text=text.toUpperCase();
    document.getElementById("txt").value=text;
    return false;
}