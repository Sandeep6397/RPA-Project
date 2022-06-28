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
    
  );
}
export default ProfileSidebar;
