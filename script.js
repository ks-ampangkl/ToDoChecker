

const addtask = document.getElementById("button");
const taskspace = document.getElementById("incomplete-tasks");
const taskspace2 = document.getElementById("complete-tasks");

const name = document.getElementById("name");
const desc = document.getElementById("desc");

function CreateTasks(){
    let first = document.createElement("div");
    first.classList.add("tasks");
    taskspace.append(first);

    const title = document.createElement("h5");
    const content = document.createElement("p");
    let complete = document.createElement("button");
    complete.classList.add("done");
    complete.addEventListener("click", MoveTasks);
    first.appendChild(title);

    first.appendChild(content);
    first.appendChild(complete);
    complete.textContent = "Done";

    title.textContent = name.value;
    content.textContent = desc.value;

    name.value = "";
    desc.value = "";
    

    function MoveTasks(){
        taskspace2.appendChild(first);
        complete.textContent = "Completed";
        complete.style.backgroundColor = "lightgreen";
        complete.style.color = "black";
        complete.disabled = true;

    }
    
}


// function MoveTasks(){
//     // so i gotta move the objects
//     let moved = document.createElement("div");
//     taskspace2.appendChild(moved);


//     let title2 = document.createElement("h5");
//     let content2 = document.createElement("p");

//     moved.classList.add("tasks");

//     moved.appendChild(title2);
//     moved.appendChild(content2);

//     title2.textContent = title.value;
//     content2.textContent = content.value;

    
    
// }
addtask.addEventListener("click",CreateTasks);




