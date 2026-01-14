import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
   let nextCount=count+1
  return (

    <button onClick={() =>{ setCount(nextCount);
      console.log(count)
    }
    }>
      Value: {count}
    </button>
  );
}