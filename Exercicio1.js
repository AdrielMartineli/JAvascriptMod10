const leia = require('readline-sync');

let num1, num2;

num1 = leia.questionInt("Digite o primeiro numero do intervalo: ");
num2 = leia.questionInt("Digite o segundo numero do intervalo:  ");

if(num1>num2){
    console.log("Intervalo invalido!");
}else{
    console.log(`\nNo intervalo entre ${num1} e ${num2}:`);
    for(num1; num1<num2; num1++){
        if(num1 % 3 == 0 && num1%5 ==0){
            console.log(`${num1} e multiplo de 3 e 5`);
        }
    }
}