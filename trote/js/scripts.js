function calcular(){
    //Vamos criar duas variáveis
    //JS as variáveis não possuem tipo

    let mascote, homenagem, leite, kit, suplemento, soma, equipe
    
    
    
    //recupera o valor do  mascote digitado pelo usuário
    mascote = Number(document.getElementById("mascote").value)
    
    //recupera o valor da homenagem digitado pelo usuário
    homenagem = Number(document.getElementById("homenagem").value)
    //recupera a quantidade de litros de leite

    leite = Number(document.getElementById("leite").value)
    
    //recuperar a quantidade avulsa de kits de alimentação
    kit = Number(document.getElementById("kit").value)

    //recuperar a quantidade avulsa de suplemento
    suplemento = Number(document.getElementById("suplemento").value)

   



    //calcular a soma
     soma = mascote + homenagem + (2 *(leite)) 

    equipe = document.getElementById("equipe").value

    if(equipe == "Laranja"){
        if(kit >= 97){
            soma = soma + 5000 + ((kit - 97) * 30)
        }
        else if(kit >= 78){
            soma = soma + 4000 + ((kit - 78) * 30)
        }
        else if(kit >= 49){
            soma = soma + 2500 + ((kit - 49) * 30)
        }
        else if(kit >= 19){
            soma = soma + 1000 + ((kit - 19) * 30)
        }
    
    }
    
    
    //template string usa-se a crase
    document.getElementById("soma").innerHTML = `A soma é ${soma}`

    
    




}