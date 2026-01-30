// html code
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do-List</title>
</head>
<body>

<div class="container">
  <h1>To-Do-List</h1>
  <input id="taskInput" type="text" placeholder="Add New Task">
  <button onClick="addTask()">Add</button>
  <button onclick="deleteTaskChecked()">Delete Checked</button>
  <ul id="taskList"></ul>
</div>

  <script src="script.js"></script>
</body>
</html>
// js code
function addTask () {
  const taskInput = document.getElementById('taskInput')
  const taskInputValue = taskInput.value.trim()


  if(taskInputValue !== ""){
    const taskList = document.getElementById('taskList')
    const li = document.createElement('li')
    li.innerHTML ='<input type="checkbox"/> '+ taskInputValue + ' <button onClick="deleteTask(this)" >delete</button>'
    taskList.appendChild(li)
    taskInput.value = ""
  }
  else{
    alert("enter a task")
  }
}

const deleteTask = (btn)=>{
const li = btn.parentNode
li.parentNode.removeChild(li)
}

const deleteTaskChecked=()=>{
  // const list = document.getElementById("taskList")
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
  checkBoxes.forEach(checkbox=>{
    const li = checkbox.parentNode
    li.parentNode.removeChild(li)
  })
}

