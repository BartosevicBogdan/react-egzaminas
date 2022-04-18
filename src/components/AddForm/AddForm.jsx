import { useState, useEffect} from "react"
import { push_Skills } from "../../logic/fetch"

const AddForm = ({edit, skillsState, changeSkillId, refreshSkillsState, notificationObj, ModalScreenState}) => {

const [title, setTitle]=useState('')
const [description, setDescription]=useState('')

useEffect(()=>{
    if(edit && changeSkillId){
    const found = skillsState.skills.find(item => item.id === changeSkillId)
    console.log(found)
    setTitle(prevState => found.title)
    setDescription(prevState => found.description)
}
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

// console.log('ModalScreenState', ModalScreenState)
// console.log('ModalScreenState showModalScreen', ModalScreenState.showModalScreen)
// console.log('ModalScreenState setShowModalScreen', ModalScreenState.setShowModalScreen)
        ModalScreenState.setShowModalScreen(prevState => false);

        refreshSkillsState.setRefreshSkills(prevState => !prevState)
        console.log('refresh refresh ', refreshSkillsState.refreshSkills)

    }else{
        const dataToSend={
            title,
            description
        }
        fetch(dataToSend)
    }
}





  return (
    <form onSubmit={formSubmit}>
        <label htmlFor="title">Title</label>
        <input onChange={changeTitle} type="text" name='title' value={title} placeholder="title"/>
        <label htmlFor="title">Description</label>
        <textarea onChange={changeDescription} name="description" value={description} rows={description.length/42}></textarea>
        <div className="submit-btn">
            {edit ? <button type="submit">Make changes!</button> : <button type="submit">Public skill!</button>}
        </div>
    </form>
  )
}

export default AddForm