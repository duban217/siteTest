const nav=document.querySelector('nav');
const toggle=document.getElementById('toggle');

function toggleNav(){
    nav.classList.toggle('active');
}
toggle.addEventListener('click', toggleNav);
