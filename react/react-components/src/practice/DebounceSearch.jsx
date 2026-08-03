import { useState,useEffect} from "react"

export default function DebounceSearch(){
const [value,setValue]=useState("");
const [debouncedValue,setDebouncedValue]=useState("")
useEffect(()=>{

    const timer=setTimeout(()=>{
setDebouncedValue(value)
    },500)
return ()=>{
 clearTimeout(timer)
}
   

},[value])

function handleChange(e){
    
setValue(e.target.value)


}
return (
<>
<input onChange={handleChange} type="search" value={value} />
<p>You searched for: {debouncedValue}</p>
</>

)
}