import React from 'react'
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Link to={`/item/${producto.id}`}>
          <Button variant="dark">Comprar</Button>
        </Link>
      </Card.Body>
    </Card>
  )
}

export default Item;
