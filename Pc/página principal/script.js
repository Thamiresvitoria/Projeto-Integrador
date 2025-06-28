
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

   function toggleMenu() {
      document.getElementById("subMenu").classList.toggle("open-menu");
    }

    // Fecha o menu se clicar fora
    window.addEventListener("click", function(e) {
      const menu = document.getElementById("subMenu");
      const button = document.querySelector(".user-pic");

      if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove("open-menu");
      }
    });

    // Logout

    function logout() {
      localStorage.removeItem("logado");
      localStorage.removeItem("usuario");
      sessionStorage.clear();
      window.location.href = "página_principal.html"; // Redireciona para login após logout
    }
    
    function verificarLogin() {
      const logado = localStorage.getItem("logado");
      const usuario = localStorage.getItem("usuario");
    
      if (!logado || !usuario) {
        window.location.href = "../login/login.html"; // Corrigido
      }
    }
    
    // Se estiver na página principal protegida, verifica login
    if (window.location.pathname.includes("poslogin_principal.html")) {
      verificarLogin();
    }

  const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    toggleButton.addEventListener("click", () => {
      menu.classList.toggle("active");
    });

      function toggleMenu() {
        document.getElementById("subMenu").classList.toggle("open-menu");
      }
  
    
    // barra de pesquisa 
    
  const searchToggle = document.querySelector('.search-toggle');
  const mobileSearch = document.querySelector('#mobile-search');

  searchToggle.addEventListener('click', () => {
    mobileSearch.classList.toggle('active');
  });
  
  
  // Espera a página carregar completamente
  
  document.addEventListener('DOMContentLoaded', () => {
    fetch('cardapio.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('cardapio-container').innerHTML = data;
      })
      .catch(error => {
        console.error('Erro ao carregar o cardápio:', error);
      });
  });
