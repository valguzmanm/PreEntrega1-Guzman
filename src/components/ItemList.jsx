import Item from "./Item"

const ItemList = ( {productos} ) => {

  return (
    <div className="container titulo">
    <h2>Productos</h2>
        <div className="productos">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList
