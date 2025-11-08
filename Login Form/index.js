function submitForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (!email || !password) {
        window.alert("Please enter required fields!!")
        result.textContent = "Please enter both email and password!";
        console.log("Both Email & Password fields were submitted empty!!");
    }
    else if (email === "") {
        window.alert("Email field is empty!")
        result.textContent = "Email field is empty!";
    }
    else if (password === "") {
        window.alert("Password field is empty!")
        result.textContent = "Password field is empty!";
    }
    else {
        result.textContent = `Email: ${email} \n Password: ${password}`
    }
}