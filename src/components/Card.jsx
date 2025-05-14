import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../pages/Menu.css";

function Cart1(props) {
  return (
    <Card className="custom-card" style={{ width: "18rem"  }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>Sushi</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cart1;
