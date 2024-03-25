const leia = require('readline-sync');
let notas = new Array(10);

for (let indiceLinha = 0; indiceLinha < notas.length; indiceLinha++){
    notas[indiceLinha] = Array(4);
}
let media = [10];
let soma = 0;

let cont, cont2;

for(cont = 0; cont<10;cont++){
    soma = 0;
    for(cont2=0;cont2<4;cont2++){
        notas[cont][cont2] = leia.questionFloat(`nota ${cont2+1}: `);
        
        soma += notas[cont][cont2];
    }
    media[cont] = soma/4;
}
console.log(`MEDIA ALUNOS`)
for(cont = 0; cont<10;cont++){
    console.log(`\nALUNO ${cont+1} = ${media[cont].toFixed(1)}`);
}


