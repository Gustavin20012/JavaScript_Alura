// João está criando uma aplicação para calcular o IR a partir do salário. Ele olhou na tabela de IRPF e implementou as regras para 15% e 22.5%:

// Estava faltando as chaves nas condicionais.

const salario = 3300.0;

if(salario < 2600.0){
    console.log("A sua aliquota é de 15%");
    console.log("Você pode deduzir até R$ 350");
}else if(salario < 3750.0){
    console.log("A sua aliquota é de 22,5%");
    console.log("Você pode deduzir até R$ 636");
}