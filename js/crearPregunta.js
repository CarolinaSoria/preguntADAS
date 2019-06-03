let button = document.getElementById("btn2");

function getQuestion(){
    let inputQuestion = document.getElementById("question").value;
   
}

function getAnswers(){
    let answers = [];
    for(i = 1; i < 5; i++){
        let inputAnswer = document.getElementById(`answer-${i}`).value;
        answers.push(inputAnswer);
    }
     return answers;
}
function displayInputs(){
    getQuestion();
   let answers = getAnswers(); 
    answersContainer = document.getElementById("answers-container");
    answersContainer.innerHTML =
    ` <p>Cual de todas las respuestas es la correcta?</p> `
    for(i = 0; i < 4; i++){
       answersContainer.innerHTML += `
       <input type="radio" name="answer" value="1"> ${answers[i]}`;

    }

}

function clearAll(){
    let inputElements = document.getElementsByType("radio");
    for (let i=0; i < inputElements.length; i++) {
        if (inputElements[i].type == "text") {
            inputElements[i].value = "";
            answersContainer.innerHTML = "";
        }
    }
    
}