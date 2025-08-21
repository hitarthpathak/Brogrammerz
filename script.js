let email = document.getElementById("email");
let password = document.getElementById("password");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];

// ------------------------------------------------------------------------------------------------

function login() {

    if ((check_validation()) && (check_login_data())) {
        email.value = "";
        password.value = "";
        alert("Welcome To Brogrammerz!");
        location = "Profile.html";
    }

    if (email.value == "admin@gmail.com" && password.value == "hitart") {
        alert("ADMIN LOGIN!");
        localStorage.setItem("admin", "true");
        location = "Admin.html";
    }

};

// ------------------------------------------------------------------------------------------------

function check_validation() {

    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;

    let email_validation = email_pattern.test(email.value);
    let password_validation = password_pattern.test(password.value);

    if (email.value == "") {
        alert("Please Enter Your E-Mail!");
        return false;
    }
    else if (!email_validation) {
        alert("E-Mail Is Not Valid!");
        return false;
    }

    if (password.value == "") {
        alert("Please Enter Your Password!");
        return false;
    }
    else if (password.value == "hitart") {
        return false;
    }
    else if (!password_validation) {
        alert("Password Is Not Valid!");
        return false;
    }

    return true;

};

// ------------------------------------------------------------------------------------------------

function check_login_data() {

    let filter_user = users_data.filter((filter_user) => {
        return filter_user.email == email.value;
    });

    let exist_user = filter_user[0];

    if (!exist_user) {
        alert("User Not Found! Please Register First!");
        location = "Registration-Page.html";
        return false;
    }
    else if ((email.value == exist_user.email) && (password.value != exist_user.password)) {
        alert('Password Is Not Correct!');
        return false;
    }
    else if ((email.value == exist_user.email) && (password.value == exist_user.password)) {
        localStorage.setItem("logged-in-user-email", JSON.stringify(email.value));
        return true;
    }

};