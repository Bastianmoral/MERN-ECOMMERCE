import {
    Row,
    Col,
    Container,
    Form,
    Button
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import { useState } from "react";


  
  const AdminEditUserPage = () => {
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  
    const [validated, setValidated] = useState(false);
    return (
      <Container>
        <Row className="justify-content-md-center mt-5">
          <Col sm={1} md={1}>
            <Link className="btn btn-info my-3" to="/admin/products">
              Ir atrás
            </Link>
          </Col>
          <Col sm={6} md={6}>
            <h1>Editar usuario</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicFirstName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" required type="text" defaultValue="Nombre" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicLastName"
              >
                <Form.Label>Apellidos</Form.Label>
                <Form.Control
                  name="lastName"
                  required
                  type="text"
                  defaultValue="Apellidos"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control name="email" required type="email" defaultValue="ejemplo@correo.cl" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check name="isAdmin" type="checkbox" label="Seleccionar como administrador." />
              </Form.Group>

              <Button variant="primary" type="submit">
                Confirmar Edición
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default AdminEditUserPage;
  