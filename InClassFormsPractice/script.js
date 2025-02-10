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

    let name = validateField(form.elements['name']);
    let email = validateField(form.elements['email']);
    let age = validateField(form.elements['age']);

    let isValid = name && email && age;

    if (!isValid){
        output.innerHTML= "";
        return;
    }
    output.innerHTML = "Form submitted successfully!";

    form.reset();
}

function validateField(dom) {
    if (!dom) return;

    const errorMessage = dom.getAttribute('error');
    const errorOutput = document.getElementById('validate-' + dom.id)

    errorOutput.innerHTML = errorMessage;

    errorOutput.classList.remove('show-valid');
    errorOutput.classList.remove('hide-valid');

    let isValid;
    switch (dom.id){
        case "name":
            isValid = isNameValid(dom.value);
            break;
        case "email":
            isValid = isEmailValid(dom.value);
            break;
        case "age":
            isValid = isAgeValid(dom.value);
            break;
    }
    
    if (isValid){
        errorOutput.classList.add("hide-valid");
        dom.classList.remove("field-error");
    } else {
        errorOutput.classList.add("show-valid");
        dom.classList.add("field-error");
    }

    return isValid;
}