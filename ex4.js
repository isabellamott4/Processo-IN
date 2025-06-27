function ConverteEuro(valorreal) {[]
    let cambioEuro=6.20;
    let valorEuro= valorreal/cambioEuro;
    return valorEuro;
}

function ConverteDolar(valorreal) {
    let cambioDolar=5.70;
    let valorDolar= valorreal/cambioDolar;
    return valorDolar;
}
 let valorReal = parseFloat(prompt("Digite o valor em reais: "));
let valorEuro = ConverteEuro(valorReal);
let valorDolar = ConverteDolar(valorReal);
console.log(`O valor de R$ ${valorReal.toFixed(2)} equivale a € ${valorEuro.toFixed(2)} e $ ${valorDolar.toFixed(2)}.`);
