
//Menu bar stuff
const button = document.getElementById('toggle');
const menubar = document.querySelector('.menu-bar');
const user = document.getElementById('user');

button.onclick = function () {
    menubar.classList.toggle('close');
};
window.addEventListener('load', (event) => {
    menubar.classList.toggle('close', window.matchMedia('(min-width:801px) and (max-width:1200px)').matches);
    user.classList.toggle('hidden', window.matchMedia('(min-width:900px)').matches);

});
window.addEventListener('resize', () => {
    menubar.classList.toggle('close', window.matchMedia('(min-width:801px) and (max-width:1200px)').matches);
        user.classList.toggle('hidden', window.matchMedia('(min-width:900px)').matches);

});



