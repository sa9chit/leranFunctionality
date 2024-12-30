let BodyEl = document.querySelector("body");
BodyEl.addEventListener("mousemove", (event) => {
    let random = Math.random() * 50
  let spanCreate = document.createElement("span");
  BodyEl.appendChild(spanCreate);
  let posX = event.pageX;
  let posY = event.pageY;
  spanCreate.style.top = posY + "px"
  spanCreate.style.left = posX + "px"
  spanCreate.style.width = random + "px"
  spanCreate.style.height = random + "px"

  setTimeout(()=>{
    spanCreate.remove()
  },2000)
});
