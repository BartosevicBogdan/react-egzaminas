import SkillList from "../components/SkillList/SkillList"

const HomePage = ({children, skillsState, setChangeSkillId, ModalScreenState, refreshSkillsState, isUserLoggedIn}) => {
  // console.log('setChangeSkillId', setChangeSkillId)
  return (
    <div>
      <h1>Posted skills:</h1>
      <SkillList 
          skillsState={skillsState} 
          isUserLoggedIn={isUserLoggedIn} 
          setChangeSkillId={setChangeSkillId} 
          refreshSkillsState={refreshSkillsState} 
          ModalScreenState={ModalScreenState}
      />
    </div>
  )
}

export default HomePage