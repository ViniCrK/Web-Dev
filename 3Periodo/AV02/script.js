let totalPrice = 0;
let totalItens = 0;

const adicionar = (price) => {
  //console.log(price);
  totalPrice += price;
  totalItens ++;
  console.log(`Total: R$ ${totalPrice.toFixed(2)}`);
  console.log(`Itens: ${totalItens}`);
};