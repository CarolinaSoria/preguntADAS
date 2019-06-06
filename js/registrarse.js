let button = document.getElementById("btn2");
button.onclick = function validate() {
    let name = document.getElementById("name").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let checkPassword = document.getElementById("checkPassword").value;
    let email = document.getElementById("email").value;

    fetch("https://preguntadas.herokuapp.com/v1/users/signin", {
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
       if (result.success){
        alert("bien");
       } else {
           alert("mal");
       }
   }).catch(function(error) {
   });
   

    // if (name === "Harry Potter" && username === "HPotter" && password === "hagrid" && 
    // checkPassword === "hagrid" && email === "harrypotter@hogwarts.com") {
    //     getDat
    //     alert(`Bienvenidx al sitio ${username}`);
    // } else {
    //     alert("Alguno de tus datos es incorrecto. Intente nuevamente");

    // }
}

   