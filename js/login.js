let button = document.getElementById("button1");
button.onclick = function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "Ada" && password == "2019") {
        alert(`Bienvenida ${username}`);
    } else {
        alert("Login incorrecto. Intente nuevamente");
    }
}


// PREGUNTAR POR: window.location = "success.html"; // Redirecting to other page.