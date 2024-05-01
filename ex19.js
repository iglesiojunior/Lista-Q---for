import {question} from 'readline-sync'


function mostrar(mensagem){
   console.log(mensagem)
}


function pegar_numero(mensagem){
   return Number(question(mensagem))
}


function main(){
   let denominador_origem = pegar_numero('Insira um número da quantidade de números de uma sequência: ')
   let numerador = 1
   let resultado_soma = 0
   for(let decrementador_denominador=0 ;numerador <= denominador_origem && (denominador-decrementador_denominador) !== 1; decrementador_denominador++){
        if((denominador_origem-decrementador_denominador)%2 === 0){
            resultado_soma += (denominador_origem-decrementador_denominador)/numerador
            numerador++
        }else{
            resultado_soma += numerador/(denominador_origem-decrementador_denominador)
            numerador++
}
   }
   mostrar(`O resultado da soma das divisões sucessivas de 1/${denominador_origem} até ${denominador_origem}/${1} é igual a ${resultado_soma}`)
   
}
main()