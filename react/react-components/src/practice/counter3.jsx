import {useState} from 'react';

export default function Bigcounter(){
    const [count,setCount]=useState(0);

    return (
        <>
        count : {count}
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count > 0 ? count-1 : 0)}>Decrement</button>
        <button onClick={()=>setCount(0)}>reset</button>
        </>
    )
}