import { useState } from "react";
import { Button, Card, Container, Form,Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import axios from "axios";

function ForgotPassword(props) {
  const [email, setEmail] = useState("");
  const [eid, setEid] = useState("");
  const [info,setInfo] = useState(false)
  const [message,setMessage] = useState({})

  const sendPassword = async () => {
    const response = await axios.get(
      `http://localhost:5000/user/get/eid/${eid}`
    );
    if ((response.data.data[0].email = email)) {
      let templateParams = {
        empId: response.data.data[0].employeeId,
        pwd: response.data.data[0].password,
        email: response.data.data[0].email,
      };
      emailjs
        .send(
          "service_2bzvtu4",
          "template_waawxnf",
          templateParams,
          "yScvMJ2d0Ty_pt5MA"
        )
        .then(
          function (response) {
            setInfo(true)
            setMessage({type:'success',text:'email sent successfully'})
            setTimeout(()=>{
              window.location.reload()
            },2000)
          },
          function (error) {
            setInfo(true)
            setMessage({type:'danger',text:'Opps! unable to send email'})
          }
        );
    }
  };
  return (
    <Container>
      <center>
        <Card style={{ marginTop: "30vh", width: "30vw" }}>
          <Card.Header>Forgot Password</Card.Header>
          {
            info ?
            (<>
             <Alert variant ={message.type} >    
              {message.text}
              </Alert>
            </>):null
          }
          <Card.Body>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                sendPassword();
              }}
            >
              <Form.Control
                className="mt-1"
                required
                placeholder="Employee ID"
                type="text"
                onChange={(event) => setEid(event.target.value)}
              />
              <Form.Control
                className="mt-1"
                required
                placeholder="Email"
                type="text"
                onChange={(event) => setEmail(event.target.value)}
              />
              <center>
                <Form.Label
                  className="m-1"
                  onClick={() => props.setActiveComponent(0)}
                >
                  <small>Go Back?</small>
                </Form.Label>
                <Button type="submit" variant="primary" className="m-1">
                  Send
                </Button>
              </center>
            </Form>
          </Card.Body>
        </Card>
      </center>
    </Container>
  );
}
export default ForgotPassword;
