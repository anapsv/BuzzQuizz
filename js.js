const todosQuizzes = document.querySelector(".todosQuizzes");
let quizzes = [];
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
    <div class="quizz">
    <img src="${quizzes[i].image}" />
    <div class="quizzTitle">${quizzes[i].title}</div>
    </div>
      `;
  }
}
receiveServerQuizz();
