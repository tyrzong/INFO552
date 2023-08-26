function toggleNav(){
    var navItems = document.getElementsByClassName("nav-item");
    for (var i = 0; i<navItems.length; i++){
        if (navItems[i].style.display == "grid"){
            navItems[i].style.display = "none";
        }
        else{
            navItems[i].style.display = "grid";
        }
    }
}

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