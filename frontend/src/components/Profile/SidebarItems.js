import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, ListGroup, Row } from "react-bootstrap";

export default function SidebarItems(props) {
  return (
    <ListGroup.Item
      style={{
        height: "7vh",
        padding: "1vw",
        paddingLeft: "1.5vw",
        backgroundColor: props.setVal == props.check ? "#0d6efd" : "white",
        color: props.setVal == props.check ? "white" : "black",
      }}
      onClick={() => props.set(props.setVal)}
    >
      <Row>
        {/* <Col></Col> */}
        <Col sm={2}>
          <FontAwesomeIcon icon={props.icon} />
        </Col>
        <Col>{props.text}</Col>
      </Row>
    </ListGroup.Item>
  );
}
