import React, { useRef, useState } from "react";
import { css, styled, keyframes } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Backgroung from '../img/conam/bikebg.png'
import Bike from '../img/conam/bike.png'
import Tire from '../img/conam/tire.png'

function Animaition() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");
  const codeBlock1 = `
  // &:focus {width: 240px} 를 활용한 애니메이션 input 
  // transition: width 0.35s linear;

  <form onSubmit={(e) => {e.preventDefault();alert(inputRef.current.value);}}>
    <AnimationInput type="text" ref={inputRef} />
  </form>

  `;

  const codeBlock2 = `
  // input(submit)에 대한 애니매이션 효과이다. 활성상태에 따른 조건부 스타일링이다.  
  // useState를 통해서 초기값이 '' 빈 문자열을 주었고, 해당 값의 !! 연산에 따라서 disabled가 결정되도록 하였다. 

  <AnimationButton disabled={!(!!value)} value={!(!!value) ? "disabled" : "Submit"} />

  // 스타일드 컴포넌트 부분은 아래와 같다. 
  const AnimationButton = styled.input.attrs((props) => ({type: "submit"}))\` 
    box-sizing: border-box;
    width: 180px;
    height: 50px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    transition: 0.35s linear;

    \${({ disabled }) => disabled === false &&  css\`
      background-color: #ffc107;
      width: 240px;
  \`};

  \`
  `;

  const codeBlock3 = `
  // transform: rotateY(180deg)을 활용한 간단한 카드 애니메이션이다.
  // transform-style: preserve-3d; 또한 해당 속성은 하위 태그에게 3D공간을 묘사하도록 한다.(아버지 컴포넌트)
  // perspective: 1000px; 이를 위해 할아버지컴포넌트(2D)에 원근감을 부여하였다.
  // backface-visibility: hidden; 뒤집힌 상태에서는 화면에 노출되지 않도록 설정하였다. 

  const CardWrap = styled.div\`
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    text-align: center;
    line-height: 400px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: .5s;
    \`

  const Card = styled.div\`
    width: 100%;
    height: 100%;
    position: absolute;
    backface-visibility: hidden;
    background: skyblue;

    \${({direction}) => direction === "back" && css\`
      background: orange;
      transform: rotateY(180deg);
      \`}
      \`

  const CardLayout = styled.div\`
      width: 300px;
      height: 400px;
      perspective: 1000px;

  &:hover \${CardWrap} {
      transform: rotateY(-180deg);
  }
  \`
  `;

  const codeBlock4 = `
  // 배경이 움직이고, 바퀴가 움직이는 것 역시 keyframes 으로 구현할 수 있다.
  const tire = keyframes\`
    0% {transform: rotate(0)}
    100% {transform:rotate(360deg)}
  \`
  const movebg =  keyframes\`
    0% {background-position: 0 center}; 
    /* 기본위치 */
    100% {background-position: -1500px center};
    /* -500px로 값이 바뀌도록 설정하였다. */
  \`
  `;

  return (
    <div style={{ padding: "20px" }}>
      <h2>CSS 속성을 활용한 애니메이션 input</h2>
      <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            children={codeBlock1}
          />
        }
      />
      <p>
        아래의 input이 <strong>focus</strong> 되면 input의 길이가 늘어날 것이다.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(value);
          setValue("");
          inputRef.current.blur();
        }}
      >
        <AnimationInput
          type="text"
          value={value}
          ref={inputRef}
          onChange={(e) => setValue(e.target.value)}
        />
        <br></br>
        <AnimationButton
          disabled={!!!value}
          value={!!!value ? "disabled" : "Submit"}
        />
      </form>
      <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            children={codeBlock2}
          />
        }
      />
      <h2>카드 뒤집기</h2>
      <CardLayout>
        <CardWrap>
            <Card>앞면</Card>
            <Card direction="back">뒷면</Card>
        </CardWrap>
      </CardLayout>
      <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            size="half"
            children={codeBlock3}
          />}/>

          {/* {/* 배경이 흐르는 듯한 이미지 */}
          <BackgroundWave>
            <BikeLayout>
              <BikeImg src={Bike} alt="bike"/>
              <TireImg1 src={Tire} alt="Tire"/>
              <TireImg2 src={Tire} alt="Tire"/>
            </BikeLayout>
          </BackgroundWave>
          <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            children={codeBlock4}
          />
        }
      />
    </div>
  );
}

export default Animaition;

const tire = keyframes`
  0% {transform: rotate(0)}
  100% {transform:rotate(360deg)}
`
const movebg =  keyframes`
  0% {background-position: 0 center}; 
  /* 기본위치 */
  100% {background-position: -1500px center};
  /* -500px로 값이 바뀌도록 설정하였다. */
`


const BikeLayout = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
`

const BikeImg = styled.img`
  position:absolute;
  top:66%;
  left:50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`

const TireImg1 = styled.img`
  position:absolute;
  bottom: 0;
  right: 25%;
  transform: translateX(-50%);
  animation: ${tire} 1s linear infinite;
`


const TireImg2 = styled.img`
  position:absolute;
  bottom: 0;
  left: 29%;
  transform: translateX(-50%);
  animation: ${tire} 1s linear infinite;
`


const BackgroundWave = styled.div`

  width: 800px;
  height: 500px;
  background: url(${Backgroung}) 0 center / 1500px repeat-x;
  /* 0 center 배경위미지의 위치 중앙정렬, 이미지 사이즈,x축에 대한 반복 */
  animation: ${movebg} 2s linear infinite ;
  /* linear 일정한 속도로, infinite 무한반복  */
`

const CardWrap = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    color: white;
    text-align: center;
    line-height: 400px;
    transform-style: preserve-3d;
    transform: rotateY(0deg);
    transition: .5s;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  background: skyblue;

  ${({direction}) => direction === "back" && css`
    background: orange;
    transform: rotateY(180deg);
  `}
`

const CardLayout = styled.div`
    width: 300px;
    height: 400px;
    perspective: 1000px;

&:hover ${CardWrap} {
    transform: rotateY(-180deg);
}
`

const AnimationInput = styled.input`
  box-sizing: border-box;
  transition: width 0.35s linear;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  width: 180px;
  background-color: #dddddd;

  &:focus {
    width: 240px;
  }
`;

const AnimationButton = styled.input.attrs(() => ({
  type: "submit",
}))`
  box-sizing: border-box;
  width: 180px;
  height: 50px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  transition: 0.35s linear;
  ${({ disabled }) =>
    disabled === false &&
    css`
      background-color: #ffc107;
      width: 240px;
    `};
`;

const StyledSyntaxHighlighter = styled.div`
  width: 800px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 0.8rem;
  overflow: hidden;
`;
