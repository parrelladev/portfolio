document.addEventListener("DOMContentLoaded", function () {
    fetch("posts/posts.json") // Carrega a lista de arquivos de posts
        .then(response => response.json())
        .then(files => {
            files.forEach(file => {
                fetch(`posts/${file}`) // Busca cada post individualmente
                    .then(response => response.text())
                    .then(data => {
                        const lines = data.split("\n"); // Divide os parâmetros
                        const imgSrc = lines[0].trim();
                        const title = lines[1].trim();
                        const link = lines[2].trim();

                        // Criando o elemento do post
                        const post = document.createElement("div");
                        post.classList.add("post");
                        post.innerHTML = `
                            <a href="${link}" target="_blank">
                                <img src="${imgSrc}" alt="${title}" class="post-image">
                                <h3>${title}</h3>
                            </a>
                        `;

                        // Adicionando ao feed
                        document.getElementById("feed").appendChild(post);
                    })
                    .catch(error => console.error("Erro ao carregar post:", error));
            });
        })
        .catch(error => console.error("Erro ao carregar lista de posts:", error));
});