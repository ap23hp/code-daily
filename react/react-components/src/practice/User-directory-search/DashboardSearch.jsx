import { useState,useEffect } from "react"
import { UserCard } from "./UserCard";

export default function DashboardSearch(){
    const [userData,setUserData]=useState(null)
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);

    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
if(!res.ok){
throw new Error("Something went wrong")
}else{
    return res.json()
}
}).then((data)=>{

setUserData(data)
setLoading(false)
}).catch((err)=>{
console.log(err)
setLoading(false)
setError("something went wrong!!!!")
})
    },[])


    return (
        <>
        {loading ? <h1>Loading........</h1> : error ? <h1>Something went wrong</h1> :
userData.map((item,id)=>{
return  <UserCard key={item.id} name={item.name} email={item.email}/>

})
    }
        </>
    )
}