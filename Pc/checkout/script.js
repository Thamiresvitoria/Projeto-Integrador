// Mostrar ou ocultar endereço
const entregaRadios = document.querySelectorAll('input[name="entrega"]');
const enderecoForm = document.getElementById('form-endereco');

entregaRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    enderecoForm.classList.toggle('oculto', radio.value !== 'entregar');
  });
});

let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
const lista = document.getElementById('lista-produtos');
const totalSpan = document.getElementById('valor-total');

// ✅ Função para adicionar produto sem duplicar
function adicionarAoCarrinho(produto) {
  const existente = carrinho.find(item => item.nome === produto.nome);

  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ ...produto, quantidade: 1 });
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  renderizarCarrinho();
}

// Renderizar carrinho
function renderizarCarrinho() {
  lista.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    // Garante quantidade mínima de 1
    if (typeof item.quantidade !== 'number' || item.quantidade < 1) {
      item.quantidade = 1;
    }

    const li = document.createElement('li');
    li.className = 'card-produto';

    li.innerHTML = `
      <div class="info">
        ${item.nome} - R$ ${item.preco.toFixed(2)}
      </div>
      <div class="acoes">
        <i class="bi bi-dash-circle" onclick="alterarQuantidade(${index}, -1)"></i>
        <span class="quantidade">${item.quantidade}</span>
        <i class="bi bi-plus-circle" onclick="alterarQuantidade(${index}, 1)"></i>
        <i class="bi bi-trash" onclick="removerItem(${index})"></i>
      </div>
    `;

    lista.appendChild(li);
    total += item.preco * item.quantidade;
  });

  totalSpan.textContent = total.toFixed(2);
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function alterarQuantidade(index, delta) {
  carrinho[index].quantidade += delta;
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }
  renderizarCarrinho();
}

function removerItem(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
}

document.getElementById("finalizar").onclick = function () {
  alert("Pedido enviado com sucesso!");
  localStorage.removeItem('carrinho');
  carrinho = [];
  renderizarCarrinho();
};

// Expor funções globalmente
window.alterarQuantidade = alterarQuantidade;
window.removerItem = removerItem;
window.adicionarAoCarrinho = adicionarAoCarrinho;

renderizarCarrinho();