

function SharedState({count,onClick}){
   
return (
    <>
    <h1>Hello counter</h1>
    <button onClick={onClick}>Click Me! I am a button - {count}</button>
    </>
)
}

export default SharedState