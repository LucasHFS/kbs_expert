var expert = require("../lib/expert.js");
_ = require('underscore');


var domain = expert.Domain(),
   Concept = domain.Concept,
   Relation = domain.Relation,

   //Doenças

   covid19 = Concept.create({ id: "COVID-19" }),
   gripe = Concept.create({ id: "Gripe" }),
   pneumonia = Concept.create({ id: "Pneumonia" }),
   resfriado = Concept.create({ id: "Resfriado" }),
   riniteAlergica = Concept.create({ id: "Rinite alérgica" }),
   asma = Concept.create({ id: "Asma" }),
   ataqueCardiaco = Concept.create({ id: "Ataque Cardíaco" }),
   derrameCerebral = Concept.create({ id: "AVC / Derrame Cerebral" }),
   meningite = Concept.create({ id: "Meningite" }),
   enxaqueca = Concept.create({ id: "Enxaqueca" }),
   diabetes = Concept.create({ id: "Diabetes" }),
   alzheimer = Concept.create({ id: "Alzheimer" }),
   aids = Concept.create({ id: "AIDS" }),
   parkinson = Concept.create({ id: "Parkinson" }),
   arritimiaCardiaca = Concept.create({ id: "Arritimia Cardíaca" }),


   //Sintomas

   febre = Concept.create({ id: "febre" }),
   dor_de_cabeça = Concept.create({ id: "Dor de cabeça" }), //Favor Utilizar esse padrão de variável quando tiver mais de 1 palavra abc_de_dsldk
   tosse_seca = Concept.create({ id: "Tosse seca" }),
   cansaco = Concept.create({ id: "Cansaço" }),
   dorDeGarganta = Concept.create({ id: "Dor de Garganta" }),
   calafrios = Concept.create({ id: "Calafrios" }),
   espirros = Concept.create({ id: "Espirros" }),
   congestaoNasal = Concept.create({ id: "Congestão Nasal" }),
   corrimentoNasal = Concept.create({ id: "Corrimento Nasal" }),
   obstrucaoNasal = Concept.create({ id: "Obstrução Nasal" }),
   respiracaoRapida = Concept.create({ id: "Respiração Rápida" }),
   faltaDeAr = Concept.create({ id: "Falta de Ar" }),
   chiadoNoPeito = Concept.create({ id: "Chiado no Peito" }),
   dorNoPeito = Concept.create({ id: "Dor no Peito" }),
   dorNoBracoEsquerdo = Concept.create({ id: "Dor no Braço Esquerdo" }),
   dorEmRepouso = Concept.create({ id: "Dor em Repouso" }),
   fraquezaDeUmLadoDoCorpo = Concept.create({ id: "Fraqueza de um lado do corpo" }),
   alteracaoOuPerdaDeVisao = Concept.create({ id: "Alteração ou perda de visão" }),
   dificuldadeParaFalar = Concept.create({ id: "Dificuldade para falar" }),
   rigidezNoPescoco = Concept.create({ id: "Rigidez no pescoço" }),
   nausea = Concept.create({ id: "Náusea" }),
   dorNosOlhos = Concept.create({ id: "Dor nos olhos" }),
   sensibilidadeALuz = Concept.create({ id: "Sensibilidade a luz" }),
   sedeExcessiva = Concept.create({ id: "Sede excessiva" }),
   aumentoDeApetite = Concept.create({ id: "Aumento de apetite" }),
   perdaDeMemoriaRecente = Concept.create({ id: "Perda de memória recente" }),
   dificuldadeParaEncontrarPalavras = Concept.create({ id: "Dificuldade para encontrar palavras" }),
   desorientacaoNoTempoENoEspaco = Concept.create({ id: "Desorientação no tempo e no espaço" }),
   diarreia = Concept.create({ id: "Diarréia" }),
   suoresNoturnos = Concept.create({ id: "Suores noturnos" }),
   rigidezMuscular = Concept.create({ id: "Rigidez Muscular" }),
   tremores = Concept.create({ id: "Tremores" }),
   alteracoesNaFala = Concept.create({ id: "Alterações na fala" }),
   quedaDePressao = Concept.create({ id: "Queda de pressão" }),
   fadiga = Concept.create({ id: "Fadiga" }),



   // Verbs
   has = Relation.create({id:"has"}),
   whatHas = Relation.create({id:"what has",inverseFor:has});
   
//Knowledge Base          
covid19
   .has(febre)
   .has(tosse_seca)
   .has(cansaco);

gripe
   .has(febre)
   .has(dor_de_cabeça)
   .has(dorDeGarganta);

resfriado
   .has(espirros)
   .has(congestaoNasal)
   .has(corrimentoNasal);

riniteAlergica
   .has(corrimentoNasal)
   .has(obstrucaoNasal)
   .has(espirros);

//Export
module.exports = {
   doe: {
      covid19,
      gripe,
      pneumonia,
      resfriado,
      riniteAlergica,
      asma,
      ataqueCardiaco,
      derrameCerebral,
      meningite,
      enxaqueca,
      diabetes,
      alzheimer,
      aids,
      parkinson,
      arritimiaCardiaca,
      faltaDeAr,

   },

   sin: {
      febre,
      dor_de_cabeça,
      tosse_seca,
      cansaco,
      dorDeGarganta,
      calafrios,
      espirros,
      calafrios,
      congestaoNasal,
      corrimentoNasal,
      obstrucaoNasal,
      respiracaoRapida,
      respiracaoRapida,
      chiadoNoPeito,
      dorNoBracoEsquerdo,
      dorNoPeito,
      dorEmRepouso,
      fraquezaDeUmLadoDoCorpo,
      alteracaoOuPerdaDeVisao,
      dificuldadeParaFalar,
      rigidezNoPescoco,
      nausea,
      dorNosOlhos,
      sensibilidadeALuz,
      sedeExcessiva,
      aumentoDeApetite,
      aumentoDeApetite,
      dificuldadeParaEncontrarPalavras,
      desorientacaoNoTempoENoEspaco,
      diarreia,
      suoresNoturnos,
      rigidezMuscular,
      tremores,
      alteracoesNaFala,
      quedaDePressao,
      fadiga,
      perdaDeMemoriaRecente,

   },

   verb: {
      has,
      whatHas
   }
};