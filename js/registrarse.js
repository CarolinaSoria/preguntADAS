let button = document.getElementById("btn2");
button.onclick = function validate() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkPassword = document.getElementById("checkPassword").value;
    let email = document.getElementById("email").value;


    if (name === "Harry Potter" && username === "HPotter" && password === "hagrid" && 
    checkPassword === "hagrid" && email === "harrypotter@hogwarts.com") {
        alert(`Bienvenidx al sitio ${username}`);
    } else {
        alert("Alguno de tus datos es incorrecto. Intente nuevamente");
    }
}
