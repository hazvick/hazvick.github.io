// visar värdet
function dis(val) { 
    document.getElementById("result").value+=val 
} 
  
// evaluerar siffrorna och returnar slutvärde
function solve() { 
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 
} 
  
// tar bort allt skit så skärmen blir ren
function clr() { 
    document.getElementById("result").value = "" 
} 