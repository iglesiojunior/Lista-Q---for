import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   const num_limite = pegar_numero('Insira um número da quantidade de números de uma sequência: ')
   const numerador = 1
   let resultado_soma = 0
   for(let denominador = 1 ;denominador <= num_limite; denominador++){
    resultado_soma += numerador/denominador
    denominador++
   }
   mostrar(`O resultado da soma das divisões sucessivas de 1/1 até 1/${num_limite} é igual a ${resultado_soma}`)
  
}
main()