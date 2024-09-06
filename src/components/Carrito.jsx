import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';

export const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

  return (
    <div className="container centrar">
        <div>
            <h1 className="main-title mt-4 mb-6">Detalles de tu compra</h1>

            {carrito.map((prod) => (
                <div  key={prod.id} className="product-container m-auto"> 
                
                    <h3 className="letra"> Producto: {prod.titulo} {prod.contenido} </h3>
                    <hr />
                    <p className="letra">Precio unitario: ${prod.precio}</p>
                    <hr />
                    <p className="letra">Precio total: ${prod.precio * prod.cantidad}</p>
                    <hr />
                    <p className="letra">Cantidad: {prod.cantidad}</p>
            
                </div>
            ))}

            {  
                carrito.length > 0 ? (
                <div className="action-container"> 
                     
                    <h2 className="letra mt-2 mb-3">Precio total: ${precioTotal()}</h2>
                    <div className="mb-4">
                    <Link to="/checkout"> 
                        <button className="botoncito">Finalizar compra</button>
                    </Link> 
                    <button className="botoncito" onClick={handleVaciar}>Vaciar</button>
                    </div>
                </div>
                ) : (
                    
                <h2 className="letra fs-4 mt-5">El carrito está vacío ☹</h2>
                )
            }
        </div>
    </div>
  )
}

