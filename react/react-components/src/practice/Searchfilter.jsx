import { useState } from "react";

export default  function SearchFilter(){
    const [value,setValue]=useState('')
    const names= ["Apra", "Rahul", "Sasha", "Aoi", "Henderson"];
const result =names.filter((item)=>{
return item.toLowerCase().includes(value.toLowerCase())

})
    function handleChange(e){
setValue(e.target.value)

    }
return (
    <>
    <input onChange={handleChange} type="search" value={value} ></input>
    <ul >
        {result.map((item,index)=>{
            return <li key={index}> {item}</li>
        })}
    </ul>
    </>
)
}