function runCalc(){let e=document.getElementById("lower").value,n=document.getElementById("higher").value,t=document.getElementById("gallons").value;document.getElementById("loweroctane").innerHTML=e,document.getElementById("higheroctane").innerHTML=n;let d=(93*t-e*t)/(n-e),l=t-d;document.getElementById("lowerneeded").innerHTML=l.toFixed(2),document.getElementById("higherneeded").innerHTML=d.toFixed(2)}