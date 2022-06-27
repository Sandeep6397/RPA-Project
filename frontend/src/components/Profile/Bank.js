import axios from "axios";
import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function Bank(props) {
  const [editStatus, setEditStatus] = useState(false);
  const [bankName, setBankName] = useState(props.activeUserData.bankName);
  const [ifscCode, setIfscCode] = useState(props.activeUserData.ifscCode);
  const updateBank = async () => {
    await axios.patch(
      `http://localhost:5000/user/update/${props.activeUserData._id}`,
      {
        bankName: bankName,
        ifscCode: ifscCode,
      }
    );
    props.activeUserData.bankName = bankName;
    props.activeUserData.ifscCode = ifscCode;
  };
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>
        <Row>
          <Col style={{ padding: "0.5vw" }}> Bank Details</Col>
          <Col>
            <Button
              style={{ float: "right" }}
              onClick={() => {
                setEditStatus(!editStatus);
                if (editStatus) updateBank();
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
              <Form.Label>Bank Name</Form.Label>
              <Form.Control
                readOnly={!editStatus}
                onChange={(event) => setBankName(event.target.value)}
                value={bankName}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Account Type</Form.Label>
              <Form.Control readOnly value="Filler" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col}>
              <Form.Label>IFSC Code</Form.Label>
              <Form.Control
                readOnly={!editStatus}
                onChange={(event) => setIfscCode(event.target.value)}
                value={ifscCode}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Account Holder Name</Form.Label>
              <Form.Control
                readOnly
                value={
                  props.activeUserData.firstName +
                  " " +
                  props.activeUserData.lastName
                }
              />
            </Form.Group>
          </Row>
          <Form.Group>
            <Form.Label>Address</Form.Label>
            <Form.Control readOnly value={props.activeUserData.address} />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
    // <section id="bank_content" style={{ display: "contents" }}>
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
    //           Bank Details
    //         </div>
    //         <button id="bank_savebutton" click="function()">
    //           edit
    //         </button>
    //       </div>
    //       <div className="edit_forms">
    //         <div className="first_row_bank">
    //           <div className="first_row_block">
    //             <div className="first_row_details_bank">
    //               <div>
    //                 <div className="edit_inputs_bank_name">
    //                   <span>Bank Name</span>
    //                 </div>
    //                 <select
    //                   className="dropdown"
    //                   name="slct"
    //                   id="slct"
    //                   disabled
    //                   style={{ appearance: "none" }}
    //                 >
    //                   <option>
    //                     <span> HDFC Bank</span>
    //                   </option>
    //                   <option>
    //                     <span>SBI</span>
    //                   </option>
    //                   <option>
    //                     <span>Union Bank</span>
    //                   </option>
    //                 </select>
    //               </div>

    //               <div>
    //                 <div className="edit_inputs_bank_name">
    //                   <span>Account Type</span>
    //                 </div>
    //                 <select
    //                   className="dropdown"
    //                   name="slct"
    //                   id="slct_type"
    //                   disabled
    //                   style={{ appearance: "none" }}
    //                 >
    //                   <option>
    //                     <span>Salary Account</span>
    //                   </option>
    //                   <option>
    //                     <span> Saving Account</span>
    //                   </option>
    //                   <option>
    //                     <span>Current Account</span>
    //                   </option>
    //                 </select>
    //               </div>
    //             </div>

    //             <div
    //               className="first_row_details_bank"
    //               id="first_row_details_bank"
    //             >
    //               <div className="edit_inputs">
    //                 <span>IFSC Code</span>
    //                 <input
    //                   type="text"
    //                   readOnly value={props.activeUserData.}
    //                   value={props.activeUserData.ifscCode}
    //                 />
    //               </div>
    //               <div className="edit_inputs">
    //                 <span>Account Holder Name</span>
    //                 <input
    //                   type="text"
    //                   readOnly value={props.activeUserData.}
    //                   value={
    //                     props.activeUserData.firstName +
    //                     " " +
    //                     props.activeUserData.lastName
    //                   }
    //                 />
    //               </div>
    //             </div>
    //             <div className="edit_inputs">
    //               <span>Address</span>
    //               <textarea
    //                 className="text_area_address"
    //                 id="text_area_address_bank"
    //                 style={{ resize: "none" }}
    //                 readOnly value={props.activeUserData.}
    //               >
    //                 Mangalore India
    //               </textarea>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
