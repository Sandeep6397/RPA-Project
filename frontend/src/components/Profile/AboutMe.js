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
    // <section id="aboutMe_content" style={{ display: "contents" }}>
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
    //           About Me
    //         </div>
    //         <button id="savebutton" click="function()">
    //           edit
    //         </button>
    //       </div>
    //       <div className="edit_forms">
    //         <div className="first_row">
    //           <div className="first_row_block">
    //             <div className="first_row_details" id="first_row_detail">
    //               <div className="edit_inputs">
    //                 <span>First Name</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   id="edited_first_name"
    //                   value={props.activeUserData.firstName}
    //                 />
    //               </div>
    //               <div className="edit_inputs">
    //                 <span>Last Name</span>
    //                 <input
    //                   id="edited_last_name"
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.lastName}
    //                 />
    //               </div>
    //             </div>

    //             <div className="first_row_details" id="first_row_detail">
    //               <div className="edit_inputs">
    //                 <span>EID</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.employeeId}
    //                 />
    //               </div>
    //               <div className="edit_inputs" style={{ marginLeft: "30px" }}>
    //                 <span>Phone Number</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.phoneNumber}
    //                 />
    //               </div>
    //             </div>
    //             <div className="first_row_details" id="first_row_detail">
    //               <div className="edit_inputs">
    //                 <span>Email</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.email}
    //                 />
    //               </div>
    //               <div className="edit_inputs">
    //                 <span>DOB</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.dateOfBirth}
    //                 />
    //               </div>
    //             </div>
    //             <div className="first_row_details" id="first_row_detail">
    //               <div className="edit_inputs">
    //                 <span>Gender</span>
    //                 <input
    //                   type="text"
    //                   readOnly
    //                   value={props.activeUserData.gender}
    //                   disabled
    //                   style={{ backgroundColor: "white" }}
    //                 />
    //               </div>
    //               <div className="edit_inputs">
    //                 <span>Address</span>
    //                 {/* <textarea
    //                 className="text_area_address"
    //                 id="text_area_address"
    //                 style={{ resize: "none" }}
    //                 readOnly
    //               >
    //                 Mangalore India
    //               </textarea> */}
    //               </div>
    //             </div>
    //           </div>

    //           <div className="profile_photo">
    //             <div className="inner_container_profile">
    //               <div className="inner_profile_photo">
    //                 <div id="profile-pic" className="profile-pic">
    //                   <label
    //                     className="-label"
    //                     // for="file"
    //                   >
    //                     <span id="change-photo"></span>
    //                   </label>
    //                   <input
    //                     id="file"
    //                     type="none"
    //                     readOnly
    //                     // onchange="previewFile()"
    //                   />

    //                   <img src="../../a.png" id="output" width="200" />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
export default AboutMe;
