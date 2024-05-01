import {question} from 'readline-sync'

function mostrar(mensagem){
   console.log(mensagem)
}

function pegar_numero(mensagem){
   return Number(question(mensagem))
}

function main(){
   let contador_qtd_num = pegar_numero('Insira o número N: ')
   let maior_num_lista = 0
   for(;contador_qtd_num > 0;contador_qtd_num--){
       const pedido_de_num = pegar_numero('Insira um número a ser comparado: ')
       if(pedido_de_num > maior_num_lista){
           maior_num_lista = pedido_de_num
       }
   }
   mostrar(`
   O maior número da lista é: ${maior_num_lista}
   `)


}
main()