import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function LeaveRequestForm(props) {
  const [leaveType, setLeaveType] = useState("Sick/Casual Leave");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [duration, setDuration] = useState("Full Day");
  const [note, setNote] = useState("");
  const submitLeaveRequest = async () => {
    let response = await axios.post(
      `http://localhost:5000/leaveRequest/create`,
      {
        employeeId: props.activeUserData.employeeId,
        employeeName:
          props.activeUserData.firstName + " " + props.activeUserData.lastName,
        accessType: props.activeUserData.accessType,
        from: from,
        to: to,
        leaveType: leaveType,
        duration: duration,
        status: "Pending",
        note: note,
      }
    );
    // console.log(response);
    props.setLeaveForm(false);
  };
  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        submitLeaveRequest();
      }}
    >
      <Row>
        <Form.Group as={Col}>
          <Form.Label style={{ marginLeft: "5px" }}>Leave Type</Form.Label>
          <Form.Select
            value={leaveType}
            onChange={(event) => setLeaveType(event.target.value)}
          >
            <option>Sick/Casual Leave</option>
            <option>Additional Leave</option>
          </Form.Select>
        </Form.Group>
        <Col></Col>
      </Row>
      <Row className="mt-2">
        <Form.Group as={Col}>
          <Form.Label style={{ marginLeft: "5px" }}>Date From</Form.Label>
          <Form.Control
            required
            type="date"
            value={from}
            onChange={(event) => setFrom(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label style={{ marginLeft: "5px" }}>Date To</Form.Label>
          <Form.Control
            required
            type="date"
            value={to}
            onChange={(event) => setTo(event.target.value)}
          />
        </Form.Group>
      </Row>
      <Row className="mt-2">
        <Form.Group as={Col}>
          <Form.Label style={{ marginLeft: "5px" }}>Half/Full Day</Form.Label>
          <Form.Select
            value={duration}
            onChange={(event) => setDuration(event.target.value)}
          >
            <option>Full Day</option>
            <option>Half Day</option>
          </Form.Select>
        </Form.Group>
        <Col></Col>
      </Row>
      <Row className="mt-2">
        <Form.Group as={Col}>
          <Form.Label style={{ marginLeft: "5px" }}>
            Note for Approver
          </Form.Label>
          <Form.Control
            as="textarea"
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
        </Form.Group>
        {/* <Col></Col> */}
      </Row>
      <Row className="mt-2">
        <Col>
          <center>
            <Button type="submit">Submit</Button>
          </center>
        </Col>
        <Col>
          <center>
            <Button onClick={() => props.setLeaveForm(false)}>Cancel</Button>
          </center>
        </Col>
      </Row>
    </Form>
  );
}
