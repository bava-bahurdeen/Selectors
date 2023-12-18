var drop=document.querySelector(".drop-list")
let selectid;
drop.addEventListener("click",(e)=>{

    var target=e.target
   var close= target.closest("li")
    
   if(selectid!=undefined){
    selectid.classList.remove("clcl")

   }
   selectid=close;
close.classList.add("clcl")

})
var toggle=document.querySelector(".toggle");

toggle.addEventListener("click",(e)=>{
var target=e.target
var togg=target.closest("span")
if(togg.classList.contains("slider-on")){
    togg.classList.toggle("slider-off")

}
else if(togg.classList.contains("slider-off")){
    togg.classList.add("slider-on")
}

})