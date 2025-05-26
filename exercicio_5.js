// 5. Debounce
// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay){
    let timeoutId

    return function(...args){
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function dizerOi(nome){
    console.log("Oi", nome)

}

const dizerOiComDelay = debounce(dizerOi, 5000)

dizerOiComDelay("Alexia")
setTimeout(() => {
    dizerOiComDelay("Alexia")
},  6000);
setInterval(() => {
    dizerOiComDelay("Alexia")

}, 6000)
dizerOiComDelay("Alexia")