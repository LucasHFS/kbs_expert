var expert = require("./lib/expert.js");
    _ = require('underscore');

var domain   = expert.Domain(),
    Concept  = domain.Concept,
    Relation = domain.Relation,

    mammal = Concept.create({id:"mammal"}),
    fish = Concept.create({id:"fish"}),
    dog = Concept.create({id:"dog"}),
    cat = Concept.create({id:"cat"}),
    mouse = Concept.create({id:"mouse"}),
    whale = Concept.create({id:"whale"}),
    salmon = Concept.create({id:"salmon"}),

    fur = Concept.create({id:"fur"}),
    eyes = Concept.create({id:"eyes"}),
    bark = Concept.create({id:"bark"}),
    swim = Concept.create({id:"swim"}),

    isa = domain.isa,
    example = domain.example,

    has = Relation.create({id:"has"}),
    whatHas = Relation.create({id:"what has",inverseFor:has}),

    can = Relation.create({id:"can"}),
    whatCan = Relation.create({id:"what can",inverseFor:can}),

    biggerThan = Relation.create({id:"biggerThan",isTransitive: true});
    smallerThan = Relation.create({id:"smallerThan",isTransitive: true, 
                                   inverseFor:biggerThan});

salmon
   .isa(fish)
   .biggerThan(mouse)
   .can(swim);

whale
   .isa(mammal)
   .biggerThan(dog)
   .biggerThan(cat)
   .can(swim);

dog
   .isa(mammal)
   .has(fur)
   .can(bark)
   .biggerThan(mouse);

cat
   .isa(mammal)
   .has(fur)
   .has(eyes)
   .biggerThan(mouse);

mouse
   .isa(mammal)
   .has(fur);

console.log("what has fur?");
var answer1 = whatHas(eyes);
console.log(_.map( answer1, function(c){ return c.id; }));

console.log("what mammal that a mouse is smaller than, can swim?");
var answer2 = _.intersection( example(mammal),
                              whatCan(swim),
                              smallerThan(mouse) );
console.log(_.map( answer2, function(c){ return c.id; }));