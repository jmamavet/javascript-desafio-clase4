function comprarTickets() {

    let cantidadEntradas = 0;
    let precioUnitario = 1500;
    let precioTotal = 0;
    let cuotas = false;
    let cantidadCuotas = 0;
    let precioCuota = 0;
    let interesTresCuotas = 3;
    let interesSeisCuotas = 6;
    let interesDoceCuotas = 12;

    do {
        cantidadEntradas = Number(prompt("¿Cuántos tickets desea adquirir? El máximo por persona es 10."));
    }
    while ((Number(cantidadEntradas) < 0) || (Number(cantidadEntradas) > 10));

    cuotas = confirm(`El precio de cada entrada es $${precioUnitario}. ¿Desea pagar en cuotas?`);

    if (cuotas) {
        do {
            cantidadCuotas = Number(prompt(`¿En cuántas cuotas quiere realizar el pago? Puede elegir 3, 6 o 12 pagos. El interés en 3 cuotas es del ${interesTresCuotas}%. El interés en 6 cuotas es del ${interesSeisCuotas}%. El interés en 12 cuotas es del ${interesDoceCuotas}%.`));
        } while (cantidadCuotas != 3 && cantidadCuotas != 6 && cantidadCuotas != 12);

        switch (cantidadCuotas) {
            case 3:
                precioCuota = ((cantidadEntradas * precioUnitario / cantidadCuotas) * (1 + interesTresCuotas / 100));
                break;

            case 6:
                precioCuota = ((cantidadEntradas * precioUnitario / cantidadCuotas) * (1 + interesSeisCuotas / 100));
                break;

            case 12:
                precioCuota = ((cantidadEntradas * precioUnitario / cantidadCuotas) * (1 + interesDoceCuotas / 100));
                break;
        }

        precioTotal = precioCuota * cantidadCuotas;
        alert(`El total de tu compra es: $${precioTotal} en ${cantidadCuotas} cuotas de $${precioCuota}.`);

    } else {
        precioTotal = cantidadEntradas * precioUnitario;
        alert(`El total de tu compra es: $${precioTotal} en un pago.`);
    }
}