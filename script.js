const gridNumeros = document.querySelector(".gridNumeros");
const gridUtilitarios = document.querySelector(".gridUtilitarios");
const gridOperadores = document.querySelector(".gridOperadores");
const screen = document.querySelector(".screenCalc");

const spanScreen = document.createElement("span");
screen.appendChild(spanScreen);
spanScreen.classList.add("spanScreen");


const numeros = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "="
]

const utilitarios = [
    "CE",
    "++",
    "--",
    "C"
]

const operadores = [
    "/",
    "*",
    "-",
    "+"
]

function createButtonsNumeros(){
    const button = document.createElement("button");
    button.classList.add("buttons");
    return button;
}

const clonarNumeros = () =>{
    numeros.forEach((numero) => {
        let buttons = createButtonsNumeros();
        buttons.innerHTML = numero;
        gridNumeros.appendChild(buttons);
    });
}

clonarNumeros();

function createButtonsUtilitarios(){
    const button = document.createElement("button");
    button.classList.add("utilitarios");
    return button;
}

const clonarUtilitarios = () =>{
    utilitarios.forEach((utilitario) =>{
        let buttons = createButtonsUtilitarios();
        buttons.innerHTML = utilitario;
        gridUtilitarios.appendChild(buttons);
    });
}

clonarUtilitarios();

function createButtonsOperadores(){
    const button = document.createElement("button");
    button.classList.add("operadores");
    return button;
}

const clonarOperadores = () =>{
    operadores.forEach((operador) =>{
        let buttons = createButtonsOperadores();
        buttons.innerHTML = operador;
        gridOperadores.appendChild(buttons);
    });
}

clonarOperadores();

//Limite da Tela

function limiteTela(){
    if(mostrarTela.length > 7 && mostrarTela.length < 11){
        spanScreen.style.fontSize = "50px";
        spanScreen.length = 11;
    }else if(mostrarTela.length >= 11){
        mostrarTela = mostrarTela.slice(0, -1);
        spanScreen.innerHTML = mostrarTela;
    }else if(mostrarTela.length <= 7){
        spanScreen.style.fontSize = "70px";
    }
}

//variavel para envio
    const numbers = document.getElementsByClassName("buttons");
    const utilitarioApagar = document.getElementsByClassName("utilitarios");

    let mostrarTela = "";
    let ativador = "";
    let number = "";
    let sinal = "";
    let valor1 = 0;
    let valor2 = 0;
    
function operacao(){
    const operadorClick = document.getElementsByClassName("operadores");
    operadorClick[0].value = operadores[0];
    operadorClick[1].value = operadores[1];
    operadorClick[2].value = operadores[2];
    operadorClick[3].value = operadores[3];
    
    /*operadorClick[0].onclick = function(){
        if (operadorClick[0]){
            console.log("teste");
        }else{
            console.log("f");
        }
        console.log("kkkkkkkkkk");
    }*/
    
    operadorClick[0].onclick = function(){
        if(ativador.length < 1 && mostrarTela.length >= 1){
            ativador = "on";
            sinal = operadorClick[0];
            mostrarTela = mostrarTela + operadorClick[0].value;
            spanScreen.innerHTML = mostrarTela;
            limiteTela();
        }
    }
    operadorClick[1].onclick = function(){
        if(ativador.length < 1 && mostrarTela.length >= 1){
            ativador = "on";
            sinal = operadorClick[1];
            mostrarTela = mostrarTela + operadorClick[1].value;
            spanScreen.innerHTML = mostrarTela;
            limiteTela();
        }
    }
    operadorClick[2].onclick = function(){
        if(ativador.length < 1 && mostrarTela.length >= 1){
            ativador = "on";
            sinal = operadorClick[2];
            mostrarTela = mostrarTela + operadorClick[2].value;
            spanScreen.innerHTML = mostrarTela;
            limiteTela();
        } 
        //Número negativo
        /*else if(mostrarTela.length === 0){

        }*/
    }
    operadorClick[3].onclick = function(){
        if(ativador.length < 1 && mostrarTela.length >= 1){
            ativador = "on";
            sinal = operadorClick[3];
            mostrarTela = mostrarTela + operadorClick[3].value;
            spanScreen.innerHTML = mostrarTela;
            limiteTela();
        }
    }
}

