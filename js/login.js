// fetch("https://preguntadas.herokuapp.com/v1/categories", {
//     headers: {
//         "Accept": "application/json",
//         "Content-Type": "application/json;  charset=UTF-8",
//         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlcmkxMjMiLCJpYXQiOjE1NTk4MzI5NjR9.V9rxAd2wJlo9MgJMcCa1nrdJgMR5RKM3SyiBXPDmG8s",
//     },
//     method: "post",
//     body: JSON.stringify({
//         name: "Peliculas",
//         color: "rojo",
//     })  
// }).then(function(result) {
//     return result.json();
// }).then(function(result) {
//    console.log(result);
// }).catch(function(error) {
// });

let button = document.getElementById("button1");
    button.onclick = function validate() {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        fetch("https://preguntadas.herokuapp.com/v1/users/login", {
     headers: {
         "Accept": "application/json",
         "Content-Type": "application/json;  charset=UTF-8"
     },
     method: "post",
     body: JSON.stringify({
         username: username,
         password: password,
     })  
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
    
    if(result.success){
        console.log("bien");
    } else {
        console.log("mal");
    }
}).catch(function(error) {

});
        //     alert(`Bienvenidx ${username}`);
        //     // PREGUNTAR POR: window.location = "success.html"; // Redirecting to other page.
        //     } else {
            // if (username == "HPotter" && password == "hagrid") {
//         alert("Login incorrecto. Intente nuevamente");
//     }
}

// const obtenerNombreUsuario = function (){
//     let user = document.getElementById ('inputUser');
//     return user.value
//     }
//     const obtenerContraseña = function (){
    
//     }
    
//     const verificarUsuarioYContraseña = function(){
    
//     }

