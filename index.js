var expert = require("./lib/expert.js");

_ = require('underscore');

var readline = require('readline-sync');

var clear = require('clear');

var {doen, sin, verb} = require('./config/knowledgeBase');

var sintomas = [], possiveis_doencas = [], index;


function getOption(){
    showDatas();
    
    console.log("\n---------------- M E N U  D E  A Ç Õ E S ----------------")
    
    let option = ['Adicionar um Sintoma', 'Remover um Sintoma', 'Zerar Doenças'];

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
        clear();
    }
    
   
}

function addSintomas(){
    clear();
    console.log("\n---------------- NOME DO SINTOMA A SER ADICIONADO ----------------")
    let sintoma = readline.question("\nDigite um Sintoma: ");
    sintomas = [...sintomas, sintoma.toLowerCase()];
    console.log("\n",sintomas, "\n");
    loadDoencas();
}

function removerSintomas(){
    clear();
    console.log("\n---------------- SELECIONE O SINTOMA PARA REMOÇÃO ----------------")
    let indexSintoma = readline.keyInSelect(sintomas, 'Selecione um Sintoma:');

    if(indexSintoma >= 0){
        let boolYesOrEmpty = readline.keyInYN();

        if(boolYesOrEmpty){
            sintomas.splice(indexSintoma, 1);
            loadDoencas();
        }
    }
}

function resetSintomas(){
    let boolYesOrEmpty = readline.keyInYN()
    if(boolYesOrEmpty){
        sintomas = [];
        possiveis_doencas = [];
    }
}

function loadDoencas(){
    var sins = new Array();

    sintomas.forEach(sintoma => {
        sins = [...sins, sin[sintoma]]
    })

    try {
        possiveis_doencas = verb.whatHas(sins);
    }catch(e){
        console.log("Sintoma não cadastrado em nossas bases de dados. Favor Verificar a Nomenclatura digitada!")
    }
}

function showDatas(){
    console.log("\n---------------- SINTOMAS CADASTRADOS ----------------\n");
    
    if(sintomas.length > 0){
        console.log(sintomas, "\n");
    }else{
        console.log("Nenhum Sintoma Adicionado a Busca")
    }

    console.log("\n---------------- POSSÍVEIS DOENÇAS ----------------\n");

    if(possiveis_doencas.length > 0){
        console.log(_.map( possiveis_doencas, function(c){ return c.id; }));
    }else{
        console.log("Nenhuma Doença com esse(s) sintoma(s) foi encontrada");
    }
}

main();