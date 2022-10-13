const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY = "toDos";

/*
수정하기 이전
const toDos = []; 의 문제점.
새로고침을 하게 되면 항상 빈 array 로 시작하니까 새로운 toDoInputValue를 push 하면
빈 배열에 새로운 값을 다시 추가하게된다.

해결방안.
빈 array 로 시작하지말고 localStorage에 저장되어있던 값을 항상 가진채로 있어야한다.
line 78 참고 !!!
*/
let toDos = [];

function saveLocalToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteLocalToDo(e) {
  const li = e.target.parentElement;

  /*
    실수 1
  filter(todo => todo !== li.id) 해가지고
  애초에 조건문 자체가 안 맞아서 안 지워졌던 거임.. 조금만 더 신경쓰자
    실수 2
  todo.id 는 number 임 하지만 li.id 는 string 이다
  따라서 !== 시에는 타입과 값이 같아야만 하므로 비교가 되지 않았던 것
  */
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  // 콘솔에는 지워졌으나 localStorage 에는 남아있는 상태니까 변경된 상태를 다시 저장해줘야함.
  saveLocalToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);

  button.innerText = "x";
  span.innerText = newTodoObj.text;
  li.id = newTodoObj.id;

  button.addEventListener("click", deleteLocalToDo);
}

function handleToDoSubmit(e) {
  e.preventDefault();

  const toDoInputValue = toDoInput.value;
  const newTodoObj = {
    text: toDoInputValue,
    id: Date.now(),
  };
  toDoInput.value = "";
  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveLocalToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

// localStorage에 있다면
// if (savedToDos !== null) 도 가능함
if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  // Load
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);

  /*
    forEach 는 각각의 배열 아이템에 대해서 함수를 실행할 수 있게해줌
    즉 index 0 부터 마지막 index 까지 한 바퀴 도는건데 돌면서 그 값(value)들을 item 라는 곳(매개변수, 이름 노상관)에 저장이 되는거에요.

    parsedToDos.forEach((item) => {
        console.log(`hi ${item}`);
    });
  */
}
