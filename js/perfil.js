let numeroTituloAnterior = 1; 

const mostrarDesplegable = function(numeroTitulo) {
    let tituloAnterior = document.getElementById(`title_${numeroTituloAnterior}`);
    tituloAnterior.classList.remove("mostrar");

    let titulo = document.getElementById(`title_${numeroTitulo}`);
    titulo.classList.add("mostrar");


    numeroTituloAnterior = numeroTitulo;
}

// let numero = 3;

// const obtenerCantSeguidores = function() {
//     let cantSeguidores = document.getElementById("seguidores");
//     cantSeguidores.innerHTML = `${numero} seguidores`;
// }
// obtenerCantSeguidores();

// const obtenerUsuarios = function(tipo) {
    // return (tipo);
// }


// const obtenerSeguidos = function() {
    
// }

let user = ["Nat", "Carol", "Gamora", "Nebula", "Wanda", "Peggy", "Hill", "Pepper", "Okoye"];
let level = ["2", "3", "5", "4", "1", "3", "5", "1", "2"];
let score = [70, 150, 4000, 3200, 10, 180, 4200, 21, 75];
let followers = ["Wanda", "Peggy", "Hill"];
let following = ["Carol", "Gamora", "Nebula", "Pepper", "Okoye"];
let userQuestions = ["Pregunta 1", "Pregunta 2", "Pregunta 3"];
let questionsWon = ["35/74"];
let challengesWon = ["4/6"];
let versusWon = "7/9";


const mostrarFollow = function(follow) {
    for(i = 0; i < follow.length; i++)
    console.log(`${follow[i]}`);
}

const obtenerCantFollow = function() {
    let cantidad = document.getElementById("followers");
    cantidad.innerHTML = `<span id="followers" onclick="mostrarFollow(followers)">${followers.length} Seguidores</span>
    | <span onclick="mostrarFollow(following)">${following.length} Siguiendo</span>`;
}
obtenerCantFollow();

const obtenerCantidades = function() {
    let estadisticas = document.getElementById("title_1");
    estadisticas.innerHTML = `<p>Preguntas respondidas: ${questionsWon[0]}<br />
    Preguntas respondidas por categoría:<br />
    Competencias ganadas: ${versusWon}<br />
    Desafíos ganados: ${challengesWon[0]}</p>`;
}
obtenerCantidades();

// const obtenerSeguidores = function() {
//    let seguidores = ["Usuario", "Usuaria", "Usuarie"];
//     return seguidores;
// }

// const mostrarSeguidores = function() {
//     let listaSeguidores = obtenerSeguidores();

//     for(let i = 0; i < listaSeguidores.length; i++) {
//         console.log(`${listaSeguidores}`);
//     }
// }



const mostrarPreguntas = function() {
    for(let i = 0; i < userQuestions.length; i++) {
    console.log(`${userQuestions[i]}`);
    // let algo = document.getElementById('preguntas');
    // algo.innerHTML = preguntasSubidas;
 }
}

const obtenerCantPreguntas = function() {
    let cantPreguntas = document.getElementById("preguntas-subidas");
    cantPreguntas.innerHTML = `<p onclick="mostrarPreguntas()">Preguntas Subidas (${userQuestions.length})</p>`;
}
obtenerCantPreguntas();

