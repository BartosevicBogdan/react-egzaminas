import styled from "styled-components"

const StyledGrid=styled.div`
    max-width: 100%;
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-auto-rows: 1fr
`
const StyledFlex=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    
`
const StyledLayout = ({children, ...props}) => {
  return (
    <>
    {props.grid && <StyledGrid>{children}</StyledGrid>}
    {props.flex && <StyledFlex>{children}</StyledFlex>}
    </>
  )
}

export default StyledLayout