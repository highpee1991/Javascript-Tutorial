
function displayed() {
    var $name = prompt("please enter your name")
    var display = (`Hello  ${$name} How Are You Doing Today`)
    document.getElementById("displayboard").innerText = display

    if($name=="" || $name==null){
        document.getElementById("displayboard").innerText = "Please Eneter a Valid input"
    }
    
    else{
        document.getElementById("displayboard").innerText = display
    }
}
