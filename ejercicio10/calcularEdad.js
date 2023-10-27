function imagenEdades() {
    var edadSeleccionada = document.getElementById("edad").value;
    var imgEdad = document.getElementById("imgedad");

    if (edadSeleccionada == "0a1") {
        imgEdad.src = "imagenesEdad/bebe.png";
    } else if (edadSeleccionada == "2a13") {
        imgEdad.src = "imagenesEdad/2a13anos.png";
    } else if (edadSeleccionada == "14a23") {
        imgEdad.src = "imagenesEdad/adolecente.png";
    } else if (edadSeleccionada == "24a48") {
        imgEdad.src = "imagenesEdad/adulto.png";
    } else if (edadSeleccionada == "mas48") {
        imgEdad.src = "imagenesEdad/masde48.png";
    } else {
        imgEdad.src = "imagenesEdad/todasedades.png";
    }
}
