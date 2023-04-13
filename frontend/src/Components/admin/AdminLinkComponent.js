import { LinkContainer } from "react-router-bootstrap"
import { Nav, Navbar } from "react-bootstrap"


const AdminLinkComponent = () => {
    return (
        <Navbar bg="light" variant="light">
<Nav className="flex-column">
            <LinkContainer to="/admin/orders">
                <Nav.Link>
                    Orders
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/products">
                <Nav.Link>
                    productos
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/users">
                <Nav.Link>
                    usuarios
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/chats">
                <Nav.Link>
                    chats
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/admin/analytics">
                <Nav.Link>
                    Analítica a tiempo real
                </Nav.Link>
            </LinkContainer>
                <Nav.Link> Cerrar sesión </Nav.Link>
        </Nav>
        </Navbar>
        
    )
}


export default AdminLinkComponent