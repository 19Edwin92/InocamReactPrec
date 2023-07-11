import { css, styled } from "styled-components"

const HomeLayout = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 0 auto;
  border: 1px solid black;
`

const Header = styled.header`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderSectionL = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: start;
  align-items: center;
  flex: 1 1 0;
  padding: 20px;
  font-size: 2rem;
  font-weight: 800;
  ${({type}) => type === "button" && css`
    cursor: pointer;
  `}
`

const HeaderSectionR = styled(HeaderSectionL)`
  justify-content: end;
`

const HomeActicle = styled.article`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border: 1px solid orange;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({type}) => type === "button" && css`
    cursor: pointer;
  `}

  &:hover {
    color: white;
    background-color: orange;
  }
`

export { HomeLayout, Header, HeaderSectionL, HeaderSectionR, HomeActicle, }