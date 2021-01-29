var readline = require('readline-sync');

var sintoma = '', option = 0, index, sintomas = [], possiveis_doencas = [];


function getOption(){
    console.log("\n---------------- SINTOMAS CADASTRADOS ----------------");
    console.log("\n",sintomas, "\n");
    console.log("\n---------------- M E N U  D E  A Ç Õ E S ----------------")
    option = ['Adicionar um Sintoma', 'Remover um Sintoma', 'Pesquisar Doenças Relacionadas', 'Zerar Doenças'],
    index = 1 + readline.keyInSelect(option, 'Selecione uma Ação:');
    if(index !== 0){
        switch(index){
            case 1: addSintomas();
                break;

            case 2: removerSintomas();
                break;

            case 3: loadDoencas();
                break;
            
            case 4: resetSintomas();
                break;
        }
        
        
    }else{
        console.log("Finalizando ...");
        return
    }
}

function main(){
    getOption();
    while(index !== 0){
        getOption();
    }
    
   
}

function addSintomas(){
    console.log("\n---------------- S I N T O M A ----------------")
    var sintoma = readline.question("\nDigite um Sintoma: ");
    sintomas = [...sintomas, sintoma];
    console.log("\n",sintomas, "\n");
    console.log("\n", "Possíveis Doenças",possiveis_doencas, "\n");
}

function removerSintomas(){
    console.log("\n---------------- S I N T O M A ----------------")
    let indexSintoma = readline.keyInSelect(sintomas, 'Selecione um Sintoma:');

    if(indexSintoma >= 0){
        let boolYesOrEmpty = readline.keyInYN();

        if(boolYesOrEmpty)
            //TODO: remove this fucking Index
            array.splice(index, 1);

        console.log("\n",sintomas, "\n");
    }
}

function resetSintomas(){
    boolYesOrEmpty = readline.keyInYN()
    if(boolYesOrEmpty)
        sintomas = [];
}

function loadDoencas(){

}

main();



// Search

// const keywordArr = ['jim', 'john'];

// const message = 'Hello john, how are you doing today?'

// let has = keywordArr.reduce((r,v) => message.toLowerCase().includes(v.toLowerCase()) || r, false)

// console.log(has)
