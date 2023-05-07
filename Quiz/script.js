// Funções que realizam a troca de tela (esncondendo/mostrando DIVs e botões)
function telaAnterior(numTela){
    document.getElementById("tela" + numTela).style.display = ("flex");
    document.getElementById("tela" + (numTela + 1)).style.display = ("none");
    document.getElementById("controle" + numTela).style.display = ("flex");
    document.getElementById("controle" + (numTela + 1)).style.display = ("none");
}

function proximaTela(numTela){
    // Tratativa para a tela 4 onde há uma pergunta (sim/não)
    if(numTela == null){
        document.getElementById("tela" + 4).style.display = ("none");
        document.getElementById("controle" + 4).style.display = ("none");
        document.getElementById("controle" + 5).style.display = ("none");
        document.getElementById("tela" + 6).style.display = ("flex");
        document.getElementById("controle" + 6).style.display = ("flex");
    }
    
    document.getElementById("tela" + (numTela - 1)).style.display = ("none");
    document.getElementById("tela" + numTela).style.display = ("flex");
    document.getElementById("controle" + (numTela - 1)).style.display = ("none");
    document.getElementById("controle" + numTela).style.display = ("flex");  
}