function toggleNav(){for(var e=document.getElementsByClassName("nav-item"),n=0;n<e.length;n++)"grid"==e[n].style.display?e[n].style.display="none":e[n].style.display="grid"}function runCalc(){let e=document.getElementById("lower").value,n=document.getElementById("higher").value,t=document.getElementById("gallons").value;document.getElementById("loweroctane").innerHTML=e,document.getElementById("higheroctane").innerHTML=n;let l=(93*t-e*t)/(n-e),d=t-l;document.getElementById("lowerneeded").innerHTML=d.toFixed(2),document.getElementById("higherneeded").innerHTML=l.toFixed(2)}