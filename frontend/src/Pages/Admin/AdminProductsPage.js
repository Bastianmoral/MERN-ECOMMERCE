import { Row, Col, Table, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap"
import AdminLinkComponent from "../../Components/admin/AdminLinkComponent";


const deleteHandler =  () => {
    if(window.confirm("Estas seguro de borrar el producto?")) alert(
        "Producto Borrado"
    )
}

const AdminProductsPage = () => {
  return (
    <Row className="m-5">
        <Col sm={2} md={2}>
        <AdminLinkComponent />
        </Col>
      <Col sm={10} md={10}>
        <h1>Todos los productos{" "}
        <LinkContainer to="/admin/create-new-product">
            <Button variant="primary" size="lg">
                Crear nuevo producto
            </Button>
            </LinkContainer>
        </h1>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th> Nombre producto </th>
              <th> Precio </th>
              <th> Categoría </th>
              <th> editar/eliminar  </th>
            </tr>
          </thead>
          <tbody>
            {[{name: "Panasonic", price: "$200", category: "TV"}, {name: "Lenovo", price: "$150", category: "TABBLET"}, {name: "LG", price: "$500", category: "PC"}].map((item, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.category}</td>
              <td>
                <LinkContainer to="/admin/edit-product">
                <Button className="btn-sm">
                <i className="bi bi-pencil-square"></i>

                </Button>
                
                </LinkContainer>
                {"  /  "}
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

export default AdminProductsPage;
