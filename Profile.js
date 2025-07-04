let user_profile_photo = document.getElementById("user-profile-photo");
let user_name = document.getElementById("user-name");
let user_bio = document.getElementById("user-bio");
let user_followers = document.getElementById("user-followers");
let user_email = document.getElementById("user-email");
let user_password = document.getElementById("user-password");
let user_date_of_birth = document.getElementById("user-date-of-birth");
let user_gender = document.getElementById("user-gender");
let user_hometown = document.getElementById("user-hometown");
let user_current_city = document.getElementById("user-current-city");
let user_school_s = document.getElementById("user-school-s");
let user_college_s = document.getElementById("user-college-s");
let user_job_s = document.getElementById("user-job-s");
let user_project_s = document.getElementById("user-project-s");
let user_programming_languages = document.getElementById("user-programming-language-s");
let user_portfolio_website = document.getElementById("user-portfolio-website");
let user_contact_email = document.getElementById("user-contact-email");
let user_contact_number = document.getElementById("user-contact-number");

let search_user_input = document.getElementById("search-user-input");
let edit_email_password_box = document.getElementById("edit-email-password-box");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];
let logged_in_user_email = JSON.parse(localStorage.getItem("logged-in-user-email")) || "";

// ------------------------------------------------------------------------------------------------

let logged_in_user = users_data.find((filter_user) => {
    return filter_user.email == logged_in_user_email;
});

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    // localStorage.removeItem("search-query");
    // localStorage.removeItem("searched-user-email");

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    user_name.innerText = logged_in_user.name;
    user_name.value = logged_in_user.name;
    user_bio.innerText = logged_in_user.bio;
    user_bio.value = logged_in_user.bio;
    user_followers.innerText = logged_in_user.followers;
    user_date_of_birth.innerText = logged_in_user.date_of_birth;
    user_date_of_birth.value = logged_in_user.date_of_birth;
    user_gender.innerText = logged_in_user.gender;
    user_gender.value = logged_in_user.gender;
    user_hometown.innerText = logged_in_user.hometown;
    user_hometown.value = logged_in_user.hometown;
    user_current_city.innerText = logged_in_user.current_city;
    user_current_city.value = logged_in_user.current_city;
    user_school_s.innerText = logged_in_user.school_s;
    user_school_s.value = logged_in_user.school_s;
    user_college_s.innerText = logged_in_user.college_s;
    user_college_s.value = logged_in_user.college_s;
    user_job_s.innerText = logged_in_user.job_s;
    user_job_s.value = logged_in_user.job_s;
    user_project_s.innerText = logged_in_user.project_s;
    user_project_s.value = logged_in_user.project_s;
    user_programming_languages.innerText = logged_in_user.programming_languages;
    user_programming_languages.value = logged_in_user.programming_languages;
    user_portfolio_website.innerText = logged_in_user.portfolio_website;
    user_portfolio_website.value = logged_in_user.portfolio_website;
    user_contact_email.innerText = logged_in_user.contact_email;
    user_contact_email.value = logged_in_user.contact_email;
    user_contact_number.innerText = logged_in_user.contact_number;
    user_contact_number.value = logged_in_user.contact_number;

});

// ------------------------------------------------------------------------------------------------

function search_users() {

    if (search_user_input.value != "") {
        localStorage.setItem("search-query", JSON.stringify(search_user_input.value));
        location = "Search.html";
    }
    else {
        alert("Please Insert The User's Name!");
    }

};

// ------------------------------------------------------------------------------------------------

function logout() {

    localStorage.removeItem("logged-in-user-email");
    localStorage.removeItem("searched-user-email");
    localStorage.removeItem("search-query");
    location = "index.html";

};

// ------------------------------------------------------------------------------------------------

function edit_profile() {

    location = "Edit-Profile.html";

};

// ------------------------------------------------------------------------------------------------

function ranking() {

    alert("Working On It!");

};

// ------------------------------------------------------------------------------------------------

