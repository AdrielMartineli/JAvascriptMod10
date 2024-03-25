const leia = require('readline-sync');

let num;
let somaP =0;



do{
    num = leia.questionInt("Digite um numero: ");
    if(num>0){
        somaP += num;
    }
}while(num!=0);

console.log(`A soma dos números positivos é: ${somaP}`);