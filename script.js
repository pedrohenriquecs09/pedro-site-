const nomes = ["Caleri", "Luciano", "Lucas", "Wellington"];
function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}
const nome = aleatorio(nomes);

const perguntas = [
    {
        texto: "Você conhece a história do tricolor paulista?",
        opcoes: 
            {
                texto: "Quando o São Paulo Futebol Clube foi fundado.",
                respostas: ["O São Paulo foi fundado em 25 de janeiro de 1930.", "Ravenclaw"]
            },
            {
                texto: "Quais times originaram o São Paulo?",
                respostas: ["O clube foi formado pela união da Associação Atlética das Palmeiras com dissidentes do Club Athletico Paulistano, em 1930"
                ]
            },
            {
                texto: "Em que ano o São Paulo foi refundado?",
                respostas: [O São Paulo foi refundado em 1935 após uma fusão com o Clube de Regatas Tietê. ]
            },

    }
]