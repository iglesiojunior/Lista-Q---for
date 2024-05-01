import { question } from "readline-sync"

function calcular_resultado(Rogério, Ricardo, Ezequiel, Indecisos,Nulos,qtd_eleitores){
    const percentual_rogerio = (Rogério/qtd_eleitores)*100
    const percentual_ricardo = (Ricardo/qtd_eleitores)*100
    const percentual_ezequiel = (Ezequiel/qtd_eleitores)*100
    const percentual_indecisos = (Indecisos/qtd_eleitores)*100
    const percentual_nulos = (Nulos/qtd_eleitores)*100
    const ganhador = String(Math.max(Rogério, Ricardo, Ezequiel))
    const resultado_final = `
    ============================================
    Resultado IFPI 2024
    Candidatos:          Porcentagem de votos:
    Rogério              ${percentual_rogerio}
    Ricardo              ${percentual_ricardo}
    Ezequiel             ${percentual_ezequiel}
    votadores indecisos  ${percentual_indecisos}
    votos nulos          ${percentual_nulos}
    Total entrevistados  ${(qtd_eleitores)-1}
    
    Vencedor primeiro turno: ${ganhador}
    =============================================
    `
    return resultado_final
}

function mostrar(mensagem){
    return console.log(mensagem)
}

function pegar_numero(mensagem){
    return Number(question(mensagem))
}

function main(){
    let qtd_votos = pegar_numero("Insira a quantidade de eleitores a votar:")
    let votos
    let qtd_eleitores = 0 
    let Rogério = 0
    let Ricardo = 0
    let Ezequiel = 0
    let Indecisos = 0
    let Nulos = 0
    for(;qtd_votos >= 1; qtd_votos--){
        votos = pegar_numero( `
        Olá caro eleitor ${(qtd_eleitores+1)}!
        Insira um dos seguintes votos:
        01 - Rogério Silva
        02 - Ricardo Ramos
        03 - Ezequiel
        09 - Indeciso
        0 - nulo/branco
        -1 acabar votacao
    
        Seu voto: 
        `)
        qtd_eleitores++
        
        if(votos === 1){
            Rogério +=1
         }else if(votos === 2){
            Ricardo += 1
         }else if(votos === 3){
            Ezequiel += 1
         }else if(votos === 9){
            Indecisos+=1
         }else if(votos === 0){
            Nulos+=1
         }

    }
    const resultado_urnas = calcular_resultado(Rogério, Ricardo, Ezequiel, Indecisos,Nulos,qtd_eleitores)
    mostrar(resultado_urnas)

}
main()