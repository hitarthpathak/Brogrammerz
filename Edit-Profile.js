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
let user_school_s = document.querySelectorAll(".user-school-s");
let user_college_s = document.querySelectorAll(".user-college-s");
let user_job_s = document.querySelectorAll(".user-job-s");
let user_project_s = document.querySelectorAll(".user-project-s");
let user_programming_language_s = document.querySelectorAll(".user-programming-language-s");
let user_portfolio_website = document.getElementById("user-portfolio-website");
let user_social_media = document.querySelectorAll(".user-social-media");
let user_contact_email = document.getElementById("user-contact-email");
let user_contact_number = document.getElementById("user-contact-number");
let user_resume = document.getElementById("user-resume");

let search_user_input = document.getElementById("search-user-input");
let edit_email_password_box = document.getElementById("edit-email-password-box");
let resume_box = document.getElementById("resume-box");
let delete_resume_button = document.getElementById("delete-resume");

let multiple_data_school_s = document.getElementById("multiple-data-school-s");
let multiple_data_college_s = document.getElementById("multiple-data-college-s");
let multiple_data_job_s = document.getElementById("multiple-data-job-s");
let multiple_data_project_s = document.getElementById("multiple-data-project-s");
let multiple_data_programming_language_s = document.getElementById("multiple-data-programming-language-s");
let multiple_data_social_media = document.getElementById("multiple-data-social-media");

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
        location = "index.html";
    }

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    user_name.value = logged_in_user.name;
    user_bio.value = logged_in_user.bio;
    user_followers.textContent = "[" + logged_in_user.followers.length + "]";
    user_date_of_birth.value = logged_in_user.date_of_birth;
    user_gender.value = logged_in_user.gender;
    user_relationship_status.value = logged_in_user.relationship_status;
    user_hometown.value = logged_in_user.hometown;
    user_current_city.value = logged_in_user.current_city;

    multiple_data_school_s.innerHTML = "";
    if (logged_in_user.school_s != "") {
        logged_in_user.school_s.forEach((school) => {
            let new_input = document.createElement("textarea");
            new_input.classList.add("edit-page-input", "user-school-s");
            new_input.placeholder = "Enter Your School (School Name, City)";
            new_input.value = school;
            multiple_data_school_s.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("textarea");
        new_input.classList.add("edit-page-input", "user-school-s");
        new_input.placeholder = "Enter Your School (School Name, City)";
        multiple_data_school_s.appendChild(new_input);
    }

    multiple_data_college_s.innerHTML = "";
    if (logged_in_user.college_s != "") {
        logged_in_user.college_s.forEach((college) => {
            let new_input = document.createElement("textarea");
            new_input.classList.add("edit-page-input", "user-college-s");
            new_input.placeholder = "Enter Your College (College Name, City)";
            new_input.value = college;
            multiple_data_college_s.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("textarea");
        new_input.classList.add("edit-page-input", "user-college-s");
        new_input.placeholder = "Enter Your College (College Name, City)";
        multiple_data_college_s.appendChild(new_input);
    }

    multiple_data_job_s.innerHTML = "";
    if (logged_in_user.job_s != "") {
        logged_in_user.job_s.forEach((job) => {
            let new_input = document.createElement("textarea");
            new_input.classList.add("edit-page-input", "user-job-s");
            new_input.placeholder = "Enter Your Job (Position, Company Name)";
            new_input.value = job;
            multiple_data_job_s.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("textarea");
        new_input.classList.add("edit-page-input", "user-job-s");
        new_input.placeholder = "Enter Your Job (Position, Company Name)";
        multiple_data_job_s.appendChild(new_input);
    }

    multiple_data_project_s.innerHTML = "";
    if (logged_in_user.project_s != "") {
        logged_in_user.project_s.forEach((project) => {
            let new_input = document.createElement("textarea");
            new_input.classList.add("edit-page-input", "user-project-s");
            new_input.placeholder = "Enter Your Project (Title, Description)";
            new_input.value = project;
            multiple_data_project_s.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("textarea");
        new_input.classList.add("edit-page-input", "user-project-s");
        new_input.placeholder = "Enter Your Project (Title, Description)";
        multiple_data_project_s.appendChild(new_input);
    }

    multiple_data_programming_language_s.innerHTML = "";
    if (logged_in_user.programming_language_s != "") {
        logged_in_user.programming_language_s.forEach((programming_language) => {
            let new_input = document.createElement("input");
            new_input.classList.add("edit-page-input", "user-programming-language-s");
            new_input.placeholder = "Enter Your Programming Language";
            new_input.value = programming_language;
            multiple_data_programming_language_s.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("input");
        new_input.classList.add("edit-page-input", "user-programming-language-s");
        new_input.placeholder = "Enter Your Programming Language";
        multiple_data_programming_language_s.appendChild(new_input);
    }

    user_portfolio_website.value = logged_in_user.portfolio_website;

    multiple_data_social_media.innerHTML = "";
    if (logged_in_user.social_media != "") {
        logged_in_user.social_media.forEach((social_media) => {
            let new_input = document.createElement("input");
            new_input.classList.add("edit-page-input", "user-social-media");
            new_input.placeholder = "Enter Your Social Media (Link)";
            new_input.value = social_media;
            multiple_data_social_media.appendChild(new_input);
        });
    }
    else {
        let new_input = document.createElement("input");
        new_input.classList.add("edit-page-input", "user-social-media");
        new_input.placeholder = "Enter Your Social Media (Link)";
        multiple_data_social_media.appendChild(new_input);
    }

    user_contact_email.value = logged_in_user.contact_email;
    user_contact_number.value = logged_in_user.contact_number;

    if (logged_in_user.resume == "") {
        resume_box.innerHTML = "";
        delete_resume_button.style.display = "none";
        resume_box.appendChild(user_resume);
    }
    else {
        resume_box.style.display = "flex";
        resume_box.style.alignItems = "center";
        resume_box.style.justifyContent = "start";
        resume_box.style.gap = "0.5rem";

        user_resume.style.display = "none";

        let change_resume = document.createElement("button");
        change_resume.textContent = "Change Resume";
        change_resume.addEventListener("click", () => {
            user_resume.click();
        });

        delete_resume_button.style.display = "inline-block";

        resume_box.appendChild(change_resume);
        resume_box.appendChild(delete_resume_button);
    }

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

    location = "Ranking.html";

};

// ------------------------------------------------------------------------------------------------

function explore() {

    location = "Explore.html";

};

// ------------------------------------------------------------------------------------------------

function save_profile() {

    if (check_validation()) {

        if (edit_email_password_box.classList.contains("edit-email-password-hide")) {

            logged_in_user.profile_photo = logged_in_user.profile_photo;

            if (user_name.value == "") {
                alert("Name Cannot Be Set Empty!");
                return false;
            }
            logged_in_user.name = user_name.value;

            logged_in_user.bio = user_bio.value;
            logged_in_user.followers = logged_in_user.followers;
            logged_in_user.email = logged_in_user.email;
            logged_in_user.password = logged_in_user.password;

            if (user_date_of_birth.value == "") {
                alert("Date Of Birth Cannot Be Set Empty!");
                return false;
            }
            logged_in_user.date_of_birth = user_date_of_birth.value;

            logged_in_user.gender = user_gender.value;
            logged_in_user.relationship_status = user_relationship_status.value;
            logged_in_user.hometown = user_hometown.value;
            logged_in_user.current_city = user_current_city.value;

            logged_in_user.school_s = [];
            let user_school_s = document.querySelectorAll(".user-school-s");
            user_school_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.school_s.push(input.value.trim());
                }
            });

            logged_in_user.college_s = [];
            let user_college_s = document.querySelectorAll(".user-college-s");
            user_college_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.college_s.push(input.value.trim());
                }
            });

            logged_in_user.job_s = [];
            let user_job_s = document.querySelectorAll(".user-job-s");
            user_job_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.job_s.push(input.value.trim());
                }
            });

            logged_in_user.project_s = [];
            let user_project_s = document.querySelectorAll(".user-project-s");
            user_project_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.project_s.push(input.value.trim());
                }
            });

            logged_in_user.programming_language_s = [];
            let user_programming_language_s = document.querySelectorAll(".user-programming-language-s");
            user_programming_language_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.programming_language_s.push(input.value.trim());
                }
            });

            logged_in_user.portfolio_website = user_portfolio_website.value;

            logged_in_user.social_media = [];
            let user_social_media = document.querySelectorAll(".user-social-media");
            user_social_media.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.social_media.push(input.value.trim());
                }
            });

            logged_in_user.contact_email = user_contact_email.value;
            logged_in_user.contact_number = user_contact_number.value;
            logged_in_user.resume = logged_in_user.resume;

            localStorage.setItem("users", JSON.stringify(users_data));
            location = "Profile.html";

        }
        else {

            logged_in_user.profile_photo = logged_in_user.profile_photo;

            if (user_name.value == "") {
                alert("Name Cannot Be Set Empty!");
                return false;
            }
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

            if (user_date_of_birth.value == "") {
                alert("Date Of Birth Cannot Be Set Empty!");
                return false;
            }
            logged_in_user.date_of_birth = user_date_of_birth.value;

            logged_in_user.gender = user_gender.value;
            logged_in_user.relationship_status = user_relationship_status.value;
            logged_in_user.hometown = user_hometown.value;
            logged_in_user.current_city = user_current_city.value;

            logged_in_user.school_s = [];
            let user_school_s = document.querySelectorAll(".user-school-s");
            user_school_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.school_s.push(input.value.trim());
                }
            });

            logged_in_user.college_s = [];
            let user_college_s = document.querySelectorAll(".user-college-s");
            user_college_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.college_s.push(input.value.trim());
                }
            });

            logged_in_user.job_s = [];
            let user_job_s = document.querySelectorAll(".user-job-s");
            user_job_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.job_s.push(input.value.trim());
                }
            });

            logged_in_user.project_s = [];
            let user_project_s = document.querySelectorAll(".user-project-s");
            user_project_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.project_s.push(input.value.trim());
                }
            });

            logged_in_user.programming_language_s = [];
            let user_programming_language_s = document.querySelectorAll(".user-programming-language-s");
            user_programming_language_s.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.programming_language_s.push(input.value.trim());
                }
            });

            logged_in_user.portfolio_website = user_portfolio_website.value;

            logged_in_user.social_media = [];
            let user_social_media = document.querySelectorAll(".user-social-media");
            user_social_media.forEach((input) => {
                if (input.value !== "") {
                    logged_in_user.social_media.push(input.value.trim());
                }
            });

            logged_in_user.contact_email = user_contact_email.value;
            logged_in_user.contact_number = user_contact_number.value;
            logged_in_user.resume = logged_in_user.resume;

            localStorage.setItem("users", JSON.stringify(users_data));
            location = "Profile.html";

        }

    }

};

