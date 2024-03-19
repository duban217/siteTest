var nav=document.querySelector('nav');
var toggler=document.getElementById('toggler');

function toggleNav(){
    nav.classList.toggle('active');
    toggler.classList.toggle('active');
}
toggler.onclick=toggleNav;
toggleNav();
