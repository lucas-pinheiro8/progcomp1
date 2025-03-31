function calcular(){
    //Vamos criar duas variáveis
    //JS as variáveis não possuem tipo

    let mascote, homenagem, leite, kitAvulso, suplementoAvulso, arroz5Avulso, arroz1Avulso, feijao2Avulso, feijao1Avulso,
    macarraoAvulso, oleoAvulso
    
    //recupera o valor do  mascote digitado pelo usuário
    mascote = document.getElementById("mascote").value
    
    //recupera o valor da homenagem digitado pelo usuário
    homenagem = document.getElementById("homenagem").value
    //recupera a quantidade de litros de leite

    leite = document.getElementById("leite").value
    
    //recuperar a quantidade avulsa de kits de alimentação
    kitAvulso = document.getElementById("kitAvulso").value

    //recuperar a quantidade avulsa de suplemento
    suplementoAvulso = document.getElementById("suplementoAvulso").value

    arroz5Avulso = document.getElementById("arroz5Avulso").value

    arroz1Avulso = document.getElementById("arroz1Avulso").value
    
    feijao2Avulso = document.getElementById("feijao2Avulso").value
    
    feijao1Avulso = document.getElementById("feijao1Avulso").value
    
    macarraoAvulso = document.getElementById("macarraoAvulso").value
    
    oleoAvulso = document.getElementById("oleoAvulso").value



    //calcular a soma
    let soma = Number(mascote) + Number(homenagem) + (2 * Number(leite)) + (30 * Number(kitAvulso)) + (15 * Number(suplementoAvulso)) +
    (5 * Number(arroz5Avulso)) + (1 * Number(arroz1Avulso)) + (2 * Number(feijao2Avulso)) + (1 * Number(feijao1Avulso)) + 
    (0.5 * Number(macarraoAvulso)) + (1 * Number(oleoAvulso))
    
    //template string usa-se a crase
    document.getElementById("soma").innerText = `A soma é ${soma}`





}