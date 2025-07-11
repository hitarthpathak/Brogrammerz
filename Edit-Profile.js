let user_profile_photo = document.getElementById("display-user-profile-photo");
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

function check_validation() {

    let name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-. ]{2,50}$/i;
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
    let bio_pattern = /^[\s\S]{0,500}$/i;
    let date_of_birth_pattern = /^(?:(?:31-(?:0?[13578]|1[02]))|(?:29|30)-(?:0?[1,3-9]|1[0-2]))-(?:19|20)\d\d$|^29-0?2-(?:19|20)(?:[02468][048]|[13579][26])$|^(?:0?[1-9]|1\d|2[0-8])-(?:0?[1-9]|1[0-2])-(?:19|20)\d\d$/;
    let gender_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    let relationship_status_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    let hometown_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    let current_city_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    let school_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    let college_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    let job_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    let project_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    let programming_language_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    let portfolio_website_pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    let social_media_pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/m;
    let contact_email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let contact_number_pattern = /^[+]?[\d\s\-()]{7,15}$/;

    let name_validation = name_pattern.test(user_name.value);
    let bio_validation = bio_pattern.test(user_bio.value);
    let email_validation = email_pattern.test(user_email.value);
    let password_validation = password_pattern.test(user_password.value);
    let date_of_birth_validation = date_of_birth_pattern.test(user_date_of_birth.value);
    let gender_validation = gender_pattern.test(user_gender.value);
    let relationship_status_validation = relationship_status_pattern.test(user_relationship_status.value);
    let hometown_validation = hometown_pattern.test(user_hometown.value);
    let current_city_validation = current_city_pattern.test(user_current_city.value);
    let school_s_validation = school_s_pattern.test(user_school_s.value);
    let college_s_validation = college_s_pattern.test(user_college_s.value);
    let job_s_validation = job_s_pattern.test(user_job_s.value);
    let project_s_validation = project_s_pattern.test(user_project_s.value);
    let programming_language_s_validation = programming_language_s_pattern.test(user_programming_language_s.value);
    let portfolio_website_validation = portfolio_website_pattern.test(user_portfolio_website.value);
    let social_media_validation = social_media_pattern.test(user_social_media.value);
    let contact_email_validation = contact_email_pattern.test(user_contact_email.value);
    let contact_number_validation = contact_number_pattern.test(user_contact_number.value);

    if (!name_validation && user_name.value != "") {
        alert("Name Is Not Valid!");
        return false;
    }
    if (!bio_validation && user_bio.value != "") {
        alert("Bio Is Not Valid!");
        return false;
    }
    if (!email_validation && user_email.value != "") {
        alert("E-Mail Is Not Valid!");
        return false;
    }
    if (!password_validation && user_password.value != "") {
        alert("Password Is Not Valid!");
        return false;
    }
    if (!date_of_birth_validation && user_date_of_birth.value != "") {
        alert("Date Of Birth Is Not Valid!");
        return false;
    }
    if (!gender_validation && user_gender.value != "") {
        alert("Gender Is Not Valid!");
        return false;
    }
    if (!relationship_status_validation && user_relationship_status.value != "") {
        alert("Relationship Status Is Not Valid!");
        return false;
    }
    if (!hometown_validation && user_hometown.value != "") {
        alert("Hometown Is Not Valid!");
        return false;
    }
    if (!current_city_validation && user_current_city.value != "") {
        alert("Current City Is Not Valid!");
        return false;
    }
    if (!school_s_validation && user_school_s.value != "") {
        alert("School(s) Is Not Valid!");
        return false;
    }
    if (!college_s_validation && user_college_s.value != "") {
        alert("College(s) Is Not Valid!");
        return false;
    }
    if (!job_s_validation && user_job_s.value != "") {
        alert("Job(s) Is Not Valid!");
        return false;
    }
    if (!project_s_validation && user_project_s.value != "") {
        alert("Project(s) Is Not Valid!");
        return false;
    }
    if (!programming_language_s_validation && user_programming_language_s.value != "") {
        alert("Programming Language(s) Is Not Valid!");
        return false;
    }
    if (!portfolio_website_validation && user_portfolio_website.value != "") {
        alert("Portfolio Website(s) Is Not Valid!");
        return false;
    }
    if (!social_media_validation && user_social_media.value != "") {
        alert("Social Media Is Not Valid!");
        return false;
    }
    if (!contact_email_validation && user_contact_email.value != "") {
        alert("Contact E-Mail Is Not Valid!");
        return false;
    }
    if (!contact_number_validation && user_contact_number.value != "") {
        alert("Contact Number Is Not Valid!");
        return false;
    }

    return true;

};

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    if (!logged_in_user) {
        alert("User Is Not Logged In! Redirecting To Login Page.");
        location = "index.html";
    }

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    user_name.value = logged_in_user.name;
    user_bio.value = logged_in_user.bio;
    user_followers.textContent = logged_in_user.followers;
    user_date_of_birth.value = logged_in_user.date_of_birth;
    user_gender.value = logged_in_user.gender;
    user_relationship_status.value = logged_in_user.relationship_status;
    user_hometown.value = logged_in_user.hometown;
    user_current_city.value = logged_in_user.current_city;
    user_school_s.value = logged_in_user.school_s;
    user_college_s.value = logged_in_user.college_s;
    user_job_s.value = logged_in_user.job_s;
    user_project_s.value = logged_in_user.project_s;
    user_programming_language_s.value = logged_in_user.programming_language_s;
    user_portfolio_website.value = logged_in_user.portfolio_website;
    user_social_media.value = logged_in_user.social_media;
    user_contact_email.value = logged_in_user.contact_email;
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

