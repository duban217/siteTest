var photos=document.getElementsByClassName('photos');
var next=document.getElementById('next');
var photoVisible=0;

function changerPhoto(){
photos[photoVisible].classList.remove('visible');
photoVisible=(photoVisible+1)%photos.length;
photos[photoVisible].classList.add('visible');
}
photos[photoVisible].classList.add('visible');
next.onclick=changerPhoto;
changerPhoto();