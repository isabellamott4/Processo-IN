let n=prompt("Quantos números da sequência de Fibonacci você deseja ver? ");
let fibonacci = [1, 1];
if (n < 1) {    
    ("Digite um número inteiro positivo.");
}
else if (n === 1) {
    console.log("O número da sequência de Fibonacci é: 0");
    fibonacci = [0];
}
else{
    for (let i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    console.log(`Os ${n} primeiros números da sequência de Fibonacci são: ${fibonacci.slice(0, n).join(", ")}`);
}