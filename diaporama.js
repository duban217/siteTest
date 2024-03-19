var photos=document.getElementsByClassName('photos');
var photoAffichee=0;
function changerImage(){
    photos[photoAffichee].classList.remove('visible');
    photoAffichee=(photoAffichee+1)%photos.length;
    photos[photoAffichee].classList.add('visible');
}
photos[photoAffichee].classList.add('visible');
document.getElementById('next').onclick=changerImage;
changerImage();