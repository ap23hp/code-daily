import { useState,useEffect } from "react"

export function UserCard({name,email}){
    

    return (
        <> 
<h1>{name}</h1>
<p>{email}</p>
        <button>Mark favourite</button>
        </>
    )
}