const entregaRadios = document.querySelectorAll('input[name="entrega"]');
const enderecoForm = document.getElementById('form-endereco');

entregaRadios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'entregar') {
      enderecoForm.classList.remove('oculto');
    } else {
      enderecoForm.classList.add('oculto');
    }
  });
});



let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const lista = document.getElementById('lista-produtos');
let total = 0;

carrinho.forEach(item => {
  const li = document.createElement('li');
  li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
  lista.appendChild(li);
  total += item.preco;
});

document.querySelector('.pedido p').innerHTML = `<strong>Total:</strong> R$ ${total.toFixed(2)}`;

document.getElementById("finalizar").onclick = function () {
    alert("Pedido enviado com sucesso!")
  localStorage.removeItem('carrinho');
  
}
  