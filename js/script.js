document.addEventListener("DOMContentLoaded", function () {
    fetch("timeline/posts.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("feed").innerHTML = data;
        })
        .catch(error => console.error("Erro ao carregar os posts:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const feedContainer = document.getElementById("feed");
    
    // Função para carregar um projeto dinâmico
    function loadProjectPage(projectPath) {
        fetch(projectPath)
            .then(response => response.text())
            .then(data => {
                feedContainer.innerHTML = data;
            })
            .catch(error => console.error("Erro ao carregar o projeto:", error));
    }
    
    // Captura os cliques nos links dos projetos
    document.addEventListener("click", function (event) {
        if (event.target.closest(".post-link")) {
            event.preventDefault();
            const projectUrl = event.target.closest(".post-link").getAttribute("href");
            loadProjectPage(projectUrl);
        }
    });
});