// ------------------------------------------------------------------------------------------------

function check_validation() {

    // let name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-. ]{2,50}$/i;
    // let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;
    // let bio_pattern = /^[\s\S]{0,500}$/i;
    // let date_of_birth_pattern = /^(?:(?:31-(?:0?[13578]|1[02]))|(?:29|30)-(?:0?[1,3-9]|1[0-2]))-(?:19|20)\d\d$|^29-0?2-(?:19|20)(?:[02468][048]|[13579][26])$|^(?:0?[1-9]|1\d|2[0-8])-(?:0?[1-9]|1[0-2])-(?:19|20)\d\d$/;
    // let gender_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    // let relationship_status_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    // let hometown_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    // let current_city_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ0-9 ,.'-]{2,100}$/i;
    // let school_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    // let college_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    // let job_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    // let project_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    // let programming_language_s_pattern = /^(?:[a-zA-Z0-9À-ÖØ-öø-ÿ ,.'\-()&]{2,100}\r?\n?)*$/i;
    // let portfolio_website_pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
    // let social_media_pattern = /^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/m;
    // let contact_email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // let contact_number_pattern = /^[+]?[\d\s\-()]{7,15}$/;

    // let name_validation = name_pattern.test(user_name.value);
    // let bio_validation = bio_pattern.test(user_bio.value);
    // let email_validation = email_pattern.test(user_email.value);
    // let password_validation = password_pattern.test(user_password.value);
    // let date_of_birth_validation = date_of_birth_pattern.test(user_date_of_birth.value);
    // let gender_validation = gender_pattern.test(user_gender.value);
    // let relationship_status_validation = relationship_status_pattern.test(user_relationship_status.value);
    // let hometown_validation = hometown_pattern.test(user_hometown.value);
    // let current_city_validation = current_city_pattern.test(user_current_city.value);
    // let school_s_validation = school_s_pattern.test(user_school_s.value);
    // let college_s_validation = college_s_pattern.test(user_college_s.value);
    // let job_s_validation = job_s_pattern.test(user_job_s.value);
    // let project_s_validation = project_s_pattern.test(user_project_s.value);
    // let programming_language_s_validation = programming_language_s_pattern.test(user_programming_language_s.value);
    // let portfolio_website_validation = portfolio_website_pattern.test(user_portfolio_website.value);
    // let social_media_validation = social_media_pattern.test(user_social_media.value);
    // let contact_email_validation = contact_email_pattern.test(user_contact_email.value);
    // let contact_number_validation = contact_number_pattern.test(user_contact_number.value);

    // if (!name_validation && user_name.value != "") {
    //     alert("Name Is Not Valid!");
    //     return false;
    // }
    // if (!bio_validation && user_bio.value != "") {
    //     alert("Bio Is Not Valid!");
    //     return false;
    // }
    // if (!email_validation && user_email.value != "") {
    //     alert("E-Mail Is Not Valid!");
    //     return false;
    // }
    // if (!password_validation && user_password.value != "") {
    //     alert("Password Is Not Valid!");
    //     return false;
    // }
    // if (!date_of_birth_validation && user_date_of_birth.value != "") {
    //     alert("Date Of Birth Is Not Valid!");
    //     return false;
    // }
    // if (!gender_validation && user_gender.value != "") {
    //     alert("Gender Is Not Valid!");
    //     return false;
    // }
    // if (!relationship_status_validation && user_relationship_status.value != "") {
    //     alert("Relationship Status Is Not Valid!");
    //     return false;
    // }
    // if (!hometown_validation && user_hometown.value != "") {
    //     alert("Hometown Is Not Valid!");
    //     return false;
    // }
    // if (!current_city_validation && user_current_city.value != "") {
    //     alert("Current City Is Not Valid!");
    //     return false;
    // }
    // if (!school_s_validation && user_school_s.value != "") {
    //     alert("School(s) Is Not Valid!");
    //     return false;
    // }
    // if (!college_s_validation && user_college_s.value != "") {
    //     alert("College(s) Is Not Valid!");
    //     return false;
    // }
    // if (!job_s_validation && user_job_s.value != "") {
    //     alert("Job(s) Is Not Valid!");
    //     return false;
    // }
    // if (!project_s_validation && user_project_s.value != "") {
    //     alert("Project(s) Is Not Valid!");
    //     return false;
    // }
    // if (!programming_language_s_validation && user_programming_language_s.value != "") {
    //     alert("Programming Language(s) Is Not Valid!");
    //     return false;
    // }
    // if (!portfolio_website_validation && user_portfolio_website.value != "") {
    //     alert("Portfolio Website(s) Is Not Valid!");
    //     return false;
    // }
    // if (!social_media_validation && user_social_media.value != "") {
    //     alert("Social Media Is Not Valid!");
    //     return false;
    // }
    // if (!contact_email_validation && user_contact_email.value != "") {
    //     alert("Contact E-Mail Is Not Valid!");
    //     return false;
    // }
    // if (!contact_number_validation && user_contact_number.value != "") {
    //     alert("Contact Number Is Not Valid!");
    //     return false;
    // }

    return true;

};

