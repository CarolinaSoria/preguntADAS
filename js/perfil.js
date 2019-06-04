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

let user = {
    name: "Nat",
    level: 4,
    score: 2500,
    followers: ["Wanda", "Peggy", "Hill"],
    following: ["Carol", "Gamora", "Nebula", "Pepper", "Okoye"],
    questions: ["Pregunta 1", "Pregunta 2", "Pregunta 3"],
    questionsWon: "35/73",
    challengesWon: "4/6",
    versusWon: "7/9"
}

const mostrarUser = function() {
    let userInfo = document.getElementById("username");
    userInfo.innerHTML = `<span>${user.name} | Nivel ${user.level} | ${user.score} Puntos</span>`;
}
mostrarUser();

const mostrarFollow = function(follow) {
    for(i = 0; i < follow.length; i++)
    console.log(`${follow[i]}`);
}

const obtenerCantFollow = function() {
    let cantidad = document.getElementById("followers");
    cantidad.innerHTML = `<span id="followers" onclick="mostrarFollow(user.followers)">${user.followers.length} Seguidores</span>
    | <span onclick="mostrarFollow(user.following)">${user.following.length} Siguiendo</span>`;
}
obtenerCantFollow();

const obtenerCantidades = function() {
    let estadisticas = document.getElementById("title_1");
    estadisticas.innerHTML = `<p>Preguntas respondidas: ${user.questionsWon[0]}<br />
    Preguntas respondidas por categoría:<br />
    Competencias ganadas: ${user.versusWon}<br />
    Desafíos ganados: ${user.challengesWon[0]}</p>`;
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
    for(let i = 0; i < user.questions.length; i++) {
    console.log(`${user.questions[i]}`);
    // let algo = document.getElementById('preguntas');
    // algo.innerHTML = preguntasSubidas;
 }
}

const obtenerCantPreguntas = function() {
    let cantPreguntas = document.getElementById("preguntas-subidas");
    cantPreguntas.innerHTML = `<p onclick="mostrarPreguntas()">Preguntas Subidas (${user.questions.length})</p>`;
}
obtenerCantPreguntas();

