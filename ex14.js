import {question} from 'readline-sync'

function mostrar(mensagem){
   console.log(mensagem)
}

function pegar_numero(mensagem){
   return Number(question(mensagem))
}

function main(){
   const numeros_limites = pegar_numero('Insira o número N: ')
   let contador_num_base = 1
   for(let contador_num_base = 1 ; contador_num_base*contador_num_base <= numeros_limites; contador_num_base++) {
       let contador_quadrados = contador_num_base*contador_num_base
       if((contador_num_base+1)**2 > numeros_limites){
            mostrar(contador_quadrados)
       }else if((contador_num_base+1)**2 === numeros_limites){
            mostrar(contador_num_base)
       }
   }


}
main()