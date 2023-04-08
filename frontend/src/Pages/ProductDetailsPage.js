import {
  Row,
  Col,
  Container,
  Image,
  ListGroup,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import AddedToCartMessageComponent from "../Components/AddedToCartMessageComponent";
import { Rating } from "react-simple-star-rating";

const ProductDetailsPage = () => {
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col sm={4} md={4}>
          <Image fluid src="/images/games-category.png" />
          <Image fluid src="/images/monitors-category.png" />
          <Image fluid src="/images/tablets-category.png" />
          <Image fluid src="/images/games-category.png" />
        </Col>
        <Col sm={8} md={8}>
          <Row>
            <Col sm={8} md={8}>
              <ListGroup>
                <ListGroup.Item><h1>Nombre del producto</h1></ListGroup.Item>
                <ListGroup.Item>
                  <Rating readonly size={20} initialValue={4} /> (1)
                </ListGroup.Item>
                <ListGroup.Item>
                  Precio <span className="fw-bold">$654</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Sed efficitur, nulla quis convallis varius, nibh libero semper
                  nisl, dictum ultrices dolor orci et lorem.
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col sm={4} md={4}>
              <ListGroup>
                <ListGroup.Item>Disponible: En Stock</ListGroup.Item>
                <ListGroup.Item>
                  Precio <span className="fw-bold">$654</span>
                </ListGroup.Item>
                <ListGroup.Item>
                  Cantidad:
                  <Form.Select size="lg" aria-label="default select example">
                    <option>1</option>
                    <option value="1"> 2 </option>
                    <option value="2"> 3 </option>
                    <option value="3"> 4 </option>
                  </Form.Select>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button variant="danger"> Agregar al carrito</Button>
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5">
              <h5>Opiniones</h5>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  entum gravida. In hac habitasse platea dictumst. Fusce v
                </ListGroup.Item>
                <ListGroup.Item>
                  la velit erat, et venenatis sem pretium s
                </ListGroup.Item>
                <ListGroup.Item>
                  ris et massa et nulla vulputate porta sed vel ante. Donec eget
                  nisi ma
                </ListGroup.Item>
                <ListGroup.Item>
                  Mauris in nisi elementum, accumsan met
                </ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Enviar tu opinion de este producto.
          <Alert
            variant="danger"
          > Ingresa a tu cuenta antes de escribir una opinión

          </Alert>
          
          <Form>
            <Form.Group className="mb-3" controlId="ExampleForm.ControlInput1">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" placeholder="nombre@ejemplo.com"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="ExampleForm.ControlTextarea1">
                <Form.Label>Ejemplo de texto</Form.Label>
                <Form.Control as="textarea" roes={3}/>
            </Form.Group>
            <Form.Select aria-label="Default select example">
                <option>Abre este menu de selección</option>
                <option value="1">uno</option>
                <option value="2">dos</option>
                <option value="3">tres</option>
            </Form.Select>
            <Button variant="primary"> Enviar </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
