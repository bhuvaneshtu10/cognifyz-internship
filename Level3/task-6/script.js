document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("passwordError").innerText = "";
    document.getElementById("successMessage").innerText = "";

    if(name === ""){
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === ""){
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    }
    else if(!email.match(emailPattern)){
        document.getElementById("emailError").innerText = "Enter a valid email";
        isValid = false;
    }

    if(password.length < 6){
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        isValid = false;
    }

    if(isValid){
        document.getElementById("successMessage").innerText = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }

});
