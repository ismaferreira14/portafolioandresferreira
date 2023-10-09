function calcularIVA() {

var numeroInput = document.getElementById("numeroInput").value;

var iva = numeroInput * 0.22;

var montoConIVA = parseFloat(numeroInput) + iva;

document.getElementById("calcularIvaResultado").textContent = montoConIVA.toFixed(2);
}
