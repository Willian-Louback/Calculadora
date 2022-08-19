const enviar = numbers[11];
let resposta = 0;

function calcular(){
    enviar.onclick = function(){
        if(valor2 > 0){
            if(sinal.value === operadores[0]){
                resposta = parseInt(valor1) / parseInt(valor2);
                spanScreen.style.color = "red";
                spanScreen.innerHTML = parseInt(resposta);
                mostrarTela = "", ativador = "", sinal="", valor1 = 0, valor2 = 0;
            } else if (sinal.value === operadores[1]){
                resposta = parseInt(valor1) * parseInt(valor2);
                spanScreen.style.color = "red";
                spanScreen.innerHTML = resposta;
                mostrarTela = "", ativador = "", sinal="", valor1 = 0, valor2 = 0;
            } else if (sinal.value === operadores[2]){
                resposta = parseInt(valor1) - parseInt(valor2);
                spanScreen.style.color = "red";
                spanScreen.innerHTML = resposta;
                mostrarTela = "", ativador = "", sinal="", valor1 = 0, valor2 = 0;
            } else if (sinal.value === operadores[3]){
                resposta = parseInt(valor1) + parseInt(valor2);
                spanScreen.style.color = "red";
                spanScreen.innerHTML = resposta;
                mostrarTela = "", ativador = "", sinal="", valor1 = 0, valor2 = 0;
            }
        }
    }
}

calcular();