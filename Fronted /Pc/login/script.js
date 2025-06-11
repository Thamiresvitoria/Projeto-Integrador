// CADASTRO
function cadastrar(event) {
  event.preventDefault(); // Impede o reload do form

  const nome = document.getElementById("cad-nome").value;
  const email = document.getElementById("cad-email").value;
  const senha = document.getElementById("cad-senha").value;
  const confirmarSenha = document.getElementById("cad-confirmar").value;

  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  const usuario = { nome, email, senha };
  localStorage.setItem("usuario", JSON.stringify(usuario));
  alert("Cadastro realizado com sucesso!");
  window.location.href = "login.html";
}

// LOGIN
function logar(event) {
  event.preventDefault(); // Impede o reload do form

  const email = document.getElementById("login-email").value;
  const senha = document.getElementById("login-senha").value;

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    alert("Nenhum usuário cadastrado.");
    return;
  }

  if (usuarioSalvo.email !== email || usuarioSalvo.senha !== senha) {
    alert("Email ou senha inválidos!");
    return;
  }

  localStorage.setItem("logado", "true");
  alert("Login feito com sucesso!");
  window.location.href = "../página principal/página_principal.html";
}

// VERIFICA SE USUÁRIO ESTÁ LOGADO NA PÁGINA PRINCIPAL
function verificarLogin() {
  const estaLogado = localStorage.getItem("logado");
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const btnLogin = document.getElementById("btn-login");
  const perfil = document.getElementById("perfil");
  const nomeUsuario = document.getElementById("nome-usuario");

  if (estaLogado === "true" && usuario && usuario.nome) {
    if (btnLogin) btnLogin.style.display = "none";
    if (perfil) perfil.style.display = "flex";
    if (nomeUsuario) nomeUsuario.textContent = usuario.nome;
  }
}

// LOGOUT
window.logout = function () {
  localStorage.removeItem("logado");
  localStorage.removeItem("usuario");
  location.reload();
};

// Executa se estiver na página principal
if (window.location.pathname.includes("página_principal.html")) {
  verificarLogin();
}