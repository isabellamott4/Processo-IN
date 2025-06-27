function VerificarPolindromo(frase) {
    frase = frase.toLowerCase().replace(/\s+/g, "");
    let fraseInvertida = frase.split("").reverse().join("");
    if (frase === fraseInvertida) {
        console.log("A frase é um polindromo.");
    }
    else {
        console.log("A frase não é um polindromo.");
    }
}
let frase = prompt("Digite uma frase para verificar se é um polindromo: ");
let resultado = console.log(VerificarPolindromo(frase));

   