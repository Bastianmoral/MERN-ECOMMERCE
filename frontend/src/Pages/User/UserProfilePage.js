import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { useState } from "react";

const UserProfilePage = () => {
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
          <h1>Perfil de usuario</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                defaultValue="Juan"
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
                defaultValue="Moya"
              />
              <Form.Control.Feedback type="invalid"> Ingresa tu Apellido</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                disabled
                value="email@ejemplo.cl si Quieres cambiar de correo electronico. Debes crear una cuenta nueva y borrar la cuenta anterior."
              />
              <Form.Control.Feedback type="invalid"> Ingresa un correo electrónico válido</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Numero de teléfono</Form.Label>
              <Form.Control
                type="text"
                placeholder="+569XXXXXXX"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre de calle # 1234"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCountry">
              <Form.Label>País</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu país"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicZip">
              <Form.Label>Código Postal</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu código postal"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCity">
              <Form.Label>Ciudad</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu Ciudad"
                defaultValue=""
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicState">
              <Form.Label>Región</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu Región"
                defaultValue=""
              />
            </Form.Group>



            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cambiar contraseña</Form.Label>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Confirmar nueva contraseña</Form.Label>
              <Form.Control
                name="password"
                required
                type="password"
                placeholder="Repetir contraseña"
                minLength={6}
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid"> Contraseña no válida</Form.Control.Feedback>
              <Form.Text className="text-muted">
                Contraseña tiene que tener mínimo 6 carácteres
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Actualizar</Button>
              <Alert className="mt-2" show={true} variant="danger">
                Ya existe usuario con ese correo
              </Alert>
              <Alert show={true} variant="info">
                Usuario actualizado 
              </Alert>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
