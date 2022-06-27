import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function LeaveRequestTable(props) {
  let sno = 1;
  const [lRDetails, setLRDetails] = useState([]);
  useEffect(() => {
    getLeaveRequest();
  }, []);
  const getLeaveRequest = async () => {
    const response = await axios.get(`http://localhost:5000/leaveRequest/get`);
    setLRDetails(response.data);
  };
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>NO.</th>
          <th>EMPLOYEE ID</th>
          <th>EMPLOYEE NAME</th>
          <th>FROM</th>
          <th>TO</th>
          <th>LEAVE TYPE</th>
          <th>FULL/HALF DAY</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {lRDetails.map((item, index) => {
          // console.log(item);
          if (props.activeUserData.employeeId == item.employeeId)
            return (
              <tr>
                <td>{sno++}</td>
                <td>{item.employeeId}</td>
                <td>{item.employeeName}</td>
                <td>{item.from}</td>
                <td>{item.to}</td>
                <td>{item.leaveType}</td>
                <td>{item.duration}</td>
                <td>{item.status}</td>
              </tr>
            );
        })}
      </tbody>
    </Table>
  );
}
