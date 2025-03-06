# Portfólio de Ângelo Parrella

Este é um portfólio interativo desenvolvido para apresentar os projetos de **Ângelo Parrella** de maneira dinâmica e responsiva. O site está hospedado no **GitHub Pages** e foi criado com **HTML, CSS e JavaScript**.

## 📌 Funcionalidades
- **Modo Claro/Escuro Automático** → A página muda de tema conforme a configuração do sistema do usuário.
- **Feed Dinâmico** → Os projetos são carregados automaticamente sem necessidade de recarregar a página.
- **Página Individual para Cada Projeto** → Ao clicar em um item do portfólio, a página do projeto é carregada dentro do site.
- **Layout Responsivo** → Adaptado para funcionar em dispositivos móveis e desktops.
- **Rodapé Fixado** → Sempre visível ao final da página, garantindo acessibilidade às informações.

## 🛠️ Tecnologias Utilizadas
- **HTML5** → Estruturação da página.
- **CSS3** → Estilização e adaptação ao modo escuro/claro.
- **JavaScript (Vanilla JS)** → Manipulação dinâmica do conteúdo e carregamento assíncrono das páginas de projetos.

## 📂 Estrutura do Projeto
```
📁 projeto-portfolio
│── 📁 css
│   └── styles.css  # Estilos principais
│── 📁 js
│   └── script.js   # Lógica de carregamento dinâmico
│── 📁 img          # Imagens e ícones do site
│── 📁 pages        # Páginas individuais dos projetos
│── 📁 timeline     # Arquivo contendo os posts do portfólio
│── index.html      # Página principal
│── README.md       # Este arquivo
```

## 🚀 Como Funciona
1. **Página Principal** → Exibe o perfil do usuário e um feed de projetos.
2. **Ao clicar em um projeto** → O conteúdo do `<div id="feed">` é substituído pela página do projeto correspondente.
3. **O botão "Voltar"** leva de volta ao feed principal.

