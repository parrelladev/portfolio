document.addEventListener("DOMContentLoaded", function () {
    fetch("timeline/posts.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("feed").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar os posts:", error));
});