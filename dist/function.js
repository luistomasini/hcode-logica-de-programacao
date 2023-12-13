"use strict";
function exibe(nomeTime, nomePais = 'Brasil') {
    if (nomeTime) {
        console.log(`${nomeTime} ${nomePais ? nomePais : ""}!!`);
    }
    else {
        console.log("Time não informado!");
    }
}
function dadosPessoais(n, i, e, cel) {
    if (n && i && e) {
        console.log(`${"nome:"} ${n} \n
        ${"idade:"} ${i} 
        ${"e-mail:"}${e}
        ${"cel:"}${cel} \n`);
    }
}
const exibe2 = (nomeTime) => {
    console.log("Function Expression - Time: ", nomeTime);
};
exibe2("Vai Tricolor");
