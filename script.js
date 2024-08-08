const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você sai, prefere se inturmar com pessoas que ainda não conhece ou prefere nao conversar com ninguem ?",
        alternativas: [
            {
                texto: "Me inturmar com pessoas novas.",
                afirmacao: "Conseue fazer amizades facíl, não teme conversar com pessoas novas."
            },
            {
                texto: "Prefiro não me inturmar.",
                afirmacao: "Não consegue fazzer amizades acilmente, prefere ficar a só."
            }
        ]
    },
    {
        enunciado: "No futuro você pretende focar mais em seu trabalho/carreira profissional ou sua vida pessoal/familia ?",
        alternativas: [
            {
                texto: "Carreira profissonal.",
                afirmacao: "Pensa muito sobre como vai ser no futuro e seu emprego,quer ter uma estabilidade financeira."
            },
            {
                texto: "Vida pessoal.",
                afirmacao: "Pensa em uma família, como casar e ter filhos."
            }
        ]
    },
    {
        enunciado: "Se você pretender sair de casa prefere ir em uma área urbana/cidades ou área rural/sítio ?",
        alternativas: [
            {
                texto: "Prefiro área urbana/cidades.",
                afirmacao: "Você prefere uma vida mais moderna."
            },
            {
                texto: "Prefiro área rural/sítio.",
                afirmacao: "Você prefere uma vida mais tradicional e antiga."
            }
        ]
    },
    {
        enunciado: "Você acha que no futuro economizará dinheiro para investimentos futuros ou irá aproveitar o presente e gastar em experiências imediatas?",
        alternativas: [
            {
                texto: "Economizar dinheiro para investimentos futuros.",
                afirmacao: "Você pensa bastante em investimentos futuros, significando que quer comprar algo ou prioriza coisas futuras do que imediatas que não iram te dar um retorno."
            },
            {
                texto: "Aproveitar o presente e gastar em experiências imediatas.",
                afirmacao: "Você é uma pessoa que não se importa com o futuro,alguém espontâneo e não se importa com as consequễncias de suas atitudes."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();