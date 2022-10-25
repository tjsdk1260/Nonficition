// const goTop = document.querySelector('.go-top');
// goTop.addEventListener('click',function(){
//     window.scrollTo({
//         top:0,
//         left:0,
//         behavior:"smooth"
//     });
// });
let slides = document.querySelector('.slide-container');
let slideImg = document.querySelector('.slide');
currentIdx = 0;
slideCount = slideImg.length;
let prev = document.querySelector('.pre');
let next = document.querySelector('.next');
slideWidth = 6000;
