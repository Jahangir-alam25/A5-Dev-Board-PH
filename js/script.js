


document.getElementById("task-btn-1")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-1").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})
document.getElementById("task-btn-2")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-2").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})
document.getElementById("task-btn-3")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-3").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})
document.getElementById("task-btn-4")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-4").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})
document.getElementById("task-btn-5")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-5").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})
document.getElementById("task-btn-6")
.addEventListener("click", function (event) {
    alert("Board Updated Successfully");
    const taskNumber = document.getElementById("task-number").innerText;
    if (taskNumber<=0) {
        alert('congrates!!! You have completed all the current task');
        return;
    }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
          
            const taskTitle = document.getElementById("task-title-6").innerText;
            const div = document.createElement("div");
            div.classList.add("container");
            div.innerHTML = `
            <p>you have completed task ${taskTitle}  </p>
            
            `
            historyContainer.appendChild(div);
})

document.getElementById("clear-history-btn")
    .addEventListener("click", function (event) {
        const historyContainer = document.getElementById("history-container");
        historyContainer.classList.add("hidden");
    })



document.getElementById("discover-box")
.addEventListener("click", function (event) {
    window.location.href = "./index2.html"
})

function goHome() {
    window.location.href = "index.html";
}


let colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFD700", "#00FFFF"];
let i = 0;
document.getElementById("bg-theme-change")
.addEventListener("click", function (event) {

        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;  
})

let currentDate = new Date(); 
let formattedDate = currentDate.toLocaleDateString('en-Bn'); 
document.getElementById('current-date').innerText = formattedDate;





