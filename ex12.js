function encontrarElementoUnico(lista){
    for (let i = 0; i < lista.length; i++) {
        if(lista.indexOf(lista[i])=== lista.lastIndexOf(lista[i])){
            console.log(`O elemento único é: ${lista[i]}`);
            return lista[i];
        }
    }
}

let numeros = [1,3,5,2,3,1,5]
encontrarElementoUnico(numeros);