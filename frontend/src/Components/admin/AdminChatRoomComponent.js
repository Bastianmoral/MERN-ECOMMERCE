import { Fragment, useState } from "react"
import { Toast, Button, Form } from "react-bootstrap"

const AdminChatRoomComponent = () => {
    const [toast1, closetoast1] = useState(true); 
    const close1 = () => closetoast1(false);
    const [toast2, closetoast2] = useState(true); 
    const close2 = () => closetoast2(false);
    return (
        <>
        <Toast show={toast1} onClose={close1} className="ms-4 mb-5">
            <Toast.Header>
                <strong className="me-auto">Chat whit juanito</strong>
            </Toast.Header>
            <Toast.Body>
                <div style={{ maxHeight: "500px", overflow: "auto"}}>
                {Array.from({length: 30}).map((_, idx) => (
                    <Fragment key={idx}>
                                 <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                <b>Usuario escribió: </b> Hola mundo! Esto es un mensaje de prueba.
                </p>
                <p>
                <b>Admin escribió: </b> Hola mundo! Esto es un mensaje de prueba.
                </p>
                    </Fragment>

                ))}
                </div>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Escribe una pregunta</Form.Label>
                        <Form.Control as="textarea" rows={2}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Toast.Body>
        </Toast>
        <Toast show={toast2} onClose={close2} className="ms-4 mb-5">
            <Toast.Header>
                <strong className="me-auto">Chat whit juanito 2</strong>
            </Toast.Header>
            <Toast.Body>
                <div style={{ maxHeight: "500px", overflow: "auto"}}>
                {Array.from({length: 30}).map((_, idx) => (
                    <Fragment key={idx}>
                                 <p className="bg-primary p-3 ms-4 text-light rounded-pill">
                <b>Usuario escribió: </b> Hola mundo! Esto es un mensaje de prueba.
                </p>
                <p>
                <b>Admin escribió: </b> Hola mundo! Esto es un mensaje de prueba.
                </p>
                    </Fragment>

                ))}
                </div>
                <Form>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Escribe una pregunta</Form.Label>
                        <Form.Control as="textarea" rows={2}/>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Enviar
                    </Button>
                </Form>
            </Toast.Body>
        </Toast>
        </>
    )



}


export default AdminChatRoomComponent
