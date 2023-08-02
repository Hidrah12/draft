"use strict";
let buttonShowSidePanel = document.getElementById('btnShowSidePanel');
buttonShowSidePanel === null || buttonShowSidePanel === void 0 ? void 0 : buttonShowSidePanel.addEventListener('click', (e) => {
    let sidePanel = document.getElementById('sidePanel');
    console.log(sidePanel);
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
