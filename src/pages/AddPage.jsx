import AddForm from "../components/AddForm/AddForm"

const AddPage = ({notificationObj, ModalScreenState}) => {
  return (
    <div>
      <h1>Tell about your skill!</h1>
      <AddForm notificationObj={notificationObj} ModalScreenState={ModalScreenState}/>
    </div>
  )
}

export default AddPage