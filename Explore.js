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
let filter_results = document.getElementById("filter-results");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    search_user_input.value = "";

    filter_input.forEach((input) => {
        input.value = "";
    });

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

    alert("Working On It!");

};

// ------------------------------------------------------------------------------------------------

function your_profile() {

    location = "Profile.html";

};

// ------------------------------------------------------------------------------------------------

function filter_users() {

    // filter_input.forEach((input) => {
    //     if (input.value == "") {
    //         alert("Filter Inputs Can't Be Empty!")
    //     }
    // });

    let filtered_user = users_data.filter((filter_user) => {
        return (
            filter_user.gender.toLowerCase().startsWith(gender_filter.value.toLowerCase()) &&
            filter_user.relationship_status.toLowerCase().includes(relationship_status_filter.value.toLowerCase()) &&
            filter_user.hometown.toLowerCase().includes(hometown_filter.value.toLowerCase()) &&
            filter_user.current_city.toLowerCase().includes(current_city_filter.value.toLowerCase()) &&
            filter_user.school_s.toLowerCase().includes(school_filter.value.toLowerCase()) &&
            filter_user.college_s.toLowerCase().includes(college_filter.value.toLowerCase()) &&
            filter_user.job_s.toLowerCase().includes(job_filter.value.toLowerCase()) &&
            filter_user.programming_language_s.toLowerCase().includes(programming_language_filter.value.toLowerCase()) &&
            filter_user.project_s.toLowerCase().includes(project_filter.value.toLowerCase())
        )
    });

    let filtered_user_data = filtered_user;

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

};
