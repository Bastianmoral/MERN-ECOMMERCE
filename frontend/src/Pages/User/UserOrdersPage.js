import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom"


const UserOrdersPage = () => {
  return (
    <Row className="m-5">
      <Col sm={12} md={12}>
        <h1>Mis Pedidos</h1>
        import Table from 'react-bootstrap/Table';
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Usario </th>
              <th> Fecha </th>
              <th> Total </th>
              <th> Enviado  </th>
              <th> Detalles de la compra </th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>Jack Herrer</td>
              <td>2022-09-12</td>
              <td>$420</td>
              <td>
                <i className={item}></i>
              </td>
              
              <td>
                <Link to="/user/order-details">Ir a la compra</Link>
              </td>
            
            </tr>

            ))}
        </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default UserOrdersPage;
