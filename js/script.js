const botaoEnviar = document.getElementById("envio")
botaoEnviar.addEventListener("click", validaCampos)

function validaCampos(){

    const campos = document.querySelectorAll("input[type='text'],input[type='email'], input[type='date']")

    for(let x = 0; x < campos.length ; x++){
            if(campos[x].value == ""){
                alert("Preencha o campo: " + campos[x].name)
                return
            }
    }
}