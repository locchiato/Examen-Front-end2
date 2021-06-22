let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  //Nombre
  // datosPersona.nombre = prompt("Ingresa tu nombre:");

  //Si el usuario selecciona cancelar, deja de solicitar datos
  let nombre = prompt("Ingresa tu nombre:");
  if(nombre!=null){
  datosPersona.nombre = nombre;
  //Año
  let anio = prompt("Ingresá el año en que naciste.");
  datosPersona.edad = 2021 - anio;
  //Ciudad
  datosPersona.ciudad = prompt("Ingresá la ciudad en donde vives.");
  //Js
  datosPersona.interesPorJs = (confirm("¿Te interesa JavaScript?") ? "Sí" : "No");
  console.log(datosPersona.interesPorJs);
  }

}



function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  //Nombre
  document.querySelector('#nombre').innerHTML = datosPersona.nombre;
  //Edad
  //Si el dato es 0 como en el objeto por defecto, no lo renderiza
  if(datosPersona.edad){
    document.querySelector('#edad').innerHTML = datosPersona.edad;
  }
  //Ciudad
  document.querySelector('#ciudad').innerHTML = datosPersona.ciudad;
  //Javascript
  document.querySelector('#javascript').innerHTML = datosPersona.interesPorJs;
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
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