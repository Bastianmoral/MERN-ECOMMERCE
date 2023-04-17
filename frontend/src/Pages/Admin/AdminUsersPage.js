import { Row, Col, Table, Button } from "react-bootstrap";
import AdminLinkComponent from "../../Components/admin/AdminLinkComponent";
import { LinkContainer } from "react-router-bootstrap";

const deleteHandler = () => {
  if(window.confirm("Estas seguro de eliminar?")) alert("Usuario eliminado")
}

const AdminUserPage = () => {
  return (
    <Row className="m-5">
        <Col sm={2} md={2}>
        <AdminLinkComponent />
        </Col>
      <Col sm={10} md={10}>
        <h1>Usuarios</h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th> Nombre </th>
              <th> Apellidos </th>
              <th> Correo Electrónico </th>
              <th> Usuario admin ?  </th>
              <th> Editar / Eliminar </th>
            </tr>
          </thead>
          <tbody>
            {["bi bi-check-lg text-success", "bi bi-x-lg text-danger"].map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>Jack </td>
              <td>Herer </td>
              <td>bastihc@gmail.com</td>
              <td>$420</td>
              <td>
                <i className={item}></i>
              </td>
              <td>
                <LinkContainer to="/admin/edit-user">
                  <Button className="btn-sm">
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                </LinkContainer>
                {" / "}
                <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                  <i className="bi bi-x-circle"></i>
                </Button>
              </td>
            
            </tr>

            ))}
        </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default AdminUserPage;
