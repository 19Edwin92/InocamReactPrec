import { css, styled } from "styled-components";

// 상속할 css 메서드 목록 
export const Flex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Layout = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  overflow: auto;
`;

const Linner = styled.section`
  padding: ${({$padding}) => $padding};
`

const Header = styled.header`
  ${Flex}
  height: 50px;
  border-bottom: 1px solid #ddd;
  padding: 0 12px;
`;

const HeaderSectionL = styled.section`
  ${Flex}
  justify-content: start;
  flex: 1 1 0;
  padding: 20px;
  font-size: 1.5rem;
  font-weight: 800;
  ${({ type }) =>
    type === "button" &&
    css`
      cursor: pointer;
    `}
`;

const HeaderSectionR = styled(HeaderSectionL)`
  justify-content: end;
`;

const HomeActicle = styled.article`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  height: 50px;
  border: 1px solid orange;
  margin: 10px 0;
  border-radius: 10px;
  ${Flex}

  ${({ type }) =>
    type === "button" &&
    css`
      cursor: pointer;
    `}

  &:hover {
    color: white;
    background-color: orange;
  }
`;

export { 
  Layout, 
  Linner,
  Header, 
  HeaderSectionL, 
  HeaderSectionR, 
  HomeActicle 
};
