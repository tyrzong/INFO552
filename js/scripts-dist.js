function runCalc(){let e=document.getElementById("lower").value,n=document.getElementById("higher").value,t=document.getElementById("gallons").value;document.getElementById("loweroctane").innerHTML=e,document.getElementById("higheroctane").innerHTML=n;let l=(93*t-e*t)/(n-e),o=t-l;document.getElementById("lowerneeded").innerHTML=o.toFixed(2),document.getElementById("higherneeded").innerHTML=l.toFixed(2)}function toggleDemo(e){e?window.location.replace("/list.html"):window.location.replace("/demo.html")}