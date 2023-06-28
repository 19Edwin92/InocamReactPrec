import styled, { css } from "styled-components";

const StyledHeader = styled.div`
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  div {
    display: flex;
    align-items: center;
    font-size: 2rem;
  }

  div:nth-child(2) {
    justify-content: end;
  }
`;

const Form = styled.form`
  box-sizing: content-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;

  input {
    display: block;
    width: 100%;
  }
`;

const Layout = styled.div`
  box-sizing: content-box;
  min-width: 800px;
  width: 1200px;
  margin: 0 auto;
`;

const TodoBoxLayout = styled.div`
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
`;

const TodoBox = styled.div`
  box-sizing: content-box;
  padding: 0 1rem;
  width: 300px;
  height: 200px;
  border: 2px solid teal;
  border-radius: 10px;
  margin: 0 1rem;
`;

const TodoState = styled.div`
  margin: 20px 0;
  font-size: 1.5rem;
`;

const TodoTitle = styled.p`
  font-weight: 800px;
  font-size: 1.3rem;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ $titlecss }) =>
    $titlecss === "index" &&
    css`
      text-align: justify;
      &:hover {
        background-color: #fca391;
      }
    `}
`;

const TodoContent = styled.p`
  height: 2.3rem;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const TodobtnLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;

const Button = styled.div`
  cursor: pointer;
`;

const TodoBtn = styled(Button)`
  border: 1px solid ${({ color }) => color};
  border-radius: 10px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Detail outlet index
const ContentLayout = styled.div`
  height: 150px;
  overflow-y: scroll;
`;

const DetailContent = styled.div`
  word-wrap: break-word;
`;

const IndexLayout = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 4px;
`;

export {
  StyledHeader,
  Form,
  Layout,
  TodoBoxLayout,
  TodoBox,
  TodoState,
  TodoTitle,
  TodoContent,
  TodobtnLayout,
  Button,
  TodoBtn,
  ContentLayout,
  DetailContent,
  IndexLayout,
};
