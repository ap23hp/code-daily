const listContainer=document.querySelector(".listContainer")
const btn=document.querySelector(".btn-api")
btn.addEventListener("click", function(){
     listContainer.innerHTML=""
sendingRequestToApi()
})

async function sendingRequestToApi(){
const response= await fetch("https://jsonplaceholder.typicode.com/posts")
const data= await response.json()

data.slice(0,5).forEach((item)=>{
   
    const listItem=document.createElement("li")
listItem.textContent=item.title
listContainer.appendChild(listItem)

})


}