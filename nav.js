const nav=document.querySelector('nav');
const toggler=document.getElementById('toggler');

function toggleNav(){
    nav.classList.toggle('active');
    toggler.classList.toggle('active');
}
toggler.addEventListener('click', toggleNav);