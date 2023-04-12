import { Row, Col, Container, Alert, ListGroup, Button} from "react-bootstrap"
import { Link }  from "react-router-dom"
import CartItemComponent from "../Components/CartItemComponent"

const CartPage = () => {
    return (
        <Container fluid>
                <Row>
        <Col sm={8} md={8}>
            <h1>Tu carrito de compras</h1>
            <ListGroup variant="flus">
            {Array.from({length: 3}).map((item, idx) =>(
                <CartItemComponent key={idx} />
            ))}
            </ListGroup>
            <Alert variant="info">Tu Carrito está vacío.</Alert>

        </Col>
        <Col sm={4} md={4}>
            <ListGroup>
                <ListGroup.Item>
                    <h3>Subtotal (3 items)</h3> 
                </ListGroup.Item>
                <ListGroup.Item>
                    Precio: <span className="fw-bold">$4.200</span>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Link to="/user/cart-details">
                    <Button type="button">
                        Cerrar Compra
                    </Button>
                    </Link>
                </ListGroup.Item>
            </ListGroup> 
        </Col>
    </Row>
        </Container>
    )
}



export default CartPage;