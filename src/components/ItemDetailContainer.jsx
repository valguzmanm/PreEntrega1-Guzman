import { useEffect, useState } from "react"
import { pedirItemId } from "../helpers/pedirProductos";
import { ItemDetail } from "./ItemDetail";


export const ItemDetailContainer = ( {itemId} ) => {

    const [item, setItem]= useState(null);

    useEffect (() => {
      pedirItemId(itemId)
        .then((res) => {
            setItem(res);
        })
      
    }, [])  
    
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}


export default ItemDetailContainer