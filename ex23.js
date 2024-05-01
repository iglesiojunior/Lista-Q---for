import { question } from "readline-sync"

function calcular_liquido(salario_bruto, desconto){
    const salario_liquido = salario_bruto*desconto
    return salario_liquido
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let qtd_trabalhadores = pegar_numero("Insira a quantaidade de trabalhadores que você irá cadastrar")
    let horas_trabalhadas
    let qtd_dependentes
    for(;qtd_trabalhadores >= 1; qtd_trabalhadores--){
        const nº_identidicação = pegar_numero('Insira o seu nº de identificação: ')
        horas_trabalhadas = pegar_numero('Insira suas horas trabalhadas: ')
        qtd_dependentes = pegar_numero('Insira a quantidade de dependentes recebidos: ')
        const salario_bruto = (12*horas_trabalhadas)+(40*qtd_dependentes)
        const desconto_inss = calcular_liquido(salario_bruto, 0.085)
        const desconto_ir = calcular_liquido(salario_bruto, 0.05)
        console.log(`
    ===========================================
    seu salário bruto: R$${salario_bruto}
    (-)IR(5%): R$${desconto_ir.toFixed(2)}
    (-)INSS(8.5%): R$${desconto_inss.toFixed(2)}
    total de descontos: R$${(desconto_ir+desconto_inss).toFixed(2)}
    salário líquido: R$${salario_bruto -(desconto_inss+desconto_ir).toFixed(2)}
    ===========================================
    `)
    }
}
main()