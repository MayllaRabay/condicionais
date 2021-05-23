//Exemplo de input
const ladoA = 3;
const ladoB = 3;

//Seu código aqui
if(ladoA === ladoB) {
    let lado = [0, 1, 2, 3, 4, 5, 6];
    let nome = ["Branco", "Às", "Duque", "Terno", "Quadra", "Quina", "Sena"];
    for(let i = 0; i < nome.length; i++) {
        if(ladoA === lado[i]) {
            console.log(nome[i]);
        };
    }
} else {
    console.log("Não");
};