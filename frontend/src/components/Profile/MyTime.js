import { Card } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
export default function MyTime(props) {
  return (
    <Card style={{ margin: "5vw", marginTop: "25vh" }}>
      <Card.Header>Calendar</Card.Header>
      <Card.Body>
        <center>
          <Calendar />
        </center>
      </Card.Body>
    </Card>
  );
}
