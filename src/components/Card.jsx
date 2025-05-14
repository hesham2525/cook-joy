import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../pages/Menu.css";

function Cart1(props) {
  return (
    <Card className="custom-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.docs}</Card.Text>
        <Button variant="warning">{props.price} EGP</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart1;
