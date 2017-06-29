(function() {
    "use strict";

    var registrationForm = document.forms.registrationform;

    // set the value of the name property with JS
    registrationForm.elements.name.value = 'Mannuel';
    registrationForm.elements.surname.value = 'Ferriera';

    function validInfo(registrationForm) {
        return registrationForm.elements.name.value != "" &&
        /^.+@.+\.\w{2,4}$/.test(registrationForm.elements.email.value);
    }

    registrationForm.elements.send.onclick = function () {
        if (validInfo(registrationForm)) {
            registrationForm.submit();
        } else {
            alert("Give us a name and a valid email")
        }
    }

    // var registrationForm = function() {
    //     var nameInput = document.querySelector('.jsName').nodeValue;
    //     var emailInput = document.querySelector('jsEmail').value;
    // }

    // access the properties of the form
    console.log(registrationForm.method);
    console.log(registrationForm.action);
    console.log('init registration form');
    
    return {
        registrationForm: registrationForm
    };

})();