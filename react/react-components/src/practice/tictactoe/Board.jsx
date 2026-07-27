import Square from "./Square";
import { useState } from "react"
export default function Board(){

    const [value,setValue]=useState(Array(9).fill(null));
    const[isNext,setisNext]=useState(true)
    function handleClick(i){
        console.log("click")
            if (value[i]|| calculateWinner(value)) return
        const newSquares=value.slice()

  isNext ?  newSquares[i]="X" : newSquares[i]="O" 

   setValue(newSquares)
    setisNext(!isNext) 
    }
    const winner = calculateWinner(value);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isNext ? "X" : "O");
  }
  return (
    <>
    <div className="status">{status}</div>
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

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

function calculateWinner(value) {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];  // line ke teeno index nikale, jaise a=0, b=1, c=2

    if (
      value[a] &&                    // squares[a] null nahi hai (kuch value hai)
      value[a] === value[b] &&     // pehla aur doosra match kare
     value[a] === value[c]        // pehla aur teesra match kare
    ) {
      return value[a];  // winner mil gaya! "X" ya "O" return karo
    }
  }
  return null;  // poora loop chal gaya, koi winner nahi mila
}