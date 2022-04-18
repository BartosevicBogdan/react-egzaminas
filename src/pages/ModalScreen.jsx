import ModalItem from "../components/ModalItem/ModalItem"
import { useState } from 'react';

const ModalScreen = ({children, ModalScreenState, skillsState, changeSkillId, refreshSkillsState, notificationObj}) => {
    // const [showModalScreen, setShowModalScreen]=useState(true)
    console.log(ModalScreenState.showModalScreen)
  return (
    <div className={`modal ${ModalScreenState.showModalScreen? '': 'hide'}`}>
        <ModalItem ModalScreenState={ModalScreenState} notificationObj={notificationObj} refreshSkillsState={refreshSkillsState} skillsState={skillsState} changeSkillId={changeSkillId}/>
    </div>
  )
}

export default ModalScreen