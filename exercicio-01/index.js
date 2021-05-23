//Exemplo de input
const jogada1 = "pedra";
const jogada2 = "tesoura";

//Seu código aqui
if(jogada1 === jogada2) {
    console.log("Empate.");
} else if((jogada1 === "pedra" || jogada1 === "tesoura") && (jogada2 === "pedra" || jogada2 === "tesoura")) {
    console.log("Pedra ganhou.");
} else if((jogada1 === "pedra" || jogada1 === "papel") && (jogada2 === "pedra" || jogada2 === "papel")) {
    console.log("Papel ganhou.");
} else {
    console.log("Tesoura ganhou.");
};