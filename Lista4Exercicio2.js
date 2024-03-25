const leia = require('readline-sync');

let vet = [10];
let soma =0;
for(num = 0; num<10; num++){
    vet[num] = leia.questionInt(`Numero da posicao ${num+1}:`);
    soma += vet[num];
}
console.log("Elementos nos indices impares")
for(num =0;num<10;num++){
    if(num%2 == 1)
    console.log(`${vet[num]}`, );
}
console.log("Elementos  pares")
for(num =0;num<10;num++){
    if(vet[num]%2 == 0)
    console.log(`${vet[num]}`, );
}
console.log(`Soma: ${soma}`);
console.log(`Media : ${soma.toFixed(2)/10}`);
