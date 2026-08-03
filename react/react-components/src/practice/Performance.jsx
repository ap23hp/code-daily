
import { useState, useEffect,memo,useCallback } from "react"


export default function Performance(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("")
    const handleClick=useCallback(function onButtonClick(){
console.log("Child button clicked")
    },[])

    return (
        <>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}>Increase count</button>
        <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
        <ChildComponent onButtonClick={handleClick}/>
        </>
    )
}

const ChildComponent=memo(function ChildOfPerformance({onButtonClick}){
    console.log("Child rendered");
    return (
    <button onClick={onButtonClick}>on-button-click-child</button>
    )
})