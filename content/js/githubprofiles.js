/* Code to fetch github profiles */

const API_URL = "https://api.github.com/users/";
const gitCards = document.getElementById("profile-cards");
const search = document.getElementById("search");

// Search profiles on Enter
search.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (search.value != "") {
            getProfiles(search.value);
            search.value = "";
        }
    }
});

// Function to fetch git profiles
const getProfiles = async (uname) => {
    const response = await fetch(API_URL + uname);
    const data = await response.json();
    if (data.name !== null) {
        gitCards.innerHTML = `
    <div class="card mb-3 mt-5">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${data.avatar_url}" class="img-fluid rounded-start" alt="${data.name}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <h6 class="card-title">${data.bio}</h6>
                    <ul class="info d-flex flex-wrap list-style-none ps-0">
                        <li class="pe-3">${data.followers}<strong class="ps-1">Followers</strong></li>
                        <li>${data.following}<strong class="ps-1">Following</strong></li>
                        <li class="ps-3">${data.public_repos}<strong class="ps-1">Repos</strong></li>
                    </ul>
                    <div id="repos"></div>
                </div>
            </div>
        </div>
    </div>`;
        getRepos(uname);
    } else {
        gitCards.innerHTML = `<div class="alert alert-danger mt-3" role="alert">
            Please enter correct username.
        </div>`;
    }
};

// Function to fetch git repos
const getRepos = async (uname) => {
    const repos = document.getElementById("repos");
    const response = await fetch(API_URL + uname + "/repos");
    const data = await response.json();
    data.forEach(item => {
        const elem = document.createElement("a");
        const elemClasses = ["badge", "bg-warning", "text-dark", "text-decoration-none", "font-xs-15", "m-1"];
        elemClasses.forEach(classes => {
            elem.classList.add(classes);
        });
        elem.id = "repo";
        elem.href = item.html_url;
        elem.target = "_blank";
        elem.innerText = item.name;
        repos.appendChild(elem);
    })
};