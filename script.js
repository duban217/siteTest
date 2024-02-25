    var img=document.getElementsByClassName('diapoImg');
    var imgVisible=0;

function changerImage(){
        img[imgVisible].classList.remove('visible');
        imgVisible=(imgVisible+1)%img.length;
        img[imgVisible].classList.add('visible');
    }
    img[0].classList.add('visible');
document.getElementById('suivant').onclick=changerImage;
changerImage();
