document.addEventListener("DOMContentLoaded", () => {
    fetch("src/components/header/header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        });
});
