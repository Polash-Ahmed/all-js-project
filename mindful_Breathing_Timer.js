// html code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Breath Project</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <div class="container">
    <h1>Mindful Breathing Timer</h1>
    <div class="timer" id="timer">Breath In</div>
    <button id="startBtn">Start</button>
    <button id="stopBtn">Stop</button>
  <script src="/script.js"></script>
</body>
</html>

// css code
body{
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}
.container{
  text-align: center;
}
.timer{
  font-size: 22px;
  margin-bottom: 20px;
}
button{
  padding: 10px 20px;;
  margin: 5px;
  outline: none;
  font-size: 16px;
  cursor: pointer;
}

// javascript code

let timeLeft
let timerInterval
let isRunning = false;
const timerDisplay = document.getElementById('timer')
const startBtn = document.getElementById('startBtn')
const stopBtn = document.getElementById('stopBtn')

const startTimer = (duration) => {
  let timer = duration
  timerInterval = setInterval(() => {
    const minutes = parseInt(timer / 60, 10)
    const secounds = parseInt(timer % 60, 10)
    const displayMinuts = minutes < 10 ? '0' + minutes : minutes
    const displaySeconds = secounds < 10 ? '0' + secounds : secounds
    timerDisplay.textContent = displayMinuts + ':' + displaySeconds
    if (--timer < 0) {
      clearInterval(timerInterval)
      timerDisplay.textContent = 'Breath Out'
      setTimeout(() => {
        timerDisplay.textContent = 'Breath In'
        startTimer(timeLeft)
      }, 3000)
    }
  }, 1000)
}

const stopTimer = ()=>{
  clearInterval(timerInterval)
  timerDisplay.textContent = 'Breath In'
  isRunning = false
}

startBtn.addEventListener('click', () => {
if(!isRunning){
  timeLeft = 90
  startTimer(timeLeft)
  isRunning = true
}
})

stopBtn.addEventListener('click', () => {
stopTimer()
isRunning = false
})

