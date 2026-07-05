const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.nav-menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})

var i=0;
    var images=[];
    var time = 2500;
    images[0] = 'gs_kamabare_certification_teachers.jpg';
    images[1] = 'gs_kamabare_Mass.jpg';
    images[2] = 'gs_kamabare_vision.jpg';
    images[3] = 'gs_kamabare_mce.jpg';
    images[4] = 'gs_kamabare_certification.jpg';
    images[5] = 'gs_kamabare_assembly.jpg';
    images[6] = 'gs_kamabare_group.jpg';
    images[7] = 'gs_kamabare_olevel.jpg';
    images[8] = 'gs_kamabare_test.jpg';

    function changeImg(){
        document.slide.src = images[i];

        if(i < images.length - 1){
            i++;
        } else {
            i=0;
        }

        setTimeout("changeImg()",time);
    }

    window.onload = changeImg;