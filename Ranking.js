let search_user_input = document.getElementById("search-user-input");
let ranking_table = document.getElementById("ranking-table");

// ------------------------------------------------------------------------------------------------

let brogrammerz = JSON.parse(localStorage.getItem("brogrammerz")) || [];
let logged_in_user_email = JSON.parse(localStorage.getItem("logged-in-user-email")) || "";

// ------------------------------------------------------------------------------------------------

let logged_in_user = brogrammerz.find((filter_user) => {
    return filter_user.email == logged_in_user_email;
});

// ------------------------------------------------------------------------------------------------

window.addEventListener("load", () => {

    if (!logged_in_user) {
        alert("User Is Not Logged In! Redirecting To Login Page.");
        location = "index.html";
    };

    show_ranking();

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

function explore() {

    location = "Explore.html";

};

// ------------------------------------------------------------------------------------------------

function your_profile() {

    location = "Profile.html";

};

// ------------------------------------------------------------------------------------------------

function show_ranking() {

    let ranked_users = brogrammerz.sort((a, b) => b.followers.length - a.followers.length);

    ranked_users.forEach((user, rank) => {
        let new_row = document.createElement("tr");

        let rank_td = document.createElement("td");
        rank_td.textContent = rank + 1;

        let name_td = document.createElement("td");
        name_td.textContent = user.name;

        name_td.onmouseover = function () {
            name_td.style.color = "blue";
            name_td.style.textDecoration = "underline";
            name_td.style.cursor = "pointer";
        };

        name_td.onmouseout = function () {
            name_td.style.color = "black";
            name_td.style.textDecoration = "none";
            name_td.style.cursor = "pointer";
        };

        name_td.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(user.email));
            location = "User.html";
        });

        let followers_td = document.createElement("td");
        followers_td.textContent = user.followers.length;

        new_row.appendChild(rank_td);
        new_row.appendChild(name_td);
        new_row.appendChild(followers_td);

        ranking_table.appendChild(new_row);
    });

};