operacao();

function valorNumeros(){
    numbers[0].value = numeros[0];
    numbers[1].value = numeros[1];
    numbers[2].value = numeros[2];
    numbers[3].value = numeros[3];
    numbers[4].value = numeros[4];
    numbers[5].value = numeros[5];
    numbers[6].value = numeros[6];
    numbers[7].value = numeros[7];
    numbers[8].value = numeros[8];
    numbers[9].value = numeros[9];
    numbers[10].value = numeros[10];

    numbers[0].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[0].value;
            mostrarTela = mostrarTela + numbers[0].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[0.].value;
        } else if(ativador === "on"){
            number = number + numbers[0].value;
            mostrarTela = mostrarTela + numbers[0].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[0].value;
        }
        limiteTela();
    }
    numbers[1].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[1].value;
            mostrarTela = mostrarTela + numbers[1].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[1].value;
        } else if(ativador === "on"){
            number = number + numbers[1].value;
            mostrarTela = mostrarTela + numbers[1].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[1].value;
        }
        limiteTela();
    }
    numbers[2].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[2].value;
            mostrarTela = mostrarTela + numbers[2].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[2].value;
        } else if(ativador === "on"){
            number = number + numbers[2].value;
            mostrarTela = mostrarTela + numbers[2].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[2].value;
        }
        limiteTela();
    }
    numbers[3].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[3].value;
            mostrarTela = mostrarTela + numbers[3].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[3].value;
        } else if(ativador === "on"){
            number = number + numbers[3].value;
            mostrarTela = mostrarTela + numbers[3].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[3].value;
        }
        limiteTela();
    }
    numbers[4].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[4].value;
            mostrarTela = mostrarTela + numbers[4].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[4].value;
        } else if(ativador === "on"){
            number = number + numbers[4].value;
            mostrarTela = mostrarTela + numbers[4].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[4].value;
        }
        limiteTela();
    }
    numbers[5].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[5].value;
            mostrarTela = mostrarTela + numbers[5].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[5].value;
        } else if(ativador === "on"){
            number = number + numbers[5].value;
            mostrarTela = mostrarTela + numbers[5].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[5].value;
        }
        limiteTela();
    }
    numbers[6].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[6].value;
            mostrarTela = mostrarTela + numbers[6].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[6].value;
        } else if(ativador === "on"){
            number = number + numbers[6].value;
            mostrarTela = mostrarTela + numbers[6].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[6].value;
        }
        limiteTela();
    }
    numbers[7].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[7].value;
            mostrarTela = mostrarTela + numbers[7].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[7].value;
        } else if(ativador === "on"){
            number = number + numbers[7].value;
            mostrarTela = mostrarTela + numbers[7].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[7].value;
        }
        limiteTela();
    }
    numbers[8].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[8].value;
            mostrarTela = mostrarTela + numbers[8].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[8].value;
        } else if(ativador === "on"){
            number = number + numbers[8].value;
            mostrarTela = mostrarTela + numbers[8].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[8].value;
        }
        limiteTela();
    }
    numbers[9].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[9].value;
            mostrarTela = mostrarTela + numbers[9].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[9].value;
        } else if(ativador === "on"){
            number = number + numbers[9].value;
            mostrarTela = mostrarTela + numbers[9].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[9].value;
        }
        limiteTela();
    }
    numbers[10].onclick = function(){
        spanScreen.style.color = "black";
        if(ativador !== "on"){
            number = number + numbers[10].value;
            mostrarTela = mostrarTela + numbers[10].value;
            spanScreen.innerHTML = mostrarTela;
            valor1 = parseInt(valor1) + numbers[10].value;
        } else if(ativador === "on"){
            number = number + numbers[10].value;
            mostrarTela = mostrarTela + numbers[10].value;
            spanScreen.innerHTML = mostrarTela;
            valor2 = parseInt(valor2) + numbers[10].value;
        }
        limiteTela();
    }
}

