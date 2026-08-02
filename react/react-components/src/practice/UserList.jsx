
import {useState, useEffect} from 'react';

export default function UserList(){
const [data, setData]=useState(null);
const [loading,setLoading]=useState(true);
const [error,setError]=useState(false);
useEffect(()=>{
const response=fetch("https://jsonplaceholder.typicode.com/users")
.then((res)=>
{if(!res.ok){
    throw new Error("Request failed"); 
}
return res.json();
})
  
.then((data)=>{
setData(data)
 setLoading(false)})
.catch((err)=>{
setError(true)
setLoading(false);
})

},[])


    return (
<>
{loading ? (
  <h1>Loading...</h1>
) : error ? (
  <h1>Something went wrong</h1>
) : (
  <ul>
    {data.map((item, index) => <li key={index}>{item.name}</li>)}
  </ul>
)}
</>
    )
}