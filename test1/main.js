

// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고  go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추며, 맞췄습니다.
// 랜덤 번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 Up!!
// Rest버튼을 눌면 게임이 리셋
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다
// 유저가 이미 입력한 숮자를 또 입력하면, 알려준다, 기회를 깍지 않는다.


let num = 0;
let youBtn = document.getElementById("you-btn");
let hI = document.getElementById("hi");
let numInput = document.getElementById("num-input");
let reS = document.getElementById("res");
let end = 5;
let histo = [];
let enD = document.getElementById("end");
let game = false;


youBtn.addEventListener("click",play);
reS.addEventListener("click",Res);

numInput.addEventListener("click",function(){
  numInput.value = "";
});

function numRendom() {
  num = Math.floor(Math.random() * 100) +1;
  console.log("정답 :",num);
}

function play() {
  let playValue = numInput.value;

  if(playValue < 0 || playValue > 100){
    hI.textContent = "1과 100사이를 입력해주세요"
    return;
  }
  if(histo.includes(playValue)) {
    hI.textContent = "이미 입력한 값입니다."
    return;
  }

  end--;
  enD.textContent = `남은 숫자 : ${end}`;

  if(playValue < num) {
    hI.textContent = "Up!!";
  } else if(playValue > num) {
    hI.textContent = "Down!!";
  } else {
    hI.textContent = "맞췄습니다.";
    game = true;
  }
  histo.push(playValue);
  if(end < 1) {
    game = true;
  }
  if(game == true) {
    youBtn.disabled = true;
  }
}


function Res() {
  numInput.value = "";
  numRendom();
  histo = [];
  hI.textContent = "결과 나오는곳"
}


numRendom();










































// let computerNum = 0;
// let playButton = document.getElementById("play-btn");
// let userInput = document.getElementById("user-input");
// let resultArea = document.getElementById("result-area");
// let resetBtn = document.getElementById("reset-btn");
// let chances = 5;
// let gameOver = false;
// let chanceArea = document.getElementById("chance-area");
// let history = [];

// playButton.addEventListener("click",play);
// resetBtn.addEventListener("click",reset);
// userInput.addEventListener("focus", function(){
//   userInput.value=""
// });

// function pickRandomNum() {
//   computerNum = Math.floor(Math.random() * 100)+1;
//   console.log("정답", computerNum);
// }
// function play(){
//   let userValue = userInput.value;

//   if(userValue < 1 || userValue > 100) {
//     resultArea.textContent = "1과 100사이 숫자를 입력해주세요.";
//     return;
//   }
//   if(history.includes(userValue)) { //includes 들어있는 value
//     resultArea.textContent = "이미 입력한 숫자입니다 다른 숫자를 입력해주세요"
//     return;
//   }
//   chances--;
//   chanceArea.textContent = `남은 기회 : ${chances}번`;

//   if(userValue < computerNum) {
//     resultArea.textContent = "Up!!";
//   } else if(userValue > computerNum) {
//     resultArea.textContent = "Down!!";
//   } else {
//     resultArea.textContent = "맞추셨습니다.";
//     gameOver = true;
//   }

//   history.push(userValue); //push 넣는다
//   console.log(history);

//   if(chances < 1) {
//     gameOver = true;
//   }
//   if(gameOver == true) {
//     playButton.disabled = true; //disabled 비활성화
//   }
// }
// function reset() {
//   // user input창이 깨끗하게 정리되고
//   userInput.value = "";
//   // 새로운 번호가 생성되고
//   pickRandomNum();
//   resultArea.textContent = "결과값이 여기 나옵니다."
// }


//   pickRandomNum();