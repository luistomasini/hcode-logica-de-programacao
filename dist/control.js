"use strict";
//----------------------------------------------------------------------------
// If, else if, else
const valor = 0;
if (valor > 0) {
    console.log("Condição verdadeira, executa if");
}
else if (valor == 0) {
    console.log("O valor é igual a 0");
}
else {
    console.log("Condição falsa, executa o else");
}
//console.log("Executando após a condição if")
//-----------------------------------------------------------------------------
// Operador ternário, é um if com else de uma linha só
console.log(!valor ? "condição verdadeira" : "condição falsa");
//-----------------------------------------------------------------------------
// Caso, switch
switch (valor) {
    case 1:
        console.log("Valor vale 1");
        break;
    case 2:
        console.log("Valor vale 2");
        break;
    case 3:
    case 4:
        console.log("Valor vale 3 ou 4");
        break;
    default:
        console.log("Valor não vale nem 1, nem 2, nem 3 e nem 4");
}
