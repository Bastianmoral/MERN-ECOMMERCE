import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Alert, Button } from "react-bootstrap";

const AddedToCartMessageComponent = () => {
  const [show, setShow] = useState(true);
  return (
    <Alert
      show={show}
      variant="success"
      onClose={() => setShow(false)}
      dismissible
    >
      <Alert.Heading>El producto fue agregado al carrito!  </Alert.Heading>
      <p>
        <Button variant="success">Seguir comprando</Button>{" "}
        <Link to="/cart"><Button variant="danger">Ir al carrito</Button></Link>
      </p>
    </Alert>
  );
};

export default AddedToCartMessageComponent;