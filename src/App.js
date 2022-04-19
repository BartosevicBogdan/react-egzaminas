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
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { getToken } from "./utils/helper";
import { useEffect } from 'react';
import {baseURL} from './logic/fetch'


function App() {


console.log('baseURL', baseURL)

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  
  let history = useHistory();
  function login() {
    setIsUserLoggedIn((prevState) => true);
    history.push("/");
  }
  function logout() {
    console.log("app.js logout");
    setIsUserLoggedIn((prevState) => false);
    history.push("/login");
  }
  const authInitValues = {
    isUserLoggedIn,
    login,
    logout,
  };

  useEffect(()=>{
    const token= getToken()
    token !== undefined && token.length> 0 && setIsUserLoggedIn(prevState => true)
  },[])

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
            <ProtectedRoute path={"/"} exact>
              <HomePage skillsState={{skills, setSkills}} isUserLoggedIn={isUserLoggedIn} setChangeSkillId={setChangeSkillId} refreshSkillsState={{refreshSkills, setRefreshSkills}} ModalScreenState={{showModalScreen, setShowModalScreen}}/>
            </ProtectedRoute>
            <ProtectedRoute path={"/add"}>
              <AddPage notificationObj={{notificationBody, setNotificationBody, showNotification, setShowNotification}} refreshSkillsState={{refreshSkills, setRefreshSkills}} ModalScreenState={{showModalScreen, setShowModalScreen}}/>
            </ProtectedRoute>
            <Route path={"/login"}>
              <LoginPage />
            </Route>
            <Route path={"/register"}>
              <RegisterPage />
            </Route>
            <Route path={"*"}>
              <h2>Page not found</h2>
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