// ------------------------------------------------------------------------------------------------

function show_connections_box() {

    let existing_box = document.querySelector(".show-connections-box");
    if (existing_box) return true;

    let body = document.getElementById("body");
    let connections_box = document.createElement("div");
    connections_box.classList.add("show-connections-box");
    connections_box.innerHTML =
        `

            <div class="top">

                <span>Your Connections</span>

            </div>

            <div class="button-box">

                <button id="followers-button" class="show-connections" onclick="show_followers_list()">Followers</button>
                
                <button id="followings-button" onclick="show_followings_list()">Following</button>

                <button id="x-button" onclick="hide_connections_box()">X</button>

            </div>

            <div id="list-box"></div>
            
        `
    body.appendChild(connections_box);

    show_followers_list();

};

function show_followers_list() {

    let followers_button = document.getElementById("followers-button");
    let followings_button = document.getElementById("followings-button");
    let list_box = document.getElementById("list-box");

    followers_button.classList.add("show-connections");
    followings_button.classList.remove("show-connections");

    list_box.innerHTML = "";

    logged_in_user.followers.forEach((follower_email) => {
        let follower_user = users_data.find((user) => user.email == follower_email);

        let connected_user_box = document.createElement("div");
        connected_user_box.classList.add("connected-user-box");

        let connected_user = document.createElement("div");
        connected_user.classList.add("connected-user");
        connected_user.innerHTML =
            `
                
                <div class="connected-user-img-box">
                
                    <img src="${follower_user.profile_photo}" alt="Image Not Available">
    
                </div>
                
                <div class="connected-user-data">
                
                    <p>${follower_user.name}</p>
                
                </div>
                
            `;

        connected_user.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(follower_user.email));
            location = "User.html";
        });

        let remove_user = document.createElement("button");
        remove_user.id = "remove";
        remove_user.innerText = "Remove";

        remove_user.addEventListener("click", () => {
            logged_in_user.followers = logged_in_user.followers.filter((user) => user != follower_user.email);
            follower_user.followings = follower_user.followings.filter((user) => user != logged_in_user.email);
            localStorage.setItem("users", JSON.stringify(users_data));
            show_followers_list();
            display_user_followers.textContent = "[" + logged_in_user.followers.length + "]";
        })

        connected_user_box.appendChild(connected_user);
        connected_user_box.appendChild(remove_user);

        list_box.appendChild(connected_user_box);
    });

};

