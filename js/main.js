var inputName = document.querySelector(".input-addForm-name");
var inputWeight = document.querySelectorAll(".input-addForm")[0];
var inputHeight = document.querySelectorAll(".input-addForm")[1];
var inputButtom = document.querySelector(".input-form");

var form = document.querySelector(".form-content");

function getPatientFormValue(){
    var patient = {
        name: inputName.value,
        weight: inputWeight.value,
        height: inputHeight.value,
        imc: calculateImC(inputWeight.value, inputHeight.value)
    };

    return patient
};

function createPatientTr(patient){
    var patientTr = document.createElement("tr");
    patientTr.classList.add("patientTr")

    patientTr.appendChild(createPatientTd(patient.name, "name-info"));
    patientTr.appendChild(createPatientTd(patient.weight, "weight-info"));
    patientTr.appendChild(createPatientTd(patient.height, "height-info"));
    patientTr.appendChild(createPatientTd(patient.imc, "imc-info"));
    return patientTr
};

function createPatientTd(dataTd, classTd){
    var patientTd = document.createElement("td");
    patientTd.classList.add(classTd);

    patientTd.textContent = dataTd;

    return patientTd
};

function addPatientTable(patient){
    var table = document.querySelector("table");
    var patientTr = createPatientTr(patient); 

    table.appendChild(patientTr);
}

inputButtom.addEventListener("click", function(event){
    event.preventDefault();

    var patients = getPatientFormValue();

    if(validatePatientValues()){
        removeError();
        addPatientTable(patients);
        form.reset();
    }

    
});

function validatePatientValues(){
    patient = getPatientFormValue()

        patientNameValidate();
        patientWeightValidate();
        patientHeightValidate();
        validPatient();

    if(!patientIsValid.validate){
        showErrorForm();
        return false
    }
    
    return true
}


