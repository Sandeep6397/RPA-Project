import AboutMe from "./AboutMe";
import AddRemove from "./AddRemove";
// import ApproveAttendance from "./ApproveAttendance";
import Leave from "./Leave";
import Bank from "./Bank";
import ManagePassword from "./ManagePassword";
import MyPay from "./MyPay";
import MyTime from "./MyTime";
import PaySalary from "./PaySalary";
import ProfileSidebar from "./ProfileSidebar";
import Request from "./Request";
import UpdateSalary from "./UpdateSalary";
import { useState } from "react";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

function Profile(props) {
  const [showModal, setShowModal] = useState(false);
  const [activeProfileComponent, setActiveProfileComponent] =
    useState("AboutMe");
  const showProfile = () => {
    switch (activeProfileComponent) {
      case "AboutMe":
        return (
          <AboutMe
            activeUserData={props.activeUserData}
            setActiveUserData={props.setActiveUserData}
          />
        );
      case "MyPay":
        return <MyPay activeUserData={props.activeUserData} />;
      case "Leave":
        return <Leave activeUserData={props.activeUserData} />;
      case "MyTime":
        return <MyTime />;
      case "Bank":
        return <Bank activeUserData={props.activeUserData} />;
      case "ApproveRequests":
        return <Request activeUserData={props.activeUserData} />;
      case "AddRemoveStaff":
        return <AddRemove />;
      case "PaySalary":
        return <PaySalary />;
      case "UpdateSalary":
        return <UpdateSalary />;
      case "ManagePassword":
        return <ManagePassword activeUserData={props.activeUserData} />;
    }
  };
  return (
    <Container fluid className="m-0 p-0">
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {/* <Modal.Header closeButton>Confirm Logout</Modal.Header> */}
        <Modal.Body>
          <center>Are You Sure You Want To Logout?</center>

          <center>
            <Button
              className="mt-2"
              onClick={() => props.setActiveComponent(0)}
            >
              Confirm
            </Button>
          </center>
        </Modal.Body>
      </Modal>
      <Button
        style={{ position: "absolute", right: "5px", top: "5px" }}
        onClick={() => setShowModal(true)}
      >
        Logout
      </Button>
      <Row className="g-0">
        <Col sm={2}>
          <ProfileSidebar
            activeProfileComponent={activeProfileComponent}
            activeUserData={props.activeUserData}
            setActiveProfileComponent={setActiveProfileComponent}
          />
        </Col>
        <Col>{showProfile()}</Col>
      </Row>
    </Container>
    // <div className="container">
    //   <div className="main_body">
    //     <div className="side_menu">
    //       <div className="wrapper">

    //         <div className="section">
    //           <div className="top_navbar">
    //             <div className="hamburger">
    //               <a>
    //                 <i className="fas fa-bars"></i>
    //               </a>
    //             </div>
    //           </div>
    //           <div className="container">
    //             <div className="inner_section"></div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
export default Profile;
