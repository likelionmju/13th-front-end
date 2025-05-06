//👉 할 일 목록 배열
const todos = [];

// 👉 고유 ID 생성용 카운터
let idCounter = 0;

// 👉 DOM 요소 선택
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const list = document.getElementById('todo-list');

// ✅ 할 일 추가 함수
addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  // 새 todo 객체 생성
  const todo = {
    id: idCounter++,
    text,
    done: false
  };

  // 배열에 추가
  todos.push(todo);

  // 리스트 다시 렌더링
  renderList();

  // 입력창 초기화
  input.value = '';
});

// ✅ 리스트 렌더링 함수
function renderList() {
  list.innerHTML = '';

  todos.forEach(({ id, text }) => {
    const li = document.createElement('li');
    li.innerHTML = 
    `${text} <button data-id="${id}">삭제</button>`;
    list.appendChild(li);
  });
}

// ✅ 삭제 버튼 처리
list.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const id = Number(e.target.dataset.id);

    // 해당 id의 항목을 배열에서 제거
    const index = todos.findIndex(todo => todo.id === id);
    if (index > -1) {
      todos.splice(index, 1);
      renderList();
    }
  }
});
