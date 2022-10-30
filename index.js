function openNav(){
    $('nav').toggleClass('open');
    $('.hamburger-menu').toggleClass('open');
    $('#nav-bg-top').toggleClass('open');
    $('#nav-bg-round').toggleClass('open');
};

let imgIdx = 0;
function prev(){
    if(imgIdx == 0){
        imgIdx = 5;
    }else{
        imgIdx -= 1;
    }
    $('.bestseller-img ul').css('left', -(100 * imgIdx)+'vh');
};
function next(){
    if(imgIdx == 5){
        imgIdx = 0;
    }else{
        imgIdx += 1;
    }
    $('.bestseller-img ul').css('left',-(100 * imgIdx)+'vh');
};

window.onscroll=()=>{
    if(window.scrollY>=1000){
        document.querySelector('.go-top').style.display='block';
    }else{
        document.querySelector('.go-top').style.display='none';
    }
};

const goTop = document.querySelector('.go-top');
goTop.addEventListener('click',function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


