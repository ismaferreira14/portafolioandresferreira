function calcularIVA() {
    var numeroInput = parseFloat(document.getElementById("numeroInput").value);
    var porcentajeIVA = parseFloat(document.getElementById("porcentajeIVA").value);

    if (!isNaN(numeroInput) && !isNaN(porcentajeIVA)) {
        var iva = numeroInput * porcentajeIVA;
        var montoConIVA = numeroInput + iva;
        document.getElementById("calcularIvaResultado").textContent = montoConIVA.toFixed(2);
    } else {
        alert("Por favor, ingrese un monto válido y seleccione un porcentaje de IVA.");
    }
}
