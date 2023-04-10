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
import ImageZoom from "js-image-zoom";
import { useEffect } from "react"; 

const ProductDetailsPage = () => {
  var options = {
    // width: 400,
    // zoomWidth: 500,
    // fillContainer: true,
    // zoomPosition: "bottom",
    scale: 2,
    offset: { vertical: 0 , horizontal: 0},

  }
  useEffect(() => {
    new ImageZoom(document.getElementById("first"), options)
    new ImageZoom(document.getElementById("second"), options)
    new ImageZoom(document.getElementById("third"), options)
    new ImageZoom(document.getElementById("fourth"), options)

  })
  return (
    <Container>
      <AddedToCartMessageComponent />
      <Row className="mt-5">
        <Col style={{zIndex: 1}} sm={4} md={4}>
          <div id="first">
            <Image crossOrigin="anonymous" fluid src="/images/games-category.png" />
          </div><br/>
          <div id="second">
            <Image fluid src="/images/monitors-category.png" />
          </div><br/>
          <div id="third">
            <Image fluid src="/images/tablets-category.png" />
          </div><br/>
          <div id="fourth">
            <Image fluid src="/images/games-category.png" />
          </div><br/>
        </Col>
        <Col sm={8} md={8}>
          <Row>
            <Col sm={8} md={8}>
              <ListGroup>
                <ListGroup.Item>
                  <h1>Nombre del producto</h1>
                </ListGroup.Item>
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
                {Array.from({ length: 10 }).map((item, idx) => (
                  <ListGroup.Item key={idx}>
                    Juan Perez <br />
                    <Rating readonly size={20} initialValue={4} /> <br />
                    20-09-2023 <br />
                    Curabitur sed dui ullamcorper, cursus eros nec, aliquam
                    ipsum. Vivamus non sem hendrerit,
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          Enviar tu opinion de este producto.
          <Alert variant="danger">
            {" "}
            Ingresa a tu cuenta antes de escribir una opinión
          </Alert>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="ExampleForm.ControlTextarea1"
            >
              <Form.Label>Escribe una opinión</Form.Label>
              <Form.Control as="textarea" roes={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example">
              <option>Ranking</option>
              <option value="5">5 (Muy bueno)</option>
              <option value="4">4 (Bueno)</option>
              <option value="3">3 (Promedio)</option>
              <option value="2">2 (malo)</option>
              <option value="1">1 (pésimo)</option>
            </Form.Select>
            <Button className="mb-3 mt-3" variant="success">
              {" "}
              Enviar{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailsPage;
