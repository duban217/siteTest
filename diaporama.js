var photos=document.getElementsByClassName('photos');
var photoVisible=0;

function changerImage(){
    photos[photoVisible].classList.remove('visible');
    photoVisible=(photoVisible+1)%photos.length;
    photos[photoVisible].classList.add('visible');
}
photos[photoVisible].classList.add('visible');
document.getElementById('next').onclick=changerImage;
changerImage();