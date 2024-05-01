import { question } from "readline-sync"

function mostrar(mensagem){
    console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    mostrar('====================================================================')
    let nº_filhos = 0
    let qtd_habitantes = pegar_numero('Insira a quantidade de habitantes da pesquisa: ')
    let salario
    let soma_salarios
    let salario_ate_1000
    for(let i = qtd_habitantes; i >= 1; i--){
        nº_filhos += pegar_numero('Insira a sua quantidade de filhos')
        salario = pegar_numero('Insira seu salário: ')
        mostrar('=================Novo habitante==================')
        soma_salarios+= salario
        if(salario <= 1000 ){
            salario_ate_1000 += salario
        }
    }
    const media_filhos = nº_filhos/qtd_habitantes
    const media_salarios = soma_salarios/qtd_habitantes
    const percentil_1000 = (salario_ate_1000/soma_salarios)*100
    mostrar(`
    ============================================================================
    Olá, a pesquisa realizada com ${qtd_habitantes} pessoas tem como resultado:
    média de filhos = ${media_filhos}
    média de salários = ${media_salarios}
    percentual de salários até R$1000 reais = ${percentil_1000}
    ============================================================================
    `)
}
main()