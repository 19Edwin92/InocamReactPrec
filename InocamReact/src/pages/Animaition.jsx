import React, { useRef, useState } from "react";
import { css, styled, keyframes } from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Backgroung from '../img/conam/bikebg.png'
import Bike from '../img/conam/bike.png'
import Tire from '../img/conam/tire.png'
import Train from '../img/train.gif'
import * as Code from "../components/codeBlock";

function Animaition() {
  const inputRef = useRef(null);
  const [value, setValue] = useState("");

  const [animateStripe, setAnimateStripe] = useState(false);
  const [animateTransform, setAnimateTransform] = useState(false);
  const [increaseImg, setIncreaseImg] = useState(false);
  const [circle, setCircle] = useState(false);

  const handleClick = () => {
    setAnimateStripe(pre => !pre);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>CSS 속성을 활용한 애니메이션 input</h2>
      <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            children={Code.codeBlock1}
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
            children={Code.codeBlock2}
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
            children={Code.codeBlock3}
          />}/>

          {/* {/* 배경이 흐르는 듯한 이미지 */}
          <h2>배경이 흐르는 듯한 이미지 만들기 </h2>
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
            children={Code.codeBlock4}
          />
        }/>

    <h2>Transform 다루기 </h2>
    아래 숫자를 클릭하세요.
    <Container>
      <Stripe $animate={animateStripe} onClick={handleClick}>
        0123456789
      </Stripe>
    </Container>

    <h2>Transform 베어링 곡선에 대한 이해</h2>
    <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            size="half"
            children={Code.codeBlock5}
          />}/>

    <p>위에서 지정한 속성은 각각 cubic-bezier(P1, P2, P3, P4)의 좌표를 가리킨다. </p>
    <li>P1 : x1, y1</li>
    <li>P2 : x2, y2</li>
    <li>P3 : x3, y3</li>
    <li>P4 : x4, y4</li>
    <p>(0,0,1,1)의 사례에서 P1(0,0)는 전환의 시작점을 나타내며, 0초 및 0 출력의 값이 설정된다. P2 제어점이 P1과 동일하기에 곡선에 영향을 주지 못한다. P3는 트랜지션의 끝점을 나타내며 5초 및 1출력의 값을, P4는 P3과 동일하기에 곡선에 영향을 주지 않는다. 정리하면, Y축의 범위가 0~1이므로 시간이 0~5초로 진행함에 따라 트랜지션의 출력값이 점차 0~1로 변경되며, 일정한 속도를 나타낸다.</p>
    <p>(0,0.5,0.5,1)의 사례는 P1에서 0초 및 0출력값을 가진다. P2는 P1과 비교했을 때 P2(0, 0.5)로 출력 값의 절반에 2.5초 만에 도달한다. P3은 트랜지션의 끝점을 나타내는데, 5초 출력 1 출력을 나타내며, 남은 시간 동안 점차로 느려지며 동작한다. 정리하면, P2로 인해 중간점 값을 향해 빠르게 진행하여 상대적으로 빠르게 느껴지지만, 시간이 지남에 따라 점차 전환 속도가 느려지고, 최종 위치까지 천천히 이동하는 것이다.</p>

    <h3>(1) 일정한 속도로 개체 이동시키기(cubic-bezier(0,0,1,1))</h3>
    <TransformImg src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>

    <h3>(2) 처음 절반 위치까지 빠르게 그 뒤엔 점차 느리게(cubic-bezier(0,0.5,0.5,1))</h3>
    <TransformImg2 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>
    <h3>(3-1) 내장된 설정: ease(0.25, 0.1, 0.25, 1) : 중앙에서 빠르게 </h3>
    <TransformImg3 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>
    <h3>(3-2) 내장된 설정: ease-in(0.42, 0, 1, 1) : 점점 빠르게 </h3>
    <TransformImg4 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>
    <h3>(3-3) 내장된 설정: ease-out(0, 0, 0.58, 1) : 빠르다 점점 느리게 </h3>
    <TransformImg5 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>
    <h3>(3-4) 내장된 설정: ease-in-out(0.42, 0, 0.58, 1) : 느리게 시작하며 점점 속도를 높이다가 끝에서 느리게 </h3>
    <TransformImg6 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>
    <h3>(4) 베어링 곡선을 이용하면, 그림이 정상 번위를 벗어나게 만들수도 있다. (-.5, -1, 0.5, 2) </h3>
    <TransformImg7 src={Train} alt="트렌지션 연습하기" onClick={()=> setAnimateTransform(pre => !pre)} $animateTransform={animateTransform}/>

    <h2>Transform translate와 transition에 대해서</h2>
    앞에서 보았던, 숫자가 자연스럽게 이동하는 사례를 보았다면, 마치 1초마다 움직이는 것 처럼 구현해보자. 
    <StyledSyntaxHighlighter
        children={
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            size="half"
            children={Code.codeBlock6}
          />}/>

    <Container>
      <Stripe2 $animate={animateStripe} onClick={handleClick}>
        0123456789
      </Stripe2>
    </Container>
    <p>animateStripe의 상태가 변경되면, transform으로 설정된 값에 따라 숫자가 동작하게 된다. " steps(9, start) "에 따라서 전체 프로세스가 9단계로 나눠 적용되되 10%씩 진행될 것이다. 이때 시간 간격도 9초로 설정해 놓음으로 1초 간격으로 숫자가 증가하게 된다.</p>
    <p>여기서 "start"는 시작되면서, "end"는 끝지점에서 움직이는 동작의 차이를 설정할 수 있다. </p> 

    <h3>과제가 주어졌다. 이미지를 클릭하면, 40x24에서 400x240px이 되는 과제이다.</h3>
    <IncreaseImg src="https://en.js.cx/clipart/flyjet.jpg" alt="비행기 예제" $increaseImg={increaseImg} onClick={()=> setIncreaseImg(pre=>!pre)}/>
    <h3>과제가 주어졌다. 이미지를 클릭하면, 40x24에서 400x240px보다 커졌다가 해당 400x240px 되는 과제이다.</h3>
    <IncreaseImg2 src="https://en.js.cx/clipart/flyjet.jpg" alt="비행기 예제" $increaseImg={increaseImg} onClick={()=> setIncreaseImg(pre=>!pre)}/>
    <br/>
    <h3>200px의 빨간 원만들기</h3>
    <button onClick={()=> setCircle(pre => !pre)}>원만들기 버튼</button>
    
    <StyledSyntaxHighlighter
        children={<>
          <CircleDiv $circle={circle}/>
          <CircleDiv2 $circle={circle}/>
          <SyntaxHighlighter
            language="javascript"
            style={coldarkDark}
            size="half"
            children={Code.codeBlock7}
          />
          </>}/>

    <Bottom />
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