function ranking() {

    alert("Working On It!");

};

// ------------------------------------------------------------------------------------------------

function save_profile() {

    if (check_validation()) {

        if (edit_email_password_box.classList.contains("edit-email-password-hide")) {
            logged_in_user.profile_photo = logged_in_user.profile_photo;
            logged_in_user.name = user_name.value;
            logged_in_user.bio = user_bio.value;
            logged_in_user.followers = logged_in_user.followers;
            logged_in_user.email = logged_in_user.email;
            logged_in_user.password = logged_in_user.password;
            logged_in_user.date_of_birth = user_date_of_birth.value;
            logged_in_user.gender = user_gender.value;
            logged_in_user.relationship_status = user_relationship_status.value;
            logged_in_user.hometown = user_hometown.value;
            logged_in_user.current_city = user_current_city.value;
            logged_in_user.school_s = user_school_s.value;
            logged_in_user.college_s = user_college_s.value;
            logged_in_user.job_s = user_job_s.value;
            logged_in_user.project_s = user_project_s.value;
            logged_in_user.programming_language_s = user_programming_language_s.value;
            logged_in_user.portfolio_website = user_portfolio_website.value;
            logged_in_user.social_media = user_social_media.value;
            logged_in_user.contact_email = user_contact_email.value;
            logged_in_user.contact_number = user_contact_number.value;
            logged_in_user.resume = logged_in_user.resume;

            localStorage.setItem("users", JSON.stringify(users_data));
            location = "Profile.html";
        }
        else {
            logged_in_user.profile_photo = logged_in_user.profile_photo;
            logged_in_user.name = user_name.value;
            logged_in_user.bio = user_bio.value;
            logged_in_user.followers = logged_in_user.followers;

            if (user_email.value == "") {
                alert('E-Mail Cannot Be Set Empty!');
                return false;
            }
            if (user_password.value == "") {
                alert('Password Cannot Be Set Empty!');
                return false;
            }
            for (user of users_data) {
                if ((user_email.value == user.email) && (user_email.value != logged_in_user_email)) {
                    alert("E-Mail Is Already In Use!");
                    return false;
                }
            }
            logged_in_user.email = user_email.value;
            localStorage.setItem("logged-in-user-email", JSON.stringify(user_email.value));

            logged_in_user.password = user_password.value;
            logged_in_user.date_of_birth = user_date_of_birth.value;
            logged_in_user.gender = user_gender.value;
            logged_in_user.relationship_status = user_relationship_status.value;
            logged_in_user.hometown = user_hometown.value;
            logged_in_user.current_city = user_current_city.value;
            logged_in_user.school_s = user_school_s.value;
            logged_in_user.college_s = user_college_s.value;
            logged_in_user.job_s = user_job_s.value;
            logged_in_user.project_s = user_project_s.value;
            logged_in_user.programming_language_s = user_programming_language_s.value;
            logged_in_user.portfolio_website = user_portfolio_website.value;
            logged_in_user.social_media = user_social_media.value;
            logged_in_user.contact_email = user_contact_email.value;
            logged_in_user.contact_number = user_contact_number.value;
            logged_in_user.resume = logged_in_user.resume;

            localStorage.setItem("users", JSON.stringify(users_data));
            location = "Profile.html";
        }

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

function delete_profile() {

    let delete_profile_confirmation = 'Are You Sure You Want To Delete Your Profile?';

    if (confirm(delete_profile_confirmation) == true) {
        let user_id = users_data.indexOf(logged_in_user);
        users_data.splice(user_id, 1);

        for (let other_users_email in users_followers) {
            users_followers[other_users_email] = users_followers[other_users_email].filter(
                other_followers_email => other_followers_email != logged_in_user_email
            );
        }

        delete users_followers[logged_in_user_email];

        for (let user of users_data) {
            let followers_list = users_followers[user.email] || [];
            user.followers = followers_list.length.toString();
        }

        localStorage.setItem("users", JSON.stringify(users_data));
        localStorage.setItem("users-followers", JSON.stringify(users_followers));
        localStorage.removeItem("logged-in-user-email");
        localStorage.removeItem("searched-user-email");
        localStorage.removeItem("search-query");
        alert("Your Profile Is Deleted!");
        location = "index.html";
    }
    else {
        return false;
    }

};

// ------------------------------------------------------------------------------------------------

function upload_profile_photo() {

    let file = event.target.files[0];

    if (file.size <= (1024 * 1024)) {
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
    }
    else {
        alert('File Is Too Big (1MB Allowed!)');
    }

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

function upload_resume() {

    let file = event.target.files[0];

    if (file.size <= (1024 * 1024)) {
        if (file) {
            let reader = new FileReader();
            reader.onloadend = () => {
                let base_64_string = reader.result;
                logged_in_user.resume = base_64_string;
            };
            reader.readAsDataURL(file);
        }
        else {
            return false;
        }
    }
    else {
        alert('File Is Too Big (1MB Allowed!)');
    }

};

// ------------------------------------------------------------------------------------------------

function delete_resume() {

    if (logged_in_user.resume != "") {
        logged_in_user.resume = "";
        localStorage.setItem("users", JSON.stringify(users_data));
        alert("Your Resume Is Deleted!");
    }
    else {
        alert("Resume Is Not Available!");
    }

};