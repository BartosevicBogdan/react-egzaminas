import { useState, useEffect} from "react"
import { useHistory } from "react-router-dom"
import { push_Skills } from "../../logic/fetch"

const AddForm = ({edit, skillsState, changeSkillId, refreshSkillsState, notificationObj, ModalScreenState,}) => {

const history = useHistory()
const [title, setTitle]=useState('')
const [description, setDescription]=useState('')

const [isButtonDisabled, setIsButtonDisabled]=useState(true)


const [titleError, setTitleError] = useState(false)
const [descriptionError, setDescriptionError] = useState(false)

useEffect(()=>{
    if(edit && changeSkillId){
    const found = skillsState.skills.find(item => item.id === changeSkillId)
    console.log(found)
    setTitle(prevState => found.title)
    setDescription(prevState => found.description)
}
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [changeSkillId])

function showNotification(){
    notificationObj.setNotificationBody(prevState => ({title:'success', status: 'green' }))
    notificationObj.setShowNotification(prevState => true)
    setInterval(()=>{
      notificationObj.setShowNotification(prevState => false)  
    }, 3000)
}


function changeTitle(e){
    setTitle(prevState => e.target.value)
}
function changeDescription(e){
    setDescription(prevState => e.target.value)
}

async function fetch(dataToPass){
    const respone = await push_Skills(dataToPass);
    console.log(respone)
    if(respone.msg === 'Added new skill to account'){
        setTitle(prevState => '')
        setDescription(prevState => '')
        showNotification()
        refreshSkillsState.setRefreshSkills(prevState => !prevState)
        history.push('/')
    }
} 
 
function formSubmit(e){
    e.preventDefault();
    if(edit && changeSkillId){
        const skillCopy = [...skillsState.skills]
        const found = skillCopy.find(item => item.id === changeSkillId)
        found.title=title;
        found.description=description;
        console.log('skillCopy', skillCopy);
        skillsState.setSkills(prevState => skillCopy);
        ModalScreenState.setShowModalScreen(prevState => false);
        refreshSkillsState.setRefreshSkills(prevState => !prevState)
    }else{
        const dataToSend={
            title,
            description
        }
        fetch(dataToSend)
    }
}

function buttonAvailableCheck(){
    if(title.length>3 && description.length> 3){
        setIsButtonDisabled(prevState => false)
    }  else{
        setIsButtonDisabled(prevState => true)
    }
}
function checkErrors(){
    title.length<4 ? setTitleError(prevState => true) : setTitleError(prevState => false);
    description.length<4 ? setDescriptionError(prevState => true) : setDescriptionError(prevState => false);
}

function buttonOnMouseOver(){
    buttonAvailableCheck();
    checkErrors()
}

  return (
    <form onSubmit={formSubmit}>

        {!titleError
        ?   <label htmlFor="title">Title:</label>
        :   <label style={{"color":"red"}} htmlFor="title">Title must be minimum 4 symbol lenght</label>
        }
        <input onChange={changeTitle} type="text" name='title' value={title} placeholder="Title must be minimum 4 symbol lenght"/>

        {!descriptionError
        ?   <label htmlFor="descriptiom">Description:</label>
        :   <label style={{"color":"red"}} htmlFor="descriptiom">Descriptiom must be minimum 4 symbol lenght</label>
        }
        <textarea onChange={changeDescription} name="description" value={description} rows={description.length/30} placeholder='Descriptiom must be minimum 4 symbol lenght'></textarea>

        <div className="submit-btn" onMouseOver={buttonOnMouseOver}>
            {edit ? <button disabled={isButtonDisabled} type="submit">Make changes!</button> : <button disabled={isButtonDisabled} type="submit">Public skill!</button>}
        </div>
    </form>
  )
}

export default AddForm