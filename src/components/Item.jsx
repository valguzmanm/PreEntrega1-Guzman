import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
  return (
    <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
      <Card className="card-item mx-2 mb-3">
        <Card.Title><strong>{producto.titulo}</strong></Card.Title>
        <Card.Body>
        <Card.Img variant="top" src={producto.imagen} alt={producto.titulo} />
          <Card.Text>
            Categoría: {producto.categoria}
            <br />
            Precio: $ {producto.precio}
            <br />
            Contenido: {producto.contenido}
          </Card.Text>
          <Link to={`/item/${producto.id}`}>
            <Button variant="dark">Comprar</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Item;
