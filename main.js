const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Por que as pessoas migram do campo para a cidade?",
        alternativas: [
            {
                texto: "As pessoas migram em busca de oportunidades de trabalho, além de acesso a serviços como educação e saúde, que são mais abundantes nas cidades.",
                afirmacao: "Pessoa <b>pragmática</b>, buscando melhores condições de vida e oportunidades."
            },
            {
                texto: "Muitas migram por necessidade devido à falta de recursos no campo, como terra fértil ou água. Outras fazem a mudança para realizar sonhos profissionais ou para conquistar maior independência.",
                afirmacao: "Pessoa <b>realista</b>, migrando por necessidade ou para realizar sonhos."
        ]
    },
    {
        enunciado: "Quais são os principais desafios dessa migração?",
        alternativas: [
            {
                texto: "Os principais desafios incluem a adaptação ao ritmo acelerado da vida urbana, o alto custo de vida, a dificuldade de encontrar moradia adequada e o desconhecimento da cidade, além de falta de apoio emocional de uma comunidade mais próxima.",
                afirmacao: "Pessoa <b>pragmática</b>, ciente do alto custo de vida e da adaptação emocional."
            },
            {
                texto: "Também há dificuldades em adaptar as habilidades rurais ao mercado de trabalho urbano. O choque cultural e a solidão são comuns, já que as relações e o estilo de vida no campo são muito diferentes do que se encontra nas grandes cidades.",
                afirmacao: "Pessoa <b>analítica</b>, reconhecendo dificuldades culturais e no mercado de trabalho."
            }
        ]
    },
    {
        enunciado: "Quais são as vantagens da migração para a cidade?",
        alternativas: [
            {
                texto: "A cidade oferece maiores oportunidades de emprego e uma infraestrutura melhor (como transporte, saúde e educação), além de acesso a qualificação profissional, que pode melhorar a vida e as perspectivas de crescimento.",
                afirmacao: "Pessoa <b>ambiciosa</b>, focada em oportunidades de emprego e qualificação."
            },
            {
                texto: "Além das oportunidades de emprego, a cidade traz uma diversidade cultural rica, com acesso a uma vida social mais dinâmica, novas experiências e, muitas vezes, melhores condições de vida no geral, como acesso a bens e serviços.",
                afirmacao: "Pessoa <b>curiosa</b>, valorizando diversidade cultural e a vida social."
            }
        ]
    },
    {
        enunciado: "A vida na cidade é melhor do que no campo?",
        alternativas: [
            {
                texto: "Pessoa orientada para o futuro, buscando oportunidades profissionais.",
                afirmacao: "<b>Foco</b> Apesar do uso de algumas técnicas serem restringidas apenas para casos específicos, ainda são utilizadas diariamente por profissionais da saúde."
            },
            {
                texto: "No entanto, muitos preferem a vida no campo, que é mais tranquila e próxima da natureza, com menos violência e uma maior sensação de segurança e comunidade, embora a cidade ofereça mais recursos e oportunidades.",
                afirmacao: "<b>Curiosidade</b> Mesmo com fácil acesso a informação, o assunto é pouco comentado e dado certa  importância. "
            }
        ]
    },
    {
        enunciado: "Como a migração impacta a cultura urbana?",
        alternativas: [
            {
                texto: "A migração traz novas tradições culturais, como festas típicas, culinária e músicas regionais, que enriquecem a vida urbana e a tornam mais diversa e plural.",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Além disso, os migrantes do campo podem trazer uma visão mais simples e prática da vida, com valorização do trabalho manual e relações comunitárias, que podem influenciar positivamente a cultura da cidade.",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 