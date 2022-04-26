
function isURL(value){
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

function isHex(backgroundColor){
    if(backgroundColor[0] != "#" || backgroundColor.length != 7){
            return false;
    }
    let color = (backgroundColor.substring(1, 7)).toLowerCase();
    for (let i = 0; i < color.length; i++) {
        if (color[i] !== "a" && color[i] !== "b" && color[i] !== "c" && color[i] !== "d" && color[i] !== "e" && color[i] !== "f" && isNaN(color[i])) {
            return false;
        }
    }
        return true;
}


function proceedToCreateQuestions() {
    let numberOfQuestions =  document.querySelector(".numberOfQuestions").value;
    let numberOfLevels = document.querySelector(".numberOfLevels").value;
    console.log(numberOfQuestions);
    let check = toBegin(numberOfQuestions, numberOfLevels);
    if(check) {
    questionsCreation(numberOfQuestions, numberOfLevels);
    }else{
        alert("Os dados inseridos estão incorretos, por favor, tente novamente.");
    }
}

function toBegin(numberOfQuestions, numberOfLevels) {
    let quizzTitleInput = document.querySelector(".quizzTitleInput").value;
    let URLImage = document.querySelector(".URLQuizzImageInput").value;
    if(20<= quizzTitleInput.length && quizzTitleInput.length<=65){
        console.log("title ok");
    }if(isURL(URLImage)){
    console.log("url ok");
    }if(numberOfQuestions >=3){
    console.log("questions ok");
    }if(numberOfLevels >=2){
    console.log("level ok");
    }if(20<= quizzTitleInput.length && quizzTitleInput.length<=65 && isURL(URLImage) && numberOfQuestions >=3 && numberOfLevels >=2){
    return true;
    }else{
    return false;
    }
}

function questionsCreation(numberOfQuestions, numberOfLevels) {
    if(toBegin(numberOfQuestions, numberOfLevels) === true){
        const questions = document.querySelector("container");
        questions.innerHTML = "";
        questions.innerHTML += `<h2>Crie suas perguntas</h2>`;
        for(let i = 0; i < numberOfQuestions; i++){
        questions.innerHTML += 
        `<div class="quizzCreationBox2 question${i+1}">
        <span>Pergunta ${i+1}</span>
        <input class="questionTextInput" type="text" autocomplete="off" placeholder="Texto da pergunta">
        <input class="backgroundColorInput" type="text" placeholder="Cor de fundo da pergunta">
        <span>Resposta correta</span>
        <input class="answerTextInput" type="text" placeholder="Resposta correta">
        <input class="imgURLInput" type="text" placeholder="URL da imagem">
        <span>Respostas incorretas</span>
        <input class="wrongAnswer1" type="text" placeholder="Resposta incorreta 1">
        <input class="imgURLInput1" type="text" placeholder="URL da imagem 1">
        <input class="wrongAnswer2" type="text" placeholder="Resposta incorreta 2">
        <input class="imgURLInput2" type="text" placeholder="URL da imagem 2">
        <input class="wrongAnswer3" type="text" placeholder="Resposta incorreta 3">
        <input class="imgURLInput3" type="text" placeholder="URL da imagem 3">
        </div>`;
    }
    const button = document.querySelector("container");
    button.innerHTML += `<div class="quizzCreationButton" onclick="quizzCreationLevels(${numberOfQuestions}, ${numberOfLevels})">Prosseguir pra criar níveis</div>`;
    }else if(toBegin(numberOfQuestions, numberOfLevels) === false){
        alert("Dados inseridos incorretamente, por favor, tente novamente.");
    }
}

function conditionsQuestions(numberOfQuestions){
    for(let i = 0; i < numberOfQuestions; i++){
    let questionText = document.querySelector(`.question${i+1}`).querySelector(`.questionTextInput`).value;
    console.log(questionText);
    let backgroundColor = document.querySelector(`.question${i+1}`).querySelector(`.backgroundColorInput`).value;
    console.log(isHex(backgroundColor));
    let answerText = document.querySelector(`.question${i+1}`).querySelector(`.answerTextInput`).value;
    console.log(answerText);
    let URLAnswer = document.querySelector(`.question${i+1}`).querySelector(`.imgURLInput`).value;
    console.log(isURL(URLAnswer));
    let wrongAnswer1 = document.querySelector(`.question${i+1}`).querySelector(`.wrongAnswer1`).value;
    console.log(wrongAnswer1);
    let URLWrongAnswer1 = document.querySelector(`.question${i+1}`).querySelector(`.imgURLInput1`).value;
    console.log(isURL(URLWrongAnswer1));
    let wrongAnswer2 = document.querySelector(`.question${i+1}`).querySelector(`.wrongAnswer2`).value;
    console.log(wrongAnswer2);
    let URLWrongAnswer2 = document.querySelector(`.question${i+1}`).querySelector(`.imgURLInput2`).value;
    console.log(isURL(URLWrongAnswer2));
    let wrongAnswer3 = document.querySelector(`.question${i+1}`).querySelector(`.wrongAnswer3`).value;
    console.log(wrongAnswer3);
    let URLWrongAnswer3 = document.querySelector(`.question${i+1}`).querySelector(`.imgURLInput3`).value;
    console.log(isURL(URLWrongAnswer3));

    if(questionText.length >= 20 && answerText.length > 0 && isHex(backgroundColor) && isURL(URLAnswer) && wrongAnswer1.length > 0 && isURL(URLWrongAnswer1) && (wrongAnswer2.length > 0 || wrongAnswer2 == "") && (isURL(URLWrongAnswer2) || URLWrongAnswer2 == "") && (wrongAnswer3.length > 0 || wrongAnswer3 == "") && (isURL(URLWrongAnswer3) || URLWrongAnswer3 == "")){
        console.log("deu certo");
    }else{
        console.log("ffffffff");
        return false;
    }
}   return true;
}


function quizzCreationLevels(numberOfQuestions, numberOfLevels) {
    if(conditionsQuestions(numberOfQuestions)===true){
    const levels = document.querySelector(".container");
    levels.innerHTML = `<h2>Agora, decida os níveis</h2>`;
    for(let i = 0; i < numberOfLevels; i++){
    const levels = document.querySelector(".container");
    levels.innerHTML += 
    `<div class="quizzCreationBox3">
    <span>Nível ${[i+1]}</span>
    <input onblur="conditionsLevels()" class="levelTitle" type="text" placeholder="Título do nível">
    <input class="gradingPercentage" type="text" placeholder="% de acerto mínima">
    <input class="URLImageLevel" type="text" placeholder="URL da imagem do nível">
    <input class="levelDescription" type="text" placeholder="Descrição do nível">
    </div>`;
    }
    const button = document.querySelector(".container");
    button.innerHTML += `<div class="quizzCreationButton" onclick="finishedQuizz() ">Finalizar quizz</div>`;
    }else if(conditionsQuestions(numberOfQuestions) === false){
    alert("Revise os dados inseridos");
    }
}

function conditionsLevels() {
    let levelTitle = document.querySelector(".levelTitle").value;
    let gradingPercentage = document.querySelector(".gradingPercentage").value;
    let URLImageLevel = document.querySelector(".URLImageLevel").value;
    let levelDescription = document.querySelector(".levelDescription").value;
    if ( levelTitle.length >= 10 && gradingPercentage>=0 && gradingPercentage<=100 && (isURL(URLImageLevel)) && levelDescription.length >=30){
        console.log("ok");
        return true;
    }else{
        console.log("fff");
        return false;
    }
}

function finishedQuizz() {
    conditionsLevels()
    if(conditionsLevels() === true){
        let quizzTitleInput = document.querySelector(".quizzTitleInput").value;
        let URLImageLevel = document.querySelector(".URLQuizzImageInput").value;
    const finishedQuizz = document.querySelector(".container");
    finishedQuizz.innerHTML = `<h2>Seu quizz está pronto!</h2>
    <div class="finishedQuizz"><img src="${URLImageLevel}" alt="Imagem de fundo sobre o quizz"/><div class="finishedQuizzTittle">${quizzTitleInput}</div></div>
    <div class="quizzCreationButton"//onclick="accessQuizz()"//>Acessar Quizz</div><p>Voltar pra home</p>`;
    }else if(conditionsLevels() === false){
    alert("Revise os dados inseridos e tente novamente");
    }
}

function accessQuizz() {

}