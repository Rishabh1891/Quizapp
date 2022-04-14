//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

//welcome pannel
loadIng=()=>{
    document.getElementById("testentr").disabled = true;
    document.querySelector(".welc").classList.add("open");
}
async function getStudents() {
  const response = await fetch("https://mocki.io/v1/10e76dcd-b508-4c7c-9011-065ea0b911cd");
  const data = await response.json();
  console.log(data);
}
getStudents();
openPara=()=>{
  const tstbt = document.getElementById("testentr");
  tstbt.disabled = false;
  document.querySelector(".start_btn").classList.add("animate");
let rol = document.getElementById("rol").value;
let img = document.getElementById("perimg");

  switch (rol) {
    case "12345678":
   document.getElementById("pernam").innerHTML = "Rishabh Tripathi";
   img.src = "https://i.ibb.co/m0RD0kF/Rishabh.webp";
    break;
  case "87654321":
    document.getElementById("pernam").innerHTML = "Praveen Patel";
    img.src = "https://i.ibb.co/8XwzNFP/Praveen.jpg";
    break;
  case "00000000":
   document.getElementById("pernam").innerHTML = "Anjali Kaushik";
   img.src = "https://i.ibb.co/1ssH5R0/anjali.jpg"
    break;
  case "11111111":
   document.getElementById("pernam").innerHTML = "Abhishek Nigga";
   img.src = "https://i.ibb.co/0yTQ7xB/Abhishek.jpg";
    break;
  case "22222222":
   document.getElementById("pernam").innerHTML = "Saurabh Shukla";
   img.src = "https://i.ibb.co/ChVrV7v/Shuklaan.jpg";
    break;
    case "33333333":
   document.getElementById("pernam").innerHTML = "Vipin Shukla";
   img.src = "https://i.ibb.co/1JHtprf/vipin.jpg";
    break;
  case "44444444":
   document.getElementById("pernam").innerHTML = "Soumya singh";
   img.src = "https://i.ibb.co/8PQCMdN/somu.jpg";
   break;
   case "55555555":
     document.getElementById("pernam").innerHTML = "Himanshu Dhingra";
     img.src = "https://i.ibb.co/MGrshBW/Himanshu.jpg";
     break;
     case "66666666":
       document.getElementById("pernam").innerHTML = "Mohan Tripathi";
       img.src = "https://i.ibb.co/DRXgynq/Mohana.jpg";
       break;
       case "77777777":
         document.getElementById("pernam").innerHTML = "Keshav Wadhwa";
         img.src = "https://i.ibb.co/y4vkCvT/Wadhwa.jpg";
         break;
         case "88888888":
           document.getElementById("pernam").innerHTML = "Tanu Shukla";
           img.src = "https://i.ibb.co/1dpYCSt/Tanu.jpg";
           break;
         case "99999999":
           document.getElementById("pernam").innerHTML = "Saurabh Tripathi";
           img.src = "https://i.ibb.co/QKxdR1T/Rishu.jpg";
           break;
           default:
             rol.style.background = "red";
             break;
            }
            document.querySelector(".welc").classList.remove("open");
          }
          //end here
          
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz");
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count);
    queCounter(que_numb);
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue);
    startTimerLine(widthValue);
    timeText.textContent = "Time Left";
    next_btn.classList.remove("show");
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
  const conf = window.confirm("Thankyou For Participating.");
  if(conf == true){
    window.location.replace("https://www.google.co.in/")}
    else{return false;};
    
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
console.table({Coder:"Rishabh Tripathi", Contact:"Rishabhtripathi2001@rediffmail.com"});

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ 
        que_count++; 
        que_numb++;
        showQuetions(que_count);
        queCounter(que_numb); 
        clearInterval(counter); 
        clearInterval(counterLine); 
                startTimer(timeValue); 
        startTimerLine(widthValue);
        timeText.textContent = "Time Left"; 
        next_btn.classList.remove("show"); 
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';


function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; 
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length; 
    
    if(userAns == correcAns){ 
        userScore += 1; 
        answer.classList.add("correct");
        answer.insertAdjacentHTML("beforeend", tickIconTag); 
    }else{
        answer.classList.add("incorrect"); 
        answer.insertAdjacentHTML("beforeend", crossIconTag);


        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ 
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag);
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show"); 
}

function showResult(){
    info_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 5){ // if user scored more than 3
        let scoreTag = '<span> please take screenshot of this page and congrats! 🎉,<p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  
    }
    else if(userScore > 3){ // if user scored more than 1
        let scoreTag = '<span> please take screenshot of this page and its okay 😎,<p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and Poor Stupid you 😐,<p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; 
        time--;
        if(time < 9){ 
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; 
        }
        if(time < 0){
            clearInterval(counter); //clear counter
            timeText.textContent = "Time Off"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer;
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); 
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); 
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); 
            }
            next_btn.classList.add("show");
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; 
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}

//timer and anti cheat functions are here


const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "green"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("ppa").innerHTML = `
<div class="adhr-samay">
  <svg class="adhr-samay__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="adhr-samay__circle">
      <circle class="adhr-samay__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="adhr-samay-path-remaining"
        stroke-dasharray="283"
        class="adhr-samay__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="adhr-samay-label" class="adhr-samay__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;

var ntim = shuruTimer();

function onTimesUp() {
  const theme = document.getElementById("theme");
  function play() {
    theme.muted = true;
    theme.play();
    theme.muted = false;
    theme.play();
  }
  play();
  clearInterval(timerInterval);
  setTimeout(() => {
    location.replace("https://www.google.co.in/");    
  }, 6000);
 
}

function shuruTimer() {
  timerInterval = setInterval(() => {
    timePassed = timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("adhr-samay-label").innerHTML = formatTime(
      timeLeft
    );
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  return `${minutes}:${seconds}`;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("adhr-samay-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("adhr-samay-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("adhr-samay-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("adhr-samay-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("adhr-samay-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

pvtTme=()=>{
  clearInterval(timerInterval);
  document.getElementById("end").style.visibility = "hidden";
}

myFunction=(e)=>{
  clearInterval(timeLeft);
  clearInterval(timePassed);
  shuruTimer();
  document.getElementById("end").style.visibility = "visible";
}


document.addEventListener("visibilitychange", function() {
      if (document.visibilityState === 'visible') {
          document.write("This Programme Doesn't Exists, Turning of The Window...")
          setTimeout(() => {
              location.replace("https://www.google.co.in/");
            }, 2500);
          } else{
            document.title = "Page Doesn't exists!!";
            const audio = document.getElementById("audio");
            function play() {
              audio.muted = true;
              audio.play();
              audio.muted = false;
              audio.play();
            }
            play();
          }
  });