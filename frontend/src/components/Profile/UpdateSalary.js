import axios from "axios";
import { useState } from "react";
import { Button, Card, Form, InputGroup, Modal } from "react-bootstrap";

export default function UpdateSalary(props) {
  const [eid, setEid] = useState("");
  const [salary, setSalary] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const updateSalary = async () => {
    let response = await axios.get(`http://localhost:5000/user/get/eid/${eid}`);
    if (response.data.data.length == 0) setShowError(true);
    else {
      await axios.patch(`http://localhost:5000/user/update/eid/${eid}`, {
        salary: salary,
      });
      setShowSuccess(true);
    }
  };
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Modal show={showError} onHide={() => setShowError(false)}>
        <Modal.Body>Incorrect Value for EmployeeId</Modal.Body>
      </Modal>
      <Modal show={showSuccess} onHide={() => setShowSuccess(false)}>
        <Modal.Body>Updated Salary Successfully</Modal.Body>
      </Modal>
      <Card.Header>Update Salary</Card.Header>
      <Card.Body>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            updateSalary();
          }}
        >
          <Form.Control
            required
            className="mt-1"
            placeholder="Enter Employee ID"
            onChange={(event) => setEid(event.target.value)}
          />
          <InputGroup>
            <Form.Control
              required
              className="mt-1"
              placeholder="Enter Updated Salary"
              onChange={(event) => setSalary(event.target.value)}
            />
            <Button className="mt-1" variant="primary" type="submit">
              Update
            </Button>
          </InputGroup>
        </Form>
      </Card.Body>
    </Card>
  );
}
