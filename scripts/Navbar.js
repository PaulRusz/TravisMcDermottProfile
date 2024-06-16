document.addEventListener("DOMContentLoaded", function() {
    // Use fetch to load the content of navbar.html from the pages folder
    fetch("../pages/navbar.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-placeholder").innerHTML = data;
        })
        .catch(error => console.log("Error loading navbar.html:", error));
});