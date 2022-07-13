function demoExternalAlert(){
alert("External Alert");
}
function demoExternalConfirm(){
    if(confirm("are you sure"))
    {
        alert("yes");
    }
    else{
        alert("no");
    }
}
function demoExternalPrompt(){
    var fName=prompt("Enter Firstname Here..");
    var lName=prompt("Enter Lastname Here..");
    alert(fName+" "+lName);
}

