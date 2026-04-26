import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function UserCard(props) {
  console.log(props.data);
  return (
    <Card style={{ width: "18rem" }} className="shadow-sm m-2">

      <Card.Img
        variant="top"
        src={props.data?.picture?.large}
      />

      <Card.Body>

        <Card.Title>{props.data.name.first}</Card.Title>

        <Card.Text>
          &#9742; Phone: {props.data.cell} <br />
          &#9794; Gender: {props.data.gender} <br />
          &#9873; Location: {props.data.location.city}
        </Card.Text>

        <Button variant="primary" onClick={props.changeUser}>Change User</Button>

      </Card.Body>
    </Card>
  );
}

export default UserCard;