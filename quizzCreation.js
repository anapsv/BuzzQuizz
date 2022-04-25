
let expressionHTTPS = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
let HTTPSRegex = new RegExp(expressionHTTPS);
let expressionWWW = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
let WWWWRegex = new RegExp(expressionWWW);

function conditionsBeggining() {
    // let quizzTitleInput = document.querySelector(".quizzTitleInput").value;
    // let URLImage = document.querySelector(".URLQuizzImageInput").value;
    // let numberOfQuestions =  document.querySelector(".numberOfQuestions").value;
    // let numberOfLevels = document.querySelector(".numberOfLevels").value;
    // if(20<= quizzTitleInput.length && quizzTitleInput.length<=65 && (URLImage.match(HTTPSRegex) || URLImage.match(WWWWRegex)) && numberOfQuestions >=3 && numberOfLevels >=2){
    //     console.log(quizzTitleInput.length);
    //     return true;
    // }else{
    //     console.log(quizzTitleInput.length);
    //     return false;
    // }
    return true;
}

function proceedToCreateQuestions() {
    if(conditionsBeggining() === true) {
        const element = document.querySelector(".quizzCreationBeginning");
        element.classList.add("hidden");
    questionsCreation();
    }else if(conditionsBeggining() === false) {
        alert("Os dados inseridos estão incorretos, por favor, tente novamente.");
    }
}

function questionsCreation() {
    let numberOfQuestions =  document.querySelector(".numberOfQuestions").value;
    if(conditionsBeggining() === true){
        const questions = document.querySelector(".quizzCreation");
        questions.innerHTML += `<h2>Crie suas perguntas</h2>`;
        for(let i = 0; i < numberOfQuestions; i++){
        const questions = document.querySelector(".quizzCreation");
        questions.innerHTML += 
        `<div class="quizzCreationBox2">
        <span>Pergunta ${[i+1]}</span>
        <input onblur="conditionsQuestions()" class="questionTextInput" type="text" autocomplete="off" placeholder="Texto da pergunta">
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
    const button = document.querySelector(".quizzCreation");
    button.innerHTML += `<div class="quizzCreationButton" onclick="quizzCreationLevels()">Prosseguir pra criar níveis</div>`;
        const element = document.querySelector(".quizzCreationBeginning");
        element.classList.add("hidden");
    }else if(conditionsBeggining() === false){
        alert("Os dados inseridos estão incorretos, por favor, tente novamente.");
    }
}

function conditionsQuestions(){
    // let questionText = document.querySelector(".questionTextInput").value;
    // let backgroundColor = document.querySelector(".backgroundColorInput").value;
    // let answerText = document.querySelector(".answerTextInput").value;
    // let URLAnswer = document.querySelector(".imgURLInput").value;
    // let wrongAnswer1 = document.querySelector(".wrongAnswer1").value;
    // let URLWrongAnswer1 = document.querySelector(".imgURLInput1").value;
    // let wrongAnswer2 = document.querySelector(".wrongAnswer2").value;
    // let URLWrongAnswer2 = document.querySelector(".imgURLInput2").value;
    // let wrongAnswer3 = document.querySelector(".wrongAnswer3").value;
    // let URLWrongAnswer3 = document.querySelector(".imgURLInput3").value;

    // for(let h=1; h<=9; h++) {
    // if(questionText.length >= 20 && answerText.length > 0 && backgroundColor[0] == "#" && (backgroundColor[h] == "a,b,c,d,e,f" || backgroundColor[h] == 0,1,2,3,4,5,6,7,8,9) && (URLAnswer.match(HTTPSRegex) || URLAnswer.match(WWWWRegex)) && wrongAnswer1.length > 0 && (URLWrongAnswer1.match(HTTPSRegex) || URLWrongAnswer1.match(WWWWRegex)) && wrongAnswer2.length > 0 && (URLWrongAnswer2.match(HTTPSRegex) || URLWrongAnswer2.match(WWWWRegex)) && wrongAnswer3.length > 0 && (URLWrongAnswer3.match(HTTPSRegex) || URLWrongAnswer3.match(WWWWRegex))){
    //     console.log("deu certo");
    //     return true;
    // }else{
    //     console.log("ffffffff");
    //     return false;
    // }
    //}
    return true;
}

function quizzCreationLevels() {
    let numberOfLevels =  document.querySelector(".numberOfLevels").value;
    if(conditionsQuestions()===true){
    const levels = document.querySelector(".quizzCreation");
    levels.innerHTML = `<h2>Agora, decida os níveis</h2>`;
    for(let i = 0; i < numberOfLevels; i++){
    const levels = document.querySelector(".quizzCreation");
    levels.innerHTML += 
    `<div class="quizzCreationBox3">
    <span>Nível ${[i+1]}</span>
    <input onblur="conditionsLevels()" class="levelTitle" type="text" placeholder="Título do nível">
    <input class="gradingPercentage" type="text" placeholder="% de acerto mínima">
    <input class="URLImageLevel" type="text" placeholder="URL da imagem do nível">
    <input class="levelDescription" type="text" placeholder="Descrição do nível">
    </div>`;
    }
    const button = document.querySelector(".quizzCreation");
    button.innerHTML += `<div class="quizzCreationButton" onclick="finishedQuizz() ">Finalizar quizz</div>`;
    }else if(conditionsQuestions() === false){
    alert("Os dados inseridos estão incorretos, por favor, tente novamente.");
    }
}

function conditionsLevels() {
    // let levelTitle = document.querySelector(".levelTitle").value;
    // let gradingPercentage = document.querySelector(".gradingPercentage").value;
    // let URLImageLevel = document.querySelector(".URLImageLevel").value;
    // let levelDescription = document.querySelector(".levelDescription").value;
    
    // if (levelTitle.length >= 10 && gradingPercentage>=0 && gradingPercentage<=100 && (URLImageLevel.match(HTTPSRegex) || URLImageLevel.match(WWWWRegex)) && levelDescription.length >=30){
    //     console.log("ok");
    // }else{
    //     console.log("fff");
    // }
    return true;
}

function finishedQuizz() {
    if(conditionsLevels() === true){
    let quizzTitleInput = "Título do quizz";
    let URLImageLevel = "https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg";
    const finishedQuizz = document.querySelector(".quizzCreation");
    finishedQuizz.innerHTML = `<h2>Seu quizz está pronto!</h2>
    <div class="finishedQuizz"><img src="${URLImageLevel}" alt="Imagem de fundo sobre o quizz"/><div class="finishedQuizzTittle">${quizzTitleInput}</div></div>
    <div class="quizzCreationButton"//onclick="accessQuizz()"//>Acessar Quizz</div><p>Voltar pra home</p>`;
    }else if(conditionsLevels() === false){
    alert("Os dados inseridos estão incorretos, por favor, tente novamente.");
    }
}

function accessQuizz() {

}



