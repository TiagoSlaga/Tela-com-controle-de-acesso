var usuarios = [
    {"login": "bcf", "senha": "bcf"},
    {"login": "mamae", "senha": "abacaxi"},
    {"login": "papai", "senha": "melancia"},
];

function Login() {
    var usuario = document.getElementsByName('nome')[0].value.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    var chkCar = document.getElementById("caixa");

    if (!chkCar.checked) {
        alert("Marque a Caixa!!!");
    } 
    else{
    for (var u in usuarios) {
        var us = usuarios[u];
        if (us.login === usuario && us.senha === senha) {


            window.location.replace("pagina.html");
            return false;

        }
    }

    alert("Dados incorretos, tente novamente.");
    return true;
    }    
}
    

