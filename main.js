const p=document.getElementById("block");
window.addEventListener("scroll",function(){
    let os = window.pageYOffset;
    p.style.backgroundPositionY= os *0.7 + "px";
})