function validar() {
    // pegando o valor  do campo userneme pelo id
    var usuario = document.getElementById("user").value
    var passowrd = document.getElementById("password").value
    var lembrar = document.getElementById("lembrar").checked
    
    
    // verificando se o campo esta preenchido
    if (!usuario) {
        //se o campo nao estiver preenchido
        alert('Preecha o campo Username')

        return 

    } else if (!passowrd) {
        alert('Preecha o passoword')

        return 
    } 
}

// ao clicar no btn redirecionar para outra pagina
// obs: preciso fazer isso depois que passar pela validação de  usuario e seha
var btn = document.querySelector('button');
         btn.addEventListener('click', function () {
            window.open("https://www.showdeimagem.com.br ", " _blank")
        })
    


