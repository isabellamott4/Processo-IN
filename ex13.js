let time=[]
function adicionarJogador(nome, idade, pos, pont) {
    const jogador = {
        nome: nome,
        idade: idade,
        pos: pos,
        pont: pont
    };

    time.push(jogador);
}

function buscarPorPosicao(posicao) {
    let encontrado = false;

    for (let jogador of time) {
        if (jogador.pos.toLowerCase() === posicao.toLowerCase()) {
            console.log(`Jogador: ${jogador.nome}`);
            encontrado = true;
        }
    }

    if (!encontrado) {
        console.log("Nenhum jogador encontrado nessa posição.");
    }
}


function listarTime() {
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado.");
    } else {
        console.log("Lista de jogadores:\n");
        for (let i = 0; i < time.length; i++) {
            console.log(`Jogador ${i + 1}: Nome: ${time[i].nome}\n`);
        }
    }
}
function calcularPontuacaoMedia(){
    if (time.length === 0) {
        console.log("Nenhum jogador cadastrado para calcular a média de pontuação.");
        return;
    }
    let totalPontuacao = 0;
    for (let i = 0; i < time.length; i++) {
        totalPontuacao += time[i].pont;
    }
    let media = totalPontuacao / time.length;
    console.log(`A média de pontuação do time é: ${media.toFixed(2)}`);
}
let opcao = prompt("\nEscolha uma opção:\n1 - Adicionar Jogador\n2 - Buscar Jogador por Posição\n3 - Listar Time\n4 - Calcular Pontuação Média\n5 - Sair\n");
    while (opcao!== "5") {
            switch (opcao) {
                case "1":

                    let nome = prompt("Digite o nome do jogador: ");
                    let idade = parseInt(prompt("Digite a idade do jogador: "));
                    let pos = prompt("Digite a posição do jogador: ");
                    let pont = parseInt(prompt("Digite a pontuação do jogador: "));

                    adicionarJogador(nome, idade, pos, pont);
                    break;
                case "2":
                    let posicao = prompt("Digite a posição do jogador que deseja buscar: ");
                    buscarPorPosicao(posicao);
                    break;
                case "3":
                    listarTime();
                    break;
                case "4":
                    calcularPontuacaoMedia();
                    break;
                case "5":
                    console.log("Saindo do programa...");
                    break;
            }
        opcao = prompt("\nEscolha uma opção:\n1 - Adicionar Jogador\n2 - Buscar Jogador por Posição\n3 - Listar Time\n4 - Calcular Pontuação Média\n5 - Sair\n");
    }