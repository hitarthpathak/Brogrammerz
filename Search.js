let search_user_input = document.getElementById("search-user-input");
let search_results = document.getElementById("search-results");

// ------------------------------------------------------------------------------------------------

let users_data = JSON.parse(localStorage.getItem("users")) || [];

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    let search_parameter = new URLSearchParams(window.location.search);
    search_user_input.value = search_parameter.get("name");
    load_search_results();

});

// ------------------------------------------------------------------------------------------------

function search_users() {
    search_parameter = new URLSearchParams(window.location.search);
    search_parameter.set("name", search_user_input.value);
    window.location.search = search_parameter.toString();
}

function load_search_results() {

    if (search_user_input.value != "") {

        filtered_user = users_data.filter((filter_user) => {
            return filter_user.name.toLowerCase().includes(search_user_input.value.toLowerCase());
        });

        let searched_user_data = filtered_user;

        search_results.innerHTML = "";

        if (searched_user_data != "") {
            searched_user_data.forEach((user) => {
                let searched_user = document.createElement("div");
                searched_user.classList.add("searched-user");
                searched_user.innerHTML =
                    `
                
                        <div class="searched-user-img-box">
                
                            <img src="${user.profile_photo}" alt="Image Not Available">
    
                        </div>
                
                        <div class="searched-user-data">
                
                            <p>${user.name}</p>
                
                        </div>
                
                    `;
                search_results.appendChild(searched_user);

                searched_user.addEventListener("click", () => {
                    localStorage.setItem("searched-user-email", JSON.stringify(user.email));
                    location = "User.html";
                });

            });
        }
        else {
            let searched_user = document.createElement("div");
            searched_user.classList.add("searched-user");
            searched_user.innerText = "No Users Found!";
            search_results.appendChild(searched_user);
        }

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