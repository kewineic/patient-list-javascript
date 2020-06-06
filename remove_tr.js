var patients = document.querySelectorAll(".patientTr");  

var tbody = document.querySelector("table"); 

tbody.addEventListener("dblclick", function(event){
    
    if(event.target.tagName == 'TD'){
        event.target.parentNode.classList.add("fadeOut")
        console.log(event.target.parentNode.classList)

        setTimeout(() => {
        event.target.parentNode.remove();
    }, 500);
}
    
});