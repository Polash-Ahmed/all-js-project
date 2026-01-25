const counterElement = document.getElementById('counter')
const plusBtn = document.getElementById('plusBtn')
const minusBtn = document.getElementById('minusBtn')

let counter = 0

const updateBtn = (value)=>{
   counter = counter + value
  counterElement.textContent = counter

  if(counter>=10){
    plusBtn.setAttribute('disabled',true)
  }
  else{
    plusBtn.removeAttribute('disabled',false)
  }

//decriment button

  counterElement.textContent = counter
  if(counter<=0){
    minusBtn.setAttribute('disabled',true)
  }
  else{
    minusBtn.removeAttribute('disabled',false)
  }
}

plusBtn.addEventListener('click', () => {
updateBtn(1)
})

minusBtn.addEventListener('click', () => {
updateBtn(-1)
})


// html code

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        display: flex;
        justify-content: center; /* horizontal */
        align-items: center; /* vertical */
        height: 100vh;
        gap: 20px;
      }
      button{
        font-size: 18px;
        padding: 10px 20px;
        margin: 10px;
      }
      button:disabled{
        opacity: 0.5;
        cursor: not-allowed;
      }
    </style>
  </head>
  <body>

   <div class="container">
    <h3 id="counter">0</h3>
    <button id="plusBtn">+</button>
    <button id="minusBtn">-</button>
   </div>

    <script src="/script.js"></script>
  </body>
</html>
