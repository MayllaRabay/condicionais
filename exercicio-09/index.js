//Exemplo de input
const diaDaSemana = 0;

//Seu código aqui
const diaNumero = [1, 2, 3, 4, 5, 6, 7];
const diaNome = ["Segunda feira", "Terça feira", "Quarta feira", "Quinta feira", "Sexta feira", "Sábado", "Domingo"];

if(diaDaSemana > 7 || diaDaSemana < 1) {
    console.log("O dia da semana informado não é válido.");
} else {
    for(let i = 0; i < diaNumero.length; i++) {
        if(diaDaSemana === diaNumero[i]) {
            console.log(diaNome[i]);
        };
    }
};
