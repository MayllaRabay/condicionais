//Exemplo de input:
const tipoDePagamento = "credito"; // valores válidos: dinheiro, credito, debito ou cheque;
const valorDoProduto = 13000; //em centavos;

//Seu código aqui:
const valorFinalCredito = ((valorDoProduto - valorDoProduto * 0.05) / 100).toFixed(2);
const valorFinalCheque = ((valorDoProduto - valorDoProduto * 0.03) / 100).toFixed(2);
const valorFinalDinheiroOuDebito = ((valorDoProduto - valorDoProduto * 0.1) / 100).toFixed(2);

if(tipoDePagamento === "credito") {
    console.log(`Valor a ser pago: R$${valorFinalCredito}`);
} else if (tipoDePagamento === "cheque") {
    console.log(`Valor a ser pago: R$${valorFinalCheque}`);
} else {
    console.log(`Valor a ser pago: R$${valorFinalDinheiroOuDebito}`);
};