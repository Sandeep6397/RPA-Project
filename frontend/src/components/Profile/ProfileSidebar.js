// import "../../css/sidebar.css";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import image from "../Images/a.png";
import {
  faBuildingColumns,
  faCalendar,
  faCloudMoon,
  faFilePen,
  faHourglassStart,
  faKey,
  faMoneyCheckDollar,
  faSackDollar,
  faUser,
  faUserXmark,
} from "@fortawesome/free-solid-svg-icons";
import SidebarItems from "./SidebarItems";
function ProfileSidebar(props) {
  const items = [
    { setVal: "AboutMe", text: "About Me", icon: faUser, access: true },
    { setVal: "MyPay", text: "My Pay", icon: faSackDollar, access: true },
    { setVal: "Leave", text: "Leave", icon: faCalendar, access: true },
    { setVal: "MyTime", text: "My Time", icon: faHourglassStart, access: true },
    { setVal: "Bank", text: "Bank", icon: faBuildingColumns, access: true },
    {
      setVal: "ApproveRequests",
      text: "Approve Requests",
      icon: faCloudMoon,
      access: false,
      accessM: true,
    },
    {
      setVal: "AddRemoveStaff",
      text: "Add/Remove Staff",
      icon: faUserXmark,
      access: false,
    },
    {
      setVal: "PaySalary",
      text: "Pay Salary",
      icon: faMoneyCheckDollar,
      access: false,
    },
    {
      setVal: "UpdateSalary",
      text: "Update Salary",
      icon: faFilePen,
      access: false,
    },
    {
      setVal: "ManagePassword",
      text: "Manage Password",
      icon: faKey,
      access: true,
    },
  ];
  return (
    <Card style={{ height: "100vh" }}>
      <Card.Body className="m-0 p-0">
        <center>
          <Card.Text className="mt-2">
            <img src={image} width="50%" style={{ borderRadius: "100vh" }} />
            <br />
            {props.activeUserData.firstName}
            <br />
            {props.activeUserData.designation}
            <hr className="m-1" style={{ width: "70%" }} />
          </Card.Text>
        </center>

        <ListGroup variant="flush">
          {items
            .filter((item) => {
              return (
                props.activeUserData.accessType == "admin" ||
                (props.activeUserData.accessType == "manager" &&
                  item.accessM) ||
                item.access
              );
            })
            .map((item) => {
              return (
                <SidebarItems
                  setVal={item.setVal}
                  text={item.text}
                  set={props.setActiveProfileComponent}
                  check={props.activeProfileComponent}
                  icon={item.icon}
                />
              );
            })}
          <ListGroup.Item></ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    // <div className="sidebar">
    //   <div className="profile">
    //     <img src="../../man.png" alt="profile_picture" id="myImageId" />
    //     <h3 id="first_name">John Doe</h3>
    //     <p id="designation">Manager</p>
    //   </div>
    //   <hr />
    //   <ul>
    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("AboutMe")}
    //       className="sidebar_icon active"
    //       id="sidebar_icon_aboutMe"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-user"></i>
    //         </span>
    //         <span className="item">About Me</span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("MyPay")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_myPay"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-sack-dollar"></i>
    //         </span>
    //         <span className="item">My Pay</span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("Leave")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_attendence"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-calendar"></i>
    //         </span>
    //         <span className="item">Leave</span>
    //       </a>
    //     </li>
    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("MyTime")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_myTime"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-hourglass-start"></i>
    //         </span>
    //         <span className="item">My Time</span>
    //       </a>
    //     </li>
    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("Bank")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_bank"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-building-columns"></i>
    //         </span>
    //         <span className="item">Bank </span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("ApproveRequests")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_request"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa fa-cloud-moon"></i>
    //         </span>
    //         <span className="item">Approve Requests </span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("AddRemoveStaff")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_add_remove"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-user-xmark"></i>
    //         </span>
    //         <span className="item">Add/Remove Staff </span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("PaySalary")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_pay"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-money-check-dollar"></i>
    //         </span>
    //         <span className="item">Pay Salary </span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("UpdateSalary")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_update_salary"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-file-pen"></i>
    //         </span>
    //         <span className="item">Update Salary </span>
    //       </a>
    //     </li>

    //     <li
    //      style={{height:"7.5vh",padding:"1vw"}}  onClick={() => props.setActiveProfileComponent("ManagePassword")}
    //       className="sidebar_icon"
    //       id="sidebar_icon_password"
    //     >
    //       <a>
    //         <span className="icon">
    //           <i className="fa-solid fa-key"></i>
    //         </span>
    //         <span className="item">Manage Password </span>
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
export default ProfileSidebar;
