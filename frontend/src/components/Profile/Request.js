import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Form, Table } from "react-bootstrap";

export default function Request(props) {
  let sno = 1;
  const [leaveDetails, setLeaveDetails] = useState([]);
  const [previewStatus, setPreviewStatus] = useState(false);
  const [selected, setSelected] = useState(-1);
  // const [status, setStatus] = useState("");
  useEffect(() => {
    getLeave();
  }, []);
  const getLeave = async () => {
    const response = await axios.get(`http://localhost:5000/leaveRequest/get`);
    setLeaveDetails(response.data);
  };
  const updateLeave = async (status) => {
    let objid = leaveDetails[selected]._id;
    await axios.patch(`http://localhost:5000/leaveRequest/update/objid/${objid}`, {
      status: status,
    });
    getLeave();
  };
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>Attendance Requests</Card.Header>
      {previewStatus ? (
        <Card.Body>
          {/* <Card.Text>Attendance Request</Card.Text> */}
          <Form>
            {/* <Form.Label className="mt-2" style={{ marginLeft: "5px" }}>EID</Form.Label> */}
            <Form.Label style={{ marginLeft: "5px" }}>Employee Id</Form.Label>
            <Form.Control value={leaveDetails[selected].employeeId} readOnly />
            <Form.Label className="mt-2" style={{ marginLeft: "5px" }}>
              From Date
            </Form.Label>
            <Form.Control value={leaveDetails[selected].from} readOnly />
            <Form.Label className="mt-2" style={{ marginLeft: "5px" }}>
              To Date
            </Form.Label>
            <Form.Control value={leaveDetails[selected].to} readOnly />
            <Form.Label className="mt-2" style={{ marginLeft: "5px" }}>
              Leave Type
            </Form.Label>
            <Form.Control value={leaveDetails[selected].leaveType} readOnly />
            <center>
              <Button
                className="m-2"
                onClick={() => {
                  updateLeave("On Hold");
                  setPreviewStatus(!previewStatus)
                }}
              >
                Hold
              </Button>
              <Button
                className="m-2"
                onClick={() => {
                  updateLeave("Approved");
                  setPreviewStatus(!previewStatus);
                }}
              >
                Approve
              </Button>
              <Button
                className="m-2"
                onClick={() => {
                  updateLeave("Declined");
                  setPreviewStatus(!previewStatus);
                }}
              >
                Decline
              </Button>
            </center>
          </Form>
        </Card.Body>
      ) : (
        <Card.Body>
          <Table bordered>
            <thead>
              <tr>
                <th>NO.</th>
                <th>EMPLOYEE ID</th>
                <th>FROM</th>
                <th>TO</th>
                <th>LEAVE TYPE</th>
                <th>FULL/HALF DAY</th>
                <th>PREVIEW</th>
              </tr>
            </thead>
            <tbody>
              {leaveDetails.map((item, index) => {
                if (item.status != "Approved" && item.status != "Declined")
                  if (
                    (props.activeUserData.accessType == "admin" &&
                      item.accessType == "manager") ||
                    (props.activeUserData.accessType == "manager" &&
                      item.accessType != "admin" &&
                      item.accessType != "manager")
                  )
                    return (
                      <tr>
                        <td>{sno++}</td>
                        <td>{item.employeeId}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                        <td>{item.leaveType}</td>
                        <td>{item.duration}</td>
                        <td>
                          <Button
                            onClick={() => {
                              setPreviewStatus(!previewStatus);
                              setSelected(index);
                            }}
                          >
                            PREVIEW
                          </Button>
                        </td>
                      </tr>
                    );
              })}
            </tbody>
          </Table>
        </Card.Body>
      )}
    </Card>
    
  );
}
