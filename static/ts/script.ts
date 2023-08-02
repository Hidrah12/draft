let buttonShowSidePanel = document.getElementById('btnShowSidePanel')
buttonShowSidePanel?.addEventListener('click', (e) => {
    let sidePanel = document.getElementById('sidePanel') as HTMLDivElement | null
    if (sidePanel) {
        if (sidePanel.classList.toString().includes('active-side-panel')){
            sidePanel.classList.remove('active-side-panel')
        } else {
            sidePanel.classList.add('active-side-panel')
        } 
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