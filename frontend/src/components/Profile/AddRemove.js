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
    // <section id="add_remove_content" style={{ display: "none" }}>
    //   <div className="edit_container">
    //     <div className="edit_card">
    //       <div className="edit_info">
    //         <div
    //           className="profile_title"
    //           style={{
    //             fontSize: "large",
    //             paddingLeft: "20px",
    //             fontWeight: "1000",
    //           }}
    //         >
    //           Add/Remove Staff
    //         </div>
    //       </div>
    //       <div className="edit_forms1">
    //         <div
    //           className="first_row_bank_appove1"
    //           id="staff_add_or_remove"
    //           style={{ display: "contents" }}
    //         >
    //           <div className="first_row_add_remove_staff">
    //             <div className="add_staff">
    //               <div className="add_staff_content">
    //                 <h1>Click the below button to add new hired Staffs</h1>
    //               </div>

    //               <div
    //                 className="add_staff_button"
    //                 style={{ marginTop: "20px" }}
    //               >
    //                 <button> Run Bot </button>
    //               </div>
    //             </div>

    //             <div className="remove_staff">
    //               <div className="remove_staff_content">
    //                 <h1>Click the below button to remove Staff</h1>
    //               </div>

    //               <div
    //                 className="remove_staff_button"
    //                 style={{ marginTop: "20px" }}
    //               >
    //                 <button
    //                   onclick="remove_staff()"
    //                   id="button_remove_staff_remove1"
    //                 >
    //                   Remove
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div
    //           className="first_row_bank_appove1"
    //           id="remove_staff_by_id"
    //           style={{ display: "none" }}
    //         >
    //           <div className="first_row_remove_staff">
    //             <form id="form_remove_staff" action="">
    //               <div className="remove_container">
    //                 <h1> Remove Staff</h1>
    //                 <div className="remove_staff_row">
    //                   <i className="fas fa-user"></i>
    //                   <input
    //                     id="remove_eid"
    //                     name="remove_eid"
    //                     type="text"
    //                     placeholder="Enter employee ID"
    //                   />
    //                   <div className="error" id="remove_eid_error"></div>
    //                 </div>

    //                 <div className="remove_staff_row">
    //                   <i className="fas fa-user"></i>
    //                   <input
    //                     id="confirm_remove"
    //                     name="confirm_remove"
    //                     type="text"
    //                     placeholder="Type 'REMOVE' to confirm"
    //                   />
    //                   <div className="error" id="confirm_remove_error"></div>
    //                 </div>

    //                 <div className="add_staff_button">
    //                   <button
    //                     id="button_remove_staff"
    //                     onclick="remove_staff_back()"
    //                   >
    //                     Back
    //                   </button>
    //                   <button
    //                     id="button_remove_staff_remove"
    //                     style={{
    //                       border: "1px solid red",
    //                       backgroundColor: "red",
    //                     }}
    //                     onclick="removeStaffById()"
    //                   >
    //                     Remove
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
