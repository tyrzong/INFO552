function runCalc(){
    let lower = document.getElementById("lower").value;
    let higher = document.getElementById("higher").value;
    let gallons = document.getElementById("gallons").value;
    document.getElementById("loweroctane").innerHTML = lower;
    document.getElementById("higheroctane").innerHTML = higher;
    let higherneeded = (93 * gallons - lower * gallons) / (higher - lower);
    let lowerneeded = gallons - higherneeded;
    document.getElementById("lowerneeded").innerHTML = lowerneeded.toFixed(2);
    document.getElementById("higherneeded").innerHTML = higherneeded.toFixed(2);
}

function toggleActive(){
    let listItem = document.getElementsByClassName("test");
    let buttons = listItem.getElementsByClassName("list-button")
    for (var i = 0; i<buttons.length; i++){
        if (buttons[i].style.display == "block"){
            buttons[i].style.display = "none";
        }
        else{
            buttons[i].style.display = "block";
        }
    }
}