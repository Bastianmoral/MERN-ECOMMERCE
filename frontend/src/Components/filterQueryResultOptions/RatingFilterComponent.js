import { Fragment } from "react";
import { Form } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";



const RatingFilterComponent = () => {
    return (
      <>
        <span className="fw-bold">Ranking de Productos</span>
        {Array.from({length: 5}).map((_, idx) =>(
          <Fragment key={idx}>
            <Form.Check type="checkbox" id={`check-api2-${idx}`}>
                <Form.Check.Input type="checkbox" isValid />
                <Form.Check.Label style={{ cursor:"pointer"}}>
                  <Rating readonly size={20} initialValue={5-idx} />
                </Form.Check.Label>
            </Form.Check>
          </Fragment>
        ))}
      </>
    );
  };
  
  export default RatingFilterComponent;
  