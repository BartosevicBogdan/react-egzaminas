import "./App.scss";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import ModalScreen from "./pages/ModalScreen";
import { useState } from 'react';
import Notification from "./components/Notification/Notification";


function App() {

    const [showModalScreen, setShowModalScreen]=useState(false)
    const [skills, setSkills] = useState([])
    const [changeSkillId, setChangeSkillId] =useState('')
    const [refreshSkills, setRefreshSkills] = useState(false)

    const [notificationBody, setNotificationBody]=useState({})
    const [showNotification, setShowNotification]=useState(false)


  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path={"/"} exact>
            <HomePage skillsState={{skills, setSkills}} setChangeSkillId={setChangeSkillId} refreshSkillsState={{refreshSkills, setRefreshSkills}} ModalScreenState={{showModalScreen, setShowModalScreen}}/>
          </Route>
          <Route path={"/add"}>
            <AddPage notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}} ModalScreenState={{showModalScreen, setShowModalScreen}}/>
          </Route>
          <Route path={"/login"}>
            <LoginPage />
          </Route>
          <Route path={"/register"}>
            <RegisterPage />
          </Route>
        </Switch>
      </div>
        <ModalScreen ModalScreenState={{showModalScreen, setShowModalScreen}} notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}} skillsState={{skills, setSkills}} refreshSkillsState={{refreshSkills, setRefreshSkills}} changeSkillId={changeSkillId}/>
        <Notification notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}}/>
    </div>
  );
}

export default App;
