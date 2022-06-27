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
        {/* <Card.Text>Sick Leave/Casual Leave</Card.Text>
        <Card.Text>
          Days remaining from 01 Mar 2022 to 31 Dec 2022 entitlement of 12.00
          Days
        </Card.Text> */}
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
    // <section id="attendence_content" style={{ display: "contents" }}>
    //   <div className="edit_container">
    //     <div className="edit_card">
    //       <div className="edit_info">
    //         <div
    //           className="profile_title"
    //           style={{
    //             fontSize: "large",
    //             paddingLeft: "20px",
    //             fontWeight: "1000",
    //             fontFamily: "Open Sans",
    //           }}
    //         >
    //           Attendence/Absence
    //         </div>
    //         <button
    //           id="status_button"
    //           onclick="check_status()"
    //           style={{
    //             textTransform: "none",
    //             backgroundColor: " rgb(6, 172, 6)",
    //           }}
    //         >
    //           Check Status
    //         </button>
    //       </div>
    //     </div>
    //     <div className="edit_forms_attendence">
    //       <div
    //         id="first_row_attendence1"
    //         className="first_row_attendence1"
    //         style={{ display: "contents" }}
    //       >
    //         <div className="pie_border">
    //           <div className="pie_title">
    //             <div
    //               style={{
    //                 textAlign: "center",
    //                 fontSize: "30px",
    //                 paddingTop: "15px",
    //                 fontFamily: "Open Sans",
    //               }}
    //             >
    //               Sick Leave/Casual Leave
    //             </div>
    //           </div>
    //           <div className="pie_content">
    //             <div className="pie animate" style={{ p: "100", c: "orange" }}>
    //               12.00
    //             </div>
    //             <div className="pie_inner_content">
    //               <div>
    //                 Days remaining from 01 Mar 2022 to 31 Dec 2022 entitlement
    //                 of
    //                 <span className="days">12.00 Days</span>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         <div className="apply_leave">
    //           <button
    //             className="apply_leave_button"
    //             onclick="requestAttendence()"
    //           >
    //             Apply for Leave
    //           </button>
    //         </div>
    //       </div>

    //       <div
    //         className="first_row_attendence_container"
    //         id="first_row_attendence_container1"
    //         style={{ display: "none" }}
    //       >
    //         <div className="apply_attendence_container">
    //           <div className="apply_attendence_row">
    //             <label
    //               for="leave"
    //               style={{
    //                 fontSize: "medium",
    //                 fontWeight: "500",
    //               }}
    //             >
    //               Absence / Attendence Type:
    //               <span style={{ color: "red" }}>*</span>
    //             </label>

    //             <div className="select">
    //               <select className="leave_selection">
    //                 <option>
    //                   <span> Sick / Casual Leave</span>
    //                 </option>
    //                 <option>
    //                   <span> Additional Leave</span>
    //                 </option>
    //               </select>
    //             </div>
    //           </div>

    //           <div className="apply_attendence_row" id="apply_attendence_row">
    //             <div className="apply_date">
    //               <label
    //                 for="date"
    //                 style={{
    //                   fontSize: "medium",
    //                   fontWeight: "500",
    //                 }}
    //               >
    //                 Date From:
    //                 <span style={{ color: "red" }}>*</span>
    //               </label>
    //               <div className="leave_input_date">
    //                 <input form="date_from" type="date" />
    //               </div>
    //             </div>

    //             <div apply_date>
    //               <label
    //                 for="date"
    //                 style={{
    //                   fontSize: "medium",
    //                   fontWeight: "500",
    //                 }}
    //               >
    //                 Date To:
    //                 <span style={{ color: "red" }}>*</span>
    //               </label>
    //               <div className="leave_input_date">
    //                 <input form="date_from" type="date" />
    //               </div>
    //             </div>
    //           </div>

    //           <div className="apply_attendence_row">
    //             <label
    //               for="full_day"
    //               style={{
    //                 fontSize: "medium",
    //                 fontWeight: "500",
    //               }}
    //             >
    //               Half Day / Full Day:
    //               <span style={{ color: "red" }}>*</span>
    //             </label>

    //             <div className="select">
    //               <select className="leave_selection">
    //                 <option>
    //                   <span>Full Day</span>
    //                 </option>
    //                 <option>
    //                   <span> Half Day</span>
    //                 </option>
    //               </select>
    //             </div>
    //           </div>

    //           <div className="apply_attendence_row">
    //             <label
    //               for="approver"
    //               style={{
    //                 fontSize: "medium",
    //                 fontWeight: "500",
    //               }}
    //             >
    //               Approver:
    //             </label>

    //             <div className="leave_input">
    //               <input form="date_from" type="text" disabled />
    //             </div>
    //           </div>

    //           <div className="apply_attendence_row">
    //             <label
    //               for="note"
    //               style={{
    //                 fontSize: "medium",
    //                 fontWeight: "500",
    //               }}
    //             >
    //               Note for approver:
    //               <span style={{ color: "red" }}>*</span>
    //             </label>

    //             <div className="leave_input">
    //               {/* <textarea placeholder="Type your note here.."></textarea> */}
    //             </div>
    //           </div>

    //           <div className="apply_attendence_row_buttons">
    //             <div className="apply_attendence_button">
    //               <button className="attendence_submit">Submit</button>
    //             </div>

    //             <div className="apply_attendence_button">
    //               <button
    //                 className="attendence_cancel"
    //                 onclick="cancel()"
    //                 type="reset"
    //               >
    //                 Cancel
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       <div
    //         id="first_row_attendence_status"
    //         className="first_row_attendence_container"
    //         style={{ display: "none" }}
    //       >
    //         <div className="apply_attendence_container1">
    //           <div className="first_row">
    //             <table className="styledtable">
    //               <thead>
    //                 <tr>
    //                   <th>NO.</th>
    //                   <th>FROM</th>
    //                   <th>TO</th>
    //                   <th>LEAVE TYPE</th>
    //                   <th>FULL/HALF DAY</th>
    //                   <th>APPROVER</th>
    //                   <th>STATUS</th>
    //                 </tr>
    //               </thead>
    //               <tbody>
    //                 <tr>
    //                   <td>1</td>
    //                   <td>01/12/2021</td>
    //                   <td>03/12/2021</td>
    //                   <td>Floating Leave</td>
    //                   <td>Full</td>
    //                   <td>Mr.Durga</td>
    //                   <td>Approved✔</td>
    //                 </tr>
    //                 <tr>
    //                   <td>2</td>
    //                   <td>01/12/2021</td>
    //                   <td>03/12/2021</td>
    //                   <td>Floating Leave</td>
    //                   <td>Full</td>
    //                   <td>Mr.Durga</td>
    //                   <td>Approved✔</td>
    //                 </tr>
    //                 <tr>
    //                   <td>3</td>
    //                   <td>01/12/2021</td>
    //                   <td>03/12/2021</td>
    //                   <td>Floating Leave</td>
    //                   <td>Full</td>
    //                   <td>Mr.Durga</td>
    //                   <td>Approved✔</td>
    //                 </tr>
    //                 <tr>
    //                   <td>4</td>
    //                   <td>01/12/2021</td>
    //                   <td>03/12/2021</td>
    //                   <td>Floating Leave</td>
    //                   <td>Full</td>
    //                   <td>Mr.Durga</td>
    //                   <td>Approved✔</td>
    //                 </tr>
    //                 <tr>
    //                   <td>5</td>
    //                   <td>01/12/2021</td>
    //                   <td>03/12/2021</td>
    //                   <td>Floating Leave</td>
    //                   <td>Full</td>
    //                   <td>Mr.Durga</td>
    //                   <td>Approved✔</td>
    //                 </tr>
    //               </tbody>
    //             </table>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
