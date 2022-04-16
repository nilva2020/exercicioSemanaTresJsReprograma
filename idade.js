/*Crie uma função que recebe o ano de nascimento 
da pessoa informando se ela é maior de idade ou menor.
*/


function conferirMaiorIdade(idade){

        if (idade >= 18) {
    console.log('Esta pessoa é maior de idade')
    }       else {
    console.log('Esta pessoa é menor de idade')
    }
}
console.log(conferirMaiorIdade(76))

