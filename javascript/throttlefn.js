
function throttle(fn, limit){
    let canRun=true;

return function(...args){
if(canRun){
    fn(...args)
    canRun=false
    setTimeout(()=>{
        canRun=true
    },limit)
}
}
}

function handleScroll(){
    console.log(window.scrollY);
}

window.addEventListener('scroll', throttle(handleScroll),500)