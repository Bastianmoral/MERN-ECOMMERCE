import { Container, Row, Col, InputGroup, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom"

const LoginPage = () => {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container>
      <Row className="mt-5 justify-content-md-center">
        <Col sm={6} md={6}>
          <h1>Inicia Sesión</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="email@ejemplo.cl"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Contraseña"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                name="doNotLogout"
                type="checkbox"
                label="No"
              />
            </Form.Group>

            <Row className="pb-2">
              <Col>
              No tienes una cuenta con nostros ?  
              <Link to={"/register"}> Registrate acá! </Link>
              </Col>
            </Row>


            <Button variant="primary" type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Iniciar Sesión</Button>
              <Alert className="mt-2" show={true} variant="danger">
                Nombre de usuario o contraseña incorrectos
              </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
