let user_profile_photo = document.getElementById("display-user-profile-photo");
let display_user_name = document.getElementById("display-user-name");
let display_user_bio = document.getElementById("display-user-bio");
let display_user_followers = document.getElementById("display-user-followers");
let display_user_profile_url = document.getElementById("display-user-profile-url");
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
let show_resume_button = document.getElementById("show-resume");

let blog_input = document.getElementById("blog-input");
let blogs_list = document.getElementById("blogs-list");

let search_user_input = document.getElementById("search-user-input");

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

    document.title = logged_in_user.name;

    search_user_input.value = "";

    user_profile_photo.src = logged_in_user.profile_photo;
    display_user_name.textContent = logged_in_user.name;
    display_user_bio.textContent = logged_in_user.bio;
    display_user_followers.textContent = "[" + logged_in_user.followers.length + "]";
    display_user_profile_url.textContent = logged_in_user.url;
    display_user_date_of_birth.textContent = logged_in_user.date_of_birth;
    display_user_gender.textContent = logged_in_user.gender;
    display_user_relationship_status.textContent = logged_in_user.relationship_status;
    display_user_hometown.textContent = logged_in_user.hometown;
    display_user_current_city.textContent = logged_in_user.current_city;
    display_user_school_s.textContent = logged_in_user.school_s.join("\n \n");
    display_user_college_s.textContent = logged_in_user.college_s.join("\n \n");
    display_user_job_s.textContent = logged_in_user.job_s.join("\n \n");
    display_user_project_s.textContent = logged_in_user.project_s.join("\n \n");
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

    if (logged_in_user.resume == "") {
        show_resume_button.disabled = true;
    }

    if (logged_in_user.mini_blog.length == 0) {
        blogs_list.textContent = "No Blogs!";
    }
    else {
        load_blogs();
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

            <div class="connections-box-top">

                <span>Your Connections</span>

            </div>

            <div class="connections-box-button-box">

                <button id="followers-button" class="show-connections" onclick="show_followers_list()">Followers</button>
                
                <button id="followings-button" onclick="show_followings_list()">Following</button>

                <button id="x-button" onclick="hide_connections_box()">X</button>

            </div>

            <div id="connected-users-list-box"></div>
            
        `;

    body.appendChild(connections_box);

    show_followers_list();

};

function show_followers_list() {

    let followers_button = document.getElementById("followers-button");
    let followings_button = document.getElementById("followings-button");
    let connected_users_list_box = document.getElementById("connected-users-list-box");

    followers_button.classList.add("show-connections");
    followings_button.classList.remove("show-connections");

    connected_users_list_box.innerHTML = "";

    logged_in_user.followers.forEach((follower_email) => {
        let follower_user = brogrammerz.find((user) => user.email == follower_email);

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
            localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));
            show_followers_list();
            display_user_followers.textContent = "[" + logged_in_user.followers.length + "]";
        });

        connected_user_box.appendChild(connected_user);
        connected_user_box.appendChild(remove_user);

        connected_users_list_box.appendChild(connected_user_box);
    });

};

function show_followings_list() {

    let followers_button = document.getElementById("followers-button");
    let followings_button = document.getElementById("followings-button");
    let connected_users_list_box = document.getElementById("connected-users-list-box");

    followers_button.classList.remove("show-connections");
    followings_button.classList.add("show-connections");

    connected_users_list_box.innerHTML = "";

    logged_in_user.followings.forEach((following_email) => {
        let following_user = brogrammerz.find((user) => user.email == following_email);

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
            localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));
            show_followings_list();
        });

        connected_user_box.appendChild(connected_user);
        connected_user_box.appendChild(remove_user);

        connected_users_list_box.appendChild(connected_user_box);
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

        let user_id = brogrammerz.indexOf(logged_in_user);
        brogrammerz.splice(user_id, 1);

        for (let user of brogrammerz) {
            if (user.followers.includes(logged_in_user_email)) {
                let follower_id = user.followers.indexOf(logged_in_user_email);
                user.followers.splice(follower_id, 1)
            }
            else if (user.followings.includes(logged_in_user_email)) {
                let following_id = user.followings.indexOf(logged_in_user_email);
                user.followings.splice(following_id, 1)
            }
        }

        localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));
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

    let blob_url = base_64_to_blob_url(logged_in_user.resume);
    window.open(blob_url, "_blank");

};

// ------------------------------------------------------------------------------------------------

function load_blogs() {

    blogs_list.innerHTML = "";

    if (logged_in_user.mini_blog.length == 0) {
        blogs_list.textContent = "No Blogs!";
        return;
    }

    logged_in_user.mini_blog.forEach((logged_in_user_blog_post, index) => {
        let blog_post = document.createElement("div");
        blog_post.className = "blog-post";

        let blog_hr_1 = document.createElement("hr");
        blog_hr_1.style.margin = "0.5rem 0";
        let blog_hr_2 = document.createElement("hr");
        blog_hr_2.style.margin = "0.5rem 0";

        let blog_heading = document.createElement("div");
        blog_heading.className = "blog-heading";

        blog_heading.innerHTML = `
            <span><b>${logged_in_user_blog_post.author}</b></span> | <span><i>${logged_in_user_blog_post.date}</i></span> | <span><i>${logged_in_user_blog_post.time}</i></span>
        `;

        let blog_data = document.createElement("article");
        blog_data.className = "blog-data";
        blog_data.textContent = logged_in_user_blog_post.blog;

        let blog_details = document.createElement("p");
        blog_details.className = "blog-details";
        blog_details.textContent = "View Blog Details";
        blog_details.onclick = function () {
            show_blog_details_box(index);
        };

        let blog_options = document.createElement("div");
        blog_options.className = "blog-options";
        blog_options.appendChild(blog_details);

        blog_post.appendChild(blog_heading);
        blog_post.appendChild(blog_hr_1);
        blog_post.appendChild(blog_data);
        blog_post.appendChild(blog_hr_2);
        blog_post.appendChild(blog_options);

        blogs_list.appendChild(blog_post);
    });

};

// ------------------------------------------------------------------------------------------------

function post_blog() {

    if (blog_input.value != "") {
        let logged_in_user_blog_post = {
            author: "",
            date: "",
            time: "",
            blog: "",
            comments: []
        };

        logged_in_user_blog_post.author = logged_in_user.name;
        logged_in_user_blog_post.date = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        logged_in_user_blog_post.time = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
        logged_in_user_blog_post.blog = blog_input.value;
        logged_in_user_blog_post.comments = [];

        logged_in_user.mini_blog.push(logged_in_user_blog_post);

        localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));
        blog_input.value = "";
        load_blogs();
    }
    else {
        alert("Please Enter A Blog Post!");
    }

};

// ------------------------------------------------------------------------------------------------

function show_blog_details_box(index) {

    let existing_box = document.querySelector(".show-blog-details-box");

    if (existing_box) return true;

    let body = document.getElementById("body");

    let blog_details_box = document.createElement("div");
    blog_details_box.classList.add("show-blog-details-box");
    blog_details_box.innerHTML =
        `

            <div class="blog-details-box-top">

                <span>Blog Post</span>

                <button id="x-button" onclick="hide_blog_details_box()">X</button>

            </div>

            <div class="blog-post">

                <div class="blog-heading">

                    <span><b>${logged_in_user.mini_blog[index].author}</b></span> | <span><i>${logged_in_user.mini_blog[index].date}</i></span> | <span><i>${logged_in_user.mini_blog[index].time}</i></span>

                </div>

                <hr style="margin: 0.5rem 0;">

                <article class="blog-data">${logged_in_user.mini_blog[index].blog}</article>

                <hr style="margin: 0.5rem 0;">

                <div class="blog-options">

                    <p id="comments-number">Comments[${logged_in_user.mini_blog[index].comments.length}]</p>

                </div>

            </div>

            <div class="posting-comment-box">

                <textarea id="posting-comment-input"></textarea>

                <button id="posting-comment-button" onclick="post_comment(${index})">Post</button>

            </div>

            <div id="comments-box"></div>
            
        `;

    body.appendChild(blog_details_box);

    let comments = logged_in_user.mini_blog[index].comments;
    let comments_box = document.getElementById("comments-box");

    comments.forEach((comment) => {

        let comment_container = document.createElement("div");
        comment_container.className = "comment-container";

        let blog_comment = document.createElement("div");
        blog_comment.className = "blog-comment";

        blog_comment.innerHTML = `

                <div class="comment-heading">

                    <span class="commenter-name">${comment.commenter}</span> | <span><i>${comment.comment_date}</i></span> | <span><i>${comment.comment_time}</i></span>

                </div>

                <p class="comment">${comment.comment}</p>

            `;

        comment_container.appendChild(blog_comment);
        comments_box.appendChild(comment_container);

        let commenter_name_span = blog_comment.querySelector(".commenter-name");

        commenter_name_span.addEventListener("click", () => {
            localStorage.setItem("show-user-email", JSON.stringify(comment.commenter_email));
            location = "User.html";
        });

    });

};

// ------------------------------------------------------------------------------------------------

function post_comment(index) {

    let comments_number = document.getElementById("comments-number");
    let comments_box = document.getElementById("comments-box");
    let posting_comment_input = document.getElementById("posting-comment-input");

    let comment_container = document.createElement("div");
    comment_container.className = "comment-container";

    let blog_comment = document.createElement("div");
    blog_comment.className = "blog-comment";

    let commenter_name = logged_in_user.name;
    let comment_date = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    let comment_time = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
    let comment_text = posting_comment_input.value;

    if (comment_text == "") {
        alert("Please Add A Comment First!");
        return;
    }

    blog_comment.innerHTML = `

            <div class="comment-heading">

                <span class="commenter-name">${commenter_name}</span> | <span><i>${comment_date}</i></span> | <span><i>${comment_time}</i></span>

            </div>

            <p class="comment">${comment_text}</p>

        `;

    comment_container.appendChild(blog_comment);
    comments_box.appendChild(comment_container);

    logged_in_user.mini_blog[index].comments.push({
        commenter: commenter_name,
        commenter_email: logged_in_user_email,
        comment_date: comment_date,
        comment_time: comment_time,
        comment: comment_text
    });

    localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));

    posting_comment_input.value = "";
    comments_number.textContent = `Comments[${logged_in_user.mini_blog[index].comments.length}]`;

    let commenter_name_span = blog_comment.querySelector(".commenter-name");

    commenter_name_span.addEventListener("click", () => {
        localStorage.setItem("show-user-email", JSON.stringify(logged_in_user_email));
        location = "User.html";
    });

};

// ------------------------------------------------------------------------------------------------

function hide_blog_details_box() {

    let blog_details_box = document.querySelector(".show-blog-details-box");

    if (!blog_details_box) return true;

    blog_details_box.classList.remove("show-blog-details-box");
    blog_details_box.classList.add("hide-blog-details-box");

    blog_details_box.addEventListener("animationend", () => {
        blog_details_box.remove();
    }, { once: true });

};