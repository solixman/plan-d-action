const questions = [
    { question: "En JavaScript, 'null' est un type d'objet.", answer: false },
    { question: "Les tableaux en JavaScript commencent à l'index 1.", answer: false },
    { question: "La méthode 'map()' peut être utilisée pour transformer un tableau.", answer: true },
    { question: "En JavaScript, '==' compare les valeurs avec conversion de type automatique.", answer: true },
    { question: "La méthode 'querySelector()' permet de sélectionner plusieurs éléments à la fois.", answer: false },
    { question: "Le mot-clé 'const' permet de déclarer une variable modifiable.", answer: false },
    { question: "La fonction 'setTimeout()' est utilisée pour exécuter du code après un délai donné.", answer: true },
    { question: "Le mot-clé 'this' fait toujours référence à l'objet global.", answer: false },
    { question: "Les promesses en JavaScript utilisent 'then()' et 'catch()' pour la gestion des résultats.", answer: true },
    { question: "Une fonction fléchée (arrow function) a sa propre valeur 'this'.", answer: false }
];

var i=0;
var scoreCount=0;

function ShowQuestions(i){

const Question = document.getElementById('question')
Question.innerText=""
Question.innerText+=questions[i].question;
return i
}

ShowQuestions(i)


function CalculateScoreTrue(i){
if(questions[i].answer = true){
    scoreCount++;
    console.log(scoreCount)
   
}

i++
nextQuestion()
return i
}

function CalculateScoreFalse(){
    if(questions[i].answer = false){
        scoreCount++;
        console.log(scoreCount)
        
    }
    i++
    nextQuestion(i)
    return i
}

function nextQuestion(){
i++
const Question = document.getElementById('question')
Question.innerText=""
Question.innerText+=questions[i].question;
return i
}