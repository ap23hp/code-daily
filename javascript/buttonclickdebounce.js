const btn=document.querySelector(".btn");
function debounce(fn,delay){
    let timer;
   
    return function(...args){
         clearTimeout(timer)
    setTimeout(()=>{
fn(...args)
    },delay)
    }

}

function handleClick(e){
    console.log("Button clicked!")
}
btn.addEventListener("click",debounce(handleClick,300))

