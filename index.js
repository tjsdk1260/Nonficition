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

function giveFix() {
    $('.bestseller-img').css({
        "position": "fixed",
        "top": 0,
        "left": 0
    });
    $('.bestseller-list').css({
        "left": "50%"
    });
}

function removeFix() {
    $('.bestseller-img').css({
        "position": "relative"
    });
    $('.bestseller-list').css({
        "left": "auto"
    });
}

function addImgDown(value) {
    $('.bestseller-img').css({
        "top": value + "px"
    });
}


$(window).scroll(function(){
    const imgHeight = window.innerHeight;
    const listHeight = $('.bestseller-list').height();
    console.log(imgHeight, listHeight);

    let scrolls = $(this).scrollTop();
    if(imgHeight <= scrolls && scrolls <= listHeight){
        giveFix();
    }else if(listHeight <= scrolls && scrolls <= imgHeight+listHeight) {
        removeFix();
        addImgDown(listHeight - imgHeight);
    }
    else{
        removeFix();
    }
});

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


