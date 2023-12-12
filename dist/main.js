"use strict";
// Tipos de Dados.
// String - Texto, aspas simples, duplas, acento grave (template strings)
let nameUser = 'João';
let lastNameUser = "Rangel";
let fullName = `${nameUser} ${lastNameUser}`;
// console.log(fullName.toUpperCase())
// Number - Inteiros, decimais, hexadecimais, binários
let age = 33;
// Boolean - True, False
let statUser = true;
// Array - Variáveis indexadas. Vetores, Matrizes
let fruits = ['Maçã', 'Banana', 'Uva', 10];
let fruits2 = ['Maçã', 'Banana', 'Uva'];
let company = {
    name: 'Hcode',
    address: 'Rua dos Bobos, 0',
    city: "Batatais",
    state: 'SP'
};
// Date - 'yyyy-mm-dd hh:mm:ss'. Timestamp - quantidade de segundos a paritr de 01/01/70. Padrão Unix.
let bornDate = new Date('2022-01-01');
// Tuple - Array com tipos de dados definidos.
let address = ["Av. Paulista", 1000];
// Enum - Lista de valores possíveis. ['bloqueaddo','liberado','pendente']
var statusUserEnum;
(function (statusUserEnum) {
    statusUserEnum[statusUserEnum["blocked"] = 0] = "blocked";
    statusUserEnum[statusUserEnum["released"] = 1] = "released";
    statusUserEnum[statusUserEnum["pending"] = 2] = "pending";
})(statusUserEnum || (statusUserEnum = {}));
let options = statusUserEnum.pending;
// Any - Qualquer tipo de dado. Não é recomendado.
let obs = true;
//---------------------------------------------------------------------------
// Variáveis de Memória
let variavelMutavel = "Esta é uma variável que pode mudar de valor";
//console.log(variavelMutavel);
variavelMutavel = "Agora ela tem outro valor";
//console.log(variavelMutavel);
const variavelImutavel = "Esta variável não muda de valor";
//console.log(variavelImutavel)
//---------------------------------------------------------------------------
// Variável indexada ou vetor
let bmw = ['320i', 'M3', 'M4', 'M5', 'M6', 'X1', 'X3', 'X5', 'X6', 'Z4'];
// console.log(bmw[0]);
// console.log(bmw.length);
// console.log(bmw[bmw.length - 1])
// console.log(bmw.at(-1))
//---------------------------------------------------------------------------
// Vetores de vetores ou Matrizes
let montadoras = [
    ['BMW', '320i', 'M3', 'M4', 'M5', 'M6', 'X1', 'X3', 'X5', 'X6', 'Z4'],
    ['Audi', 'A1', 'A2', 'A3', 'A4'],
    ['Mercedes', 'GLE', 'GLA', 'GLC', 'GLK'],
    ['Ferrari', '458', '488', 'California', 'F12'],
    ['Lamborghini', 'Aventador', 'Huracan', 'Gallardo', 'Diablo'],
    ['Porsche', 'Carrera GT', '911', 'Cayenne', 'Panamera']
];
// console.log(montadoras[5][0])
montadoras.forEach((m, index) => {
    //console.log(montadoras[index][0]);
    let carros = "";
    m.forEach((modelo, index) => {
        if (index > 0) {
            carros += modelo + ", ";
        }
    });
    //console.log(carros.split(", ").slice(0, -1).join(", "))
    //console.log("---------------------------")
});
//---------------------------------------------------------------------------
// Exercicio vetores Empresa Aérea
let airlineEnterprises = ['LATAM', 'GOL', 'AZUL', 'QATAR AIRLINES', 'EMIRATES AIRLINE'];
// airlineEnterprises.forEach((company, index) => 
//     //console.log(index, company)
// )
// //console.log('----------------------------------------- ')
// airlineEnterprises.forEach((company, index) => 
//     //console.log(index, airlineEnterprises[index])
// )
//---------------------------------------------------------------------------
