import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap";
export default function ManagePassword(props) {
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currPass, setCurrPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const updatePassword = async () => {
    if (
      props.activeUserData.password == currPass &&
      newPass == confirmNewPass
    ) {
      console.log(props.activeUserData);
      await axios.patch(
        `http://localhost:5000/user/update/${props.activeUserData._id}`,
        {
          password: newPass,
        }
      );
      props.activeUserData.password = newPass;
      setShowSuccess(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Modal show={showError} onHide={() => setShowError(false)}>
        {/* <Modal.Header closeButton>Error</Modal.Header> */}
        <Modal.Body>Incorrect Values Specified</Modal.Body>
      </Modal>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        {/* <Modal.Header closeButton>Success</Modal.Header> */}
        <Modal.Body>Password has been updated</Modal.Body>
      </Modal>
      <Card.Header>Manage Password</Card.Header>
      <Card.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            updatePassword();
          }}
        >
          <Form.Control
            required
            className="mt-1"
            type="password"
            placeholder="Enter Current Password"
            onChange={(event) => setCurrPass(event.target.value)}
          />
          <Form.Control
            required
            className="mt-1"
            type="password"
            placeholder="Enter New Password"
            onChange={(event) => setNewPass(event.target.value)}
          />
          <InputGroup>
            <Form.Control
              required
              className="mt-1"
              type="password"
              placeholder="Confirm New Password"
              onChange={(event) => setConfirmNewPass(event.target.value)}
            />
            <Button className="mt-1" variant="primary" type="submit">
              Change
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}
