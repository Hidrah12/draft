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

let targetTask = document.getElementsByClassName('targetTask') 
Array.from(targetTask).map(task => {
    task.addEventListener('click', e => {
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