valorNumeros();

function funcionais() {
    const utilitarioApaga = utilitarioApagar[3];
    const utilitarioApagaTudo = utilitarioApagar[0];
    const incrementar = utilitarioApagar[1];
    const decrementar = utilitarioApagar[2];
    let valores = parseInt(valor1) + parseInt(valor2);

    utilitarioApaga.onclick = function(){
        if(mostrarTela.length >= 0){
            if(
                mostrarTela.slice(-1) === "*" ||
                mostrarTela.slice(-1) === "/" ||
                mostrarTela.slice(-1) === "-" ||
                mostrarTela.slice(-1) === "+"
               ){
                ativador = "", sinal = "";
            }
            if(ativador !== "on" && mostrarTela.length > 0){
                mostrarTela = mostrarTela.slice(0,-1);
                spanScreen.innerHTML = mostrarTela;
                valor1 = mostrarTela;
                console.log(valor1);
            } else if(
                ativador === "on" &&
                mostrarTela.slice(-1) !== "*" &&
                mostrarTela.slice(-1) !== "/" &&
                mostrarTela.slice(-1) !== "-" &&
                mostrarTela.slice(-1) !== "+"
            ){
                mostrarTela = mostrarTela.slice(0,-1);
                spanScreen.innerHTML = mostrarTela;
                valor2 = valor2.toString().slice(0,-1);
                console.log(valor2);
                console.log(valor2.length);
            }else if(mostrarTela.length === 0){
                valor1 = 0, valor2 = 0;
                ativador = "", sinal = "";
            }
            if(valor1 === ""){
                valor1 = 0;
            }else if(valor2.length === 0){
                valor2 = 0;
            }else if(resposta > 0){
                resposta = resposta.toString().slice(0, -1);
                spanScreen.innerHTML = resposta;
                console.log(resposta);
                if(resposta.toString().length === 0){
                    resposta = 0;
                }
            }
        }
        limiteTela();
    }
    utilitarioApagaTudo.onclick = function(){
        if(mostrarTela.length > 0 && resposta === 0){
            mostrarTela = "";
            spanScreen.innerHTML = mostrarTela;
            ativador = "", sinal = "";
            valor1 = 0;
            valor2 = 0;
        }else if(resposta !== 0){
            resposta = 0;
            spanScreen.innerHTML = "";
        }
        limiteTela();
    }
    incrementar.onclick = function(){
        if(mostrarTela.length !== 0 && ativador !== "on"){
            valor1 = parseInt(valor1) + 1;
            mostrarTela = valor1.toString();
            spanScreen.innerHTML = mostrarTela;
        }else if(
            ativador === "on" &&
            mostrarTela.slice(-1) !== "*" &&
            mostrarTela.slice(-1) !== "/" &&
            mostrarTela.slice(-1) !== "-" &&
            mostrarTela.slice(-1) !== "+"
        ){
            valor2 = parseInt(valor2) + 1;
            valores = valor1 + sinal.value + valor2;
            mostrarTela = valores.toString();
            spanScreen.innerHTML = mostrarTela;
        }
        limiteTela();
    }
    decrementar.onclick = function(){
        if(mostrarTela.length !== 0 && ativador !== "on"){
            valor1 = parseInt(valor1) - 1;
            mostrarTela = valor1.toString();
            spanScreen.innerHTML = mostrarTela;
        } else if(
            ativador === "on" &&
            mostrarTela.slice(-1) !== "*" &&
            mostrarTela.slice(-1) !== "/" &&
            mostrarTela.slice(-1) !== "-" &&
            mostrarTela.slice(-1) !== "+"
        ){
            valor2 = parseInt(valor2) - 1;
            valores = valor1 + sinal.value + valor2;
            mostrarTela = valores.toString();
            spanScreen.innerHTML = mostrarTela;
        }
        limiteTela();
    }
}

funcionais();