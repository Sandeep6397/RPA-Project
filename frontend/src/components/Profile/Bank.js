import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Bank(props) {
  const [editStatus, setEditStatus] = useState(false);
  const [bankName, setBankName] = useState(props.activeUserData.bankName);
  const [ifscCode, setIfscCode] = useState(props.activeUserData.ifscCode);
  const updateBank = async () => {
    await axios.patch(
      `http://localhost:5000/user/update/${props.activeUserData._id}`,
      {
        bankName: bankName,
        ifscCode: ifscCode,
      }
    );
    props.activeUserData.bankName = bankName;
    props.activeUserData.ifscCode = ifscCode;
  };
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>
        <Row>
          <Col style={{ padding: "0.5vw" }}> Bank Details</Col>
          <Col>
            <Button
              style={{ float: "right" }}
              onClick={() => {
                setEditStatus(!editStatus);
                if (editStatus) updateBank();
              }}
            >
              {editStatus ? "Save" : "Edit"}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Form>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                readOnly={!editStatus}
                onChange={(event) => setBankName(event.target.value)}
                value={bankName}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Account Type</Form.Label>
              <Form.Control readOnly value="Filler" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                readOnly={!editStatus}
                onChange={(event) => setIfscCode(event.target.value)}
                value={ifscCode}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control
                readOnly
                value={
                  props.activeUserData.firstName +
                  " " +
                  props.activeUserData.lastName
                }
              />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control readOnly value={props.activeUserData.address} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
