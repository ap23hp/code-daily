import { useState } from "react";
export default function SearchFilter1(){
  const  [value,setvalue]=useState("")
    const names1=["Priya", "Karan", "Meera", "Vikram", "Fatima"];
    const result = names1.filter((item)=>{
    return item.toLowerCase().includes(value.toLowerCase())
    })
    function handleChange(e){
setvalue(e.target.value)
    }

    
    return (
<>
<input type="search" onChange={handleChange} value={value}/>
<ul>{result.map((item, index)=>{
return <li key={index}>{item}</li>
})}</ul>

</>
    )
}