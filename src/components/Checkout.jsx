import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


export const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
      const pedido = {
        cliente: data,
        productos: carrito,
        total: precioTotal()
      }
      console.log(pedido)
      
      const pedidosRef = collection(db, "pedidos");

      addDoc(pedidosRef, pedido)
          .then((doc) => {
              setPedidoId(doc.id);
              vaciarCarrito();
          })
  }

  if (pedidoId){
    return (
      <div className="container mt-5">
          <h1 className="main-title">Muchas gracias por tu compra :) </h1>
          <p className="main-title">Recuerda que nuestro alimento natural para mascotas debe conservarse <strong>congelado</strong> para mantener su <strong>frescura y calidad</strong>. Es lo mejor que puedes darle a tu peludito para que disfrute de una nutrición <strong>saludable y deliciosa</strong>. 🐾💕 <br />Tu número de pedido es: {pedidoId}</p>
      </div>
  )
  }

  return (
    <div className="container ">
      <h1 className="main-title">Finalizar compra</h1>
  
    <div className="container">
      <div className="m-auto registrate">
      <h2 className="main-title fs-4">Ingresa tus datos de envío</h2>
      <form className="formulario" onSubmit={handleSubmit(comprar)}>

          <input type="text" placeholder="Ingresa tu nombre completo" {...register("nombre")} />
          <input type="text" placeholder="Ingresa tu dirección (casa,apt...)" {...register("direccion")} />
          <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />
          <input type="phone" placeholder="Ingresa tu documento de identificación" {...register("documento")} />
           <div className="m-auto">
          <button className="enviar " type="submit">Comprar</button>

           </div>
      </form>
      </div>
  </div>

  </div>
)
}