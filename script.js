const menuItemsDropDown = document.querySelectorAll('.menu-item-dropdown');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');
const menuItemStatic = document.querySelectorAll('.menu-item-static');
const sidebarBtn = document.getElementById('sidebar-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');
const palabras = ["Mecanica","Plomeria","Refrigeracion", "Computacion", "Electricidad","Celulares", "Linea Blanca", "Fumigacion"];


darkModeBtn.addEventListener('click',() =>{
    document.body.classList.toggle('dark-mode');
})

sidebarBtn.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-hidden')
})



menuBtn.addEventListener('click',()=>{
    sidebar.classList.toggle('minimize');
})

menuItemsDropDown.forEach((menuItem) => {
    menuItem.addEventListener('click', () => {
        const subMenu = menuItem.querySelector('.sub-menu');
        menuItem.classList.toggle('sub-menu-toggle');

        if (subMenu) {
            const isActive = menuItem.classList.contains('sub-menu-toggle');

            if (isActive) {
                subMenu.style.height = `${subMenu.scrollHeight + 6}px`;
                subMenu.style.padding = '0.2rem 0';
            } else {
                subMenu.style.height = '0';
                subMenu.style.padding = '0';
            }
        }
        menuItemsDropDown.forEach((item) => {
            if (item !== menuItem) {
                const otherSubMenu = item.querySelector('.sub-menu');
                if (otherSubMenu) {
                    item.classList.remove('sub-menu-toggle');
                    otherSubMenu.style.height = '0';
                    otherSubMenu.style.padding = '0';
                }                
            }
        });
    });
});

menuItemStatic.forEach((menuItem) => {

    if(sidebar.classList.contains('minimize')) return;

    menuItem.addEventListener('mouseenter', () => {
        menuItemsDropDown.forEach((item) => {
            const otherSubMenu = item.querySelector('.sub-menu');
            if (otherSubMenu) {
                item.classList.remove('sub-menu-toggle');
                otherSubMenu.style.height = '0';
                otherSubMenu.style.padding = '0';
            }      
        });
    });
});

function checkWindowsSize(){
    sidebar.classList.remove('minimize');    
}
checkWindowsSize();
window.addEventListener('resize',checkWindowsSize);


// Cambio de palabra
let index = 0;

function cambiarPalabra() {
    const palabraElement = document.getElementById("palabra");
    palabraElement.textContent = palabras[index];
    index = (index + 1) % palabras.length;
}
setInterval(cambiarPalabra, 1100);
