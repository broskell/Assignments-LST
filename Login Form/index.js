function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let description = document.getElementById("description").value;
    let result = document.getElementById("result");

    if (!name || !email || !password || !description) {
        window.alert("Please enter required fields!!")
        result.textContent = "Please enter the required fields!";
        console.log("The required fields were submitted empty!!");
    }
    else if (name === "") {
        window.alert("Name field is empty!")
        result.textContent = "Name field is empty!";
    }
    else if (email === "") {
        window.alert("Email field is empty!")
        result.textContent = "Email field is empty!";
    }
    else if (password === "") {
        window.alert("Password field is empty!")
        result.textContent = "Password field is empty!";
    }
    else if (description === "") {
        window.alert("Description field is empty!")
        result.textContent = "Description field is empty!";
    }
    else {
        result.textContent = "";
        document.getElementById("name-display").innerHTML = `<p>Name: ${name}</p>`;
        document.getElementById("mail-display").innerHTML = `<p>Email: ${email}</p>`;
        document.getElementById("password-display").innerHTML = `<p>Password: ${password}</p>`;
        document.getElementById("desc-display").innerHTML = `<p>Description: ${description}</p>`;
    }
}

function resetForm() {
    result.textContent = "The form has been reset."
    document.getElementById("name-display").innerHTML = `<p></p>`;
    document.getElementById("mail-display").innerHTML = `<p></p>`;
    document.getElementById("password-display").innerHTML = `<p></p>`;
    document.getElementById("desc-display").innerHTML = `<p></p>`;
}