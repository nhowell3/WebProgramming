function isEmailValid(email){
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRe.test(email);
}

function isNameValid(name){
    if (name.length == 0) return false;
    return true;
}

function isAgeValid(age){
    if (age < 18 || age > 100) return false;
    return true;
}

function validateForm(form){
    const output = document.getElementById("output");
    let badFields = []

    // Get Values
    let name = form.elements['name'].value;
    let email = form.elements['email'].value;
    let age = form.elements['age'].value;

    // Validation

    if (!isNameValid(name)){
        badFields.push('Name must be longer than 0 characters');
    }

    if (!isEmailValid(email)){
        badFields.push('Email is NOT a valid email address');
    }

    if (!isAgeValid(age)){
        badFields.push('Age must be between 18 and 100')
    }

    // Display
    if (badFields.length > 0){
        output.innerHTML= "";
        for (let i = 0; i < badFields.length; i++){
            output.innerHTML += badFields[i] + '<br>';
        }
        return;
    }
    output.innerHTML = "Form submitted successfully!";

    form.reset();
}

function fieldValidationStyling(field, valid, validationId, validationError) {
    const validTextDom = document.getElementById(validationId);

    if (valid && field.classList.contains('field-error')){
        field.classList.remove("field-error")
        validTextDom.innerHTML = "";
    }
    else if (!valid && !field.classList.contains('field-error')){
        field.classList.add("field-error")
        validTextDom.innerHTML = validationError;
    }
}