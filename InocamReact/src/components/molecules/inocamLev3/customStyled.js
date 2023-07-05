import { styled, css } from "styled-components";

// -------------- // 레이아웃에 대한 설정 
const Layout = styled.div`
  display: flex;
  flex-direction: ${({direction}) => direction || "row"};
  row-gap: ${({$gap}) => $gap || "10px"};
  column-gap: ${({gap}) => gap || "10px"};
`;

// -------------- // 공유버튼
const StBtn = styled.button`
  border: none;
  border-radius: 8px;
  padding: 3px 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({color, theme}) => color === "pink"
  ? css`
      color : ${theme.color.fontPink};
      background-color : ${theme.color.pink};
      &:active {
        background-color:${theme.color.activePink};
      }
    `
  : color === "blue"
  ? css`
      color : ${theme.color.fontBlue};
      background-color : ${theme.color.blue};
      &:active {
        background-color:${theme.color.activeBlue};
      }
    `
    
  : css`
      background-color : ${theme.color.green};
      &:active {
        background-color :${theme.color.activeGreen} 
      }
    `
  }

  ${({ type, theme }) => {
    switch (type) {
      case "primary":
        return css`
          background-color: transparent;
          border: 3px solid
            ${({ color }) =>
              color === "pink" ? theme.color.pink : theme.color.green};
          ${theme.btnsize.primary}
          &:active {
            background-color: lightgray;
          }
        `;
      case "medium":
        return css`
          ${theme.btnsize.medium}
        `;
      default:
        return css`
          ${theme.btnsize.small}
        `;
    }
  }}
`;


const ModalOut = styled.div`
  /* position: absolute; */
  position: fixed;
  left: 0;
  top:0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(221, 221, 221, 0.8);;
`

const ModalLine = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 24px;
  border-radius: 12px;
  z-index: 2;
  transform: translate(-50%, -50%);
  background-color: white;

  ${({type, theme}) => type === "primary"
      ? css`${theme.modalsize.primary}`
      : css`${theme.modalsize.medium}`
  }
`

const ModalBtnLayout = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  gap:4px;
`

const ModalCloseBtn = styled.div`
  border: 1px solid rgb(221, 221, 221);
  background-color: lightgray;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: 'X';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
const Dot = styled.div`
  position: absolute;
  width: 4px;
  height:4px;
  top: 0;
  right: 1px;
  border-radius: 50%;
  background-color: red;
`

const BellIncon = styled.div`
  width:fit-content;
  position:relative;
  color:black;
  display:inline-block; 
`

const SelectOutLine = styled.div`
  position: relative;
`

const SelectLayout = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 50px;
  margin-bottom: 300px;
`;

const Select = styled.div`
`;

const SelectBtn = styled.div`
  width: 300px;
  height: 40px;
  padding: 0px 28px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgb(221, 221, 221);
`;

const SelectModal = styled.div`
  position: ${({$position}) => $position ? $position : "relative"};
  top: ${({$position}) => $position ? "120px" : "10px"};
  border: 1px solid rgb(238, 238, 238);
  border-radius: 12px;
  width: 300px;
  overflow: hidden;
`;

const SelectModalBtn = styled.div`
  font-size: 12px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 12px;
  height: 40px;
  background-color:white;
  &:hover {
    background-color: rgb(221, 221, 221);;
  }
`;

export {Layout, StBtn, ModalOut, ModalLine, ModalBtnLayout, ModalCloseBtn, Dot, BellIncon, SelectOutLine, Select, SelectLayout, SelectBtn, SelectModal,SelectModalBtn}