function edit_email_password() {

    user_email.value = logged_in_user.email;
    user_password.value = logged_in_user.password;

    if (edit_email_password_box.classList.contains("edit-email-password-hide")) {
        edit_email_password_box.classList.remove("edit-email-password-hide");
        edit_email_password_box.classList.add("edit-email-password-show");
    }
    else {
        edit_email_password_box.classList.add("edit-email-password-hide");
        edit_email_password_box.classList.remove("edit-email-password-show");
    }

};

// ------------------------------------------------------------------------------------------------

function upload_profile_photo() {

    let file = event.target.files[0];

    if (file) {
        let reader = new FileReader();
        reader.onloadend = () => {
            let base_64_string = reader.result;
            logged_in_user.profile_photo = base_64_string;
            user_profile_photo.src = logged_in_user.profile_photo;
        };
        reader.readAsDataURL(file);
    }
    else {
        return false;
    }

};

// ------------------------------------------------------------------------------------------------

function save_profile() {

    if (edit_email_password_box.classList.contains("edit-email-password-hide")) {
        logged_in_user.profile_photo = logged_in_user.profile_photo;
        logged_in_user.name = user_name.value;
        logged_in_user.bio = user_bio.value;
        logged_in_user.email = logged_in_user.email;
        logged_in_user.password = logged_in_user.password;
        logged_in_user.date_of_birth = user_date_of_birth.value;
        logged_in_user.gender = user_gender.value;
        logged_in_user.hometown = user_hometown.value;
        logged_in_user.current_city = user_current_city.value;
        logged_in_user.school_s = user_school_s.value;
        logged_in_user.college_s = user_college_s.value;
        logged_in_user.job_s = user_job_s.value;
        logged_in_user.project_s = user_project_s.value;
        logged_in_user.programming_languages = user_programming_languages.value;
        logged_in_user.portfolio_website = user_portfolio_website.value;
        logged_in_user.contact_email = user_contact_email.value;
        logged_in_user.contact_number = user_contact_number.value;

        localStorage.setItem("users", JSON.stringify(users_data));
        location = "Profile.html";
    }
    else {
        logged_in_user.profile_photo = logged_in_user.profile_photo;
        logged_in_user.name = user_name.value;
        logged_in_user.bio = user_bio.value;
        for (user of users_data) {
            if ((user_email.value == user.email) && (user_email.value != logged_in_user_email)) {
                alert("E-Mail Is Already In Use!");
                return false;
            }
            else if (user_email.value == "") {
                alert('E-Mail Cannot Be Set Empty!');
                return false;
            }
            else if (user_password.value == "") {
                alert('Password Cannot Be Set Empty!');
                return false;
            }
            else {
                localStorage.setItem("logged-in-user-email", JSON.stringify(user_email.value));
                logged_in_user.email = user_email.value;
            }
        }
        logged_in_user.password = user_password.value;
        logged_in_user.date_of_birth = user_date_of_birth.value;
        logged_in_user.gender = user_gender.value;
        logged_in_user.hometown = user_hometown.value;
        logged_in_user.current_city = user_current_city.value;
        logged_in_user.school_s = user_school_s.value;
        logged_in_user.college_s = user_college_s.value;
        logged_in_user.job_s = user_job_s.value;
        logged_in_user.project_s = user_project_s.value;
        logged_in_user.programming_languages = user_programming_languages.value;
        logged_in_user.portfolio_website = user_portfolio_website.value;
        logged_in_user.contact_email = user_contact_email.value;
        logged_in_user.contact_number = user_contact_number.value;

        localStorage.setItem("users", JSON.stringify(users_data));
        location = "Profile.html";
    }

};

// ------------------------------------------------------------------------------------------------

function delete_profile() {

    let delete_profile_confirmation = 'Are Your Sure You Want To Delete Your Profile?';

    if (confirm(delete_profile_confirmation) == true) {
        let user_id = users_data.indexOf(logged_in_user);
        users_data.splice(user_id, 1);
        localStorage.setItem("users", JSON.stringify(users_data));
        localStorage.removeItem("logged-in-user");
        localStorage.removeItem("logged-in-user-email");
        localStorage.removeItem("search-query");
        localStorage.removeItem("searched-user-email");
        alert("Your Profile Is Deleted!");
        location = "index.html";
    }
    else {
        return false;
    }

};