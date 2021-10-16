function start() {
    var form = document.getElementById("formulario");
    var captura = form.numero.value;
    var test = captura % 2;
    if (test == 0){
        form.resposta.value = "O número é par";
    } else {
        form.resposta.value = "O número é ímpar";
    }
}