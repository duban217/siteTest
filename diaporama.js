var photo=document.getElementsByClassName('photo');
var next=document.getElementById('next');
var imageVisible=0;

function changerImage(){
    photo[imageVisible].classList.remove('visible');
imageVisible=(imageVisible+1) % photo.length;
photo[imageVisible].classList.add('visible');
}
photo[0].classList.add('visible');
next.onclick=changerImage;
changerImage();