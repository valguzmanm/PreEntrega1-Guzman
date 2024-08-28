import { useState } from "react";
import { IntemCount } from "./IntemCount"


export const ItemDetail = ({item}) => {
  

    //const { carrito, agregarAlCarrito } = useContext(CartContext);
    //console.log(carrito);

    const [cantidad, setCantidad] = useState (1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    const handleAgregar = () => {
      console.log({...item, cantidad})
    }

  return (
    <div className="container">
        <div className="producto-detalle">
            <img src={item.imagen} alt={item.titulo} />
            <div>
            <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Contenido Neto: {item.contenido}</p>
                <p className="categoria">Categoría: {item.categoria}</p>
                <p className="precio">${item.precio}</p>
                <IntemCount cantidad={cantidad} handleSumar={handleSumar} handleRestar={handleRestar} handleAgregar={handleAgregar}/>
            </div>
        </div>
    </div>
  )
}
