import AddForm from "../AddForm/AddForm"

const ModalItem = ({ModalScreenState, skillsState, changeSkillId, refreshSkillsState, notificationObj}) => {
    function hideHandler(){
        ModalScreenState.setShowModalScreen(prevState => false)
    }
  return (
    <div className="modal-item">
        <div className="component">
            <button className="modal-btn" onClick={hideHandler}>Cancel</button>
            <AddForm edit skillsState={skillsState} ModalScreenState={ModalScreenState} notificationObj={notificationObj} refreshSkillsState={refreshSkillsState} changeSkillId={changeSkillId}/>
        </div>
    </div>
  )
}

export default ModalItem