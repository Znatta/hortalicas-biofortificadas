window.addEventListener("load",function(){
    document.getElementById("tela1").style.display = ("flex");
    document.getElementById("controles1").style.display = ("flex");
});

//Telas
const tela1 = document.getElementById("tela1");
const tela2 = document.getElementById("tela2");
const tela3 = document.getElementById("tela3");
const tela4 = document.getElementById("tela4");
const tela5 = document.getElementById("tela5");
const tela6 = document.getElementById("tela6");

//Botões de controle (proximo/anterior)
const c1 = document.getElementById("controles1");
const c2 = document.getElementById("controles2");
const c3 = document.getElementById("controles3");
const c4 = document.getElementById("controles4");
const c5 = document.getElementById("controles5");
const c6 = document.getElementById("controles6");

//Questão 1
const btn1A = document.getElementById("a1");
const btn1B = document.getElementById("b1");
const btn1C = document.getElementById("c1");
const span1 = document.getElementById("quest1");

//Questão 2
const btn2A = document.getElementById("a2");
const btn2B = document.getElementById("b2");
const btn2C = document.getElementById("c2");
const span2 = document.getElementById("quest2");

//Questão 3
const btn3A = document.getElementById("a3");
const btn3B = document.getElementById("b3");
const span3 = document.getElementById("quest3");

//Questão 4
const btn4A = document.getElementById("a4");
const btn4B = document.getElementById("b4");
const span4 = document.getElementById("quest4");

//Questão 5
const btn5A = document.getElementById("a5");
const btn5B = document.getElementById("b5");
const btn5C = document.getElementById("c5");
const span5 = document.getElementById("quest5");

//Questão 6
const btn6A = document.getElementById("a6");
const btn6B = document.getElementById("b6");
const btn6C = document.getElementById("c6");
const span6 = document.getElementById("quest6");

//Funções de troca de tela
function telaAnterior(tela){
    switch(tela){
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
    }
}

function proximaTela(tela){
    switch(tela){
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
    }
}

//Funções de verificação de resposta por questão
//Questão 1
function resposta1 (alternativa){
    switch(alternativa){
        case 'A':
            btn1A.style.background = ("#71BC06");
            btn1A.style.border = ("2px solid green");
            span1.textContent = ("CORRETO!");
            break;
        case 'B':
            btn1A.style.background = ("#71BC06");
            btn1A.style.border = ("2px solid green");
            btn1B.style.background = ("#ff00008e");
            span1.textContent = ("INCORRETO!");
            break;
        case 'C':
            btn1A.style.background = ("#71BC06");
            btn1A.style.border = ("2px solid green");
            btn1C.style.background = ("#ff00008e");
            span1.textContent = ("INCORRETO!");
            break;
    }
}

//Questão 2
function resposta2 (alternativa){
    switch(alternativa){
        case 'A':
            btn2C.style.background = ("#71BC06");
            btn2C.style.border = ("2px solid green");
            btn2A.style.background = ("#ff00008e");
            span2.textContent = ("INCORRETO!");
            break;
        case 'B':
            btn2C.style.background = ("#71BC06");
            btn2C.style.border = ("2px solid green");
            btn2B.style.background = ("#ff00008e");
            span1.textContent = ("INCORRETO!");
            break;
        case 'C':
            btn2C.style.background = ("#71BC06");
            btn2C.style.border = ("2px solid green");
            span2.textContent = ("CORRETO!");
            break;
    }
}

//Questão 3
function resposta3 (alternativa){
    switch(alternativa){
        case 'A':
            btn3B.style.background = ("#71BC06");
            btn3B.style.border = ("2px solid green");
            btn3A.style.background = ("#ff00008e");
            span3.textContent = ("INCORRETO!");
            break;
        case 'B':
            btn3B.style.background = ("#71BC06");
            btn3B.style.border = ("2px solid green");
            span3.textContent = ("CORRETO!");
            break;
    }
}
//Questão 4
function resposta4 (alternativa){
    switch(alternativa){
        case 'A':
            btn4A.style.background = ("#71BC06");
            btn4A.style.border = ("2px solid green");
            span4.textContent = ("CORRETO!");
            break;
        case 'B':
            btn4A.style.background = ("#71BC06");
            btn4A.style.border = ("2px solid green");
            btn4B.style.background = ("#ff00008e");
            span4.textContent = ("INCORRETO!");
            break;
    }
}

//Questão 5
function resposta5 (alternativa){
    switch(alternativa){
        case 'A':
            span5.textContent = ("ainda sem resposta");
            break;
        case 'B':
            span5.textContent = ("ainda sem resposta");
            break;
        case 'C':
            span5.textContent = ("ainda sem resposta");
            break;
    }
}

//Questão 6
function resposta6 (alternativa){
    switch(alternativa){
        case 'A':
            btn6B.style.background = ("#71BC06");
            btn6B.style.border = ("2px solid green");
            btn6A.style.background = ("#ff00008e");
            span6.textContent = ("INCORRETO!");
            break;
        case 'B':
            btn6B.style.background = ("#71BC06");
            btn6B.style.border = ("2px solid green");
            span6.textContent = ("CORRETO!");
            break;
        case 'C':
            btn6B.style.background = ("#71BC06");
            btn6B.style.border = ("2px solid green");
            span6.textContent = ("CORRETO!");
            break;
    }
}

