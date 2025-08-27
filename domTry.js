let btn2 = document.querySelector("#btn2") ; 
btn2.onclick =()=>alert("wch kho ") ; 

let btn3=document.querySelector("#btn3") ;
btn3.addEventListener("click" , ()=>alert("wch kho")) ; 
let btn4 = document.querySelector("#btn4") ; 
btn4.addEventListener("click" , function(e){
  alert(e) ; 
})