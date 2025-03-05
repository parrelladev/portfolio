document.addEventListener("DOMContentLoaded", function () {
    function loadComponent(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error(`Erro ao carregar ${url}:`, error));
    }

    // Carregar os componentes
    loadComponent("components/profile.html", "profile-container");
    loadComponent("components/posts.html", "feed");
});