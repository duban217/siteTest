const nav=document.querySelector('nav');
const toggler=document.querySelector('.toggler');

toggler.addEventListener('click', navToggle);
function navToggle(){
    nav.classList.toggle('active');
    toggler.classList.toggle('active');
}