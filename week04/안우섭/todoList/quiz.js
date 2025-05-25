const todos = []; // 할 일 목록을 저장할 배열
let idCounter = 0; // 각 할 일에 고유 번호 부여

const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", () => {
  const text = input.value.trim(); // 입력값 양쪽 공백 제거
  if (text !== "") {
    const newTodo = {
      id: idCounter++, // 고유 id (1씩 증가)
      text, // 할 일 내용
    };
    todos.push(newTodo); // 배열에 추가
    input.value = ""; // 입력창 비우기
    renderList(); // 화면 다시 그리기
  }
});

function renderList() {
  list.innerHTML = ""; // 기존 목록 비우기

  todos.forEach(({ id, text }) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <span>${text}</span>
      <button class="delete-btn" data-id="${id}">삭제</button>
    `;

    list.appendChild(li); // 리스트에 추가
  });
}

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const { id } = e.target.dataset; // 삭제할 id 꺼내기 , 비구조화로 id만 꺼냄
    const index = todos.findIndex((todo) => todo.id === Number(id));

    if (index !== -1) {
      todos.splice(index, 1); // 해당 인덱스에서 1개 제거
      renderList(); // 목록 다시 그리기
    }
  }
});
