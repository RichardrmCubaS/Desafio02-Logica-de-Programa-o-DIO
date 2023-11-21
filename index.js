/* Desafio Calculadora de Partidas Rankeadas */

/* Definição das Variaveis */
let jugadorNome = "MarioB";
let pontosVitorias = 102;
let pontosDerrotas = 21;
let resultadoClasificacao = clasificarJogo();

/* Definição function do jogos*/
/* Function de balances de ponto de vitorias e Derrotas */
function pontoJogos(pontosVitorias, pontosDerrotas) {
    let pontosResultantes = pontosVitorias - pontosDerrotas
    return pontosResultantes
  }

/* Function de calculo de nivel do jugador */
function clasificarJogo() {
    let pontosRankeados = pontoJogos(pontosVitorias, pontosDerrotas);
    let contador = 10;
    let clasificado= "";
    for (i = contador; i <= pontosRankeados; i += contador) { 
        if (pontosRankeados <= 10){
            clasificado = "Ferro";
        } else if(pontosRankeados >10 && pontosRankeados<= 20){
            clasificado = "Bronze";
        } else if(pontosRankeados > 20 && pontosRankeados <= 50){
            clasificado = "Prata";
        } else if(pontosRankeados > 50 && pontosRankeados <= 80){
            clasificado = "Ouro";
        } else if(pontosRankeados > 80 && pontosRankeados <= 90){
            clasificado = "Diamante";        
        } else if(pontosRankeados > 90 && pontosRankeados <= 100){
            clasificado = "lendario";        
        } else if(pontosRankeados > 100 ){
            clasificado = "Imortal";        
        } 
    }
    return `O Jugador ${jugadorNome} tem de saldo de ${pontosRankeados} pontos e está no nível de ${clasificado}`  
}

/* Saida dos Resultados e uso de concatenação. */
console.log("======================================================================= ")
console.log("                      Resultado da Clasificação                         ")
console.log("======================================================================= ");
console.log(resultadoClasificacao);
console.log("======================================================================= ");
