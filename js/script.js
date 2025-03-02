

function handleClick(buttonId) {
    
    const taskTitle = document.getElementById('task-title-' + buttonId.split('-')[2]);
    const historyText = taskTitle.innerText;
    alert("Board Updated Successfully");
            document.getElementById(buttonId).disabled = true;
            const taskNumber = document.getElementById("task-number").innerText;
            if (taskNumber <=1) {
                alert('congrates!!! You have completed all the current task');
                
            }
            const taskNumberDecrease = taskNumber - 1;
    
            document.getElementById("task-number").innerText = taskNumberDecrease;
    
            const totalTask = document.getElementById("total-task").innerText;
            const convertedTotalTask = parseInt(totalTask);
            const taskIncrease = convertedTotalTask + 1;
    
            document.getElementById("total-task").innerText = taskIncrease;
    
            const historyContainer = document.getElementById("history-container");
            historyContainer.classList.remove("hidden");
    
            
            const div = document.createElement("div");
    
            const timeNow = new Date().toLocaleTimeString();
                const p = document.createElement('p'); 
                const time = p.innerText = "Time: " + timeNow; 
                
            
            
            div.classList.add("container");
            div.innerHTML = `
                <p>you have completed task ${historyText} at:  ${time}  </p>
                
                `
            historyContainer.appendChild(div);
}


document.getElementById('task-btn-1')
.addEventListener('click', function() {
     handleClick('task-btn-1');
     });

document.getElementById('task-btn-2')
.addEventListener('click', function() {
     handleClick('task-btn-2');
     });

document.getElementById('task-btn-3')
.addEventListener('click', function() { 
    handleClick('task-btn-3');
 });

document.getElementById('task-btn-4')
.addEventListener('click', function() {
     handleClick('task-btn-4');
     });

document.getElementById('task-btn-5')
.addEventListener('click', function() {
     handleClick('task-btn-5');
     });

document.getElementById('task-btn-6')
.addEventListener('click', function() {
     handleClick('task-btn-6');
     });



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



document.getElementById("bg-theme-change")
    .addEventListener("click", function (event) {

        const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        document.body.style.backgroundColor = randomColor;
    })


const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'short' });
const year = currentDate.getFullYear();
document.getElementById('current-date').innerText = `${day} ${month} ${year}`;
