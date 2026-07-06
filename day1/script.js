const darkModebtn=document.querySelector(".dark-mode-btn")
const changeTextButton=document.querySelector(".change-text");
const text=document.querySelector(".text");
const body = document.body;
const addPBtn=document.querySelector(".add-p-btn")
darkModebtn.addEventListener("click", function(){
   body.classList.toggle("dark-mode");

   if(body.classList.contains("dark-mode")){
       darkModebtn.textContent = "Light Mode";
   } else {
       darkModebtn.textContent = "Dark Mode";
   }
});
changeTextButton.addEventListener("click",function(){
text.textContent="JavaScript is controlling the DOM!";
})

addPBtn.addEventListener("click", function(){
    console.log("clicked")
   const para= document.createElement("p")
para.textContent = "New paragraph added dynamically!";
   body.appendChild(para)
})