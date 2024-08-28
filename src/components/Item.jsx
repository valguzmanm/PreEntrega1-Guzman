import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Item = ({ producto }) => {
  return (
    <Card style={{ width: '30re', padding:'1rem', textAlign:'center' }}>
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
  )
}

export default Item;
