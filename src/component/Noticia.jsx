import React from "react";
import { Button, Card } from "react-bootstrap";

const Noticia = () => {
  return (
    <Card style={{ width: "15rem", height: "27rem" }} className="m-2">
      <Card.Img
        variant="top"
        src="https://miro.medium.com/v2/resize:fit:800/1*hFwwQAW45673VGKrMPE2qQ.png"
      />
      <Card.Body>
        <Card.Title>Titulo Noticia</Card.Title>
        <h6>Pais 🌍</h6>
        <Card.Text>Descripcion</Card.Text>
      </Card.Body>
      <Card.Footer className="text-center">
        <Button variant="warning">Ver Noticia</Button>
      </Card.Footer>
    </Card>
  );
};

export default Noticia;
