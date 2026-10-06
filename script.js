const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quem é o famoso herói de Gotham City que passa as noites combatendo criminosos vestido de morcego?",
        alternativas: [
            {
                texto: "Batman",
                afirmacao: "ACERTOU! 🦇 Bruce Wayne provavelmente está orgulhoso de você."
            },
            {
                texto: "Homem-Aranha",
                afirmacao: "ERROU! 🕷️ O Homem-Aranha está ocupado balançando pelas ruas de Nova York."
            }
        ]
    },

    {
        enunciado: "Quem é o maior inimigo do Batman e adora fazer piadas enquanto causa confusão em Gotham?",
        alternativas: [
            {
                texto: "Coringa",
                afirmacao: "ACERTOU! 🃏 O Coringa provavelmente está rindo da sua resposta."
            },
            {
                texto: "Superman",
                afirmacao: "ERROU! 🦸 Superman é mais conhecido por salvar pessoas do que por sair fazendo pegadinhas em Gotham."
            }
        ]
    },

    {
        enunciado: "Qual é o nome verdadeiro do Batman?",
        alternativas: [
            {
                texto: "Bruce Wayne",
                afirmacao: "ACERTOU! 💰 Bruce Wayne: rico de dia, morcego de noite."
            },
            {
                texto: "Clark Kent",
                afirmacao: "ERROU! 😎 Clark Kent é o nome do Superman. O Batman provavelmente não gostou dessa confusão."
            }
        ]
    },

    {
        enunciado: "Qual herói ganhou seus poderes depois de ser picado por uma aranha radioativa?",
        alternativas: [
            {
                texto: "Homem-Aranha",
                afirmacao: "ACERTOU! 🕷️ Com grandes poderes vêm grandes responsabilidades... e provavelmente muitas contas para pagar."
            },
            {
                texto: "Batman",
                afirmacao: "ERROU! 🦇 Batman não foi picado por uma aranha. Ele só tinha muito dinheiro e decidiu comprar equipamentos."
            }
        ]
    },

    {
        enunciado: "Qual desses personagens é conhecido por usar um martelo chamado Mjölnir?",
        alternativas: [
            {
                texto: "Thor",
                afirmacao: "ACERTOU! 🔨 Thor e seu martelo são praticamente inseparáveis."
            },
            {
                texto: "Coringa",
                afirmacao: "ERROU! 🃏 O Coringa até poderia tentar usar o martelo, mas provavelmente faria alguma coisa completamente maluca."
            }
        ]
    },

    {
        enunciado: "Qual é o planeta natal do Superman?",
        alternativas: [
            {
                texto: "Krypton",
                afirmacao: "ACERTOU! 🌎 Quer dizer... quase! Krypton era o planeta natal do Superman, antes de ser destruído."
            },
            {
                texto: "Gotham",
                afirmacao: "ERROU! 🦇 Gotham é a cidade do Batman, não o planeta do Superman."
            }
        ]
    },

    {
        enunciado: "Qual personagem é conhecido por usar um escudo com uma estrela e representar os Estados Unidos?",
        alternativas: [
            {
                texto: "Capitão América",
                afirmacao: "ACERTOU! 🛡️ O escudo do Capitão América é praticamente tão famoso quanto ele."
            },
            {
                texto: "Hulk",
                afirmacao: "ERROU! 💚 O Hulk até pode ser forte, mas carregar um escudo não é exatamente o estilo dele."
            }
        ]
    },

    {
        enunciado: "Quem é o vilão que costuma dizer 'Por que tão sério?' quando está causando confusão?",
        alternativas: [
            {
                texto: "Coringa",
                afirmacao: "ACERTOU! 🃏 O Coringa está oficialmente satisfeito com sua resposta... HAHAHAHA!"
            },
            {
                texto: "Homem de Ferro",
                afirmacao: "ERROU! 🤖 Tony Stark gosta de piadas, mas essa frase é muito mais a cara do Coringa."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
let pontos = 0;

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + "\n\n";

    // Verifica se a resposta está correta
    if (opcaoSelecionada === perguntaAtual.alternativas[0]) {
        pontos++;
    }

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "🏆 Resultado final!";
    textoResultado.textContent =
        "Você acertou " + pontos + " de " + perguntas.length + " perguntas!\n\n" +
        historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();