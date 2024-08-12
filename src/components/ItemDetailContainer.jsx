import { useEffect, useState } from "react"
import { pedirItemId } from "../helpers/pedirProductos";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";


export const ItemDetailContainer = () => {

    const [item, setItem]= useState(null);
    const id = useParams().id;

    useEffect(() => {
  
      pedirItemId(Number(id))
        .then((res) => {
            setItem(res);
        })
      
    }, [id])  
    
    
  return (
    <div>
        {item && <ItemDetail item={item} />}
    </div>
  )
}


export default ItemDetailContainer