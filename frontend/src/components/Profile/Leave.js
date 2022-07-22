import { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import LeaveRequestForm from "./LeaveRequestForm";
import LeaveRequestTable from "./LeaveRequestTable";

export default function Leave(props) {
  const [buttonState, setButtonState] = useState(true);
  const [leaveForm, setLeaveForm] = useState(false);
  const addLeaveRequest = () => {};
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>
        <Row>
          <Col style={{ padding: "0.5vw" }}>Attendence/Absence</Col>
          <Col>
            <Button
              style={{ float: "right" }}
              onClick={() => {
                setButtonState(!buttonState);
              }}
            >
              {buttonState ? "Check Status" : "Back"}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {!buttonState && (
          <LeaveRequestTable activeUserData={props.activeUserData} />
        )}
        {buttonState && leaveForm && (
          <LeaveRequestForm
            setLeaveForm={setLeaveForm}
            activeUserData={props.activeUserData}
          />
        )}
        {buttonState && !leaveForm && (
          <center>
            <Button onClick={() => setLeaveForm(true)}>Apply For Leave</Button>
          </center>
        )}
      </Card.Body>
    </Card>
   
  );
}
