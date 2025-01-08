let menu = document.querySelector("#menu");

menu.addEventListener("click", (e) => {
    let target = e.target;

    switch (target.id) {
        case "home":
            alert("Welcome to the homepage.");
            break;
        case "dashboard":
            alert("Welcome to the dashboard.");
            break;
        case "about":
            alert("Welcome to the about section.");
            break;
    };
});