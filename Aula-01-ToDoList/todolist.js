document.getElementById("calcular").addEventListener("click", function() {
    // Acessa os valores dos inputs
    const inputNumeroUm = document.getElementById("numeroUm");
    const numeroUm = parseInt(inputNumeroUm.value);

    const inputNumeroDois = document.getElementById("numeroDois");
    const numeroDois = parseInt(inputNumeroDois.value);

    // Verifica se os valores são números válidos
    if (isNaN(numeroUm) || isNaN(numeroDois)) {
        alert("Por favor, digite dois números válidos.");
    } else {
        // Calcula a soma
        const resultado = numeroUm + numeroDois;

        // Exibe o resultado no console ou em um elemento da página
        const listaItens = document.getElementById("listaItens");
        listaItens.innerHTML = `<p>O resultado da soma é: ${resultado}</p>`;
    }
});
