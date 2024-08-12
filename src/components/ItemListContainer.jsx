import { useEffect, useState } from "react";
import { pedirProductos } from "../helpers/pedirProductos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;
    
    useEffect(() => {
      pedirProductos()
      .then((res) => {
        setProductos(res)
      }
    ) 
    }, [])
    

  return (
    <div>
      
      <ItemList productos = {productos}/>
    </div>
  )
}

export default ItemListContainer
