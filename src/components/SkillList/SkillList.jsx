
import { useState, useEffect } from 'react';
import { pull_Skills } from '../../logic/fetch';
import Skill from '../Skill/Skill';
import StyledLayout from './../styled-components/StyledLayout';
const SkillList = ({skillsState, setChangeSkillId, ModalScreenState, refreshSkillsState, isUserLoggedIn}) => {

    const [skills, setSkills] = useState([])
    const [isLoading, setIsLoading] =useState(true)

    function renderItems() {
      setSkills(prevState => skillsState.skills.map(item => <Skill key={item.id} setChangeSkillIdFn={setChangeSkillId} refreshSkillsState={refreshSkillsState}  ModalScreenState={ModalScreenState} {...item} /> ))
    }
    useEffect(() => {
      console.log('paprastas useEfect')
      fetch();
      renderItems();
    }, [])
    
    useEffect(() => {
      console.log('dep useEfect')
      // fetch();
      renderItems()
    }, [refreshSkillsState.refreshSkills, isUserLoggedIn])

    
    async function fetch(){
    const response = await pull_Skills();
    setIsLoading(prevState => true)
    console.log("response", response)
    skillsState.setSkills(prevState => response)
    setIsLoading(prevState => false)
}

  return (
    <StyledLayout grid>
      {
        isLoading
        ? <h1>Loading...</h1>
        : skillsState.skills.length>0? skills : <h2>No skills published</h2>
    }
    </StyledLayout>
  )
}

export default SkillList