function validar() {
    // pegando o valor  do campo userneme pelo id
    var usuario = document.getElementById("user").value
    var passowrd = document.getElementById("password").value
    var lembrar = document.getElementById("lembrar")

    // verificando se o campo esta preenchido
    if (!usuario) {
        //se o campo nao estiver preenchido
        alert('Preecha o campo Username')

        return

    }
    if (!passowrd) {
        alert('Preecha o passoword')

        return
    }

    if (lembrar.checked) {
        console.log("O cliente marcou o checkbox");
    } else {
        console.log("O cliente não marcou o checkbox");
    }

}
    // redirecionado para página https://www.showdeimagem.com.br 
    var btn = document.querySelector('button');
    btn.addEventListener('click', function() {
    window.open ("https://www.showdeimagem.com.br ", " _blank")
})