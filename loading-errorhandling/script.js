const url = "https://jsonplaceholder.typicode.com/posts"

const loadingText = document.querySelector(".loading")
const listContainer = document.querySelector(".listContainer")

async function fetchApi(){

  try{

    loadingText.textContent = "Loading..."

    const response = await fetch(url)

    if(!response.ok){
      throw new Error("API failed")
    }

    const data = await response.json()

    loadingText.textContent = ""

    renderList(data)

  }
  catch(err){

    console.error(err)

    loadingText.textContent = "Something went wrong"

  }

}

function renderList(data){

  listContainer.innerHTML = ""

  data.forEach((item)=>{

    const listItem = document.createElement("li")

    listItem.textContent = item.title

    listContainer.appendChild(listItem)

  })

}

fetchApi()