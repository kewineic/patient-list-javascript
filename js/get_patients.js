var inputNewList = document.querySelector(".newList-button");

inputNewList.addEventListener("click", function(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.onload = function(){
        var response = xhr.responseText;
        var newPatients = JSON.parse(response);
        
        newPatients.forEach(patient => {     
            var patientObjectConvert = {
                name: patient.nome,
                weight: patient.peso,
                height: patient.altura,
                imc: calculateImC(patient.peso, patient.altura)
            }
            
            addPatientTable(patientObjectConvert);
        });
    };

    xhr.send();

});
