// While - Enquanto uma condição for verdadeira execute uma instrução

let value = 2000;

while(value <= 1000) {
    //console.log(value);
    if(value == 750){
        break;
    }

    if (value >= 550 && value < 600){
        value+= 50;
        continue;
    }
    value++;
}

//------------------------------------------------------------------------------
// Do While - Faça enquanto uma condição for verdadeira

do {
    console.log(value, 'Com do While');
    value++
} while (value < 1000)

console.log(value, "Após o do while")

