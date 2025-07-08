let user_profile_photo = document.getElementById("display-user-profile-photo");
let display_user_name = document.getElementById("display-user-name");
let display_user_bio = document.getElementById("display-user-bio");
let display_user_followers = document.getElementById("display-user-followers");
let display_user_date_of_birth = document.getElementById("display-user-date-of-birth");
let display_user_gender = document.getElementById("display-user-gender");
let display_user_relationship_status = document.getElementById("display-user-relationship-status");
let display_user_hometown = document.getElementById("display-user-hometown");
let display_user_current_city = document.getElementById("display-user-current-city");
let display_user_school_s = document.getElementById("display-user-school-s");
let display_user_college_s = document.getElementById("display-user-college-s");
let display_user_job_s = document.getElementById("display-user-job-s");
let display_user_project_s = document.getElementById("display-user-project-s");
let display_user_programming_language_s = document.getElementById("display-user-programming-language-s");
let display_user_portfolio_website = document.getElementById("display-user-portfolio-website");
let display_user_contact_email = document.getElementById("display-user-contact-email");
let display_user_contact_number = document.getElementById("display-user-contact-number");

let search_user_input = document.getElementById("search-user-input");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];
let logged_in_user_email = JSON.parse(localStorage.getItem("logged-in-user-email")) || "";

// ------------------------------------------------------------------------------------------------

let logged_in_user = users_data.find((filter_user) => {
    return filter_user.email == logged_in_user_email;
});

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    if (!logged_in_user) {
        alert("User Is Not Logged In! Redirecting To Login Page.");
        location.href = "index.html";
    }

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    display_user_name.textContent = logged_in_user.name;
    display_user_bio.textContent = logged_in_user.bio;
    display_user_followers.textContent = logged_in_user.followers;
    display_user_date_of_birth.textContent = logged_in_user.date_of_birth;
    display_user_gender.textContent = logged_in_user.gender;
    display_user_relationship_status.textContent = logged_in_user.relationship_status;
    display_user_hometown.textContent = logged_in_user.hometown;
    display_user_current_city.textContent = logged_in_user.current_city;
    display_user_school_s.textContent = logged_in_user.school_s;
    display_user_college_s.textContent = logged_in_user.college_s;
    display_user_job_s.textContent = logged_in_user.job_s;
    display_user_project_s.textContent = logged_in_user.project_s;
    display_user_programming_language_s.textContent = logged_in_user.programming_language_s;
    display_user_portfolio_website.textContent = logged_in_user.portfolio_website;
    display_user_contact_email.textContent = logged_in_user.contact_email;
    display_user_contact_number.textContent = logged_in_user.contact_number;

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

function ranking() {

    alert("Working On It!");

};

// ------------------------------------------------------------------------------------------------

function edit_profile() {

    location = "Edit-Profile.html";

};

// ------------------------------------------------------------------------------------------------

function logout() {

    localStorage.removeItem("logged-in-user-email");
    localStorage.removeItem("searched-user-email");
    localStorage.removeItem("search-query");
    location = "index.html";

};

// ------------------------------------------------------------------------------------------------

function delete_profile() {

    let delete_profile_confirmation = 'Are You Sure You Want To Delete Your Profile?';

    if (confirm(delete_profile_confirmation) == true) {
        let user_id = users_data.indexOf(logged_in_user);
        users_data.splice(user_id, 1);
        localStorage.setItem("users", JSON.stringify(users_data));
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
