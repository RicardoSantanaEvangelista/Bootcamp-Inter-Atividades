//alert("Tudo certo por enquanto !");


/*// Tipos Primitivos

// Boolean
var vOuF = false;
console.log(typeof(vOuF));

// Number
var numb = 1;
console.log(typeof(numb));


//String
var nome = 'Ricardo';
console.log(typeof(nome));

// Variaveis

var variavel; // Escopo local e global e se não for atribuida nenhum valor, será tratada como null/undefined
let variavel; // Espoco local e se não for atribuida nenhum valor será tratada como null/undefined
const variavel = 20; // Não pode ser alterada e tem que ter um valor fixo e tem que ter um valor inicial
 */

// Estrutura Condicionais

/*var jogador1 = 1;
var jogador2 = 1;
var placar;*/

/*if (jogador1 != -1){
    if(jogador1 > 0){
        console.log("Jogador 1 marcou ponto");
    }else if(jogardor2 > 0){
        console.log("Jogador 2 marcou ponto");
    }else{
        console.log("Ninguém marcou ponto");
    }
}else{
    console.log("Jogada inválida !");
}*/

/*switch (placar) {
    case placar = jogador1 > jogador2:
    console.log("Jogador 1 ganhou !");
    break;

    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou !");
        break;
    default:
        console.log("Ninguém ganhou !");
}*/

// Estrutura de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];

// FOT

/*for(let indice = 0; indice < array.length; indice ++){
    console.log(indice);
}**/

// FOR IN

/*for(let i in array){
    console.log(i);
}*/

// FOR OF

/*for(i of array){
    console.log(i);
}*/


// WHILE 
/*var a = 0;

/*while (a < 10){
    a++;
    console.log(a);
}*/

// DO WHILE

/*do {
    a++;
    console.log(a);
}while(a < 10);*/


// FUNÇÕES

/*function funcao(){
    console.log("Mensagem veio de uma função !");
}

funcao();*/


/*function mensagem(parametro1, parametro2){
    console.log(parametro1, parametro2);
}

mensagem("Olá", "tudo bem?");*/

function calculadora(){
    const operacao = Number(prompt("Escolha uma operção: \n 1- Soma {+} \n 2- Subtração {-} \n 3- Multiplicação  {*} \n 4 - Divisão Real {/} \n 5 - Divisão Inteira {%} \n 6- Potenciação {**}"));

    if(!operacao || operacao <= 0 || operacao >=7){
        alert("[Erro] Informe uma opção válida !");
        calculadora();
    }else{
        let n1 =Number(prompt("Insira o primeiro valor: "));
        let n2 = Number(prompt("Insira o segundo valor: "));
        let resultado;

        if(!n1 || !n2){
            alert("Por favor, digite números válido !");
            calculadora();
        }else{
            function soma(){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function divisaoReal(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function divisaoIteira(){
                resultado = n1 % n2;
                alert(`${n1} % ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} ** ${n2} = ${resultado}`);
                novaOperacao();
            } 
        
            function novaOperacao(){
                let opcao = prompt("Deseja escolher outra operação ? \n 1- Sim \n 2 - Não");
                if (opcao == 1){
                    calculadora();
                }else if(opcao == 2){
                    alert("Obrigado e até mais !");
                }else{
                    alert("Digite uma opção válida !");
                    novaOperacao();
                }
            }

        }
    
            if(operacao == 1){
                soma()
            }else if (operacao == 2){
                 subtracao()
            }else if (operacao == 3){
                 multiplicacao()
            }else if (operacao == 4){
                 divisaoReal();
            }else if (operacao == 5){
                 divisaoIteira()
            }else if (operacao == 6) {
                 potenciacao();
            }
    }
   
    
}




calculadora()
