const resultado = document.querySelector(' #resultado ');
const confirmar = document.querySelector(' .igual ');

function insert( valor ){
    resultado.value += valor;
}


function clean() {
    resultado.value = ' ';
}


function backspace() {
    if(resultado.textContent){
        let result = document.getElementById('resultado').value
        resultado.value = result.substring(0, result.length - 1);
    } 
}


function confirma() {
    if(resultado.textContent != 'Erro') {
        document.getElementById("resultado").value = eval(resultado.value)
    }
}