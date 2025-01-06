
let rightArrow1 = document.querySelector(".fa-arrow-right1")
let rightArrow = document.querySelector(".fa-arrow-right")
rightArrow1.addEventListener("mouseover", (event)=>{
    rightArrow.style.marginLeft = `calc(100% - 2vw)`
})
rightArrow1.addEventListener("mouseleave", (event)=>{
    rightArrow.style.marginLeft = `calc(0%)`
})


const parentElement = document.querySelector('.fa-arrow-left1');

parentElement.addEventListener('mouseenter', function() {
    parentElement.classList.add('hovered');
});

parentElement.addEventListener('mouseleave', function() {
    parentElement.classList.remove('hovered');
});
