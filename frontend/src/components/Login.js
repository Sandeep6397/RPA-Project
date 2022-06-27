import { useState } from "react";
import axios from "axios";
import { Button, Card, Container, Form, Modal } from "react-bootstrap";
// import "../css/login.css";

function Login(props) {
  const [showError, setShowError] = useState(false);
  const [eid, setEid] = useState("");
  const [password, setPassword] = useState("");
  const getUser = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/get/eid/${eid}`
    );
    if (response.data.data.length == 0) setShowError(true);
    if (password == response.data.data[0].password) {
      props.setActiveUserData(response.data.data[0]);
      props.setActiveComponent(2);
    } else {
      setShowError(true);
    }
  };
  return (
    <Container>
      <center>
        <Card style={{ marginTop: "30vh", width: "30vw" }}>
          <Modal show={showError} onHide={() => setShowError(false)}>
            {/* <Modal.Header closeButton>Error</Modal.Header> */}
            <Modal.Body>Incorrect Values for Password/EmployeeId</Modal.Body>
          </Modal>
          <Card.Header>Login</Card.Header>
          <Card.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                if (eid !== "" && password !== "") getUser();
              }}
            >
              <Form.Control
                className="mt-1"
                required
                placeholder="Employee ID"
                type="text"
                onChange={(event) => setEid(event.target.value)}
              />
              <Form.Control
                className="mt-1"
                required
                placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <center>
                <Form.Label
                  className="m-1"
                  onClick={() => props.setActiveComponent(1)}
                >
                  <small>Forgot Password?</small>
                </Form.Label>
                <Button type="submit" variant="primary" className="m-1">
                  Login
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </center>
    </Container>
  );
}
export default Login;
