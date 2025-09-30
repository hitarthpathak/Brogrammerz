let name = document.getElementById("name");
let date_of_birth = document.getElementById("date-of-birth");
let email = document.getElementById("email");
let password = document.getElementById("password");

// ------------------------------------------------------------------------------------------------

let brogrammerz = JSON.parse(localStorage.getItem("brogrammerz")) || [];

// ------------------------------------------------------------------------------------------------

let new_user = {
    email: "",
    password: "",
    profile_photo: "Images/Add Profile Picture (Default).jpg",
    name: "",
    bio: "",
    followers: [],
    followings: [],
    date_of_birth: "",
    gender: "",
    relationship_status: "",
    hometown: "",
    current_city: "",
    school_s: [],
    college_s: [],
    job_s: [],
    project_s: [],
    programming_language_s: [],
    portfolio_website: "",
    social_media: [],
    contact_email: "",
    contact_number: "",
    resume: ""
};

// ------------------------------------------------------------------------------------------------

function registration() {

    if (check_validation()) {

        let already_registered = brogrammerz.find((already_registered_user) => {
            return already_registered_user.email == email.value;
        });

        if (already_registered) {
            alert("User Already Exists!");
            return false;
        }
        else {
            save_data(name.value, date_of_birth.value, email.value, password.value);

            name.value = "";
            date_of_birth.value = "";
            email.value = "";
            password.value = "";

            alert("You Are Now Registered! Please Log In!");
            location = "index.html";
        }

    }

};

// ------------------------------------------------------------------------------------------------

function check_validation() {

    let name_pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ'-. ]{2,50}$/i;
    let date_of_birth_pattern = /^(?:(?:31-(?:0?[13578]|1[02]))|(?:29|30)-(?:0?[1,3-9]|1[0-2]))-(?:19|20)\d\d$|^29-0?2-(?:19|20)(?:[02468][048]|[13579][26])$|^(?:0?[1-9]|1\d|2[0-8])-(?:0?[1-9]|1[0-2])-(?:19|20)\d\d$/;
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/;

    let name_validation = name_pattern.test(name.value);
    let date_of_birth_validation = date_of_birth_pattern.test(date_of_birth.value);
    let email_validation = email_pattern.test(email.value);
    let password_validation = password_pattern.test(password.value);

    if (name.value == "") {
        alert("Please Enter Your Name!");
        return false;
    }
    else if (!name_validation) {
        alert("Name Is Not Valid!");
        return false;
    }

    if (date_of_birth.value == "") {
        alert("Please Enter Your Date Of Birth!");
        return false;
    }
    else if (!date_of_birth_validation) {
        alert("Date Of Birth Is Not Valid!");
        return false;
    }

    if (email.value == "") {
        alert("Please Enter Your E-Mail!");
        return false;
    }
    else if (!email_validation) {
        alert("E-Mail Is Not Valid!");
        return false;
    }

    if (password.value == "") {
        alert("Please Enter Your Password!");
        return false;
    }
    else if (!password_validation) {
        alert("Password Is Not Valid!");
        return false;
    }

    return true;

};

// ------------------------------------------------------------------------------------------------

