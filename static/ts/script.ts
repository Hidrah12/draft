let buttonShowSidePanel = document.getElementById('btnShowSidePanel')
buttonShowSidePanel?.addEventListener('click', (e) => {
    let sidePanel = document.getElementsByClassName('sidePanel')
    if (sidePanel) {
        Array.from(sidePanel).map(panel => {
            if (panel.classList.toString().includes('active-side-panel')) {
                panel.classList.remove('active-side-panel')
            } else {
                panel.classList.add('active-side-panel')
            }
        })
    }
    e.preventDefault()
})
let btnCreateTask = document.getElementById('btnCreateTask')
btnCreateTask?.addEventListener('click', (e) => {
    let createTaskPanel = document.getElementById('taskPanel') as HTMLDivElement | null
    if (createTaskPanel) {
        if (createTaskPanel.classList.toString().includes('invisible')) {
            createTaskPanel.classList.replace('invisible', 'visible')
        } else {
            createTaskPanel.classList.add('invisible')
        }
    }
    e.preventDefault()
})

let btnCloseTaskPanel = document.getElementById('btnCloseTaskPanel')
btnCloseTaskPanel?.addEventListener('click', e => {
    let createTaskPanel = document.getElementById('taskPanel') as HTMLDivElement | null
    if (createTaskPanel) {
        if (createTaskPanel.classList.toString().includes('visible')) {
            createTaskPanel.classList.replace('visible', 'invisible')
        } 
    }
    e.preventDefault()
})

let btnEditTask = document.getElementsByClassName('btnEditTask') 
Array.from(btnEditTask).map(btn => {
    btn.addEventListener('click', e => {
        let createTaskPanel = document.getElementById('taskPanel') as HTMLDivElement | null
        if (createTaskPanel) {
            if (createTaskPanel.classList.toString().includes('invisible')) {
                createTaskPanel.classList.replace('invisible', 'visible')
            } else {
                createTaskPanel.classList.replace('visible', 'invisible')
            }
        }
        e.preventDefault()
    })
})

let btnDoneTask = document.getElementsByClassName("btnDoneTask");
Array.from(btnDoneTask).map((btn) => {
    btn.addEventListener("click", (e) => {
        let id = btn.getAttribute("data-btn-id")
        let tokken = document.querySelector("input[name='csrfmiddlewaretoken']") as HTMLInputElement | null

        let taskTitle = document.getElementById(`title_${id}`);
        if (taskTitle) {
            taskTitle.classList.add("line-through");
            setInterval(function () {
                let task = document.getElementById(`task_${id}`);
                if (task) {
                    task.remove();
                    if (tokken) {
                        fetch(`/api/task/${id}/`, {
                            method: 'PUT',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-CSRFToken': tokken.value,
                            },
                            body: JSON.stringify(
                                {
                                    done: true,
                                }
                            )
                        })
                        .then(response => response.json())
                        .then(data => {
                            console.log(data)
                        })    
                    }
                }
                location.reload()
            }, 5000);
        }
        e.preventDefault();
    });
});