const leia = require('readline-sync');

let idade =0, idadeM= 0.00;
let IdGenero, PessoaDev;
let resposta = "S";
let Pback =0, MTFront=0, HTMObile =0, NBFullStack =0;
let cont = 0;



while (resposta === "S") {
  idade = leia.questionInt("Idade: ");
  idadeM += idade;
  IdGenero = leia.questionInt("Identidade de Genero: ");
  PessoaDev = leia.questionInt("Pessoa Desenvolvedora: ");
if(PessoaDev == 1)
    Pback++;
if((IdGenero == 1 || IdGenero ==4 || IdGenero ==5)&&PessoaDev==2)
    MTFront++;
if((IdGenero == 2 || IdGenero ==4 || IdGenero ==5)&&PessoaDev==3&&idade>40)
    HTMObile++;
if (IdGenero == 3 && PessoaDev == 4 && idade<30)
    NBFullStack++;
  resposta = leia.question("Deseja Continuar? S/N: ").toUpperCase();
  cont++;
}

console.log(`\nTotal de pessoas desenvolvedoras Backend: ${Pback}`);
console.log(`\nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${MTFront}`);
console.log(`\nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${HTMObile}`);
console.log(`\nTotal de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${NBFullStack}`);
console.log(`O número total de pessoas que responderam à pesquisa: ${cont}`);
console.log(`A média de idade das pessoas que responderam à pesquisa: ${idadeM/cont}`);


    
