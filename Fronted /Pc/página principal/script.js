const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const icon = document.getElementById("toggle-icon");

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


const campoBusca = document.getElementById('buscar');
const resultado = document.getElementById('resultado');

// Mostra em tempo real o que está sendo digitado
campoBusca.addEventListener('input', () => {
  const texto = campoBusca.value.trim();
  resultado.textContent = texto ? `Você está buscando por: "${texto}"` : '';
});

//puxa cardapio

function adicionarAoCarrinho(produto) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push(produto);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function logout() {
    localStorage.removeItem("logado");
    location.reload(); // recarrega a página para atualizar o layout
  }

  function verificarLogin() {
    const estaLogado = localStorage.getItem("logado");
    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (estaLogado && usuario) {
      document.getElementById("btn-login").style.display = "none";
      document.getElementById("perfil").style.display = "flex";
      document.getElementById("nome-usuario").textContent = usuario.nome;
    }
  }

  verificarLogin();





 