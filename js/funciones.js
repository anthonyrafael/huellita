window.addEventListener("load",inicio);

function inicio(){
    document.getElementById('toggle-icon').addEventListener("click", mostrarMenu);
}

function mostrarMenu(){
    let menu = document.getElementById('menu');
    menu.classList.toggle("menu-on");
}