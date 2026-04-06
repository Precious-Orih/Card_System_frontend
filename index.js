
//Menu bar stuff
const button = document.getElementById('toggle');
const menubar = document.querySelector('.menu-bar');

button.onclick = function () {
    menubar.classList.toggle('close');
};
window.addEventListener('load', (event) => {
    menubar.classList.toggle('close', window.matchMedia('(min-width:769px) and (max-width:1024px)').matches);
});

window.addEventListener('resize', () => {
    menubar.classList.toggle('close', window.matchMedia('(min-width:769px) and (max-width:1024px)').matches);
});

// rhruehfi