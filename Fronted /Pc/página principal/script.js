document.addEventListener("DOMContentLoaded", () => {
  // MENU TOGGLE
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const icon = document.getElementById("toggle-icon");

  if (toggle && menu && icon) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");

      // troca o ícone entre hambúrguer e X
      if (menu.classList.contains("show")) {
        icon.classList.remove("bi-list");
        icon.classList.add("bi-x");
      } else {
        icon.classList.remove("bi-x");
        icon.classList.add("bi-list");
      }
    });
  }

  // CAMPO DE BUSCA
  const campoBusca = document.getElementById('buscar');
  const resultado = document.getElementById('resultado');

  if (campoBusca && resultado) {
    campoBusca.addEventListener('input', () => {
      const texto = campoBusca.value.trim();
      resultado.textContent = texto ? `Você está buscando por: "${texto}"` : '';
    });
  }
  
  // FUNÇÃO DE CARRINHO
  window.adicionarAoCarrinho = function (produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(produto);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  };
});


// Verificar login

  function verificarLogin() {
    const estaLogado = localStorage.getItem("logado");
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    const btnLogin = document.getElementById("btn-login");
    const perfil = document.getElementById("perfil");
    const nomeUsuario = document.getElementById("nome-usuario");
    const fotoPerfil = document.getElementById("foto-perfil");

    if (estaLogado === "true" && usuario && usuario.nome) {
      if (btnLogin) btnLogin.style.display = "none";
      if (perfil) perfil.style.display = "flex";
      if (nomeUsuario) nomeUsuario.textContent = `Olá, ${usuario.nome}`;
      if (fotoPerfil) {
        fotoPerfil.src = usuario.foto || "https://via.placeholder.com/30";
      }
    } else {
      if (btnLogin) btnLogin.style.display = "block";
      if (perfil) perfil.style.display = "none";
    }
  }

  verificarLogin();

  window.logout = function () {
    localStorage.removeItem("logado");
    localStorage.removeItem("usuario");
    location.reload();
  };
