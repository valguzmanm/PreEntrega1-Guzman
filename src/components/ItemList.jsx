import Item from "./Item"
import { toCapital } from "../helpers/toCapital";


const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container titulo">
    <h2>{toCapital(titulo)}</h2>
        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList
