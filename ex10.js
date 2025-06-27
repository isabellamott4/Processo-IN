let opcao;
let fila=[];
let nomesFila;
let nomeCliente;
while (opcao !== "3") {
    nomesFila = "";
    if (fila.length > 0) {
        for (let i = 0; i < fila.length; i++) {
            nomesFila += `\n${i+1}º ${fila[i]}\n`;
        }
    } else {
        nomesFila = "Nenhum cliente na fila.";
    }

    opcao = prompt(
      `Fila de Atendimento:\n${nomesFila}\n` + 
      "MENU PRINCIPAL:\n" +
      "1 - Novo Cliente\n" +
      "2 - Atender Cliente\n" +
      "3 - Sair"
    );
    switch (opcao){
        case "1":
            nomeCliente=prompt("Bem-Vindo(a)! para entrar na fila insira seu nome:\n")
            fila.push(nomeCliente);
            console.log(`Cliente adicionado: ${nomeCliente}`);
            break;
        case "2":
            if (fila.length > 0) {
                let clienteAtendido = fila.shift();
                console.log(`Cliente atendido: ${clienteAtendido}`);
            } else {
                console.log("Nenhum cliente na fila para ser atendido.");
            }
            break;
        case "3":
            console.log("Saindo...");
            break;
            
    }
}