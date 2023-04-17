import {
    Row,
    Col,
    Container,
    Form,
    Button,
    CloseButton,
    Table,
    Alert,
    Image
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import { useState } from "react";


  const onHover = {
    cursor: "pointer",
    position: "absolute",
    left: "5px",
    top: "-10px",
    transform: "scale(2.3)"

  }
  
  const AdminEditProductPage = () => {
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
            <h1>Editar Producto</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Nombre</Form.Label>
                <Form.Control name="name" required type="text" defaultValue="Panasonic" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                  name="description"
                  required
                  as="textarea"
                  rows={3}
                  defaultValue="Product description"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCount">
                <Form.Label>Cantidades en Stock</Form.Label>
                <Form.Control name="count" required type="number" defaultValue="2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Precio</Form.Label>
                <Form.Control name="price" required type="text" defaultValue="$420" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCategory">
                <Form.Label>
                  Categoría
                </Form.Label>
                <Form.Select
                  required
                  name="category"
                  aria-label="Default select example"
                >
                  <option value="">Elije tu Categoría</option>
                  <option value="1">Laptops</option>
                  <option value="2">TV</option>
                  <option value="3">Games</option>
                </Form.Select>
              </Form.Group>
              
              <Row className="mt-5">
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3" controlId="formBasicAttributes">
                    <Form.Label>
                      {" "}
                      Escoja un atributo y un valor{"  "}
                    </Form.Label>
                    <Form.Select
                      name="atrrKey"
                      aria-label="Default select example"
                    >
                      <option>Escoje el atributo</option>
                      <option value="red">color</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicAttributeValue"
                  >
                    <Form.Label> Valor</Form.Label>
                    <Form.Select
                      name="atrrVal"
                      aria-label="Default select example"
                    >
                      <option>Escoje valor del atributo</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Table hover>
                  <thead>
                    <tr>
                      <th>atributo</th>
                      <th>Valor</th>
                      <th>Borrar</th>
  
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>id atributo</td>
                      <td>valor atributo</td>
                      <td><CloseButton /></td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
              <Row>
                <Col sm={6} md={6}>
                  <Form.Group className="mb-3" controlId="formBasicNewAttribute">
                    <Form.Label>Crear un nuevo Atributo</Form.Label>
  
                    <Form.Control
                      disabeled={false}
                      placeholder="primero escoge o crea una categoría"
                      type="text"
                      name="newAttr"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6} md={6}>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicNewAttributeValue"
                  >
                    <Form.Label>Valor del atributo</Form.Label>
                    <Form.Control
                      disabeled={false}
                      placeholder="primero escoge o crea una categoría"
                      required={true}
                      type="text"
                      name="newAttrValue"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Alert variant="primary">
              Después de escribir los atributos y los valores apreta enter en uno de los campos
              </Alert>
              <Form.Group className="mb-3 mt-3" controlId="formFileMultiple">
                <Form.Label>Imagenes</Form.Label>
                <Row>
                    <Col style={{position: "relative"}} xs={3} >
                    <Image src="/images/games-category.png" fluid />
                    <i style={onHover}className="bi bi-x text-danger" ></i>
                    </Col>
                    <Col style={{position: "relative"}} xs={3} >
                    <Image src="/images/games-category.png" fluid />
                    <i style={onHover}className="bi bi-x text-danger" ></i>
                    </Col>
                    
                </Row>
                <Form.Control required type="file" multiple />
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
  
  export default AdminEditProductPage;
  