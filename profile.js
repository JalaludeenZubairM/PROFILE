var year=document.getElementById("year");
var date= new Date();
var Year=date.getFullYear();
year.innerHTML=Year; 
var typing=new Typed("#name",{
    strings:["Programmer","Web Developer","Frontend Developer","Backend Developer"],
    typeSpeed:100,
    backSpeed:100,
    loop:true,
});