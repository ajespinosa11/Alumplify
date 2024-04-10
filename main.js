// const slider = document.querySelector('.slider');
// const carousel = document.querySelector('.carousel');

// var sectionIndex = 0;

// function reset(){
//     for (var i = 0; i < slider.children.length; i++){
//         slider.children[i].style.opacity = 0;
//         slider.children[i].style.zIndex = 0;
//     }
// } //fade effect

// var intervalId = 0;

// function startShow(){
//     intervalId = setInterval(function(){
//         reset();
//         sectionIndex = sectionIndex < 4 ? sectionIndex + 1 : 0;
//         slider.children[sectionIndex].style.zIndex = 1;
//         slider.children[sectionIndex].style.opacity = 1;
//     }, 5000);
// } //auto-slideshow

// startShow();

// carousel.addEventListener('mouseover', function(){
//     clearInterval(intervalId);
// });

// carousel.addEventListener('mouseout', function(){
//     startShow();
// });
