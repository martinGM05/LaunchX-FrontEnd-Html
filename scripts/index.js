const iconoMenu = document.querySelector('.enlaceMenu');
const iconoMenu2 = document.querySelector('.enlaceMenu2');
const menu = document.querySelector('.opcionesMenu');
const enlaceSabores = document.querySelector('.enlaceSabores');
const enlaceAdornos = document.querySelector('.enlaceAdornos');
const enlacePedirPastel = document.querySelector('.enlacePedirPastel');
const enlaceAdmin = document.querySelector('.enlaceAdmin');



let click = 0;

iconoMenu.addEventListener('click', (e) => {
    scrollTo(0, 0);
    if (click == 0) {
        menu.style.display = 'block';
        click = 1;
    } else {

        menu.style.display = 'none';
        click = 0;
    }
});

iconoMenu2.addEventListener('click', (e) => {
    if (click == 0) {
        menu.style.display = 'block';
        click = 1;
    } else {

        menu.style.display = 'none';
        click = 0;
    }
});

enlaceSabores.addEventListener('click', (e) => {
    menu.style.display = 'none';
    click = 0;
});

enlaceAdornos.addEventListener('click', (e) => {
    menu.style.display = 'none';
    click = 0;
});

enlacePedirPastel.addEventListener('click', (e) => {
    menu.style.display = 'none';
    click = 0;
});

enlaceAdmin.addEventListener('click', (e) => {
    menu.style.display = 'none';
    click = 0;
});