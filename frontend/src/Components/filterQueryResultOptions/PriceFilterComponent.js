import { Form } from "react-bootstrap";

const PriceFilterComponent = () => {
  return (
    <>
      <Form.Label>
        <span className="fw-bold"> Precios no mayores a: </span> $1.000.000
      </Form.Label>
      <Form.Range min={10} max={1000} step={10} />
    </>
  );
};

export default PriceFilterComponent;
