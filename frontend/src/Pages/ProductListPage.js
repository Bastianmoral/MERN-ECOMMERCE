import { Row, Col, Container, ListGroup, Button } from "react-bootstrap";
import PaginationComponent from "../Components/PaginationComponent";
import ProductForListComponent from "../Components/ProductForListComponent";
import SortOptionsComponent from "../Components/SortOptionsComponent";
import PriceFilterComponent from "../Components/filterQueryResultOptions/PriceFilterComponent";
import RatingFilterComponent from "../Components/filterQueryResultOptions/RatingFilterComponent";
import CategoryFilterComponent from "../Components/filterQueryResultOptions/CategoryFilterComponent";
import AttributesFilterComponent from "../Components/filterQueryResultOptions/AttributesFilterComponent";

const ProductListPage = () => {
    return (
        <Container fluid>
            <Row>
                <Col sm={3} md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="mb-3 mt-3">
                            <SortOptionsComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            FILTROS: <br />
                            <PriceFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <RatingFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <CategoryFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <AttributesFilterComponent />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button variant="primary">Filtrar</Button>
                            <Button variant="danger">Borrar Filtros</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={9} md={9}>
                    {Array.from({ length: 5}).map((_, idx) => (
                        <ProductForListComponent 
                            key={idx}
                            images={["games", "Monitors", "Tablets", "games", "Monitors", "Tablets" ]}
                            idx={idx} />

                    ))} 
                    <PaginationComponent />
                </Col>
            </Row>
        </Container>
    );
};


export default ProductListPage;