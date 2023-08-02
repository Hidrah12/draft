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