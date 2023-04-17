import { Card, Button, Row, Col } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { LinkContainer } from "react-router-bootstrap"

const ProductForListComponent = ({images, idx }) => {
  return (
    <Card style={{ marginTop: "30px", marginBottom: "50px" }}>
      <Row>
        <Col lg={5}>
          <Card.Img 
            crossOrigin="anonymous" 
            variant="top"
            src={"/images/" + images[idx] + "-category.png"} />
        </Col>
        <Col lg={7}>
          <Card.Body>
            <Card.Title>
              Neque porro quisquam est qui dolorem ipsum quia{" "}
            </Card.Title>
            <Card.Text>
              Duis ultricies pretium magna, et consequat leo auctor at. Nulla
              lacinia suscipit velit ac viverra. Suspendisse potenti. Vivamus
              ornare fringilla ex eget maximus. Donec erat lectus, euismod at
              lobortis ornare
            </Card.Text>
            <Card.Text>
              <Rating 
                readonly size={20}
                initialValue={5}  
              /> (1)
            <Card.Text className="h4">
              $1258{" "}
              <LinkContainer to="/product-details">
              <Button variant="danger">Ver Producto</Button>
              </LinkContainer>
              
            </Card.Text>  
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductForListComponent;
