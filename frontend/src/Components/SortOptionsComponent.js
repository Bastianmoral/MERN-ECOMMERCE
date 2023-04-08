import { Form } from "react-bootstrap";

const SortOptionsComponent = () => {
  return (
    <Form.Select aria-label="Default select example">
      <option>Ordenar Por:</option>
      <option value="Price_1">Precio de menor a mayor</option>
      <option value="price_-1">Precio de mayor a menor</option>
      <option value="rating_-1">Tu Ranking</option>
      <option value="name_1">Ordenar A-z</option>
    </Form.Select>
  );
};

export default SortOptionsComponent;
