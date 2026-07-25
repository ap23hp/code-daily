import Square from "./Square";
import { useState } from "react"
export default function Board(){

    const [value,setValue]=useState(Array(9).fill(null));
    function handleClick(i){
        console.log("click")
        const newSquares=value.slice()

   newSquares[i]="X"
   setValue(newSquares)
    }
  return (
    <>
      <div className="board-row">
        {value.slice(0,3).map((item,index)=>{
     
   return <Square key={index} value={item} onClick={()=>handleClick(index)}/>
        

        })
        }
     

      </div>
      <div className="board-row">
           {value.slice(3,6).map((item,index)=>{
     
   return <Square key={index+3} value={item} onClick={()=>handleClick(index+3)}/>
        

        })
        }
          </div>
      <div className="board-row">
            {value.slice(6,9).map((item,index)=>{
     
   return <Square key={index+6} value={item} onClick={()=>handleClick(index+6)}/>
        

        })
        }
      </div>
    </>
  );
}

