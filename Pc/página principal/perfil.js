const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  body.classList.toggle('menu-open');
  menuToggle.classList.toggle('active'); // 🔥 Aqui ele adiciona ou remove a classe 'active'

  // 🔄 Troca o ícone
  if (sidebar.classList.contains('open')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// 🔻 Fechar o menu clicando fora
document.addEventListener('click', function(e) {
  if (
    !sidebar.contains(e.target) &&
    !menuToggle.contains(e.target) &&
    sidebar.classList.contains('open')
  ) {
    sidebar.classList.remove('open');
    body.classList.remove('menu-open');
    menuToggle.classList.remove('active'); // 🔥 Remove a classe ativa quando fecha

    // 🔄 Volta para o ícone de hambúrguer
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});