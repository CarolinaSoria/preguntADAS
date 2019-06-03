let button = document.getElementById("btn2");

function getQuestion(){
    let inputQuestion = document.getElementById("question").value;
    console.log(inputQuestion);
}

function getAnswers(){
    for(i = 1; i < 5; i++){
        let inputAnswer = document.getElementById(`answer-${i}`).value;
        console.log(inputAnswer);
    } 
}
function displayInputs(){
    getQuestion();
    getAnswers();
}