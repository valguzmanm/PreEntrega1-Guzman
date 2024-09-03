import bag from '../assets/bag.png'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
export const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

    return (
        <div>
            <Link className="menu-link" to="/carrito">
                <img src={bag} height={24} />
                <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
      )
    }
