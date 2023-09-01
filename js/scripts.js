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

function toggleItem(elm){
    let hidden = elm.getElementsByClassName("hide");
    if (hidden.length == 0){
        let details = elm.getElementsByClassName("detail");
        for (let i = 0; i < details.length; i++){
            details[i].classList.add("hide");
        }
    }
    else{
        for (let i = 0; i < hidden.length; i++){
            hidden[i].classList.remove("hide");
        }
        hidden[0].classList.remove("hide");
    }
}