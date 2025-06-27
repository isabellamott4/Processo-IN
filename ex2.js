let numFat=prompt("Digite um número inteiro positivo para calcular o fatorial: ");
let fatorial=1;;
let resposta="s";
while (numFat < 0) {
    alert("Não existe fatorial de número negativo.");
    numFat=prompt("Digite um número inteiro positivo para calcular o fatorial: ");
}
if(resposta.toLowerCase()=="s"){
    while (resposta.toLowerCase() == "s") {
     let i=1;
      while(i <= numFat) {
         fatorial *= i;
         i++
      }
        console.log(`O fatorial de ${numFat} é: ${fatorial}`);
        resposta=prompt("Deseja calcular o fatorial de outro número? (s/n)");
     if (resposta.toLowerCase() == "n") {
        console.log("Programa encerrado.");
        break;
     }
     else {
        numFat = prompt("Digite um número inteiro positivo para calcular o fatorial: ");
        fatorial = 1; 
     }
    }
}