const todosQuizzes = document.querySelector(".todosQuizzes");
const quizzSelecionado = document.querySelector(".quizzSelecionado");
let quizzes = [];
let quizz = [];
let id;
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
  console.log(quizz);
  console.log(quizz.title);
  console.log(quizz.questions[0]);
}
receiveServerQuizz();
