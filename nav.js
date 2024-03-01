const nav=document.querySelector('nav');
const toggle=document.getElementById('toggle');


function toggleNav(){
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}
toggle.onclick=toggleNav;
toggleNav();





