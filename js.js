const todosQuizzes = document.querySelector(".todosQuizzes");
const quizzSelecionado = document.querySelector(".quizzSelecionado");
let quizzes = [];
let quizz = [];
let id;
let string = ``;
let contarAcerto = 0;
let contarCliques = 0;
function receiveServerQuizz() {
  const serverQuizz = axios.get(
    "https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes"
  );
  serverQuizz.then(receiveQuizz);
}
function receiveQuizz(response) {
  quizzes = response.data;
  for (let i = 0; i < quizzes.length; i++) {
    todosQuizzes.innerHTML += `
    <div class="quizz" onclick="openSelectedQuizz(this)">
    <img src="${quizzes[i].image}" />
    <div class="quizzTitle">${quizzes[i].title}</div>
    <div class="quizzId hide">${quizzes[i].id}</div>
    </div>
      `;
  }
}
function openSelectedQuizz(response) {
  id = response.querySelector(".quizzId").innerHTML;
  document.querySelector("main").classList.add("hide");
  document.querySelector(".quizzSelecionado").classList.remove("hide");
  let responseQuizz = axios.get(
    `https://mock-api.driven.com.br/api/v6/buzzquizz/quizzes/${id}`
  );
  responseQuizz.then(magica);
}
function magica(response) {
  quizz = response.data;
  string = `
  <div class="gambiarra1">
  <img
    src="${quizz.image}"
  />
  <div class="topTitle">${quizz.title}</div>
</div>
  `;
  for (let i = 0; i < quizz.questions.length; i++) {
    string += `
  <div class="question">
    <div class="questionTitle">${quizz.questions[i].title}</div>
    <div class="gambiarra2">
    
    `;
    for (let j = 0; j < quizz.questions[i].answers.length; j++) {
      string += `
       <div class="questions" onclick="teste(this)" id=${quizz.questions[i].answers[j].isCorrectAnswer}>
       <img src="${quizz.questions[i].answers[j].image}" />
       <h3 class="black">${quizz.questions[i].answers[j].text}</h3>
     </div>
     
     `;
    }
    string += `
    </div> 
    </div>
    `;
  }
  quizzSelecionado.innerHTML += string;
}
function teste(response) {
  let divPai = response.parentNode;
  let nodeList = divPai.querySelectorAll(".questions");
  console.log(teste);
  if (response.id === "true") {
    contarAcerto += 1;
    contarCliques += 1;
    response.querySelector("h3").classList.remove("black");
    response.querySelector("h3").classList.add("green");
  } else if (response.id === "false") {
    contarCliques += 1;
    response.querySelector("h3").classList.remove("black");
    response.querySelector("h3").classList.add("red");
  }
  for (let k = 0; k < nodeList.length; k++) {
    let teste = nodeList[k];
    console.log(teste);
    teste
      .querySelector(".black")
      .parentNode.querySelector("img")
      .classList.add("brilho");
    teste.querySelector(".black").removeAttribute("onclick");
  }
}
receiveServerQuizz();
