fetch("https://preguntadas.herokuapp.com/v1/questions/all", {
     headers: {
         "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlcmkxMjMiLCJpYXQiOjE1NTk4MzI5NjR9.V9rxAd2wJlo9MgJMcCa1nrdJgMR5RKM3SyiBXPDmG8s"
     },
     method: "get",
}).then(function(result) {
     return result.json();
}).then(function(result) {
    console.log(result);
}).catch(function(error) {

});
// fetch("https://preguntadas.herokuapp.com/v1/questions", {
//      headers: {
//          "Accept": "application/json",
//          "Content-Type": "application/json;  charset=UTF-8",
//          "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImxlcmkxMjMiLCJpYXQiOjE1NTk4MzI5NjR9.V9rxAd2wJlo9MgJMcCa1nrdJgMR5RKM3SyiBXPDmG8s",
//      },
//      method: "post",
//      body: JSON.stringify({
//            title: "Por qué razón es conocida Ada Lovelace?",
//            answer: 2,
//            answers: [
//                    "Descubrir un dinosaurio",
//                    "Ser la primera programadora",
//                    "Jugar muy bien al tenis",
//                    "Construir la muralla china"
//                ],
//            category: "Peliculas"
//        })
//     }).then(function(result) {
//      return result.json();
// }).then(function(result) {
//     console.log(result)
// }).catch(function(error) {

// });
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

   