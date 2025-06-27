function VerificarIdades (anoAtual,anoNascimento){
    let idade;
    let maioridades=[];
    let i;
    for (i=0;i<anoNascimento.length;i++){
        idade=anoAtual-anoNascimento[i];
            if (idade>=18){
                maioridades.push("maior");
                console.log(`Pessoa ${i + 1}: Maior de idade`);
            }
            else {
               maioridades.push("menor");
               console.log(`Pessoa ${i + 1}: Menor de idade`);
         }
        }
    return maioridades;
}

let anoAtual=prompt("Digite o ano atual: ");
let anoNascimento = [];
let numPessoas = prompt("Quantas pessoas deseja verificar? ");
for (let i = 0; i < numPessoas; i++) {
    let ano = prompt(`Digite o ano de nascimento da pessoa ${i + 1}: `);
    anoNascimento.push(parseInt(ano));
}
let resultado = VerificarIdades(anoAtual, anoNascimento);