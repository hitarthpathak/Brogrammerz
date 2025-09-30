let name_filter = document.getElementById("name-filter");
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

let brogrammerz = JSON.parse(localStorage.getItem("brogrammerz")) || [];
let admin = JSON.parse(localStorage.getItem("admin")) || "";
let total_users = document.getElementById("total-users");

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    if (!admin) {
        alert("Admin Is Not Logged In! Redirecting To Login Page.");
        location = "index.html";
    };

    filter_input.forEach((input) => {
        input.value = "";
    });

    total_users.textContent = brogrammerz.length;
    found_users.style.display = "none";

    brogrammerz.forEach((user) => {
        let filtered_user = document.createElement("div");
        filtered_user.classList.add("filtered-user");
        filtered_user.innerHTML = JSON.stringify(user, null, 2);
        filter_results.appendChild(filtered_user);

    });

});

// ------------------------------------------------------------------------------------------------

function ranking() {

    location = "Ranking.html";

};

// ------------------------------------------------------------------------------------------------

function explore() {

    location = "Explore.html";

};

// ------------------------------------------------------------------------------------------------

function logout() {

    localStorage.removeItem("admin");
    location = "index.html";

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

    let filtered_user = brogrammerz.filter((filter_user) => {
        return (
            (!name_filter.value || filter_user.name.toLowerCase().includes(name_filter.value.toLowerCase())) &&
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
            filtered_user.innerHTML = JSON.stringify(user, null, 2);
            filter_results.appendChild(filtered_user);

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

    brogrammerz.forEach((user) => {
        let filtered_user = document.createElement("div");
        filtered_user.classList.add("filtered-user");
        filtered_user.innerHTML = JSON.stringify(user, null, 2);
        filter_results.appendChild(filtered_user);

    });

};