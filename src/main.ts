// Tipos de Dados.

// String - Texto, aspas simples, duplas, acento grave (template strings)
let nameUser: string = 'João';
let lastNameUser: string = "Rangel";
let fullName: string = `${nameUser} ${lastNameUser}`

// console.log(fullName.toUpperCase())

// Number - Inteiros, decimais, hexadecimais, binários
let age: number = 33;

// Boolean - True, False
let statUser: boolean = true;

// Array - Variáveis indexadas. Vetores, Matrizes
let fruits: Array<string | number> = ['Maçã', 'Banana', 'Uva', 10];
let fruits2: string[] = ['Maçã', 'Banana', 'Uva'];

// Object - Objetos, propriedades e funcionalidade
type companyType = {
    name: string;
    address: string;
    city: string;
    state?: string;
}

let company: companyType = {
    name: 'Hcode',
    address: 'Rua dos Bobos, 0',
    city: "Batatais",
    state: 'SP'
}

// Date - 'yyyy-mm-dd hh:mm:ss'. Timestamp - quantidade de segundos a paritr de 01/01/70. Padrão Unix.
let bornDate = new Date('2022-01-01')

// Tuple - Array com tipos de dados definidos.
let address: [string, number] = ["Av. Paulista", 1000]

// Enum - Lista de valores possíveis. ['bloqueaddo','liberado','pendente']
enum statusUserEnum {
    blocked = 0,
    released = 1,
    pending = 2
}

let options: statusUserEnum =  statusUserEnum.pending;

// Any - Qualquer tipo de dado. Não é recomendado.
let  obs: any = true

//---------------------------------------------------------------------------
// Variáveis de Memória
let variavelMutavel = "Esta é uma variável que pode mudar de valor";
//console.log(variavelMutavel);
variavelMutavel = "Agora ela tem outro valor";
//console.log(variavelMutavel);

const variavelImutavel = "Esta variável não muda de valor"
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
]

// console.log(montadoras[5][0])

montadoras.forEach((m, index) => {
    console.log(montadoras[index][0]);
    
    let carros: string = "";

    m.forEach((modelo, index) => {
        if (index > 0) {
            carros += modelo + ", "
        }
    })
    console.log(carros.split(", ").slice(0, -1).join(", "))
    console.log("---------------------------")
})