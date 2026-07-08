

function debounce(fn,delay){
let timer;
return function(...args){
    clearTimeout(timer)
  timer= setTimeout(()=>{
fn(...args);
    },delay);
}
}

const debounceHello=debounce(()=>console.log("hello"),1000)
debounceHello();
debounceHello();
debounceHello();
debounceHello();

let input=document.querySelector("#search");
input.addEventListener('input',debounce((e)=>console.log("seraching for..." + e.target.value),500))
