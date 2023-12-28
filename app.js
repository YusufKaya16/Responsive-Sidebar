const sidebar = document.querySelector('.sidebar');
const openCloseBtn = document.querySelector('.open-close-btn');
const toggleBtn = document.querySelector('.toggle-switch');

openCloseBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebarChangeClass');
})

toggleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('sidebarToggleBtn');
})