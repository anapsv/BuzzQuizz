function proceedToCreateQuestions() {
    const element = document.querySelector(".quizzCreationBeginning");
    element.classList.add("hidden");
}

function quizzCreationQuestions() {
    const questions = document.querySelector(".quizzCreationQuestions");
    questions.innerHTML = `<h1>Crie suas perguntas</h1>
    <div class="quizzCreationBox2">
    <span>Pergunta 1</span>
    <input type="text" placeholder="Texto da pergunta">
    <input type="text" placeholder="Cor de fundo da pergunta">
    <span>Resposta correta</span>
    <input type="text" placeholder="Resposta correta">
    <input type="text" placeholder="URL da imagem">
    <span>Respostas incorretas</span>
    <input type="text" placeholder="Resposta incorreta 1">
    <input type="text" placeholder="URL da imagem 1">
    <input type="text" placeholder="Resposta incorreta 2">
    <input type="text" placeholder="URL da imagem 2">
    <input type="text" placeholder="Resposta incorreta 3">
    <input type="text" placeholder="URL da imagem 3">
    </div>`
}

quizzCreationQuestions();