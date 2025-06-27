let lista=[];
let cont=0;
let quant=prompt("Quantos números você quer adicionar à lista? ");
for (let i = 0; i < quant; i++) {
    let numero = prompt(`Digite o número ${i + 1}: `);
    lista.push(parseInt(numero));
}
for (let i = 1; i < lista.length; i++) {
    if (lista[i]> lista[i - 1]) {
        cont++;
    }
}
console.log(`A lista de números é: ${lista.join(", ")}`);
console.log(`A quantidade de números crescentes em relação ao anterior é: ${cont}`);
