let user_profile_photo = document.getElementById("user-profile-photo");
let user_name = document.getElementById("user-name");
let user_bio = document.getElementById("user-bio");
let user_followers = document.getElementById("user-followers");
let user_email = document.getElementById("user-email");
let user_password = document.getElementById("user-password");
let user_date_of_birth = document.getElementById("user-date-of-birth");
let user_gender = document.getElementById("user-gender");
let user_relationship_status = document.getElementById("user-relationship-status");
let user_hometown = document.getElementById("user-hometown");
let user_current_city = document.getElementById("user-current-city");
let user_school_s = document.getElementById("user-school-s");
let user_college_s = document.getElementById("user-college-s");
let user_job_s = document.getElementById("user-job-s");
let user_project_s = document.getElementById("user-project-s");
let user_programming_language_s = document.getElementById("user-programming-language-s");
let user_portfolio_website = document.getElementById("user-portfolio-website");
let user_social_media = document.getElementById("user-social-media");
let user_contact_email = document.getElementById("user-contact-email");
let user_contact_number = document.getElementById("user-contact-number");
let user_resume = document.getElementById("user-resume");

let search_user_input = document.getElementById("search-user-input");
let follow_button = document.getElementById("follow-button");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];
let show_user_email = JSON.parse(localStorage.getItem("show-user-email")) || "";
let logged_in_user_email = JSON.parse(localStorage.getItem("logged-in-user-email")) || "";

// ------------------------------------------------------------------------------------------------

let show_user = users_data.find((filter_user) => {
    return filter_user.email == show_user_email;
});

let logged_in_user = users_data.find((filter_user) => {
    return filter_user.email == logged_in_user_email;
});

if (show_user_email == logged_in_user_email) {
    your_profile();
};

let is_followed = show_user.followers.includes(logged_in_user_email);

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    search_user_input.value = show_user.name;

    follow_button.textContent = is_followed ? "Followed" : "Follow";

    user_profile_photo.src = show_user.profile_photo;
    user_name.textContent = show_user.name;
    user_bio.textContent = show_user.bio;
    user_followers.textContent = "[" + show_user.followers.length + "]";
    user_date_of_birth.textContent = show_user.date_of_birth;
    user_gender.textContent = show_user.gender;
    user_relationship_status.textContent = show_user.relationship_status;
    user_hometown.textContent = show_user.hometown;
    user_current_city.textContent = show_user.current_city;
    user_school_s.textContent = show_user.school_s.join("\n");
    user_college_s.textContent = show_user.college_s.join("\n");
    user_job_s.textContent = show_user.job_s.join("\n");
    user_project_s.textContent = show_user.project_s.join("\n");
    user_programming_language_s.textContent = show_user.programming_language_s.join("\n");
    user_portfolio_website.textContent = show_user.portfolio_website;
    user_social_media.textContent = show_user.social_media.join("\n");
    user_contact_email.textContent = show_user.contact_email;
    user_contact_number.textContent = show_user.contact_number;

});

// ------------------------------------------------------------------------------------------------

function search_users() {

    if (search_user_input.value != "") {
        location = `Search.html?name=${search_user_input.value}`;
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

function explore() {

    location = "Explore.html";

};

// ------------------------------------------------------------------------------------------------

function your_profile() {

    location = "Profile.html";

};

// ------------------------------------------------------------------------------------------------

function follow_user() {

    // for (user of users_data) {
    //     user.followers = [];
    //     user.following = [];
    //     localStorage.setItem("users", JSON.stringify(users_data));
    // }

    // --------------------------------------------------------------------------------------------

    if (show_user.followers.includes(logged_in_user_email)) {
        alert("You Have Already Followed The User!");
        return false;
    }
    else {
        show_user.followers.push(logged_in_user_email);
        logged_in_user.followings.push(show_user_email);
        localStorage.setItem("users", JSON.stringify(users_data));
        user_followers.textContent = "[" + show_user.followers.length + "]";
        follow_button.textContent = "Followed";
    }

};

// ------------------------------------------------------------------------------------------------

function base_64_to_blob_url(base_64_url) {

    let [prefix, base_64_string] = base_64_url.split(',');
    let contentType = prefix.match(/:(.*?);/)[1];
    let byte_characters = atob(base_64_string);
    let byte_numbers = new Array(byte_characters.length);

    for (let i = 0; i < byte_characters.length; i++) {
        byte_numbers[i] = byte_characters.charCodeAt(i);
    }

    let byte_array = new Uint8Array(byte_numbers);
    let blob = new Blob([byte_array], { type: contentType });
    return URL.createObjectURL(blob);

};

function show_resume() {

    if (show_user.resume) {
        let blob_url = base_64_to_blob_url(show_user.resume);
        window.open(blob_url, "_blank");
    }
    else {
        alert("Resume Is Not Available!");
    }

};