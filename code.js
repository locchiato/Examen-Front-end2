let datosPersona = {
    nombre: "",
    edad: 0,
    ciudad: "",
    interesPorJs: "",
};

function obtenerDatosDelUsuario() {
    /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */

    let aux = datosPersona;
    //Si el usuario selecciona cancelar, deja de solicitar datos
    //Nombre
    let nombre = prompt("Ingresá tu nombre.");
    if (nombre) {
        //Año
        let anio = prompt("Ingresá el año en que naciste.");
        if (anio) {
            datosPersona.edad = 2021 - anio;
            //Ciudad
            let ciudad = prompt("Ingresá la ciudad en donde vives.");
            if (ciudad) {
                datosPersona.ciudad = ciudad;
                //Js
                datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Sí" : "No";
            }
        }
    }

    // Si no puso cancelar cargo los datos
    if (nombre && anio && ciudad && interesPorJs) {
        datosPersona.nombre = nombre;
        datosPersona.edad = 2021 - anio;
        datosPersona.ciudad = ciudad;
        datosPersona.interesPorJs = confirm("¿Te interesa JavaScript?") ? "Sí" : "No";
    }

}


function renderizarDatosUsuario() {
    /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
    obtenerDatosDelUsuario();
    /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
    //Nombre
    if (datosPersona.nombre.length)
        document.getElementById('nombre').innerHTML = datosPersona.nombre;

    //Edad
    if (datosPersona.edad)
        document.getElementById('edad').innerHTML = datosPersona.edad;

    //Ciudad
    if (datosPersona.ciudad.length)
        document.getElementById('ciudad').innerHTML = datosPersona.ciudad;

    //Javascript
    if (datosPersona.interesPorJs.length)
        document.getElementById('javascript').innerHTML = datosPersona.interesPorJs;
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [{
        imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
        lenguajes: "HTML y CSS",
        bimestre: "1er bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
        lenguajes: "Javascript",
        bimestre: "2do bimestre",
    },
    {
        imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
        lenguajes: "React JS",
        bimestre: "3er bimestre",
    },
];

function recorrerListadoYRenderizarTarjetas() {
    /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
    let fila = document.querySelector('#fila');
    listado.forEach(materia => {
        fila.innerHTML += `
    <div class="caja">
    <img src=${materia.imgUrl} alt=${materia.lenguajes}>
    <p class="lenguajes">Lenguajes: ${materia.lenguajes}</p>
    <p class="bimestre">Bimestre: ${materia.bimestre}</p>
    </div>`;
    });
}


function mostrarYOcultarDescripcionCompleta() {
    /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
    document.querySelector('.sobre-mi').classList.toggle('sobre-mi-completo');
}