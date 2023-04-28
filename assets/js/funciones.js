// japi verdei
// function obtenerDiaSemana() {
//     let fechaStr = document.getElementById("fecha").value;
//     let fechaArr = fechaStr.split('-');
//     let fecha = new Date(`${fechaArr[2]}-${fechaArr[1]}-${fechaArr[0]}`)
//     // let fecha = new Date(document.getElementById("fecha").value);
//     let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
//     let diaSemana = dias[fecha.getDay()];
//     let mensaje = "El día que nació fue: " + diaSemana;
//     document.getElementById("resultado").innerHTML = mensaje;
//     console.log(mensaje);
//     return fecha
// }



// Retornar edad total.


function obtenerDiaSemana() {
    let fechaStr = document.getElementById("fecha").value;
    let fechaArr = fechaStr.split('-');
    let fechaNacimiento = new Date(`${fechaArr[2]}-${fechaArr[1]}-${fechaArr[0]}`)
    let hoy = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()));
    hoy.setHours(hoy.getHours() - 4); // UTC-4 es la zona horaria de Chile
    let edadMs = hoy - fechaNacimiento;
    let edad = new Date(edadMs);
    let anios = edad.getUTCFullYear() - 1970;
    let meses = edad.getUTCMonth();
    let dias = edad.getUTCDate() - 1;
    let dia = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
    let diaSemana = dia[fechaNacimiento.getDay()];
    let mensaje = "El día que nació fue: " + diaSemana + ". Su edad es: " + anios + " años y " + meses + " meses y " + dias + " días.";
    document.getElementById("resultado").innerHTML = mensaje;
    return fechaNacimiento;
}

function cumple() {
    let fechaStr = document.getElementById("fecha").value;
    let fechaArr = fechaStr.split('-');
    let fechaNacimiento = new Date(`${fechaArr[2]}-${fechaArr[1]}-${fechaArr[0]}`)
    let hoy = new Date();
    let anioActual = hoy.getFullYear();

    let fechaCum = new Date(`${fechaNacimiento.getMonth()+1}/${fechaNacimiento.getDate()+1}/${anioActual}`)


    if (fechaCum < hoy) {
        fechaCum.setFullYear(anioActual + 1);
    }
    
    let difTiempo = fechaCum.getTime() - hoy.getTime();
    let difDias = Math.ceil(difTiempo / (1000 * 3600 * 24));
    
    if (fechaCum.getMonth() === hoy.getMonth() && fechaCum.getDate() === hoy.getDate()) {
        console.log("Feliz cum");

    } else if (fechaCum < hoy) {
        fechaCum.setFullYear(anioActual + 1);
        let tiempoDif = fechaCum.getTime() - hoy.getTime();
        let diasDif = Math.ceil(tiempoDif / (1000 * 3600 * 24));
        console.log(diasDif)

    } else {
        let tiempoDif = fechaCum.getTime() - hoy.getTime();
        let diasDif = Math.ceil(tiempoDif / (1000 * 3600 * 24));
        console.log(diasDif);
    }


}







const formateaFecha = (event) => {
    // obtenemos el valor actual del input
    let fecha = event.target.value;
    // removemos los guiones existentes en la fecha
    fecha = fecha.replace(/-/g, '');
    // verificamos si la longitud de la fecha es mayor a 2, y si es asi, insertamos el primer guion
    if (fecha.length > 2) {
        fecha = fecha.slice(0, 2) + '-' + fecha.slice(2);
    }
    // verificamos si la longitud de la fecha es mayor a 5, y si es asi, insertamos el segundo guion
    if (fecha.length > 5) {
        fecha = fecha.slice(0, 5) + '-' + fecha.slice(5);
    }
    // asignamos la nueva fecha formateada al input
    event.target.value = fecha;
};


//item B


