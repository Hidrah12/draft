"use strict";
const createTaskPanel = document.getElementById('taskPanel');
let buttonShowSidePanel = document.getElementById('btnShowSidePanel');
buttonShowSidePanel === null || buttonShowSidePanel === void 0 ? void 0 : buttonShowSidePanel.addEventListener('click', (e) => {
    let sidePanel = document.getElementsByClassName('sidePanel');
    if (sidePanel) {
        Array.from(sidePanel).map(panel => {
            if (panel.classList.toString().includes('active-side-panel')) {
                panel.classList.remove('active-side-panel');
            }
            else {
                panel.classList.add('active-side-panel');
            }
        });
    }
    e.preventDefault();
});
let btnCreateTask = document.getElementsByClassName('btnCreateTask');
Array.from(btnCreateTask).map(btn => {
    btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', (e) => {
        if (createTaskPanel) {
            if (createTaskPanel.classList.toString().includes('invisible')) {
                createTaskPanel.classList.replace('invisible', 'visible');
            }
            else {
                createTaskPanel.classList.add('invisible');
            }
        }
        e.preventDefault();
    });
});
let btnCloseTaskPanel = document.getElementById('btnCloseTaskPanel');
btnCloseTaskPanel === null || btnCloseTaskPanel === void 0 ? void 0 : btnCloseTaskPanel.addEventListener('click', e => {
    if (createTaskPanel) {
        if (createTaskPanel.classList.toString().includes('visible')) {
            createTaskPanel.classList.replace('visible', 'invisible');
        }
    }
    e.preventDefault();
});
let btnEditTask = document.getElementsByClassName('btnEditTask');
Array.from(btnEditTask).map(btn => {
    btn.addEventListener('click', e => {
        if (createTaskPanel) {
            if (createTaskPanel.classList.toString().includes('invisible')) {
                createTaskPanel.classList.replace('invisible', 'visible');
            }
            else {
                createTaskPanel.classList.replace('visible', 'invisible');
            }
        }
        e.preventDefault();
    });
});
function updateTaskData(token, id) {
    setInterval(function () {
        let task = document.getElementById(`task_${id}`);
        if (task) {
            task.remove();
            if (token) {
                fetch(`/api/task/update/${id}/`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRFToken': token,
                    },
                    body: JSON.stringify({
                        done: true,
                    })
                })
                    .then(response => {
                    if (!response.ok) {
                        throw new Error("Error en la solucitud PUT");
                    }
                    return response.json();
                })
                    .catch(err => {
                    console.error("Error: ", err);
                });
            }
        }
        location.reload();
    }, 5000);
}
let btnDoneTask = document.getElementsByClassName("btnDoneTask");
Array.from(btnDoneTask).map((btn) => {
    btn.addEventListener("click", (e) => {
        let id = btn.getAttribute("data-btn-id");
        let inputElement = document.querySelector("input[name='csrfmiddlewaretoken']");
        let token = inputElement === null || inputElement === void 0 ? void 0 : inputElement.value;
        let taskTitle = document.getElementById(`title_${id}`);
        if (taskTitle && token && id) {
            taskTitle.classList.add("line-through");
            updateTaskData(token, id);
        }
        e.preventDefault();
    });
});
