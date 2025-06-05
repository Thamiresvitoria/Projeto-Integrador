const campoBusca = document.getElementById('busca');
const resultado = document.getElementById('resultado');

// Mostra em tempo real o que está sendo digitado
campoBusca.addEventListener('input', () => {
  const texto = campoBusca.value.trim();
  resultado.textContent = texto ? `Você está buscando por: "${texto}"` : '';
});