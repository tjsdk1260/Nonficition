function openNav(){
    $('nav').toggleClass('open');
    $('#nav-bg').toggleClass('open');
    $('.hamburger-menu').toggleClass('open');
};

let imgIdx = 0;
function prev(){
    if(imgIdx == 0){
        imgIdx = 5;
    }else{
        imgIdx -= 1;
    }
    $('ul').css('left', -(100 * imgIdx)+'vh');
};
function next(){
    if(imgIdx == 5){
        imgIdx = 0;
    }else{
        imgIdx += 1;
    }
    $('ul').css('left',-(100 * imgIdx)+'vh');
};

// function closeNav(){
//     if($('nav').hasClass('open')){
//         $('nav').toggleClass('open');
//         $('#nav-bg').toggleClass('open');
//     }
    
// };

window.onscroll=()=>{
    if(window.scrollY>=100){
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


