let a = prompt("Digite a: ");
let b = prompt("Digite b: ");
let c = prompt("Digite c: ");
let discriminante= (b * b) - (4 * a * c);
console.log(`O valor do discriminante é: ${discriminante}, agora vamos calcular as raízes da equação.`);
if (discriminante>0){
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    console.log(`As raízes da equação são: ${raiz1} e ${raiz2}`);
}
else if (discriminante === 0) {
    let raiz = -b / (2 * a);
    console.log(`A raiz da equação é: ${raiz} (raiz dupla)`);
} else {
    console.log("A equação não possui raízes reais.");
}