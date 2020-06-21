var searchInput = document.querySelector(".input-search");

searchInput.addEventListener("input", function(){
    var patients = document.querySelectorAll(".patientTr");  
   
    console.log(this.value.length)

    if(this.value.length > 0){
        patients.forEach(function(patientTr){
            var patient = patientTr;
            var patientName = patient.querySelector(".name-info")
            var name = patientName.textContent;
            var regSearch = new RegExp(searchInput.value, "i");

            if(!regSearch.test(name)){
                patient.classList.add("hidden");
            }else{
                patient.classList.remove("hidden");
            }

        });
    }else{
        patients.forEach(function(patientTr){
            var patient = patientTr;
            patient.classList.remove("hidden")
        });
    }
});

