import { useContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { fetch_login, fetch_registration } from "../../logic/fetch"
import AuthContext from "../../providers/AuthContext";
import { setToken } from './../../utils/helper';


const AuthForm = (props) => {

const authCtx =useContext(AuthContext);

const history = useHistory()

const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const [isButtonDisabled, setIsButtonDisabled]=useState(true)


const [emailError, setEmailError] = useState(false)
const [passwordError, setPasswordError] = useState(false)

function changeEmail(e){
    setEmail(prevState => e.target.value)
}
function changePassword(e){
    setPassword(prevState => e.target.value)
}
function buttonAvailableCheck(){
    if(email.length>3 && password.length> 3){
        setIsButtonDisabled(prevState => false)
    }  else{
        setIsButtonDisabled(prevState => true)
    }
}
function checkErrors(){
    email.length<4 ? setEmailError(prevState => true) : setEmailError(prevState => false);
    password.length<4 ? setPasswordError(prevState => true) : setPasswordError(prevState => false);
}

function buttonOnMouseOver(){
    buttonAvailableCheck();
    checkErrors()
}

async function fetch(dataToPass){

    const respone = props.login === undefined
                    ? await fetch_registration(dataToPass)
                    : await fetch_login(dataToPass);

                    console.log(respone)
    if(props.login === undefined && respone.changes === 1){
        history.push('/login')
    }
    if(props.login === true && respone.msg === 'Successfully logged in'){
        setToken(respone.token)
        authCtx.login();
        // history.push('/');
    }
}

function formSubmit(e){
    e.preventDefault();
    const dataToSend={
        email,
        password
    }
    fetch(dataToSend)
}


  return (
    <form onSubmit={formSubmit}>
        
        
        {!emailError
        ?   <label htmlFor="email">Email:</label>
        :   <label style={{"color":"red"}} htmlFor="email">Email must be minimum 4 symbol   lenght</label>
        }
        <input onChange={changeEmail} type="text" name='email' value={email} placeholder="Email must be minimum 4 symbol lenght"/>


        {!passwordError
        ?   <label htmlFor="password">Password:</label>
        :   <label style={{"color":"red"}} htmlFor="password">Password must be minimum 4 symbol   lenght</label>
        }
        <input onChange={changePassword} type="password" name='password' value={password} placeholder="Password must be minimum 4 symbol lenght"/>

        <div className="submit-btn">
            {props.login === undefined
            ?   (<div onMouseOver={buttonOnMouseOver}>
                    <button disabled={isButtonDisabled} type="submit">Create user</button>
                </div>)
            :   (<div onMouseOver={buttonOnMouseOver}>
                    <button disabled={isButtonDisabled} type="submit">Log in!</button>
                </div>)
        }
        </div>
    </form>
  )
}

export default AuthForm