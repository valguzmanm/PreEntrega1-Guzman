import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Item = ({ producto }) => {
  return (
    <Card style={{ width: '30re', padding:'1rem' }}>
      <Card.Img variant="top" src={producto.imagen} alt={producto.titulo} />
      <Card.Body>
        <Card.Title>{producto.titulo}</Card.Title>
        <Card.Text>
          Precio: ${producto.precio}
          <br />
          Categoría: {producto.categoria}
        </Card.Text>
        <Button variant="dark" href={`/item/${producto.id}`}>Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default Item;
