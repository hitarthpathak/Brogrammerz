let search_user_input = document.getElementById("search-user-input");
let gender_filter = document.getElementById("gender-filter");
let relationship_status_filter = document.getElementById("relationship-status-filter");
let hometown_filter = document.getElementById("hometown-filter");
let current_city_filter = document.getElementById("current-city-filter");
let school_filter = document.getElementById("school-filter");
let college_filter = document.getElementById("college-filter");
let job_filter = document.getElementById("job-filter");
let programming_language_filter = document.getElementById("programming-language-filter");
let project_filter = document.getElementById("project-filter");
let filter_input = document.querySelectorAll(".filter-input");
let found_users = document.getElementById("found-users");
let found_users_number = document.getElementById("found-users-number");
let filter_results = document.getElementById("filter-results");

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
    };

    search_user_input.value = "";

    filter_input.forEach((input) => {
        input.value = "";
    });

    found_users.style.display = "none";

    users_data.forEach((user) => {
        let filtered_user = document.createElement("div");
        filtered_user.classList.add("filtered-user");
        filtered_user.innerHTML =
            `
                
                 <div class="filtered-user-img-box">
                
                    <img src="${user.profile_photo}" alt="Image Not Available">
    
                </div>
                
                <div class="filtered-user-data">
                
                    <p>${user.name}</p>
                
                </div>
                
            `;
        filter_results.appendChild(filtered_user);

        filtered_user.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(user.email));
            location = "User.html";
        });

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

function your_profile() {

    location = "Profile.html";

};

// ------------------------------------------------------------------------------------------------

function filter_users() {

    let empty_filter = true;

    filter_input.forEach((input) => {
        if (input.value != "") {
            empty_filter = false;
        }
    });

    if (empty_filter) {
        alert("Filter Inputs Can't Be Empty!");
        return false;
    }

    let filtered_user = users_data.filter((filter_user) => {
        return (
            (!gender_filter.value || filter_user.gender.toLowerCase() == (gender_filter.value.toLowerCase())) &&
            (!relationship_status_filter.value || filter_user.relationship_status.toLowerCase() == (relationship_status_filter.value.toLowerCase())) &&
            (!hometown_filter.value || filter_user.hometown.toLowerCase().includes(hometown_filter.value.toLowerCase())) &&
            (!current_city_filter.value || filter_user.current_city.toLowerCase().includes(current_city_filter.value.toLowerCase())) &&
            (!school_filter.value || filter_user.school_s.some((school) =>
                school.toLowerCase().includes(school_filter.value.toLowerCase())
            )) &&
            (!college_filter.value || filter_user.college_s.some((college) =>
                college.toLowerCase().includes(college_filter.value.toLowerCase())
            )) &&
            (!job_filter.value || filter_user.job_s.some((job) =>
                job.toLowerCase().includes(job_filter.value.toLowerCase())
            )) &&
            (!programming_language_filter.value || filter_user.programming_language_s.some((lang) =>
                lang.toLowerCase().includes(programming_language_filter.value.toLowerCase())
            )) &&
            (!project_filter.value || filter_user.project_s.some((project) =>
                project.toLowerCase().includes(project_filter.value.toLowerCase())
            ))
        )
    });

    let filtered_user_data = filtered_user;

    found_users.style.display = "block";

    found_users_number.textContent = filtered_user_data.length;

    filter_results.innerHTML = "";

    if (filtered_user_data != "") {
        filtered_user_data.forEach((user) => {
            let filtered_user = document.createElement("div");
            filtered_user.classList.add("filtered-user");
            filtered_user.innerHTML =
                `
                
                    <div class="filtered-user-img-box">
                
                        <img src="${user.profile_photo}" alt="Image Not Available">
    
                    </div>
                
                    <div class="filtered-user-data">
                
                        <p>${user.name}</p>
                
                    </div>
                
                `;
            filter_results.appendChild(filtered_user);

            filtered_user.addEventListener("click", () => {
                localStorage.setItem("show-user-email", JSON.stringify(user.email));
                location = "User.html";
            });

        });

    }
    else {
        let filtered_user = document.createElement("div");
        filtered_user.classList.add("filtered-user");
        filtered_user.innerText = "No Users Found!";
        filter_results.appendChild(filtered_user);
    }

};

// ------------------------------------------------------------------------------------------------

function clear_filter() {

    filter_input.forEach((input) => {
        input.value = "";
    });

    found_users.style.display = "none";

    filter_results.innerHTML = "";

    users_data.forEach((user) => {
        let filtered_user = document.createElement("div");
        filtered_user.classList.add("filtered-user");
        filtered_user.innerHTML =
            `
                
                 <div class="filtered-user-img-box">
                
                    <img src="${user.profile_photo}" alt="Image Not Available">
    
                </div>
                
                <div class="filtered-user-data">
                
                    <p>${user.name}</p>
                
                </div>
                
            `;
        filter_results.appendChild(filtered_user);

        filtered_user.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(user.email));
            location = "User.html";
        });

    });

};