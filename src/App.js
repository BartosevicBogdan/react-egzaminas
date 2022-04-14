import "./App.scss";
import AddPage from "./pages/AddPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/add"}>
          <AddPage />
        </Route>
        <Route path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/register"}>
          <RegisterPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
