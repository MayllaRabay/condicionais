//Exemplo de input
const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//Seu código aqui
if(aposentada || portadoraDeDoenca) {
    console.log("Isenta");
} else if (totalDeRendimentos < 2855970) {
    console.log("Vaza leão! Já está difícil sem você");
} else {
    console.log("Pega leão");
};