function show_followings_list() {

    let followers_button = document.getElementById("followers-button");
    let followings_button = document.getElementById("followings-button");
    let list_box = document.getElementById("list-box");

    followers_button.classList.remove("show-connections");
    followings_button.classList.add("show-connections");

    list_box.innerHTML = "";

    logged_in_user.followings.forEach((following_email) => {
        let following_user = users_data.find((user) => user.email == following_email);

        let connected_user_box = document.createElement("div");
        connected_user_box.classList.add("connected-user-box");

        let connected_user = document.createElement("div");
        connected_user.classList.add("connected-user");
        connected_user.innerHTML =
            `
                
                <div class="connected-user-img-box">
                
                    <img src="${following_user.profile_photo}" alt="Image Not Available">
    
                </div>
                
                <div class="connected-user-data">
                
                    <p>${following_user.name}</p>
                
                </div>
                
            `;

        connected_user.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(following_user.email));
            location = "User.html";
        });

        let remove_user = document.createElement("button");
        remove_user.id = "remove";
        remove_user.innerText = "Remove";

        remove_user.addEventListener("click", () => {
            logged_in_user.followings = logged_in_user.followings.filter((user) => user != following_user.email);
            following_user.followers = following_user.followers.filter((user) => user != logged_in_user.email);
            localStorage.setItem("users", JSON.stringify(users_data));
            show_followings_list();
        })

        connected_user_box.appendChild(connected_user);
        connected_user_box.appendChild(remove_user);

        list_box.appendChild(connected_user_box);
    });

};

