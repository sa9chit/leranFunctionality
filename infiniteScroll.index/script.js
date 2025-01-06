let bady = document.querySelector("body");
let skip = 0
var limit = 5
let pageCount = 1

let api = `https://dummyjson.com/quotes?limit=${limit}&skip=${skip}`;

async function data() {
  let getData = await fetch(api);
  let response = await getData.json();
  response.quotes.map((val,indx)=>{
    let htmlData = `<div class="content">
<div>
    <p>Data ${val.id}: ${val.quote}.</p>
    <p>Name: <span>${val.author}</span></p>
    <p>ID: <span>${val.id*20}</span></p>
</div>
</div> `

bady.insertAdjacentHTML("beforeend" , htmlData)
  })

}
data()
{
  /* <div class="content">
<div>
    <p>Data 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p>Name: <span>John Doe</span></p>
    <p>ID: <span>12345</span></p>
</div>
</div> */
}



window.addEventListener("scroll",(s)=>{
   const {scrollHeight ,scrollTop , clientHeight} = document.documentElement;
if(Math.ceil(scrollTop + clientHeight >= scrollHeight) ){
  DikhaoData()
}
})

function DikhaoData(){
setTimeout(()=>{
    data()
},300)
}


