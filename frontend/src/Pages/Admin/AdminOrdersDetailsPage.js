import { Container, Row, Col, Form, Alert, ListGroup, Button } from "react-bootstrap";
import CartItemComponent from "../../Components/CartItemComponent";


const AdminOrderDetailsPage = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <h1>Detalle de compra</h1>
                <Col sm={8} md={8}>
                <br/>
                <Row>
                    <Col sm={6} md={6}>
                    <h2>Envíos</h2>
                    <b>Nombre</b>: Juan Moya <br/>
                    <b>Direccion</b>: Calle siembre viva, 784. Springfield. USA <br/>
                    <b>Telefono</b>: +56 9 1234 5678 <br/>

                    </Col>
                    <Col sm={6} md={6}>
                    <h2>Metodo de Pago</h2>
                    <Form.Select disabled>
                        <option value="pp">PayPal</option>
                        <option value="cod">Efectivo</option>
                        <option value="webpay">WebPay</option>

                    </Form.Select>

                    </Col>
                    <Row>
                        <Col>
                            <Alert className="mt-3" variant="danger">
                                No enviado.
                            </Alert>
                        </Col>
                        <Col>
                            <Alert className="mt-3" variant="success">
                                Pagado el 2022-10-02
                            </Alert>
                        </Col>
                    </Row>
                </Row>
                <br/>
                <h2>Productos</h2>
                <ListGroup variant="flush">
                    {Array.from({length:3}).map((item, idx) => (
                        <CartItemComponent key={idx}/>
                    ))}
                </ListGroup>
                </Col>
                <Col sm={4} md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                        <h3>Resumen del pedido</h3>

                        </ListGroup.Item>
                        <ListGroup.Item>
                        Precio Final: <span className="fw-bold">$420</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        Envío: <span className="fw-bold">Incluído</span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        IVA: <span className="fw-bold">Incluído</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="text-danger">
                        Total Compra: <span className="fw-bold">$1260</span>
                        </ListGroup.Item>
                        <ListGroup.Item >
                            <div className="d-grid gap-2">
                            <Button size="lg" variant="danger" type="button">
                                Marcar como enviado
                            </Button>
                            </div>
                        </ListGroup.Item>
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}



export default AdminOrderDetailsPage;