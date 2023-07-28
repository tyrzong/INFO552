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