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
let display_user_social_media = document.getElementById("display-user-social-media");
let display_user_contact_email = document.getElementById("display-user-contact-email");
let display_user_contact_number = document.getElementById("display-user-contact-number");
let display_user_resume = document.getElementById("display-user-resume");

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
        location = "index.html";
    }

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    display_user_name.textContent = logged_in_user.name;
    display_user_bio.textContent = logged_in_user.bio;
    display_user_followers.textContent = "[" + logged_in_user.followers.length + "]";
    display_user_date_of_birth.textContent = logged_in_user.date_of_birth;
    display_user_gender.textContent = logged_in_user.gender;
    display_user_relationship_status.textContent = logged_in_user.relationship_status;
    display_user_hometown.textContent = logged_in_user.hometown;
    display_user_current_city.textContent = logged_in_user.current_city;
    display_user_school_s.textContent = logged_in_user.school_s.join("\n");
    display_user_college_s.textContent = logged_in_user.college_s.join("\n");
    display_user_job_s.textContent = logged_in_user.job_s.join("\n");
    display_user_project_s.textContent = logged_in_user.project_s.join("\n");
    display_user_programming_language_s.textContent = logged_in_user.programming_language_s.join("\n");

    display_user_portfolio_website.textContent = logged_in_user.portfolio_website;
    display_user_portfolio_website.style.color = "blue";
    display_user_portfolio_website.style.cursor = "pointer";
    display_user_portfolio_website.onmouseover = function () {
        display_user_portfolio_website.style.textDecoration = "underline";
    };
    display_user_portfolio_website.onmouseout = function () {
        display_user_portfolio_website.style.textDecoration = "none";
    };
    display_user_portfolio_website.addEventListener("click", () => {
        let url = logged_in_user.portfolio_website;
        window.open(url, "_blank");
    });

    logged_in_user.social_media.forEach((input) => {
        let link = document.createElement("span");
        link.textContent = input;
        link.style.display = "block";
        link.style.color = "blue";
        link.style.cursor = "pointer";
        link.onmouseover = function () {
            link.style.textDecoration = "underline";
        };
        link.onmouseout = function () {
            link.style.textDecoration = "none";
        };
        link.addEventListener("click", () => {
            let url = input;
            window.open(url, "_blank");
        });
        display_user_social_media.appendChild(link);
    });

    display_user_contact_email.textContent = logged_in_user.contact_email;
    display_user_contact_email.style.color = "blue";
    display_user_contact_email.style.cursor = "pointer";
    display_user_contact_email.onmouseover = function () {
        display_user_contact_email.style.textDecoration = "underline";
    };
    display_user_contact_email.onmouseout = function () {
        display_user_contact_email.style.textDecoration = "none";
    };
    display_user_contact_email.addEventListener("click", () => {
        location = `mailto:${logged_in_user.contact_email}`;
    });

    display_user_contact_number.textContent = logged_in_user.contact_number;
    display_user_contact_number.style.color = "blue";
    display_user_contact_number.style.cursor = "pointer";
    display_user_contact_number.onmouseover = function () {
        display_user_contact_number.style.textDecoration = "underline";
    };
    display_user_contact_number.onmouseout = function () {
        display_user_contact_number.style.textDecoration = "none";
    };
    display_user_contact_number.addEventListener("click", () => {
        location = `tel:${logged_in_user.contact_number}`;
    });

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

function edit_profile() {

    location = "Edit-Profile.html";

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
        });

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
        });

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

function base_64_to_blob_url(base_64_url) {

    let [prefix, base_64_string] = base_64_url.split(',');
    let content_type = prefix.match(/:(.*?);/)[1];
    let byte_characters = atob(base_64_string);
    let byte_numbers = new Array(byte_characters.length);

    for (let i = 0; i < byte_characters.length; i++) {
        byte_numbers[i] = byte_characters.charCodeAt(i);
    }

    let byte_array = new Uint8Array(byte_numbers);
    let blob = new Blob([byte_array], { type: content_type });
    return URL.createObjectURL(blob);

};

function show_resume() {

    if (logged_in_user.resume) {
        let blob_url = base_64_to_blob_url(logged_in_user.resume);
        window.open(blob_url, "_blank");
    }
    else {
        alert("Resume Is Not Available!");
    }

};