import { Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom"
import AdminLinkComponent from "../../Components/admin/AdminLinkComponent";


const AdminOrdersPage = () => {
  return (
    <Row className="m-5">
        <Col sm={2} md={2}>
        <AdminLinkComponent />
        </Col>
      <Col sm={10} md={10}>
        <h1>Pedidos</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th> Usario </th>
              <th> Fecha </th>
              <th> Total </th>
              <th> Enviado  </th>
              <th> Método de pago  </th>
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
              <td>PayPal</td>
              <td>
                <Link to="/admin/order-details">Ir a la compra</Link>
              </td>
            
            </tr>

            ))}
        </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminOrdersPage;
