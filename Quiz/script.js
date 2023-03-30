// Obtendo as telas (divs) para realizar a troca na gameficação
const telaInicial = document.getElementById("telaInicial");
const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");
const tela3 = document.getElementById("tela3");
const tela4 = document.getElementById("tela4");
const tela5 = document.getElementById("tela5");
const tela6 = document.getElementById("tela6");
const tela7 = document.getElementById("tela7");
const tela8 = document.getElementById("tela8");
const tela9 = document.getElementById("tela9");
const tela10 = document.getElementById("tela10");
const tela11 = document.getElementById("tela11");
const tela12 = document.getElementById("tela12");
const tela13 = document.getElementById("tela13");
const tela14 = document.getElementById("tela14");
const tela15 = document.getElementById("tela15");
const tela16 = document.getElementById("tela16");

//OBTENDO DIVs DE CONTROLE (PROXIMO/ANTERIOR)
const c1 = document.getElementById("c1");
const c2 = document.getElementById("c2");
const c3 = document.getElementById("c3");
const c4 = document.getElementById("c4");
const c5 = document.getElementById("c5");
const c6 = document.getElementById("c6");
const c7 = document.getElementById("c7");
const c8 = document.getElementById("c8");
const c9 = document.getElementById("c9");
const c10 = document.getElementById("c10");
const c11 = document.getElementById("c11");
const c12 = document.getElementById("c12");
const c13 = document.getElementById("c13");
const c14 = document.getElementById("c14");
const c15 = document.getElementById("c15");
const c16 = document.getElementById("c16");

//FUNÇÃO QUE ESCONDE DIV ATUAL E MOSTRA A ANTERIOR
function telaAnterior(tela){  
    switch(tela){
        case 0:
            telaInicial.style.display = ("flex");
            tela1.style.display = ("none"); 
            c1.style.display = ("none");
            break;
        case 1:
            tela1.style.display = ("flex");
            tela2.style.display = ("none");
            c1.style.display = ("flex");
            c2.style.display = ("none");
            break;
        case 2:
            tela2.style.display = ("flex");
            tela3.style.display = ("none");
            c2.style.display = ("flex");
            c3.style.display = ("none");
            break;
        case 3:
            tela3.style.display = ("flex");
            tela4.style.display = ("none");
            c3.style.display = ("flex");
            c4.style.display = ("none");
            break;
        case 4:
            tela4.style.display = ("flex");
            tela5.style.display = ("none");
            c4.style.display = ("flex");
            c5.style.display = ("none");
            break;
        case 5:
            tela5.style.display = ("flex");
            tela6.style.display = ("none");
            c5.style.display = ("flex");
            c6.style.display = ("none");
            break;
        case 6:
            tela6.style.display = ("flex");
            tela7.style.display = ("none");
            c6.style.display = ("flex");
            c7.style.display = ("none");
            break;
        case 7:
            tela7.style.display = ("flex");
            tela8.style.display = ("none");
            c7.style.display = ("flex");
            c8.style.display = ("none");
            break;
        case 8:
            tela8.style.display = ("flex");
            tela9.style.display = ("none");
            c8.style.display = ("flex");
            c9.style.display = ("none");
            break;
        case 9:
            tela9.style.display = ("flex");
            tela10.style.display = ("none");
            c9.style.display = ("flex");
            c10.style.display = ("none");
            break;
        case 10:
            tela10.style.display = ("flex");
            tela11.style.display = ("none");
            c10.style.display = ("flex");
            c11.style.display = ("none");
            break;
        case 11:
            tela11.style.display = ("flex");
            tela12.style.display = ("none");
            c11.style.display = ("flex");
            c12.style.display = ("none");
            break;
        case 12:
            tela12.style.display = ("flex");
            tela13.style.display = ("none");
            c12.style.display = ("flex");
            c13.style.display = ("none");
            break;
        case 13:
            tela13.style.display = ("flex");
            tela14.style.display = ("none");
            c13.style.display = ("flex");
            c14.style.display = ("none");
            break;
        case 14:
            tela14.style.display = ("flex");
            tela15.style.display = ("none");
            c14.style.display = ("flex");
            c15.style.display = ("none");
            break;
        case 15:
            tela15.style.display = ("flex");
            tela16.style.display = ("none");
            c15.style.display = ("flex");
            c16.style.display = ("none");
            break;
    } 
}

//FUNÇÃO QUE ESCONDE A DIV ATUAL E MOSTRA A PRÓXIMA
function proximaTela(tela){
    switch(tela){
        case 1:
            telaInicial.style.display = ("none");
            tela1.style.display = ("flex"); 
            c1.style.display = ("flex");
            break;
        case 2:
            tela1.style.display = ("none");
            tela2.style.display = ("flex"); 
            c1.style.display = ("none");
            c2.style.display = ("flex");
            break;
        case 3:
            tela2.style.display = ("none"); 
            tela3.style.display = ("flex");
            c2.style.display = ("none");
            c3.style.display = ("flex");
            break;
        case 4:
            tela3.style.display = ("none"); 
            tela4.style.display = ("flex");
            c3.style.display = ("none");
            c4.style.display = ("flex");
            break;
        case 5:
            tela4.style.display = ("none"); 
            tela5.style.display = ("flex");
            c4.style.display = ("none");
            c5.style.display = ("flex");
            break;
        case 6:
            tela5.style.display = ("none"); 
            tela6.style.display = ("flex");
            c5.style.display = ("none");
            c6.style.display = ("flex");
            break;
        case 7:
            tela6.style.display = ("none"); 
            tela7.style.display = ("flex");
            c6.style.display = ("none");
            c7.style.display = ("flex");
            break;
        case 8:
            tela7.style.display = ("none"); 
            tela8.style.display = ("flex");
            c7.style.display = ("none");
            c8.style.display = ("flex");
            break;
        case 9:
            tela8.style.display = ("none"); 
            tela9.style.display = ("flex");
            c8.style.display = ("none");
            c9.style.display = ("flex");
            break;
        case 10:
            tela9.style.display = ("none"); 
            tela10.style.display = ("flex");
            c9.style.display = ("none");
            c10.style.display = ("flex");
            break;
        case 11:
            tela10.style.display = ("none"); 
            tela11.style.display = ("flex");
            c10.style.display = ("none");
            c11.style.display = ("flex");
            break;
        case 12:
            tela11.style.display = ("none"); 
            tela12.style.display = ("flex");
            c11.style.display = ("none");
            c12.style.display = ("flex");
            break;
        case 13:
            tela12.style.display = ("none"); 
            tela13.style.display = ("flex");
            c12.style.display = ("none");
            c13.style.display = ("flex");
            break;
        case 14:
            tela13.style.display = ("none"); 
            tela14.style.display = ("flex");
            c13.style.display = ("none");
            c14.style.display = ("flex");
            break;
        case 15:
            tela14.style.display = ("none"); 
            tela15.style.display = ("flex");
            c14.style.display = ("none");
            c15.style.display = ("flex");
            break;
        case 16:
            tela15.style.display = ("none"); 
            tela16.style.display = ("flex");
            c15.style.display = ("none");
            c16.style.display = ("flex");
            break;
        //O CASO ABAIXO É PARA A TELA 4
        case 'S':
            tela4.style.display = ("none");
            c4.style.display = ("none");
            tela6.style.display = ("flex");
            c5.style.display = ("none");
            c6.style.display = ("flex");
            break;
    }
}