function save_data(name, date_of_birth, email, password) {

    new_user.name = name;
    new_user.date_of_birth = date_of_birth;
    new_user.email = email;
    new_user.password = password;

    brogrammerz.push(new_user);

    localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));

    // Generating Fake Users :-

    let user_1 = {
        email: "aarav.sharma@example.in",
        password: "Aarav@2024",
        profile_photo: "Images/Add Profile Picture (Default).jpg",
        name: "Aarav Sharma",
        bio: "Full-stack developer passionate about React and Node.js.",
        followers: [
            "neha.patel@example.in", "rohit.verma@example.in", "kavya.singh@example.in",
            "rahul.yadav@example.in"
        ],
        followings: [
            "rohit.verma@example.in", "neha.patel@example.in", "kavya.singh@example.in",
            "rahul.yadav@example.in"
        ],
        date_of_birth: "12-05-1995",
        gender: "Male",
        relationship_status: "Single",
        hometown: "Delhi, Delhi, India",
        current_city: "Bangalore, Karnataka, India",
        school_s: ["Delhi Public School, Delhi"],
        college_s: ["IIT Delhi"],
        job_s: ["Software Engineer at Infosys"],
        project_s: ["E-commerce Site", "Chat App"],
        programming_language_s: ["JavaScript", "Python", "SQL"],
        portfolio_website: "https://aaravsharma.dev",
        social_media: [
            "https://linkedin.com/in/aaravsharma",
            "https://github.com/aaravsharma"
        ],
        contact_email: "aarav.sharma@example.in",
        contact_number: "+91 9876543210",
        resume: ""
    };

    let user_2 = {
        email: "neha.patel@example.in",
        password: "Neha@2024",
        profile_photo: "Images/Add Profile Picture (Default).jpg",
        name: "Neha Patel",
        bio: "Frontend developer who loves Vue and clean UI design.",
        followers: [
            "aarav.sharma@example.in", "rohit.verma@example.in", "kavya.singh@example.in", "rahul.yadav@example.in"
        ],
        followings: [
            "aarav.sharma@example.in", "kavya.singh@example.in",
            "rahul.yadav@example.in", "rohit.verma@example.in"
        ],
        date_of_birth: "24-04-1996",
        gender: "Female",
        relationship_status: "In A Relationship",
        hometown: "Vadodara, Gujarat, India",
        current_city: "Ahmedabad, Gujarat, India",
        school_s: ["Green Valley School, Vadodara"],
        college_s: ["DAIICT, Gandhinagar"],
        job_s: ["Frontend Engineer at Zomato"],
        project_s: ["Portfolio Website", "E-commerce UI Kit"],
        programming_language_s: ["JavaScript", "HTML", "CSS"],
        portfolio_website: "https://nehapatel.dev",
        social_media: [
            "https://linkedin.com/in/nehapatel",
            "https://github.com/nehapatel"
        ],
        contact_email: "neha.patel@example.in",
        contact_number: "+91 9988776655",
        resume: ""
    };

    let user_3 = {
        email: "rohit.verma@example.in",
        password: "Rohit@2024",
        profile_photo: "Images/Add Profile Picture (Default).jpg",
        name: "Rohit Verma",
        bio: "Backend specialist with a focus on Node.js and microservices.",
        followers: [
            "aarav.sharma@example.in", "neha.patel@example.in", "rahul.yadav@example.in",
            "kavya.singh@example.in"
        ],
        followings: [
            "neha.patel@example.in", "aarav.sharma@example.in", "rahul.yadav@example.in", "kavya.singh@example.in"
        ],
        date_of_birth: "15-11-1993",
        gender: "Male",
        relationship_status: "Single",
        hometown: "Lucknow, Uttar Pradesh, India",
        current_city: "Noida, Uttar Pradesh, India",
        school_s: ["CMS Lucknow"],
        college_s: ["Amity University, Noida"],
        job_s: ["Backend Developer at Paytm"],
        project_s: ["Payment Gateway API", "Blog Platform Backend"],
        programming_language_s: ["Node.js", "MongoDB", "Express"],
        portfolio_website: "https://rohitverma.dev",
        social_media: [
            "https://linkedin.com/in/rohitverma",
            "https://github.com/rohitverma"
        ],
        contact_email: "rohit.verma@example.in",
        contact_number: "+91 9876501234",
        resume: ""
    };

    let user_4 = {
        email: "kavya.singh@example.in",
        password: "Kavya@2024",
        profile_photo: "Images/Add Profile Picture (Default).jpg",
        name: "Kavya Singh",
        bio: "ML enthusiast and Kaggle contributor.",
        followers: [
            "aarav.sharma@example.in", "neha.patel@example.in", "rohit.verma@example.in",
            "rahul.yadav@example.in"
        ],
        followings: [
            "neha.patel@example.in", "aarav.sharma@example.in", "rohit.verma@example.in",
            "rahul.yadav@example.in"
        ],
        date_of_birth: "03-03-1995",
        gender: "Female",
        relationship_status: "Single",
        hometown: "Indore, Madhya Pradesh, India",
        current_city: "Pune, Maharashtra, India",
        school_s: ["Delhi Public School, Indore"],
        college_s: ["MIT Pune"],
        job_s: ["Data Scientist at Flipkart"],
        project_s: ["Recommendation Engine", "Spam Classifier"],
        programming_language_s: ["Python", "TensorFlow", "SQL"],
        portfolio_website: "https://kavyasingh.dev",
        social_media: [
            "https://linkedin.com/in/kavyasingh",
            "https://github.com/kavyasingh"
        ],
        contact_email: "kavya.singh@example.in",
        contact_number: "+91 9012345678",
        resume: ""
    };

    let user_5 = {
        email: "rahul.yadav@example.in",
        password: "Rahul@2024",
        profile_photo: "Images/Add Profile Picture (Default).jpg",
        name: "Rahul Yadav",
        bio: "DevOps engineer with a knack for automation and cloud.",
        followers: [
            "aarav.sharma@example.in", "neha.patel@example.in", "rohit.verma@example.in",
            "kavya.singh@example.in"
        ],
        followings: [
            "neha.patel@example.in", "rohit.verma@example.in", "aarav.sharma@example.in",
            "kavya.singh@example.in"
        ],
        date_of_birth: "22-08-1992",
        gender: "Male",
        relationship_status: "Married",
        hometown: "Patna, Bihar, India",
        current_city: "Bangalore, Karnataka, India",
        school_s: ["St. Xavier's School, Patna"],
        college_s: ["IIM Bangalore"],
        job_s: ["DevOps Engineer at Amazon"],
        project_s: ["CI/CD Pipeline", "Kubernetes Cluster Setup"],
        programming_language_s: ["Python", "Docker", "Kubernetes"],
        portfolio_website: "https://rahulyadav.dev",
        social_media: [
            "https://linkedin.com/in/rahulyadav",
            "https://github.com/rahulyadav"
        ],
        contact_email: "rahul.yadav@example.in",
        contact_number: "+91 9123456780",
        resume: ""
    };

    let fake_user_emails = [
        "aarav.sharma@example.in",
        "neha.patel@example.in",
        "rohit.verma@example.in",
        "kavya.singh@example.in",
        "rahul.yadav@example.in"
    ];

    // Checking Fake Users :-

    let existing_emails = new Set(brogrammerz.map(user => user.email));
    let existing_fake_users = fake_user_emails.every(email => existing_emails.has(email));

    if (!existing_fake_users) {
        brogrammerz.push(user_1, user_2, user_3, user_4, user_5);
        localStorage.setItem("brogrammerz", JSON.stringify(brogrammerz));
    }

};