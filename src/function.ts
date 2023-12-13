function exibe(nomeTime?: string, nomePais: string = 'Brasil') {
    if(nomeTime) {
        console.log(`${nomeTime} ${nomePais ? nomePais : ""}!!`);
    } else {
        console.log("Time não informado!")
    }
}

function dadosPessoais(n: string, i: number, e : string, cel: string ) {
    if (n && i && e) {
        console.log(`${"nome:"} ${n} \n
        ${"idade:"} ${i} 
        ${"e-mail:"}${e}
        ${"cel:"}${cel} \n`
        )
    }
}

const exibe2 = (nomeTime: string) => {
    console.log("Function Expression - Time: ", nomeTime)
};

exibe2("Vai Tricolor")