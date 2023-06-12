let totalPrice = 0;
let totalItens = 0;

const adicionar = (price) => {
  totalPrice += price;
  totalItens ++;

  let quantidade = document.querySelector('div#quantidade');
  quantidade.innerHTML = ``;
  quantidade.innerHTML += `${totalItens}`;

  let precoTotal = document.querySelector('div#precoTotal');
  precoTotal.innerHTML = ``
  precoTotal.innerHTML += `R$ ${totalPrice.toFixed(2)}`;
};