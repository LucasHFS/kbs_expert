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
   rinite_alergica = Concept.create({ id: "Rinite alérgica" }),
   asma = Concept.create({ id: "Asma" }),
   ataque_cardiaco = Concept.create({ id: "Ataque Cardíaco" }),
   derrame_cerebral = Concept.create({ id: "AVC / Derrame Cerebral" }),
   meningite = Concept.create({ id: "Meningite" }),
   enxaqueca = Concept.create({ id: "Enxaqueca" }),
   diabetes = Concept.create({ id: "Diabetes" }),
   alzheimer = Concept.create({ id: "Alzheimer" }),
   aids = Concept.create({ id: "AIDS" }),
   parkinson = Concept.create({ id: "Parkinson" }),
   arritimia_cardiaca = Concept.create({ id: "Arritimia Cardíaca" }),


   //Sintomas

   febre = Concept.create({ id: "febre" }),
   dor_de_cabeça = Concept.create({ id: "Dor de cabeça" }),
   tosse_seca = Concept.create({ id: "Tosse seca" }),
   cansaco = Concept.create({ id: "Cansaço" }),
   dor_de_garganta = Concept.create({ id: "Dor de Garganta" }),
   calafrios = Concept.create({ id: "Calafrios" }),
   espirros = Concept.create({ id: "Espirros" }),
   congestao_nasal = Concept.create({ id: "Congestão Nasal" }),
   corrimento_nasal = Concept.create({ id: "Corrimento Nasal" }),
   obstrucao_nasal = Concept.create({ id: "Obstrução Nasal" }),
   respiracao_rapida = Concept.create({ id: "Respiração Rápida" }),
   falta_de_ar = Concept.create({ id: "Falta de Ar" }),
   chiado_no_peito = Concept.create({ id: "Chiado no Peito" }),
   dor_no_peito = Concept.create({ id: "Dor no Peito" }),
   dor_no_braco_esquerdo = Concept.create({ id: "Dor no Braço Esquerdo" }),
   dor_em_repouso = Concept.create({ id: "Dor em Repouso" }),
   fraqueza_de_um_lado_do_corpo = Concept.create({ id: "Fraqueza de um lado do corpo" }),
   alteracao_ou_perda_de_visao = Concept.create({ id: "Alteração ou perda de visão" }),
   dificuldade_para_falar = Concept.create({ id: "Dificuldade para falar" }),
   rigidez_no_pescoco = Concept.create({ id: "Rigidez no pescoço" }),
   nausea = Concept.create({ id: "Náusea" }),
   dor_nos_olhos = Concept.create({ id: "Dor nos olhos" }),
   sensibilidade_a_luz = Concept.create({ id: "Sensibilidade a luz" }),
   sede_excessiva = Concept.create({ id: "Sede excessiva" }),
   aumento_de_apetite = Concept.create({ id: "Aumento de apetite" }),
   perda_de_memoria_recente = Concept.create({ id: "Perda de memória recente" }),
   dificuldade_para_encontrar_palavras = Concept.create({ id: "Dificuldade para encontrar palavras" }),
   desorientacao_no_tempo_e_no_espaco = Concept.create({ id: "Desorientação no tempo e no espaço" }),
   diarreia = Concept.create({ id: "Diarréia" }),
   suores_noturnos = Concept.create({ id: "Suores noturnos" }),
   rigidez_muscular = Concept.create({ id: "Rigidez Muscular" }),
   tremores = Concept.create({ id: "Tremores" }),
   alteracoes_na_fala = Concept.create({ id: "Alterações na fala" }),
   queda_de_pressao = Concept.create({ id: "Queda de pressão" }),
   fadiga = Concept.create({ id: "Fadiga" }),



   // Verbs
   has = Relation.create({ id: "has" }),
   whatHas = Relation.create({ id: "what has", inverseFor: has });

//Knowledge Base          
covid19
   .has(febre)
   .has(tosse_seca)
   .has(cansaco);

gripe
   .has(febre)
   .has(dor_de_cabeça)
   .has(dor_de_garganta);

pneumonia
   .has(tosse_seca)
   .has(febre)
   .has(calafrios);

resfriado
   .has(espirros)
   .has(congestao_nasal)
   .has(corrimento_nasal);

rinite_alergica
   .has(corrimento_nasal)
   .has(obstrucao_nasal)
   .has(espirros);

asma
   .has(falta_de_ar)
   .has(respiracao_rapida)
   .has(chiado_no_peito);

ataque_cardiaco
   .has(dor_no_peito)
   .has(dor_no_braco_esquerdo)
   .has(dor_em_repouso);

derrame_cerebral
   .has(fraqueza_de_um_lado_do_corpo)
   .has(alteracao_ou_perda_de_visao)
   .has(dificuldade_para_falar);

meningite
   .has(dor_de_cabeça)
   .has(rigidez_no_pescoco)
   .has(nausea);

enxaqueca
   .has(dor_nos_olhos)
   .has(dor_de_cabeça)
   .has(sensibilidade_a_luz);

diabetes
   .has(sede_excessiva)
   .has(cansaco)

alzheimer
   .has(perda_de_memoria_recente)
   .has(dificuldade_para_encontrar_palavras)
   .has(desorientacao_no_tempo_e_no_espaco);

aids
   .has(diarreia)
   .has(suores_noturnos)
   .has(febre);

parkinson
   .has(rigidez_muscular)
   .has(tremores)
   .has(alteracoes_na_fala);

arritimia_cardiaca
   .has(falta_de_ar)
   .has(queda_de_pressao)
   .has(fadiga);

//Export
module.exports = {
   doe: {
      covid19,
      gripe,
      pneumonia,
      resfriado,
      rinite_alergica,
      asma,
      ataque_cardiaco,
      derrame_cerebral,
      meningite,
      enxaqueca,
      diabetes,
      alzheimer,
      aids,
      parkinson,
      arritimia_cardiaca,
      falta_de_ar,

   },

   sin: {
      febre,
      dor_de_cabeça,
      tosse_seca,
      cansaco,
      dor_de_garganta,
      calafrios,
      espirros,
      calafrios,
      congestao_nasal,
      corrimento_nasal,
      obstrucao_nasal,
      respiracao_rapida,
      chiado_no_peito,
      dor_no_braco_esquerdo,
      dor_no_peito,
      dor_em_repouso,
      fraqueza_de_um_lado_do_corpo,
      alteracao_ou_perda_de_visao,
      dificuldade_para_falar,
      rigidez_no_pescoco,
      nausea,
      dor_nos_olhos,
      sensibilidade_a_luz,
      sede_excessiva,
      aumento_de_apetite,
      dificuldade_para_encontrar_palavras,
      desorientacao_no_empo_e_no_espaco,
      diarreia,
      suores_noturnos,
      rigidez_muscular,
      tremores,
      alteracoes_na_fala,
      queda_de_pressao,
      fadiga,
      perda_de_memoria_recente,

   },

   verb: {
      has,
      whatHas
   }
};