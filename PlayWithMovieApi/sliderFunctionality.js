let rightArrowr = document.querySelector(".fa-arrow-right1");
let leftArrowl = document.querySelector(".fa-arrow-left1");
let img2 = document.querySelectorAll("img");
let count = 0;

leftArrowl.addEventListener("click", (event) => {
  if(count < -2000){
    count = 1500
    
  } if(count === 1500){
    rightArrowr.classList.add("active")
  }
  count -= 1500;
  img2.forEach((val) => {
    val.style.transform = `translateX(${count}px)`;
  });
  if(count < 0){
    rightArrowr.classList.remove("active")
    }
   
  console.log(count)
});

rightArrowr.addEventListener("click", () => {
  count += 1500;
  img2.forEach((val) => {
    val.style.transform = `translateX(${count}px)`;
  });
  if(count == 0){
    rightArrowr.classList.add("active")
    }
    console.log(count)
});

