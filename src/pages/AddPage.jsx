import AddForm from "../components/AddForm/AddForm"

const AddPage = ({notificationObj, ModalScreenState, refreshSkillsState}) => {
  return (
    <div>
      <h1>Tell about your skill!</h1>
      <AddForm 
          notificationObj={notificationObj} 
          ModalScreenState={ModalScreenState} 
          refreshSkillsState={refreshSkillsState}
      />
    </div>
  )
}

export default AddPage