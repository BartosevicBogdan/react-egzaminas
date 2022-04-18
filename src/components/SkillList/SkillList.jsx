
import { useState, useEffect } from 'react';
import { pull_Skills } from '../../logic/fetch';
import Skill from '../Skill/Skill';
import StyledLayout from './../styled-components/StyledLayout';
const SkillList = ({skillsState, setChangeSkillId, ModalScreenState, refreshSkillsState}) => {

    // const [skills, setSkills] = useState([])
    const [skills, setSkills] = useState([])

    function renderItems() {
      setSkills(prevState => skillsState.skills.map(item => <Skill key={item.id} setChangeSkillIdFn={setChangeSkillId} refreshSkillsState={refreshSkillsState}  ModalScreenState={ModalScreenState} {...item} /> ))
    }
    useEffect(() => {
      fetch()
    }, [])

    useEffect(() => {

      // skillsState.setSkills(prevState => skillsState.skills)
      renderItems()
      console.log('skillsState.skills, ', skillsState.skills)
      console.log('skills, ', skills)
      console.log('veikia useEffect')
    }, [refreshSkillsState.refreshSkills])

    
    async function fetch(){
    const response = await pull_Skills();
    console.log(response)
    skillsState.setSkills(prevState => response)
}



  return (
    <StyledLayout grid>
        {/* {skillsState.skills.map(item => <Skill key={item.id} setChangeSkillIdFn={setChangeSkillId}  ModalScreenState={ModalScreenState} {...item} /> )} */}
        {skills}
    </StyledLayout>
  )
}

export default SkillList