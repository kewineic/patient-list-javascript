var toggle = document.querySelector("#toggle-check");
    
toggle.addEventListener("click", function(){
    var check = toggle.checked;
    var menuContent = document.querySelector(".header-content nav");
   
    if(check){
        menuContent.classList.add("menu-content-hidden");
    }else{
        menuContent.classList.remove("menu-content-hidden")
    }
    
})
