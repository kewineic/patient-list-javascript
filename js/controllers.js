var validateValuesList = [
    patientNameIsValid = {
        validate: true,
        error: '',
    },

    patientWeightIsValid = {
        validate: true,
        error: '',
    },

    patientHeightIsValid = {
        validate: true,
        error: '',
    },
];

var patientIsValid = {
    validate: true,
};

var divForm = document.querySelectorAll(".validate-output-content");
var inputForm = document.querySelectorAll(".form-content div input");

function patientNameValidate(){
    if (
        (patient.name.length <= 0)
    ) {
        patientNameIsValid.validate = false;
        patientNameIsValid.error = "Por favor, escolha o nome do paciente!";
    }else{
        patientNameIsValid.validate = true;
        patientNameIsValid.error = "";
    }
};

function patientWeightValidate(){
    if (
        (patient.weight.length <= 0)
    ) {
        patientWeightIsValid.validate = false;
        patientWeightIsValid.error = "Por favor, informe o peso do paciente.";
    } else if (
        (patient.weight <= 0) || (patient.weight >= 400)
    ) {
        patientWeightIsValid.validate = false;
        patientWeightIsValid.error = "Por favor, informe um peso(kg) válido do paciente.";
    }else{
        patientWeightIsValid.validate = true;
        patientWeightIsValid.error = "";
    }
};

function patientHeightValidate(){
    if(
        (patient.height.length <= 0)
    ){
        patientHeightIsValid.validate = false;
        patientHeightIsValid.error = "Por favor, informe a altura do paciente!";
    }else if(
        (patient.height <= 0) || (patient.height >= 3)
    ){
        patientHeightIsValid.validate = false;
        patientHeightIsValid.error = "Por favor, informe uma altura(m) válida do paciente.";
    }else{
        patientHeightIsValid.validate = true;
        patientHeightIsValid.error = "";
    }
};

function validPatient() {
    if (
        (patientNameIsValid.validate != true) ||
        (patientWeightIsValid.validate != true) ||
        (patientHeightIsValid.validate != true)
    ) {
        return patientIsValid.validate = false;
    }
    return patientIsValid.validate = true;
};


function showErrorForm(){
    removeError();
    for(var cont = 0; cont < divForm.length; cont++){
        var errorMsg = document.createElement("p");

        errorMsg.textContent = validateValuesList[cont].error;
        divForm[cont].appendChild(errorMsg);

        if(!validateValuesList[cont].validate){
            inputForm[cont].classList.add("validate-input-error");
        }
    }
        
};

function removeError(){
    for(var cont = 0; cont < divForm.length; cont++){
        divForm[cont].innerHTML = "";
    }

    inputForm.forEach(
        (input) => (input.classList.remove("validate-input-error"))
    );
}