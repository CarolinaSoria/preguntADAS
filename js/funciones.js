//crearDesafio();
//mostrarPreguntas();
//obtenerPreguntas();
//chequearTitulo();
//mostrarMasPreguntas();
//buscarPreguntas();
//guardarDesafio();

const chequearTitulo = function() {
    let titleChalllenge = document.getElementById("title-input").value;
    console.log(titleChalllenge);
    let title = document.getElementById("title");
    title.innerText = titleChalllenge;
}

const obtenerPreguntas = function() {
    let Preguntas = ["Cuales son los colores primarios?", "Como se llama el enemigo de Peter Pan?"];
    return Preguntas;
}


const mostrarPreguntas = function() {
    let PreguntasObtener = obtenerPreguntas();
    let contenedorPreguntas = document.getElementById("contenedorPreguntas");
    for (i = 0; i < PreguntasObtener.length; i++) {
        console.log(PreguntasObtener[i]);
        contenedorPreguntas.innerHTML += "<button>" + PreguntasObtener[i] + "</button>";
    }
}

mostrarPreguntas();
//const obtenerPreguntas() {

//}

//const crearDesafio() {

//}

//const mostrarMasPreguntas() {

//}

//const buscarPreguntas() {

//}

//const guardarDesafio() {
    
//}