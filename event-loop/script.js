//sync vs async
console.log("logging frist")
setTimeout(()=>{
console.log("logging inside setTimeout with 0ms")
},0)
console.log("logging outside setTimeout with 0ms")

// 1. console.log("first") → runs immediately
// 2. setTimeout registered in Web APIs
// 3. console.log("outside") → runs immediately
// 4. Call stack becomes empty
// 5. Event loop moves setTimeout callback to queue
// 6. timeout callback executes
//0ms timeout does not mean immediate execution.It means:run after the call stack is empty

Promise.resolve().then(()=>{
    console.log("inside promise")
})

//JavaScript has two queues.Microtask Queue (Higher priority)Contains:
// Promises
// await
// MutationObserver
// second is Task Queue (Lower priority)
// Contains:
// setTimeout
// setInterval
// DOM events
checkAsync()
 async function checkAsync(){
console.log("logging inside async function")
const response= await fetch("")
console.log("logging after await")
}

console.log("outsode async function")
//When JS hits await:
// pause function
// schedule rest as microtask
// continue running other code