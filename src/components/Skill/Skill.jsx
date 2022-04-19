import css from './Skill.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
const Skill = ({id, user_id, title, description, setChangeSkillIdFn, ModalScreenState, refreshSkillsState}) => {
    const[changeTitle, setChangeTitle]= useState(false)
    const[changeDescription, setChangeDescription]= useState(false)
    const[cardTitle, setCardTitle]= useState(title)
    const[cardDescription, setCardDescription]= useState(description)

useEffect(()=>{
   
},[])
useEffect(()=>{
    setCardTitle(prevState => title)
    setCardDescription(prevState => description)
},[refreshSkillsState.refreshSkills])
function onChangeCardTitle(e){
    setCardTitle(e.target.value)
}
function onChangeCardDescription(e){
    setCardDescription(e.target.value)
}
function onChangeTitle(){
    // setChangeTitle(prevState => !prevState)
    setChangeSkillIdFn(prevState => id)
    ModalScreenState.setShowModalScreen(prevState => true)
}
function onChangeDescription(){
    setChangeDescription(prevState => !prevState)
}

  return (
    <div className={css.style}>
        <div className="action-btn">
            <i  onClick={onChangeTitle} className="fa fa-pencil-square-o" aria-hidden="true"></i>
        </div>
        <h2>{cardTitle} </h2>
        <p>{cardDescription}</p>
    </div>
  )
}

export default Skill