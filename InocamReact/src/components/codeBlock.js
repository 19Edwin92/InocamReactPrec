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

const codeBlock5 = `
  const TransformImg = styled.img\`
    position: relative;
    cursor: pointer;
    width: 177px;
    height: 160px;
    left: \${({$animateTransform}) => $animateTransform ? "450px" : "0"};
    transition: left 5s cubic-bezier(0, 0, 1, 1);
  \`
`

const codeBlock6 = `
const Stripe2 = styled.div\`
  display: inline-block;

  \${({$animate}) => $animate && css\`
    transform: translate(-90%);
    transition-property: transform;
    transition-duration: 9s;
    transition-timing-function: steps(9, start)
  \`}
\`
`

const codeBlock7 = `
const CircleDiv = styled.div\`
  width: 0px;
  height: 0px;
  border-radius: 50%;
  transition: all 2s; // all은 transition-property 에 입력한 모든 속성을 지칭할 수 있다. 
  background-color: red;

  \${({$circle}) => $circle && css\`
    margin-top: 30px;
    width: 200px;
    height: 200px
    
  \`}
\`
`

  export {codeBlock1, codeBlock2, codeBlock3, codeBlock4, codeBlock5, codeBlock6, codeBlock7}