const Bottom = styled.div`
  margin-bottom: 100px;
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
  position: relative;
  overflow: hidden;
  width: 800px;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 0.8rem;
  overflow: hidden;
`;

const moveAnimation = keyframes`
  0% {transform: translate(0);}
  100% {transform: translate(-100%);}
`

const Container = styled.div`
  width: 0.5em;
  overflow: hidden;
  font: 32px monospace;
  cursor: pointer;
`;

const Stripe = styled.div`
  display: inline-block;
  transition-property: transform;
  transition-duration: 9s;
  transition-timing-function: linear;

  ${({$animate}) => $animate && css`
    animation: ${moveAnimation} 9s linear infinite;
  `}
`;

const Stripe2 = styled.div`
  display: inline-block;

  ${({$animate}) => $animate && css`
    transform: translate(-90%);
    transition-property: transform;
    transition-duration: 9s;
    transition-timing-function: steps(9, start)
  `}
`

const TransformImg = styled.img`
  position: relative;
  cursor: pointer;
  width: 177px;
  height: 160px;
  left: ${({$animateTransform}) => $animateTransform ? "450px" : "0"};
  transition: left 5s cubic-bezier(0,0,1,1); 
`

const TransformImg2 = styled(TransformImg)`
  transition: left 5s cubic-bezier(0,0.5,0.5,1); 
`

const TransformImg3 = styled(TransformImg)`
  transition: left 5s ease; 
`
const TransformImg4 = styled(TransformImg)`
  transition: left 5s ease-in; 
`

const TransformImg5 = styled(TransformImg)`
  transition: left 5s ease-out; 
`

const TransformImg6 = styled(TransformImg)`
  transition: left 5s ease-in-out; 
`
const TransformImg7 = styled(TransformImg)`
  transition: left 5s cubic-bezier(0.5, -1, 0.5, 2); 
`

const IncreaseImg = styled.img`
  width: 40px;
  height: 24px;
  transition: all 3s linear;

  ${({$increaseImg}) => $increaseImg && css`
    width: 400px;
    height: 240px;
  `}

`

const IncreaseImg2 = styled.img`
  width: 40px;
  height: 24px;
  transition: all 3s cubic-bezier(0.25, 1.5, 0.75, 1.5);

  ${({$increaseImg}) => $increaseImg && css`
    width: 400px;
    height: 240px;
  `}
`

const CircleDiv = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 0px;
  height: 0px;
  border-radius: 50%;
  transition: all 2s; // all은 transition-property 에 입력한 모든 속성을 지칭할 수 있다. 
  background-color: red;

  ${({$circle}) => $circle && css`
    margin-top: 30px;
    width: 200px;
    height: 200px
    
  `}
`

const CircleDiv2 = styled(CircleDiv)`
  margin-top: 0;
  top: 0;
  right: 0;
  background-color: #0000ffa7;
  transform: translate(25%, -25%);
  ${({$circle}) => $circle && css`
    width: 300px;
    height: 300px
    
  `}
`