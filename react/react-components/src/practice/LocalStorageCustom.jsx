import { useState,useEffect } from "react"
export default function useLocalStorageCustomHook(key,initialValue){
const [value,setValue]=useState(
     localStorage.getItem(key) !== null ?localStorage.getItem(key) : initialValue
)
useEffect(()=>{
localStorage.setItem(key,value)
},[value])

return [value,setValue]

}