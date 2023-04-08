import ProductCarouselComponent from "../Components/ProductCarouselComponent";
import CategoryCardComponent from "../Components/CategoryCardComponent";
import {Row, Container} from 'react-bootstrap';



const HomePage = () => {
  const categories = [
    "Juegos",
    "Monitores",
    "Tablets",
    "Impresoras",
    "cámaras",
    "software",
    "libros",
    "videos",
  ];
  return (
    <>
      <ProductCarouselComponent />
      <Container>
      <Row sm={2} md={2} className="lg-4 mt-5">
        {categories.map((category, idx) => (
          <CategoryCardComponent key={idx} category={category} idx={idx} />
        ))}
      </Row>
      </Container>
    </>
  );
};

export default HomePage;
