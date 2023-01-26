// 유저가 값을 입력한다.
//  + 버튼을 클릭하면, 할일이 추가된다.
// delete버튼을 누르면 할일이 삭제된다.
// check버튼을 누르면 할일이 끝나면서 밑줄이 간다
// 진행중 끝남 탭을 누르면, 언더바가 이동한다,
// 끝남 탭은, 끝난 아이템만, 진행중탭은 진행중인 아이템만
// 전체탭을 누르면 다시 전체아이템으로 돌아옴

const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-btn");
const taskBoard = document.querySelector(".task-board");
let taskList = [];

addBtn.addEventListener("click", function(){
  let taskContent = taskInput.value;
  taskList.push(taskContent);
  console.log(taskContent)

  render();
  function render(){
    for(let i=0; i<taskList.length;i++) {
      taskBoard.innerHTML += `<div class="task">
      <div>${taskList[i]}</div>
      <div>
        <button>Check</button>
        <button>Delete</button>
      </div>
    </div>`
    taskList = [];
    }
  }
});


