export default function ShoppingCart({items}){

let tableRows=items.map((row)=>{
    return  <tr className="cart-row"  key={row.id}>
                    <td><img   className="product-thumb" 
                    src={row.imageSrc} alt={row.imageAlt} /></td>
                       <td>{row.title}</td>
                          <td>{row.price}</td>
                </tr>
})
    return (
        <table className="shopping-cart">
            <thead>
                <tr>
                    <th></th>
                           <th>Title</th>
                                  <th>Price</th>
                </tr>
         
            </thead>
            <tbody>
               {tableRows}
            </tbody>
        </table>
    )
}