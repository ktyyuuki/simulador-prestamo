// ENTRADA DE DATOS
let nombreCliente = prompt("Ingresa tu nombre completo (ESC para salir):");
let tasaInteres = "";

while(nombreCliente.toUpperCase() != "ESC"){
    let textoPlanBanco = "Indique su plan de servicios: \n"
    textoPlanBanco += "1.- Premier Black \n";
    textoPlanBanco += "2.- Premier Advanced \n";
    textoPlanBanco += "3.- Standard \n";
    textoPlanBanco += "4.- Otro \n";
    let planBanco = prompt(textoPlanBanco);
    
    let monto = parseInt(prompt("Monto a solicitar (10000 - 1000000)"));
    while (monto < 10000 || monto > 1000000){
        alert("Ingresa un monto entre 10000 y 1000000");
        monto = parseInt(prompt("Monto a solicitar (10000 - 1000000)"));
    }

    let textoPlazo = "Ingrese el número de cuotas: \n";
    textoPlazo += "1.- 12 Cuotas \n";
    textoPlazo += "2.- 24 Cuotas \n";
    textoPlazo += "3.- 36 Cuotas \n";
    let plazo = parseInt(prompt(textoPlazo));
    if (plazo == 1){
        plazo = 12;
    } else if (plazo == 2){
        plazo = 24;
    } else {
        plazo = 36;
    }
    
    // PROCESAMIENTO DE DATOS
    let cuota = calcularCuota(monto, plazo);
    let cuotaConInteres = calcularCuotaInteres(cuota, planBanco);
    let totalCredito = calcularCreditoTotal(cuotaConInteres, plazo);
    
    // SALIDA
    infoCredito(nombreCliente, monto, plazo, tasaInteres, cuota, cuotaConInteres, totalCredito);
    nombreCliente = prompt("Ingrese otro Nombre y Apellido: (ESC para salir)");
}


function calcularCuota(monto, plazo){
    return parseInt(monto / plazo);
};

function calcularCuotaInteres(cuota, planBanco){   
    if (planBanco == 1 || planBanco.toUpperCase() == "PREMIER BLACK"){
        tasaInteres = 36 / 12;
    } else if (planBanco == 2 || planBanco.toUpperCase() == "PREMIER ADVANCED"){
        tasaInteres = 60 / 12;
    } else if (planBanco == 3 || planBanco.toUpperCase() == "STANDARD"){
        tasaInteres = 84 / 12;
    } else {
        tasaInteres = 120 / 12; 
    }
    return parseInt(cuota + ((cuota * tasaInteres) / 100));
};

function calcularCreditoTotal(cuotaFinal, plazo){
    return parseInt(cuotaFinal * plazo);
};

function infoCredito(nombre, monto, plazo, interes, cuota, cuotaConInteres, totalCredito){
    let texto = "Nombre: " + nombre + "\n";
    texto += "Monto: $" + monto + "\n";
    texto += "Plazo: " + plazo + "\n";
    texto += "Tasa de interés: " + interes + "% \n";
    texto += "Cuota: $" + cuota + "\n";
    texto += "Cuota Total: $" + cuotaConInteres + "\n";
    texto += "Total del crédito: $" + totalCredito;

    alert("SIMULADOR DE CRÉDITO: \n\n" + texto);
};
