// Mapeamento das páginas

const pages = {
  "sobre nós": "sobre.html",
  contato: "contato.html",
  blog: "blog.html",
  "área de atuação": "area-atuacao.html",
};

// Função para redirecionar com base na pesquisa
function redirectToPage() {
  const input = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  if (pages[input]) {
    window.location.href = pages[input]; // Redireciona para a página correspondente
  } else {
    alert(
      "Página não encontrada. Tente termos como 'Sobre Nós', 'Contato', 'Blog' ou 'Área de Atuação'."
    );
  }
}

// Adiciona evento de clique ao ícone de pesquisa
document.getElementById("searchIcon").addEventListener("click", redirectToPage);

// Adiciona evento de pressionar "Enter" no campo de pesquisa
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      redirectToPage();
    }
  });
/*Copyright (C) [2025] [Cesar Augusto Schiebel De Campos]*/
