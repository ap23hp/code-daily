export default function Avatar({src,alt}){
    return (
       <button style={{
     
  width: 80,
  height: 80,
  padding: 2,
  border: `2px solid`,
  borderRadius: '1000px',
  outline: `2px solid white`,
  background: 'white',
  overflow: 'hidden',
       }}>
      <img style={{
         display: 'block',
  width: '100%',
  borderRadius: '1000px',
  // transition: `transform 500ms`,
   transform: `rotate(-25deg)`,
  transition: `transform 250ms`
      }}
        
        src={src}
        alt={alt}
      />
    </button>
    )
}