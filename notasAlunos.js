/*3 - Crie um algoritmo que receba três notas de um aluno, calcule sua média e mostre as seguintes mensagens de acordo com cada situação:

- Se a media for igual ou maior que 7 - Aprovado
- Se a media for maior e igual a cinco e menor que 7 - Recuperação
- Se a media for menor que 5 - Reprovado
*/

function informarNotasAluno(nota1, nota2, nota3, nota4) {
    const media = (nota1 + nota2 + nota3 + nota4)/4

    if(media >= 7 && media <= 10) {
        return `Sua média foi ${media} parabêns você foi aprovada`
    } else if (media >= 4 && media < 7){
        return `Sua média foi ${media} você está de recuperação`
    } else if (media < 4 && media >= 0) {
        return `Sua média foi ${media} Infelizmente você foi reprovada`
    }
    
}
console.log(informarNotasAluno(3.5, 8, 9, 4.5))