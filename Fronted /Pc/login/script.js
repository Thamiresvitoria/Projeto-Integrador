function cadastrar() {
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      if (!nome || !email || !senha) {
        alert("Preencha tudo!");
        return;
      }

      const usuario = { nome, email, senha };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      alert("Cadastro feito!");
      window.location.href = "login.html";
    
  
  function logar() {
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;

      const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

      if (!usuarioSalvo || usuarioSalvo.email !== email || usuarioSalvo.senha !== senha) {
        alert("Email ou senha inválidos!");
        return;
      }

      // Cria "sessão"
      localStorage.setItem("logado", "true");
      alert("Login feito!");
      window.location.href = "página_principal.html";
    }