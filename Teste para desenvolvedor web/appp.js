document.getElementById("btn").addEventListener("click", validar);

function validar() {
    // pegando o valor  do campo userneme pelo id
    var usuario = document.getElementById("user").value
    var passowrd = document.getElementById("password").value
    var lembrar = document.getElementById("lembrar")// falta resolver o campo para salvar senha




    // verificando se o campo esta preenchido
    if (!usuario) {
        //se o campo usuario não estiver preenchido abra um alerta para o usuario
        alert('Preecha o campo Username')

        return false

        //se o campo password não estiver preenchido abra um alerta para o usuario
    } else if (!passowrd) {
        alert('Preecha o passoword')

        return false

      // se todos os campos acima estiverem preenchido   
    } else {
        // ao clicar no btn redirecionar para outra pagina
        window.open("https://www.showdeimagem.com.br ", " _blank")
    }
}





// obs: preciso fazer isso depois que passar pela validação de  usuario e seha


