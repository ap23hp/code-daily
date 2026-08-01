export default function Product({name,isOutOfStock}){
    return (
<p>{isOutOfStock ? `${name}(out of stock)`: name }</p>
    )
}

