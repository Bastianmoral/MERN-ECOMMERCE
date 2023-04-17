import { Row, Col } from "react-bootstrap";
import AdminLinkComponent from "../../Components/admin/AdminLinkComponent";
import AdminChatRoomComponent from "../../Components/admin/AdminChatRoomComponent";

const AdminChatsPage = () => {
    return (
        <Row className="m-5">
            <Col sm={2} md={2}>
                <AdminLinkComponent />
            </Col>
            <Col sm={10} md={10}>
                <Row>
                <AdminChatRoomComponent/>
                </Row>
            </Col>

        </Row>
    )
};



export default AdminChatsPage;