function tiempoTrabajado() {
    console.log("tiempotrabajado")
    const fechaInicioInput = document.getElementById("fechaInicial");
    const fechaFinInput = document.getElementById("fechaTermino");

    const fechaInicio = new Date(fechaInicioInput.value);
    const fechaTermino = new Date(fechaFinInput.value);

    let anios = fechaTermino.getFullYear() - fechaInicio.getFullYear();
    let meses = fechaTermino.getMonth() - fechaInicio.getMonth();
    let dias = fechaTermino.getDate() - fechaInicio.getDate();

    // ajuste para evitar días y meses negativos
    if (meses < 0 || (meses === 0 && dias < 0)) {
        anios--;
        if (meses < 0) {
            meses += 12;
        }
        if (dias < 0) {
            const ultimoMes = new Date(fechaTermino.getFullYear(), fechaTermino.getMonth(), 0);
            dias += ultimoMes.getDate();
        }
    }

    let tiempoMiliseg = fechaTermino - fechaInicio // Entrega el tiempo en milisegundos
    let milisegMes = 2.628e+9 // Milisegundos en un mes
    let tiempoTrabajoMeses = parseInt(tiempoMiliseg / milisegMes);

    let milisegDia = 8.64e+7; // Milisegundos en un día
    let tiempoTrabajoDias = parseInt(tiempoMiliseg / milisegDia);

    alert(`Ha trabajado en la organización durante ${tiempoTrabajoMeses} meses`)
    alert(`Ha trabajado en la organización durante ${tiempoTrabajoDias} días`)
    alert(`Su permanencia en la organización es de: ${anios} años, ${meses} meses y ${dias} días`);

    if (tiempoMiliseg < milisegAnio) {
        tiempoRestanteDias = parseInt((milisegAnio - tiempoMiliseg) / milisegDia);
        alert(`Faltan ${tiempoRestanteDias} días para completar el año de trabajo en la organización.`)

    }


}






// item C prueba horas trabajadas

function horasTrabajadas() {
    let horaIngreso = document.getElementById("horaIngreso").value;
    let horaIng = new Date(Date.parse(horaIngreso));

    let horaSalida = document.getElementById("horaSalida").value;
    let horaSal = new Date(Date.parse(horaSalida));

    let millSeg = 3.6e+6;
    let tiempoTrabajado = (horaSal - horaIng) / millSeg;
    let horaTrab = Math.floor(tiempoTrabajado);
    let minTrab = Math.floor((tiempoTrabajado - horaTrab) * 60);
    let segTrab = Math.floor((((tiempoTrabajado - horaTrab) * 60) - minTrab) * 60);
    if (tiempoTrabajado >= 24) {
        alert('Q onda 🤡🤡 como tení a una persona trabajando 24 hrs seguidas')
    } else alert(`La persona ha trabajado ${horaTrab}:${minTrab}:${segTrab} hrs.`)

}





// item D total horas trabajadas 
function obtenerTotalHorasTrabajadas() {
    let totalHoras = 0;

    for (let i = 1; i <= 8; i++) {
        let horas = parseFloat(prompt("Ingrese las horas trabajadas por el colaborador " + i + ":"));
        while (isNaN(horas) || horas < 4 || horas >= 12) {
            horas = parseFloat(prompt("Ingrese un número válido de horas trabajadas (entre 4 y 12):"));
        }
        let minutos = parseFloat(prompt("Ingrese los minutos trabajados por el colaborador " + i + ":"));
        while (isNaN(minutos) || minutos < 0 || minutos >= 60) {
            minutos = parseFloat(prompt("Ingrese un número válido de minutos trabajados (entre 0 y 59):"));
        }

        totalHoras += horas + (minutos / 60);
    }

    let mensaje = "La cantidad total de horas trabajadas por los 8 colaboradores es: " + totalHoras.toFixed(2) + " horas";


    alert(`La cantidad total de horas trabajadas por los 8 colaboradores es: ${totalHoras.toFixed(2)} horas`);
    console.log(mensaje)
}





// tiempo total trabajado





export { obtenerDiaSemana, cumple, formateaFecha, obtenerTotalHorasTrabajadas, horasTrabajadas, tiempoTrabajado }