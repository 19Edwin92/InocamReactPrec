import { styled } from "styled-components";
import { Flex } from "../../styled";

const TiTle = styled.div`
  font-size: ${({$size}) => `${$size}px`};
  color: ${({color}) => color};
  font-weight: ${({$fw}) => $fw};
`

const HomeList = styled.div`
  ${Flex};
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 120px;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 1px;
  }
`

export { TiTle, HomeList }