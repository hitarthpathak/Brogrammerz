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

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];
let logged_in_user_email = JSON.parse(localStorage.getItem("logged-in-user-email")) || "";
let searched_user_email = JSON.parse(localStorage.getItem("searched-user-email")) || "";

// ------------------------------------------------------------------------------------------------

let searched_user = users_data.find((filter_user) => {
    return filter_user.email == searched_user_email;
});

if (searched_user_email == logged_in_user_email) {
    your_profile();
}

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    search_user_input.value = searched_user.name;

    user_profile_photo.src = searched_user.profile_photo;
    user_name.innerText = searched_user.name;
    user_bio.innerText = searched_user.bio;
    user_followers.innerText = searched_user.followers;
    user_date_of_birth.innerText = searched_user.date_of_birth;
    user_gender.innerText = searched_user.gender;
    user_hometown.innerText = searched_user.hometown;
    user_current_city.innerText = searched_user.current_city;
    user_school_s.innerText = searched_user.school_s;
    user_college_s.innerText = searched_user.college_s;
    user_job_s.innerText = searched_user.job_s;
    user_project_s.innerText = searched_user.project_s;
    user_programming_languages.innerText = searched_user.programming_languages;
    user_portfolio_website.innerText = searched_user.portfolio_website;
    user_contact_email.innerText = searched_user.contact_email;
    user_contact_number.innerText = searched_user.contact_number;

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

function your_profile() {

    location = "Profile.html";

};

// ------------------------------------------------------------------------------------------------

function ranking() {

    alert("Working On It!");

};

// ------------------------------------------------------------------------------------------------

function follow_user() {

    alert("Working On It!");

};