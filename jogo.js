var timeID = null; // variavel que armazena a chamada timeout

function iniciarJogo() {
	var url = window.location.search;

	var nivel_jogo = url.replace("?", ""); //replace encontra uma caracter para substituir

	//alert(nivel_jogo);

	var tempo_segundos = 0;

	//fácil -> 120 segundos
	if(nivel_jogo == 1){
		tempo_segundos = 120;
	}
	// normal -> 60 segundos
	if(nivel_jogo == 2){
		tempo_segundos = 60;	
	}
	//dificil -> 30 segundos
	if(nivel_jogo == 3){
		tempo_segundos = 30;
	}

	//inserindo segundos no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de baloes
	var qtde_baloes = 20;
	cria_baloes(qtde_baloes);

	//imprimir balões inteiros
	document.getElementById('baloes_inteiros').innerHTML = qtde_baloes;
	document.getElementById('baloes_estourados').innerHTML = 0;

	contagem_tempo(6 + 1)

}

function contagem_tempo(segundos){

	segundos = segundos - 1;

	if (segundos == -1) {
		clearTimeout(timeID); //para a execução da função settimeout
		game_over()
		return false;
	}

	document.getElementById('cronometro').innerHTML-segundos;

	timeID = setTimeout("contagem_tempo("+segundos+")", 1000);

}

function game_over() {

	alert('Fim do jogo, você não conseguiu estourar todos os balões a tempo');
}

function cria_baloes(qtde_baloes){
	for(var i = 1; i <= qtde_baloes; i++){
		
		var balao = document.createElement("img");
		balao.src = 'imagens/balao_azul_pequeno.png';
		balao.style.margin = '10px';

		document.getElementById('cenario').appendChild(balao);

	}
}