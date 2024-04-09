// atenciones radiología

let radiologia = [
    { hora: "11:00", especialista: "IGNACIO SCHULZ", paciente: "FRANCISCA ROJAS", rut: "9878782-1", prevision: "FONASA" },
    { hora: "11:30", especialista: "FEDERICO SUBERCASEAUX", paciente: "PAMELA ESTRADA", rut: "15345241-3", prevision: "ISAPRE" },
    { hora: "15:00", especialista: "FERNANDO WURTHZ", paciente: "ARMANDO LUNA", rut: "16445345-9", prevision: "ISAPRE" },
    { hora: "15:30", especialista: "ANA MARIA GODOY", paciente: "MANUEL GODOY", rut: "17666419-0", prevision: "FONASA" },
    { hora: "16:00", especialista: "PATRICIA SUAZO", paciente: "RAMON ULLOA", rut: "14989389-K", prevision: "FONASA" }
];

// atenciones traumatología

let traumatologia = [
    { hora: "08:00", especialista: "MARIA PAZ ALTUZARRA", paciente: "PAULA SANCHEZ", rut: "15554774-5", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL ARAYA", paciente: "ANGÉLICA NAVAS", rut: "15444147-9", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "MARIA ARRIAGADA", paciente: "PANA KLAPP", rut: "17879423-9", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "ALEJANDRO BADILL", paciente: "FELIPE MARDONES", rut: "1547423-6", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "CECILIA BUDNIK", paciente: "DIEGO MARREZ", rut: "16554741-K", prevision: "FONASA" },
    { hora: "12:00", especialista: "ARTURO CAVAGNARO", paciente: "CECILIA MENDEZ", rut: "9747535-8", prevision: "ISAPRE" },
    { hora: "12:30", especialista: "ANDRES KANACRI", paciente: "MARCIAL SUAZO", rut: "11254785-5", prevision: "ISAPRE" }
];

// nuevos datos atenciones traumatología

let traumatologia2 = [
    { hora: "09:00", especialista: "RENÉ POBLETE", paciente: "ANA GELLONA", rut: "13123329-7", prevision: "ISAPRE" },
    { hora: "09:30", especialista: "MARIA SOLAR", paciente: "RAMIRO ANDRADE", rut: "12221451-K", prevision: "FONASA" },
    { hora: "10:00", especialista: "RAUL LOYOLA", paciente: "CARMEN ISLA", rut: "10112348-3", prevision: "ISAPRE" },
    { hora: "10:30", especialista: "ANTONIO LARENAS", paciente: "PABLO LOAYZA ", rut: "13453234-1", prevision: "ISAPRE" },
    { hora: "12:00", especialista: "MATIAS ARAVENA", paciente: "SUSANA POBLETE", rut: "14345656-6", prevision: "FONASA" }
];

// atenciones dental

let dental = [
    { hora: "8:30", especialista: "ANDREA ZUÑIGA", paciente: "MARCELA RETAMAL", rut: "11123425-6", prevision: "ISAPRE" },
    { hora: "11:00", especialista: "MARIA PIA ZAÑARTU", paciente: "ANGEL MUÑOZ", rut: "9878789-2", prevision: "ISAPRE" },
    { hora: "11:30", especialista: "SCARLETT WITTING", paciente: "MARIO KAST", rut: "7998789-5", prevision: "FONASA" },
    { hora: "13:00", especialista: "FRANCISCO VON TEUBER", paciente: "KARIN FERNANDEZ", rut: "18887662-K", prevision: "FONASA" },
    { hora: "13:30", especialista: "EDUARDO VIÑUELA", paciente: "HUGO SANCHEZ", rut: "17665461-4", prevision: "FONASA" },
    { hora: "14:00", especialista: "RAQUEL VILLASECA", paciente: "ANA SEPULVEDA", rut: "14441281-0", prevision: "FONASA" }
];

// mostrar primera y última atencion (primera posición y total - 1)

function main() {
    // let infoRad = document.getElementById("atencionRad");
    let infoTra = document.getElementById("atencionTra");
    let infoDen = document.getElementById("atencionDen");

    // infoRad.innerText = `Primera atención: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length - 1].paciente} - ${radiologia[radiologia.length - 1].prevision}`;

    infoTra.innerText = `Primera atención: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length - 1].paciente} - ${traumatologia[traumatologia.length - 1].prevision}`;

    infoDen.innerText = `Primera atención: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length - 1].paciente} - ${dental[dental.length - 1].prevision}`;

    listaRad(radiologia);
    listaTra(traumatologia);
    listaDen(dental);
}

main();

// copiar contenido de arreglos

function copiaObjeto(objeto) {
    return JSON.parse(JSON.stringify(objeto));
}

// mostrar atenciones radiología

function listaRad(listado) {

    let infoRad = document.getElementById("atencionRad");
    let copiaRad = copiaObjeto(listado);
    copiaRad.shift();
    copiaRad.pop();

    infoRad.innerText = `Primera atención: ${copiaRad[0].paciente} - ${copiaRad[0].prevision} | Última atención: ${copiaRad[copiaRad.length - 1].paciente} - ${copiaRad[copiaRad.length - 1].prevision}`;

    let atenRad = document.getElementById("totalRad");
    atenRad.innerText = `Cantidad de atenciones: ${copiaRad.length}`;

    let cuerpoTabla = document.querySelector("#tablaRad tbody");
    let filasTabla = "";

    for (const atencion of copiaRad) {
        // console.log(atencion);
        filasTabla += `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `
    }

    cuerpoTabla.innerHTML = filasTabla;

}

// mostrar atenciones traumatología

function listaTra(listado) {
    let copiaTra = copiaObjeto(listado);
    copiaTra = copiaTra.concat(traumatologia2)
    copiaTra = ordenAtencion(copiaTra);

    let atenTra = document.getElementById("totalTra");
    atenTra.innerText = `Cantidad de atenciones: ${copiaTra.length}`;

    let cuerpoTabla = document.querySelector("#tablaTra tbody");
    let filasTabla = "";

    for (const atencion of copiaTra) {
        // console.log(atencion);
        filasTabla += `
        <tr>
                <th scope="row">${atencion.hora}</th>
                <td>${atencion.especialista}</td>
                <td>${atencion.paciente}</td>
                <td>${atencion.rut}</td>
                <td>${atencion.prevision}</td>
              </tr>
        `
    }

    cuerpoTabla.innerHTML = filasTabla;

}

// mostrar atenciones dental

function listaDen(listado) {

    let atenDen = document.getElementById("totalDen");
    atenDen.innerText = `Cantidad de atenciones: ${dental.length}`;

    let cuerpoTabla = document.querySelector("#tablaDen tbody");
    let filasTabla = "";

    for (const atencion of dental) {
        filasTabla += `
        <tr>
            <th scope="row">${atencion.hora}</th>
            <td>${atencion.especialista}</td>
            <td>${atencion.paciente}</td>
            <td>${atencion.rut}</td>
            <td>${atencion.prevision}</td>
        </tr>
        `;
    }
    cuerpoTabla.innerHTML = filasTabla;
}

// ordenar atenciones por horario

function ordenAtencion(listado) {
    return listado.sort(function (a, b) {
        if (a.hora > b.hora) {
            return 1;
        }

        if (a.hora < b.hora) {
            return -1;
        }

        return 0;
    });
}

// filtra por isapre en atenciones dental

function filtroDen(arreglo, prevision) {
    return arreglo.filter((atencion) => atencion.prevision == prevision);
}
let resultadoDen = filtroDen(dental, "ISAPRE");
for (const atencion of resultadoDen) {
    let listaIsapre = document.getElementById("previsionDen");
    listaIsapre.innerHTML += `<li>${atencion.paciente} - ${atencion.prevision}</li>`;
}

// filtra por fonasa en atenciones traumatología

function filtroTra(arreglo1, arreglo2, prevision) {
    let arregloConcatenado = arreglo1.concat(arreglo2);
    return arregloConcatenado.filter(
        (atencion) => atencion.prevision == prevision
    );
}
let resultadoTra = filtroTra(traumatologia, traumatologia2, "FONASA");
for (const atencion of resultadoTra) {
    let listaFonasa = document.getElementById("previsionTra");
    listaFonasa.innerHTML += `<li>${atencion.paciente} - ${atencion.prevision}</li>`;
}

// muestra el nombre del total de los pacientes

function atencionTotal() {
    let atencionTotal = document.getElementById("listaTotal");
    let totalAten = radiologia.concat(traumatologia, traumatologia2, dental);
    let listaPacientes = "";
    for (let atencion of totalAten) {
        listaPacientes += `${atencion.paciente} \n`;
    }
    atencionTotal.innerText = listaPacientes;
}

atencionTotal();