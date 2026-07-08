// Create a Promise that resolves with "Success!" after 2 seconds.
// Then use .then() to log the result.

const promise=new Promise((resolve,reject)=>{
    const success=false;
    if(success){
        setTimeout(()=>{
resolve("Success!")
},2000)
    } else{
setTimeout(()=>{
reject("oops error occured!")
},2000)
    }

})

promise.then((result)=>{
console.log(result)
})

promise.catch((err)=>{
console.log(err)
})

