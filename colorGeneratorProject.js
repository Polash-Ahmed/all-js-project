// js code
const generateRGBColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgb(${r},${g},${b})`
}

const updateColor = () => {
  const color = generateRGBColor()
  const colorBox = document.getElementById('colorBox')
  const colorCode = document.getElementById('colorCode')
  colorBox.style.backgroundColor = color
  colorCode.innerText = color
} 

const copyColorCode = () => {
  const colorCode = document.getElementById('colorCode')
  const inputTag = document.createElement('input')
  document.body.appendChild(inputTag)
  inputTag.value = colorCode.innerText
  inputTag.select()
  document.execCommand('copy')
  document.body.removeChild(inputTag)
  alert('Color Copied To clipboard')
}
document.getElementById('copyButton').addEventListener('click', () => {
  copyColorCode()
})

function generateNewColorBtn() {
  updateColor()
}

// css code
body {
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}
#colorBox {
  width: 200px;
  height: 200px;
  border: 2px solid black;
  margin: 0 auto;
}

#copyButton{
    background-color: #2532a5;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}
#copyButton:hover{
    background-color:#3845bd ;
}

// html code

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>RGB Color Generator</h1>
    <div id="colorBox">
    </div>
    <p><span id="colorCode"></span></p>
    <button onclick="generateNewColorBtn()">Generate New Color</button><br><br>
    <button id="copyButton">Copy Color Code</button>

    <script src="/script.js"></script>
  </body>
</html>
