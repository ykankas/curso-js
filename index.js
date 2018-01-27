//parimpar

function parimpar(x){
    var retorno
    if (x % 2 == 0) retorno = "par"
    else retorno = "impar"
    console.log(retorno)
}

if (process.argv.lenght > 3) {
    console.log("Insira um número para ver se é par ou ímpar")
}
else parimpar(process.argv[2])