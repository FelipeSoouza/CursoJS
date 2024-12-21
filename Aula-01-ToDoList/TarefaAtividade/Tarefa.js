const btnEnviar = document.getElementById("enviar"); 

btnEnviar.addEventListener("click", function () {
    console.log("clicou no botao");

    const inputTarefa = document.getElementById("nomeTarefa");
    console.log(inputTarefa.value);

    if (inputTarefa.value == ""){
        alert("Digite alguma informação valida");
        window.location.reload();
    }

    const listaitens = document.getElementById("listaitens");

    const h2 = document.createElement("h2");

    h2.textContent = inputTarefa.value;

    listaitens.appendChild(h2);

});