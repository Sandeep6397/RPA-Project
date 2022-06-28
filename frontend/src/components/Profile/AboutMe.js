import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

function AboutMe(props) {
  const [editStatus, setEditStatus] = useState(false);
  const [firstName, setFirstName] = useState(props.activeUserData.firstName);
  const [lastName, setLastName] = useState(props.activeUserData.lastName);
  const [eid, setEid] = useState(props.activeUserData.employeeId);
  const [phoneNumber, setPhoneNumber] = useState(
    props.activeUserData.phoneNumber
  );
  const [email, setEmail] = useState(props.activeUserData.email);
  const [dob, setDob] = useState(props.activeUserData.dateOfBirth);
  const [gender, setGender] = useState(props.activeUserData.gender);
  const [address, setAddress] = useState(props.activeUserData.address);

  const updateAbout = async () => {
    // console.log(props.activeUserData);
    await axios.patch(
      `http://localhost:5000/user/update/${props.activeUserData._id}`,
      {
        firstName: firstName,
        lastName: lastName,
        employeeId: eid,
        phoneNumber: phoneNumber,
        email: email,
        dateOfBirth: dob,
        gender: gender,
        address: address,
      }
    );
    const response = await axios.get(
      `http://localhost:5000/user/get/eid/${eid}`
    );
    props.setActiveUserData(response.data.data[0]);
  };

  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>
        <Row>
          <Col style={{ padding: "0.5vw" }}>About Me</Col>
          <Col>
            <Button
              style={{ float: "right" }}
              onClick={() => {
                setEditStatus(!editStatus);
                if (editStatus) updateAbout();
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
              <Form.Label style={{ marginLeft: "5px" }}>First Name</Form.Label>
              <Form.Control
                onChange={(event) => setFirstName(event.target.value)}
                readOnly={!editStatus}
                value={firstName}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>Last Name</Form.Label>
              <Form.Control
                onChange={(event) => setLastName(event.target.value)}
                readOnly={!editStatus}
                value={lastName}
              />
            </Form.Group>
          </Row>
          <Row className="mt-2">
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>EID</Form.Label>
              <Form.Control
                onChange={(event) => setEid(event.target.value)}
                readOnly
                value={eid}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>
                Phone Number
              </Form.Label>
              <Form.Control
                onChange={(event) => setPhoneNumber(event.target.value)}
                readOnly={!editStatus}
                value={phoneNumber}
              />
            </Form.Group>
          </Row>
          <Row className="mt-2">
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>Email</Form.Label>
              <Form.Control
                onChange={(event) => setEmail(event.target.value)}
                readOnly
                value={email}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>DOB</Form.Label>
              <Form.Control
                onChange={(event) => setDob(event.target.value)}
                readOnly={!editStatus}
                value={dob}
              />
            </Form.Group>
          </Row>
          <Row className="mt-2">
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>Gender</Form.Label>
              <Form.Control
                onChange={(event) => setGender(event.target.value)}
                readOnly={!editStatus}
                value={gender}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label style={{ marginLeft: "5px" }}>Address</Form.Label>
              <Form.Control
                onChange={(event) => setAddress(event.target.value)}
                readOnly={!editStatus}
                value={address}
              />
            </Form.Group>
          </Row>
        </Form>
      </Card.Body>
    </Card>
   
  );
}
export default AboutMe;
