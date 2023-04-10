import { Container, Row, Col, InputGroup, Button, Form, Spinner, Alert } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom"

const RegisterPage = () => {
  const [validated, setValidated] = useState(false);

  const onChange = () => {
    const password = document.querySelector("input[name=password]")
    const confirm = document.querySelector("input[name=confirmPassword]")
    if(confirm.value === password.value) {
      confirm.setCustomValidity("")
    } else {
      confirm.setCustomValidity("Passwords do not match")
    }
  }

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
          <h1>Registrate</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                name="name"
              />
                <Form.Control.Feedback type="invalid">
                    Por favor ingresa tu nombre
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>apellidos</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Apellidos"
              />
              <Form.Control.Feedback type="invalid"> Ingresa tu Apellido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="email@ejemplo.cl"
              />
              <Form.Control.Feedback type="invalid"> Ingresa un correo electrónico válido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Contraseña"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid"> Contraseña no válida</Form.Control.Feedback>
              <Form.Text className="text-muted">
                Contraseña tiene que tener mínimo 6 carácteres
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordRepeat">
              <Form.Label>Confirmar contraseña</Form.Label>
              <Form.Control
                name="confirmPassword"
                required
                type="password"
                placeholder="Confirmar contraseña"
                minLength={6}
                onChange={onChange}

              />
              <Form.Control.Feedback type="invalid">Ambas contraseñas deben ser iguales</Form.Control.Feedback>
            </Form.Group>
            <Row className="pb-2">
              <Col>
              Ya tienes cuenta ?  
              <Link to={"/login"}> Ingresa acá! </Link>
              </Col>
            </Row>


            <Button type="submit">
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Enviar</Button>
              <Alert className="mt-2" show={true} variant="danger">
                Correo electrónico ya registrado
              </Alert>
              <Alert show={true} variant="info">
                Usuario registrado exitosamente
              </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
