let name = document.getElementById("name");
let date_of_birth = document.getElementById("date-of-birth");
let email = document.getElementById("email");
let password = document.getElementById("password");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];

// ------------------------------------------------------------------------------------------------

let new_user = {
    email: "",
    password: "",
    profile_photo: "Images/Add Profile Picture (Icon).jpg",
    name: "",
    bio: "",
    followers: "0",
    date_of_birth: "",
    gender: "",
    relationship_status: "",
    hometown: "",
    current_city: "",
    school_s: "",
    college_s: "",
    job_s: "",
    project_s: "",
    programming_language_s: "",
    portfolio_website: "",
    social_media: "",
    contact_email: "",
    contact_number: "",
    resume: ""
};

// ------------------------------------------------------------------------------------------------

function registration() {

    if (check_validation()) {

        let already_registered = users_data.filter((already_registered_user) => {
            return already_registered_user.email == email.value;
        })

        if (already_registered) {
            alert("User Already Exists!");
        }
        else {
            save_data(name.value, date_of_birth.value, email.value, password.value);

            name.value = "";
            date_of_birth.value = "";
            email.value = "";
            password.value = "";

            alert("You Are Now Registered! Please Log In!");
            location = "index.html";
        }

    }

};

// ------------------------------------------------------------------------------------------------

function check_validation() {

    let name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-. ]{2,50}$/i;
    let date_of_birth_pattern = /^(?:(?:31-(?:0?[13578]|1[02]))|(?:29|30)-(?:0?[1,3-9]|1[0-2]))-(?:19|20)\d\d$|^29-0?2-(?:19|20)(?:[02468][048]|[13579][26])$|^(?:0?[1-9]|1\d|2[0-8])-(?:0?[1-9]|1[0-2])-(?:19|20)\d\d$/;
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;

    let name_validation = name_pattern.test(name.value);
    let date_of_birth_validation = date_of_birth_pattern.test(date_of_birth.value);
    let email_validation = email_pattern.test(email.value);
    let password_validation = password_pattern.test(password.value);

    if (name.value == "") {
        alert("Please Enter Your Name!");
        return false;
    }
    else if (!name_validation) {
        alert("Name Is Not Valid!");
        return false;
    }

    if (date_of_birth.value == "") {
        alert("Please Enter Your Date Of Birth!");
        return false;
    }
    else if (!date_of_birth_validation) {
        alert("Date Of Birth Is Not Valid!");
        return false;
    }

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
    else if (!password_validation) {
        alert("Password Is Not Valid!");
        return false;
    }

    return true;

};

// ------------------------------------------------------------------------------------------------

function save_data(name, date_of_birth, email, password) {

    new_user.name = name;
    new_user.date_of_birth = date_of_birth;
    new_user.email = email;
    new_user.password = password;

    users_data.push(new_user);

    localStorage.setItem("users", JSON.stringify(users_data));

};