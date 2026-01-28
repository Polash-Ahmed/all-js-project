

<!DOCTYPE html>
<html>
<head>
  <title>Simple Todo List</title>
</head>
<body>

  <h2>My Todo List</h2>

  <input type="text" id="todoInput" placeholder="Enter a task">
  <button onclick="addTodo()">Add</button>

  <ul id="todoList"></ul>

<script>
  const input = document.getElementById("todoInput");
  const list = document.getElementById("todoList");

  function addTodo(){
    if(input.value === ""){
      alert("Please enter a task");
      return;
    }

    const li = document.createElement("li");
    li.innerText = input.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function(){
      li.remove();
    }

    li.appendChild(deleteBtn);
    list.appendChild(li);

    input.value = "";
  }
</script>

</body>
</html>
