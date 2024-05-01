import {question} from 'readline-sync'

function mostrar(mensagem){
   console.log(mensagem)
}

function pegar_numero(mensagem){
   return Number(question(mensagem))
}

function main(){
   const qtd_num_seq = pegar_numero('Insira um número da quantidade de números de uma sequência: ')
   let f1 = 1
   let f2 = 1
   let f3 = 2
   for(let contador_seq = 3 ;contador_seq <= qtd_num_seq; contador_seq++){
       if(qtd_num_seq === 2){
           mostrar(`sequência = (${f1} \n${f2}`)
       }
       if(contador_seq === 3){
           mostrar(`Sequência: \n${f1}\n${f2}\n${f3}`)
           f1 = f2
           f2 = f3
           f3 = f1+f2
           mostrar(`${f3}`)
       }else if(contador_seq > 3){
           f1 = f2
           f2 = f3
           f3 = f1+f2
           mostrar(`${f3}`)
       }
   }

}
main()