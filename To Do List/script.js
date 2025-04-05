const input = document.getElementById("inputBox");
const addbtns = document.getElementById("addbtn");
const todolist= document.getElementById("todolist")
 

const addTodo=()=>{
    const inputText =inputBox.value.trim();
    if(inputText.length<=0){
        alert("Yout must write something in your To Do");
        return false;
    }
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText=inputText;
    li.appendChild(p);

    
    const editBtn=document.createElement("button")
    editBtn.innerText="Edit";
    editBtn.classList.add("btn","editbtn")
    li.appendChild(editBtn);


//creater delete button
    const deleteBtn=document.createElement("button")
        deleteBtn.innerText="Remove"
        deleteBtn.classList.add("btn","deletebtn")
        li.appendChild(deleteBtn);

    todolist.appendChild(li)
    inputBox.value ="";
}

const updateTodo = (e)=>{
    console.log(e.target);
    
}
addbtns.addEventListener("click",addTodo);
todolist.addEventListener("click",updateTodo)