function hide_connections_box() {

    let connections_box = document.querySelector(".show-connections-box");
    if (!connections_box) return true;

    connections_box.classList.remove("show-connections-box");
    connections_box.classList.add("hide-connections-box");

    connections_box.addEventListener("animationend", () => {
        connections_box.remove();
    }, { once: true });

};

// ------------------------------------------------------------------------------------------------

function logout() {

    localStorage.removeItem("logged-in-user-email");
    localStorage.removeItem("show-user-email");
    location = "index.html";

};

// ------------------------------------------------------------------------------------------------

function delete_profile() {

    let delete_profile_confirmation = 'Are You Sure You Want To Delete Your Profile?';

    if (confirm(delete_profile_confirmation) == true) {

        let user_id = users_data.indexOf(logged_in_user);
        users_data.splice(user_id, 1);

        for (let user of users_data) {
            if (user.followers.includes(logged_in_user_email)) {
                let follower_id = user.followers.indexOf(logged_in_user_email);
                user.followers.splice(follower_id, 1)
            }
            else if (user.followings.includes(logged_in_user_email)) {
                let following_id = user.followings.indexOf(logged_in_user_email);
                user.followings.splice(following_id, 1)
            }
        }

        localStorage.setItem("users", JSON.stringify(users_data));
        localStorage.removeItem("logged-in-user-email");
        localStorage.removeItem("show-user-email");
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
        alert('File Is Too Big! (1MB Allowed)');
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

function show_password() {

    if (user_password.type == "password") {
        user_password.type = "text";
    }
    else {
        user_password.type = "password";
    }

};

// ------------------------------------------------------------------------------------------------

function add_more_school_s() {

    let new_input = document.createElement("textarea");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-school-s");
    new_input.placeholder = "Enter Your School (School Name, City)";
    multiple_data_school_s.appendChild(new_input);

};

function add_more_college_s() {

    let new_input = document.createElement("textarea");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-college-s");
    new_input.placeholder = "Enter Your College (College Name, City)";
    multiple_data_college_s.appendChild(new_input);

};

function add_more_job_s() {

    let new_input = document.createElement("textarea");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-job-s");
    new_input.placeholder = "Enter Your Job (Position, Company Name)";
    multiple_data_job_s.appendChild(new_input);

};

function add_more_project_s() {

    let new_input = document.createElement("textarea");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-project-s");
    new_input.placeholder = "Enter Your Project (Title, Description)";
    multiple_data_project_s.appendChild(new_input);

};

function add_more_programming_language_s() {

    let new_input = document.createElement("input");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-programming-language-s");
    new_input.placeholder = "Enter Your Programming Language";
    multiple_data_programming_language_s.appendChild(new_input);

};

function add_more_social_media() {

    let new_input = document.createElement("input");
    new_input.classList.add("edit-page-input");
    new_input.classList.add("user-social-media");
    new_input.placeholder = "Enter Your Social Media (Link)";
    multiple_data_social_media.appendChild(new_input);

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
        alert('File Is Too Big! (1MB Allowed)');
    }

    delete_resume_button.style.display = "inline-block";
    resume_box.appendChild(delete_resume_button);

    resume_box.style.display = "flex";
    resume_box.style.alignItems = "center";
    resume_box.style.justifyContent = "start";
    resume_box.style.gap = "0.5rem";

};

// ------------------------------------------------------------------------------------------------

function delete_resume() {

    logged_in_user.resume = "";
    localStorage.setItem("users", JSON.stringify(users_data));
    alert("Your Resume Is Deleted!");

    resume_box.innerHTML = "";
    user_resume.style.display = "inline-block";
    resume_box.appendChild(user_resume);

};