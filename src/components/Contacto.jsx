import { useForm } from "react-hook-form";

export const Contacto = () => {
  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
     
  }

return (

  <div className="container ">
      <h1 className="main-title">Contacto</h1>
  
    <div className="container">
      <div className="m-auto registrate">
      <h2 className="main-title">Registrate</h2>
      <form className="formulario" onSubmit={handleSubmit(enviar)}>

          <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
          <input type="email" placeholder="Ingresa tu e-mail" {...register("email")} />
          <input type="phone" placeholder="Ingresa tu teléfono" {...register("telefono")} />

           <div className="m-auto">
          <button className="enviar " type="submit">Enviar</button>

           </div>
      </form>
      </div>
  </div>

  </div>
)
}