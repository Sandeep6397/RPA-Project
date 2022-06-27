import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import { useEffect, useState } from "react";
import Profile from "./components/Profile/Profile";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeComponent, setActiveComponent] = useState(0);
  const [activeUserData, setActiveUserData] = useState({});
  const selectActiveComponent = () => {
    switch (activeComponent) {
      case 0:
        return (
          <Login
            setActiveComponent={setActiveComponent}
            setActiveUserData={setActiveUserData}
          />
        );
      case 1:
        return <ForgotPassword setActiveComponent={setActiveComponent} />;
      case 2:
        // return <div>Yes</div>;
        return (
          <Profile
            activeUserData={activeUserData}
            setActiveUserData={setActiveUserData}
            setActiveComponent={setActiveComponent}
          />
        );
    }
  };
  return selectActiveComponent();
}

export default App;
