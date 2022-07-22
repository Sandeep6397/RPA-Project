import axios from "axios";
import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Modal,
  Row,
  Alert,
  Spinner
} from "react-bootstrap";

export default function AddRemove(props) {
  const [showRemoved, setShowRemoved] = useState(false);
  const [showError, setShowError] = useState(false);
  const [removeStatus, setRemoveStatus] = useState(false);
  const [confirm, setConfirm] = useState("");
  const [eid, setEid] = useState("");
  const [info,setInfo] = useState(false)
  const [message,setMessage] = useState({})
  const removeEmployee = async () => {
    const response = await axios.get(`http://localhost:5000/user/get`);
    let res = response.data.filter((item) => item.employeeId == eid);
    // console.log(res);
    if (confirm == "REMOVE" && res.length > 0) {
      await axios.delete(`http://localhost:5000/user/delete/eid/${eid}`);
      setShowRemoved(true);
    } else {
      setShowError(true);
    }
  };

  const syncUser = async ()=>{
     setInfo(true)
     setMessage({type:'info',text:'please wait employees syncing ....'})
     try {
       let response = await axios({
         url: 'http://localhost:5000/user/sync',
         method:'POST'
       })
       if(response.status === 200)
         setMessage({type:'success',text:'successfully employees synced '})

     } catch (error) {
      setMessage({type:'danger',text:'Opps ! something went wrong while syncing employee try again '})
     }
  }
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Modal show={showRemoved} onHide={() => setShowRemoved(false)}>
        {/* <Modal.Header closeButton>Success</Modal.Header> */}
        <Modal.Body>Successfully Removed Employee with id - {eid}</Modal.Body>
      </Modal>
      <Modal show={showError} onHide={() => setShowError(false)}>
        {/* <Modal.Header closeButton>Error</Modal.Header> */}
        <Modal.Body>
          Incorrect Values Specified <br /> Check EmployeeId and REMOVE
          Confirmation and Retry
        </Modal.Body>
      </Modal>
      <Card.Header>
        <Row>
          <Col style={{ padding: "0.5vw" }}>
            {removeStatus ? "Remove Staff" : "Add/Remove Staff"}
          </Col>
          <Col>
            {removeStatus && (
              <Button
                style={{ float: "right" }}
                onClick={() => setRemoveStatus(!removeStatus)}
              >
                Back
              </Button>
            )}
          </Col>
        </Row>
      </Card.Header>
      {removeStatus ? (
        <Card.Body>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              removeEmployee();
            }}
          >
            <Form.Control
              className="mt-1"
              placeholder="Enter Employee ID"
              onChange={(event) => setEid(event.target.value)}
            />
            <InputGroup>
              <Form.Control
                className="mt-1"
                placeholder="Type REMOVE to confirm"
                onChange={(event) => setConfirm(event.target.value)}
              />

              <Button type="submit" className="mt-1">
                Remove
              </Button>
            </InputGroup>
          </Form>
        </Card.Body>
      ) : (
        <Card.Body style={{ textAlign: "center" }}>
          {
            info ?
            (<>
             <Alert variant ={message.type} >
              <div style={{display:"flex",flexDirection:"row",gap:"4px",width:"100%",alignContent:"center",textAlign:"center",justifyContent:"center"}}>
              <div>{message.type ==='info'?(<Spinner size="small" animation="border" />):null}</div>
              <div>{message.text}</div>
              </div>
              </Alert>
            </>):null
          }
          <Card.Text className="m-0 mt-1">
            Click the below button to add new hired Staffs
          </Card.Text>
          <Button onClick={syncUser} className="m-0 mt-1">Sync Employees</Button>
          <Card.Text className="m-0 mt-1">
            Click the below button to remove Staff
          </Card.Text>
          <Button
            className="m-0 mt-1"
            onClick={() => setRemoveStatus(!removeStatus)}
          >
            Remove
          </Button>
        </Card.Body>
      )}
    </Card>
  );
}
