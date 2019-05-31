let button = document.getElementById("button1");
button.onclick = function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "Ada" && password == "2019") {
        alert(`Bienvenida ${username}`);
// PREGUNTAR POR: window.location = "success.html"; // Redirecting to other page.
    } else {
        alert("Login incorrecto. Intente nuevamente");
    }
}

// const obtenerNombreUsuario = function (){
//     let user = document.getElementById ('inputUser');
//     return user.value
//     }
//     const obtenerContraseña = function (){
    
//     }
    
//     const verificarUsuarioYContraseña = function(){
    
//     }