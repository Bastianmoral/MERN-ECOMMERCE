import { ListGroup, Row, Col, Image, Button, Form } from "react-bootstrap";

const CartItemComponent = () =>  {
    return (
        <>
        <ListGroup.Item>
            <Row>
                <Col sm={2} md={2}>
                    <Image crossOrigin="anonymous" src="/images/games-category.png" fluid />
                </Col>
                <Col sm={2} md={2}>
                    Nombre Del Prodcuto <br />
                    pequeña descripción
                </Col>
                <Col sm={2} md={2}>
                    <b>$420</b>
                </Col>
                <Col sm={3} md={3}>
                    <Form.Select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </Col>
                <Col sm={3} md={3}>
                    <Button 
                        type="button"
                        variant="secondary"
                        onClick={()=> window.confirm("Estas seguro?")}>
                            <i className="bi bi-trash">

                            </i>

                    </Button>
                </Col>
            </Row>
        </ListGroup.Item>
        <br/>
        </>
    )
}


export default CartItemComponent;