let button = document.getElementById("btn2");

function getQuestion() {
  let inputQuestion = document.getElementById("question").value;
}

function getAnswers() {
  let answers = [];
  for (i = 1; i < 5; i++) {
    let inputAnswer = document.getElementById(`answer-${i}`).value;
    answers.push(inputAnswer);
}
return answers;

}


function validateForm() {
    let x = document.forms["myForm"]["answer"].value;
    if (x === "") {
        alert("Alguno de los campos no esta lleno");
    return false;
    
    } else {
        return true;
        
    }
}


answersContainer = document.getElementById("answers-container");

function displayInputs() {
    if (validateForm() ){ 
      getQuestion();
    let answers = getAnswers();
    answersContainer.innerHTML = ` <p>Cual de todas las respuestas es la correcta?</p> `;
    for (i = 0; i < 4; i++) {
        answersContainer.innerHTML += `
        <input type="radio" name="right-answer" value="${answers[i]}"> ${
            answers[i]
        }<br>`;
    }
  }
  
}

function clearAll() {
  let inputElements = document.getElementsByTagName("input");
  for (let i = 0; i < inputElements.length; i++) {
    if (inputElements[i].type == "text") {
      inputElements[i].value = "";
    }
    answersContainer.innerHTML = "";
  }
}

function getRightAnswer() {
  let rightAnswer = document.getElementsByName("right-answer");
  for (let i = 0; i < rightAnswer.length; i++) {
    if (rightAnswer[i].checked === true) {
      alert(rightAnswer[i].value);
    }
  }
} 
//llamar a la funcion xq si no aparece.



// function validateForm() {
//     var x = document.forms["myForm"]["answer", "question"].value;
//     if (x == "") {
//       alert("Alguno de los campos no esta lleno");
//       return false;
//     } else {
        
//     }
//   }

// menu dropdown
// var e = document.getElementById("categoryMenu");
// var strUser = e.options[e.selectedIndex].value;
// console.log(strUser);

    
// var e = document.getElementById("categoryMenu");
// var strUser = e.options[e.selectedIndex].value;
  