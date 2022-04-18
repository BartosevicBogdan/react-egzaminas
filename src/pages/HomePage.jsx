import SkillList from "../components/SkillList/SkillList"
import { print } from "../logic/fetch"

const HomePage = ({children, skillsState, setChangeSkillId, ModalScreenState, refreshSkillsState}) => {
  console.log('setChangeSkillId', setChangeSkillId)
  return (
    <div>
      <h1>Posted skills:</h1>
      <SkillList skillsState={skillsState} setChangeSkillId={setChangeSkillId} refreshSkillsState={refreshSkillsState} ModalScreenState={ModalScreenState}/>
    </div>
  )
}

export default HomePage