let parentbutton = document.querySelector(".splash-screen");
let button = document.querySelector(".splash-screen span");
let b = 5;
let duration = 1500;

let val;
let val1;

let startTimerM = 4; 
let time = startTimerM * 60;

let startTimerM1 = 2;
let time1 = startTimerM1 * 60;

let counDownElement = document.querySelector(".timer");

button.addEventListener("click", function (ele) {
  val = setInterval(upDate, 1000);
  let person = prompt("Enter Your Name");
  let name = document.querySelector(".info-informations .name");
  if (person == null || person == "") {
    name.textContent = `Hello: Unknown`;
  } else {
    name.textContent = `Hello: ${person}`;
  }
  parentbutton.remove();
  let audio = document.querySelector("#aodiu-back");
  audio.play();
  audio.volume = 0.04;
});

function upDate(params) {
  let minuets = Math.floor(time / 60);
  let seconds = time % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minuets = minuets < 10 ? "0" + minuets : minuets;
  counDownElement.innerHTML = `${minuets} : ${seconds}`;
  if (time + 1 >= 0) { 
    --time;
  }
  if (time + 1 === 0) { 
    setTimeout(() => {
      loser()
    },1500);
    clearInterval(val)
  }
}

function upDate1(params) {
  let minuets = Math.floor(time1 / 60);
  let seconds = time1 % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  minuets = minuets < 10 ? "0" + minuets : minuets;
  counDownElement.innerHTML = `${minuets} : ${seconds}`;
  time1--;
  
}

function loser() {
  loserDiv = document.createElement("div");
  loserbtn = document.createElement("button");
  teTcongDiv = document.createTextNode("I am sorry Loser");
  teTloserbtn = document.createTextNode("Play again");
  congDiv = document.createElement("div");
  loserDiv.style.fontSize = "40px";
  loserDiv.style.fontWeight = "bold";
  loserDiv.style.backgroundColor = "#f6f6f6";
  loserDiv.style.width = "700px";
  loserDiv.style.height = "300px";
  loserDiv.style.position = "fixed";
  loserDiv.style.left = "50%";
  loserDiv.style.top = "50%";
  loserDiv.style.transform = "translate(-50%, -50%)";
  loserDiv.style.padding = "50px 50px 20px";
  loserDiv.style.borderRadius = "6px";
  loserDiv.style.textAlign = "center";
  loserbtn.style.cursor = "pointer";
  loserbtn.style.position = "absolute";
  loserbtn.style.left = "50%";
  loserbtn.style.top = "70%";
  loserbtn.style.transform = "translate(-50%, -50%)";
  loserbtn.style.padding = "15px 20px";
  loserbtn.style.borderRadius = "6px";
  loserbtn.style.textAlign = "center";
  loserbtn.style.fontSize = "25px";
  loserbtn.style.backgroundColor = "#2196f3";
  loserbtn.style.border = "none";
  loserbtn.style.color = "#f6f6f6";
  loserbtn.style.border = "none";
  loserbtn.appendChild(teTloserbtn);
  loserDiv.appendChild(loserbtn);
  congDiv.appendChild(teTcongDiv);
  loserDiv.appendChild(congDiv);
  loserbtn.addEventListener("click", function () {
    for (let i = 0; i < arrBlocks.length; i++) {
      arrBlocks[i].classList.remove("rightBlock");
    }
    loserDiv.remove();
    val1= setInterval(upDate1, 1000); 
    triess.innerHTML = -1
    triess.innerHTML = parseInt(triess.innerHTML) + 1;

  });
  document.body.appendChild(loserDiv); 
} 





let blocks = document.querySelector(".container-game-blocks");

let arrBlocks = Array.from(blocks.children);

let orderRange = [...Array(arrBlocks.length).keys()];

shelf(orderRange);

arrBlocks.forEach((Block, index) => {
  Block.style.order = orderRange[index];

  Block.addEventListener("click", function (ele) {
    flipBlock(Block);
  });
});

function flipBlock(ele) {
  ele.classList.add("active");

  let allFlipped = arrBlocks.filter((flippedBlock) =>
    flippedBlock.classList.contains("active")
  );

  if (allFlipped.length === 2) {
    stopclicking();
    cheacking(allFlipped[0], allFlipped[1]);
  }
}
function stopclicking() {
  blocks.classList.add("no-clicking");

  setTimeout(() => {
    blocks.classList.remove("no-clicking");
  }, duration);
}
let triess = document.querySelector(".tries span");
function cheacking(firstBlock, secondBlock) {

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
    firstBlock.classList.remove("active");
    secondBlock.classList.remove("active");
    firstBlock.classList.add("rightBlock");
    secondBlock.classList.add("rightBlock");
    let tru = document.getElementById("true");
    tru.play();
    tru.volume = 0.05;
  } else {
    triess.innerHTML = parseInt(triess.innerHTML) + 1;

    setTimeout(() => {
      firstBlock.classList.remove("active");
      secondBlock.classList.remove("active");
    }, duration);
    let fals = document.getElementById("false");
    fals.play();
    fals.volume = 0.07;
  }
  setTimeout(() => {
    runwin();
  }, 1000);
}

function shelf(ele) {
  let currnt = ele.length,
    temp,
    random;
  while (currnt > 0) {
    random = Math.floor(Math.random() * currnt);

    currnt--;

    temp = ele[currnt];

    ele[currnt] = ele[random];

    ele[random] = temp;
  }
  return ele;
}

function runwin() {
  if (arrBlocks.every(winner) === true) {
    winnerwinner();
  clearInterval(val);
  }
}

function winner(win) {
  return win.classList.contains("rightBlock");
}
function winnerwinner() {
  winDiv = document.createElement("div");
  winbtn = document.createElement("button");
  teTcongDiv = document.createTextNode("Winner Winner Chicken Dinner");
  teTwinbtn = document.createTextNode("Play again");
  congDiv = document.createElement("div");
  winDiv.style.fontSize = "40px";
  winDiv.style.fontWeight = "bold";
  winDiv.style.backgroundColor = "#f6f6f6";
  winDiv.style.width = "700px";
  winDiv.style.height = "300px";
  winDiv.style.position = "fixed";
  winDiv.style.left = "50%";
  winDiv.style.top = "50%";
  winDiv.style.transform = "translate(-50%, -50%)";
  winDiv.style.padding = "50px 50px 20px";
  winDiv.style.borderRadius = "6px";
  winDiv.style.textAlign = "center";
  winbtn.style.cursor = "pointer";
  winbtn.style.position = "absolute";
  winbtn.style.left = "50%";
  winbtn.style.top = "70%";
  winbtn.style.transform = "translate(-50%, -50%)";
  winbtn.style.padding = "15px 20px";
  winbtn.style.borderRadius = "6px";
  winbtn.style.textAlign = "center";
  winbtn.style.fontSize = "25px";
  winbtn.style.backgroundColor = "#2196f3";
  winbtn.style.border = "none";
  winbtn.style.color = "#f6f6f6";
  winbtn.style.border = "none";
  winbtn.appendChild(teTwinbtn);
  winDiv.appendChild(winbtn);
  congDiv.appendChild(teTcongDiv);
  winDiv.appendChild(congDiv);
  winDiv.addEventListener("click", function (ele, elo) {
    for (let i = 0; i < arrBlocks.length; i++) {
      arrBlocks[i].classList.remove("rightBlock");
      winDiv.remove();
    }
    val1 = setInterval(upDate1, 1000);
    triess.innerHTML = -1
    triess.innerHTML = parseInt(triess.innerHTML) + 1;

  });
  document.body.appendChild(winDiv);
}
