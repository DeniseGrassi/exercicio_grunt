
document.getElementById('somaForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);

    const soma = numero1 + numero2;

    document.getElementById('resultado').textContent = soma;
});
