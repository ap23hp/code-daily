export default function RedButton({children,color,borderColor}){
return (
    <button style={{backgroundColor:'white', color:color,borderColor:borderColor}}>    {children}</button>
)
}