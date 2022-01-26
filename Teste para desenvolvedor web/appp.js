document.getElementById("btn").addEventListener("click", validar);

function validar() {
    // pegando o valor  do campo userneme pelo id
    var usuario = document.getElementById("user").value
    var passowrd = document.getElementById("password").value
    var lembrar = document.getElementById("lembrar")

       


    // verificando se o campo esta preenchido
    if (!usuario) {
        //se o campo nao estiver preenchido
        alert('Preecha o campo Username')

        return false

    } else if (!passowrd) {
        alert('Preecha o passoword')

        return false
    }else {
       window.location.assign("https://www.w3schools.com")
    }

    Btn.click()
}

    


// ao clicar no btn redirecionar para outra pagina
// obs: preciso fazer isso depois que passar pela validação de  usuario e seha


