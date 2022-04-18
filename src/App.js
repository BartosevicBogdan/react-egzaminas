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
import Footer from "./components/Footer/Footer";
import { useHistory } from "react-router-dom";
import AuthContext from "./providers/AuthContext";


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  let history = useHistory();
  function login() {
    setIsUserLoggedIn((prevState) => true);
    history.push("/");
    // isUserLoggedIn && history.push("/");
  }
  function logout() {
    console.log("app.js logout");
    setIsUserLoggedIn((prevState) => false);
    history.push("/login");
    // isUserLoggedIn && history.push("/login");
  }

  const authInitValues = {
    isUserLoggedIn,
    login,
    logout,
  };




    const [showModalScreen, setShowModalScreen]=useState(false)
    const [skills, setSkills] = useState([])
    const [changeSkillId, setChangeSkillId] =useState('')
    const [refreshSkills, setRefreshSkills] = useState(false)

    const [notificationBody, setNotificationBody]=useState({})
    const [showNotification, setShowNotification]=useState(false)


  return (
    <AuthContext.Provider value={authInitValues}>
      <div className="App">
        <Header />
        <div className="container white-block-space">
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
        <Footer/>
          <ModalScreen ModalScreenState={{showModalScreen, setShowModalScreen}} notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}} skillsState={{skills, setSkills}} refreshSkillsState={{refreshSkills, setRefreshSkills}} changeSkillId={changeSkillId}/>
          <Notification notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}}/>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
