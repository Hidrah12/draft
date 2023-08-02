"use strict";
let buttonShowSidePanel = document.getElementById('btnShowSidePanel');
buttonShowSidePanel === null || buttonShowSidePanel === void 0 ? void 0 : buttonShowSidePanel.addEventListener('click', (e) => {
    let sidePanel = document.getElementById('sidePanel');
    if (sidePanel) {
        if (sidePanel.classList.toString().includes('active-side-panel')) {
            sidePanel.classList.remove('active-side-panel');
        }
        else {
            sidePanel.classList.add('active-side-panel');
        }
    }
    e.preventDefault();
});
let btnCreateTask = document.getElementById('btnCreateTask');
btnCreateTask === null || btnCreateTask === void 0 ? void 0 : btnCreateTask.addEventListener('click', (e) => {
    let createTaskPanel = document.getElementById('taskPanel');
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
let btnCloseTaskPanel = document.getElementById('btnCloseTaskPanel');
btnCloseTaskPanel === null || btnCloseTaskPanel === void 0 ? void 0 : btnCloseTaskPanel.addEventListener('click', e => {
    let createTaskPanel = document.getElementById('taskPanel');
    if (createTaskPanel) {
        if (createTaskPanel.classList.toString().includes('visible')) {
            createTaskPanel.classList.replace('visible', 'invisible');
        }
    }
    e.preventDefault();
});
