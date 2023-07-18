import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";



function Interactive() {
  const scrollSection1 = useRef(null);
  const scrollSection2 = useRef(null);
  const scrollSection3 = useRef(null);
  const scrollSection4 = useRef(null);

  const scrollSection1Msg1 = useRef(null);
  const scrollSection1Msg2 = useRef(null);
  const scrollSection1Msg3 = useRef(null);
  const scrollSection1Msg4 = useRef(null);

  const scrollSection1Msg5 = useRef(null);
  const scrollSection1Msg6 = useRef(null);
  const scrollSection1Msg7 = useRef(null);

  const [count, setCount] = useState(0)

  // 변수 모음공간
  let yoffset = 0 // window.pageYOffset 대신 사용할 변수
  let preScrollHeigth = 0 // 상위에 있는 섹션들의 스크롤의 합
  let currentScene = 0 // 현재 뷰포트에 등장한 section
  let enterNewScene = false; // 새로운 씬에 진입하는 순간 true
  

  /* 섹션2 : 스크롤을 담은객체를 생성합니다. */ 
  const screnInfo = [
    {
      //scrollSection1
      type:"sticky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight를 세팅, 페이지를 연 디바이스 별로 대응하기 위함입니다. 
      scrollHeight : 0,
      objs : {
        contaniner : scrollSection1,
        Section1Msg1: scrollSection1Msg1,
        Section1Msg2 : scrollSection1Msg2,
        Section1Msg3 : scrollSection1Msg3,
        Section1Msg4 : scrollSection1Msg4,
      },
      values : {
        selectionMsgA_opacity : [0 ,1, {start: 0.1, end:0.2}], // const calcValues 에서 계산하기 위해서 // 최고값이 700이 되도록 // [200, 900] 예제를 바르게 [0, 1]로 고쳐봅시다. 
        selectionMsgA_opacity_out : [1 ,0, {start: 0.25, end:0.3}],
        selectionMsgB_opacity : [0 ,1, {start: 0.3, end:0.4}], // 메시지가 등장할 타이밍을 정해줍니다. 
        selectionMsgB_opacity_out : [1 ,0, {start: 0.45, end:0.5}],
        selectionMsgC_opacity : [0 ,1, {start: 0.5, end:0.6}],
        selectionMsgC_opacity_out : [1 ,0, {start: 0.65, end:0.7}],
        selectionMsgD_opacity : [0 ,1, {start: 0.7, end:0.8}],
        selectionMsgD_opacity_out : [1 ,0, {start: 0.85, end:0.9}],

        selectionMsgA_translateY : [20 ,0, {start: 0.1, end:0.2}],
        selectionMsgA_translateY_out : [0, -20, {start: 0.25, end:0.3}],
        selectionMsgB_translateY : [20 ,0, {start: 0.3, end:0.4}],
        selectionMsgB_translateY_out : [0, -20, {start: 0.45, end:0.5}],
        selectionMsgC_translateY : [20 ,0, {start: 0.5, end:0.6}],
        selectionMsgC_translateY_out : [0, -20, {start: 0.65, end:0.7}],
        selectionMsgD_translateY : [20 ,0, {start: 0.7, end:0.8}],
        selectionMsgD_translateY_out : [0, -20, {start: 0.85, end:0.9}],
      } 
    },
    {
      //scrollSection2
      type:"normal",
      heightNum: 5, 
      scrollHeight : 0,
      objs : {
        contaniner : scrollSection2
      } 
    },
    {
      //scrollSection3
      type:"sticky",
      heightNum: 5, 
      scrollHeight : 0, 
      objs : {
        contaniner : scrollSection3,
        Section1Msg5 : scrollSection1Msg5,
        Section1Msg6 : scrollSection1Msg6,
        Section1Msg7 : scrollSection1Msg7,
      },
      values : {
        selectionMsgA_opacity : [0 ,1, {start: 0.1, end:0.2}], 
        selectionMsgA_opacity_out : [1 ,0, {start: 0.25, end:0.3}],
        selectionMsgA_translateY : [20 ,0, {start: 0.1, end:0.2}],
        selectionMsgA_translateY_out : [0, -20, {start: 0.25, end:0.3}],

        pinB_scaleY: [0.5, 1, {start:0.5, end: 0.55}], 
        pinB_opacity : [0,1, {start:0.5, end:0.55}],
        pinB_opacity_out : [1,0, {start:0.58, end:0.63}],

        pinC_scaleY: [0.5, 1, {start:0.72, end: 0.77}],
        pinC_opacity : [0,1, {start:0.72, end:0.77}],
        pinC_opacity_out : [1,0, {start:0.85, end:0.9}],
      }
    },
    {
      //scrollSection4
      type:"normal",
      heightNum: 5, 
      scrollHeight : 0, 
      objs : {
        contaniner : scrollSection4
      }
    }
  ]

  const setLayout = () => {
    // 각 스크롤섹션의 높이 설절
    for (let i =0; i< screnInfo.length; i++) {
      if(screnInfo[i].type === 'sticky') {
        screnInfo[i].scrollHeight = screnInfo[i].heightNum * window.innerHeight;
      } else if (screnInfo[i].type === 'normal') {
        // console.log(screnInfo[i].objs.contaniner)
        screnInfo[i].scrollHeight = screnInfo[i].objs.contaniner.current.offsetHeight
      }
      screnInfo[i].objs.contaniner.current.style.height = `${screnInfo[i].scrollHeight}px` // 마진과 페딩값에 의해서 가변될 수 있다. 
    }

    // screnInfo[i].scrollHeight = screnInfo[i].heightNum * window.innerHeight;
    // screnInfo[i].objs.contaniner.current.style.height = `${screnInfo[i].scrollHeight}px` // 마진과 페딩값에 의해서 가변될 수 있다. 


    // 새로고침시 대응하도록
    let totalScrollHeight = 0
    for (let i =0; i< screnInfo.length; i++) {
      totalScrollHeight += screnInfo[i].scrollHeight
      if ( totalScrollHeight >= window.scrollY) {
        currentScene = i
        break;
      }
    }
    setCount(currentScene);
  }

  const calcValues = (value, currenYoffset) => {
    // console.log("calcValues-value", value);
    let rv
    // 섹션의 각 메시지에 대한 애니메이션을 지정할 부분입니다. 
    const scrollHeight = screnInfo[currentScene].scrollHeight
    let scrollRatio = currenYoffset/ scrollHeight; // 현재 섹션 대비, 스크롤된 곳 
    if (value.length === 3) {
      // start ~ ens 사이에 실행
      const partScrollStart = value[2].start * scrollHeight;
      const partScrollEnd = value[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart; 
      if(currenYoffset >= partScrollStart && currenYoffset <= partScrollEnd) {
        rv = (currenYoffset - partScrollStart) / partScrollHeight * (value[1] - value[0]) + value[0] 
      } else if (currenYoffset < partScrollStart) {
        rv = value[0]
      } else if ( currenYoffset > partScrollEnd ) {
        rv = value[1]
        // console.log("selectionMsg_opacity", value[1]);
      } 
    } else {
      rv = scrollRatio * (value[1] - value[0]) + value[0] // 0~700 사이가 나올 겁니다. // 그런데 초기값을 위해서  + value[0] 를 통해서 다시 더해줄 수 있습니다. 
    }
    
    // 현재신의 처음부터 끝까지를 분기처리 해주겠습니다. 
    return rv
  }

  const playAnimation = () => {
    // 스크롤될 때, 
    const values = screnInfo[currentScene].values
    const obj = screnInfo[currentScene].objs
    const currentYoffset = yoffset - preScrollHeigth; // 각 섹션의 현재 위치 값 구하기 
    const scrollHeight = screnInfo[currentScene].scrollHeight
    const scrollRatio = currentYoffset / scrollHeight // yoffset / scrollHeight
    console.log(`currentScene ${currentScene}, ${currentYoffset}px` );
    // console.log(`yoffset ${yoffset}, "preScrollHeigth", ${preScrollHeigth}px \n screnInfo[currentScene].scrollHeight : ${scrollHeight}` );
    switch (currentScene) {
      case 0 :
        // let selectionMsgA_opacity = calcValues(values.selectionMsgA_opacity, currentYoffset)
        // let selectionMsgA_opacity_out = calcValues(values.selectionMsgA_opacity_out, currentYoffset)
        // let selectionMsgA_translateY = calcValues(values.selectionMsgA_translateY, currentYoffset)
        // let selectionMsgA_translateY_out = calcValues(values.selectionMsgA_translateY_out, currentYoffset)

        let selectionMsgB_opacity = calcValues(values.selectionMsgB_opacity, currentYoffset)
        let selectionMsgB_opacity_out = calcValues(values.selectionMsgB_opacity_out, currentYoffset)
        let selectionMsgB_translateY = calcValues(values.selectionMsgB_translateY, currentYoffset)
        let selectionMsgB_translateY_out = calcValues(values.selectionMsgB_translateY_out, currentYoffset)

        let selectionMsgC_opacity = calcValues(values.selectionMsgC_opacity, currentYoffset)
        let selectionMsgC_opacity_out = calcValues(values.selectionMsgC_opacity_out, currentYoffset)
        let selectionMsgC_translateY = calcValues(values.selectionMsgC_translateY, currentYoffset)
        let selectionMsgC_translateY_out = calcValues(values.selectionMsgC_translateY_out, currentYoffset)

        let selectionMsgD_opacity = calcValues(values.selectionMsgD_opacity, currentYoffset)
        let selectionMsgD_opacity_out = calcValues(values.selectionMsgD_opacity_out, currentYoffset)
        let selectionMsgD_translateY = calcValues(values.selectionMsgD_translateY, currentYoffset)
        let selectionMsgD_translateY_out = calcValues(values.selectionMsgD_translateY_out, currentYoffset)
        
        if (scrollRatio <= 0.22) {
          obj.Section1Msg1.current.style.opacity = calcValues(values.selectionMsgA_opacity, currentYoffset)
          obj.Section1Msg1.current.style.transform = `translateY(${calcValues(values.selectionMsgA_translateY, currentYoffset)}%)`
        } else if (scrollRatio <= 0.3) {
          obj.Section1Msg1.current.style.opacity = calcValues(values.selectionMsgA_opacity_out, currentYoffset)
          obj.Section1Msg1.current.style.transform = `translateY(${ calcValues(values.selectionMsgA_translateY_out, currentYoffset)}%)`
        } else if (scrollRatio <= 0.42) {
          obj.Section1Msg2.current.style.opacity = selectionMsgB_opacity
          obj.Section1Msg2.current.style.transform = `translateY(${selectionMsgB_translateY}%)`
        } else if (scrollRatio <= 0.5) {
          obj.Section1Msg2.current.style.opacity = selectionMsgB_opacity_out
          obj.Section1Msg2.current.style.transform = `translateY(${selectionMsgB_translateY_out}%)`
        } else if (scrollRatio <= 0.62) {
          obj.Section1Msg3.current.style.opacity = selectionMsgC_opacity
          obj.Section1Msg3.current.style.transform = `translateY(${selectionMsgC_translateY}%)`
        } else if (scrollRatio <= 0.7) {
          obj.Section1Msg3.current.style.opacity = selectionMsgC_opacity_out
          obj.Section1Msg3.current.style.transform = `translateY(${selectionMsgC_translateY_out}%)`
        } else if (scrollRatio <= 0.82) {
          obj.Section1Msg4.current.style.opacity = selectionMsgD_opacity
          obj.Section1Msg4.current.style.transform = `translateY(${selectionMsgD_translateY}%)`
        } else  {
          obj.Section1Msg4.current.style.opacity = selectionMsgD_opacity_out
          obj.Section1Msg4.current.style.transform = `translateY(${selectionMsgD_translateY_out}%)`
        }
        // console.log("opacity", calcValues(values.selectionMsgA_opacity, currentYoffset))
        // console.log("stranslateY", calcValues(selectionMsgA_translateY, currentYoffset));
        break;
      case 1 :
        // console.log('playAnimation 1 play');
        break;
      case 2 :
        console.log(values)
        if (scrollRatio <= 0.22) {
          obj.Section1Msg5.current.style.opacity = calcValues(values.selectionMsgA_opacity, currentYoffset)
          obj.Section1Msg5.current.style.transform = `translateY(${calcValues(values.selectionMsgA_translateY, currentYoffset)}%)`
        } else if (scrollRatio <= 0.3) {
          obj.Section1Msg5.current.style.opacity = calcValues(values.selectionMsgA_opacity_out, currentYoffset)
          obj.Section1Msg5.current.style.transform = `translateY(${ calcValues(values.selectionMsgA_translateY_out, currentYoffset)}%)`
        } else if (scrollRatio <= 0.56) {
          obj.Section1Msg6.current.style.opacity = calcValues(values.pinB_opacity, currentYoffset)
          obj.Section1Msg6.current.style.transform = `scaleY(${calcValues(values.pinB_scaleY, currentYoffset)})`
        } else if (scrollRatio <= 0.7) {
          obj.Section1Msg6.current.style.opacity = calcValues(values.pinB_opacity_out, currentYoffset)
        } else if (scrollRatio <= 0.8) {
          obj.Section1Msg7.current.style.opacity = calcValues(values.pinC_opacity, currentYoffset)
          obj.Section1Msg7.current.style.transform = `scaleY(${calcValues(values.pinC_scaleY, currentYoffset)})`
        } else {
          obj.Section1Msg7.current.style.opacity = calcValues(values.pinC_opacity_out, currentYoffset)
        }

        // console.log('playAnimation 2 play');
        break;
      case 3 :
        // console.log('playAnimation 3 play');
        break;
      default :
    }

  }

  const scrollLoop = () => {
    // console.log("yoffset", yoffset, `\n`, `\n`, `  windoeInnerHeight : ${window.innerHeight * 5}`,`screnInfo[i].scrollHeight ${screnInfo[currentScene].scrollHeight}`, `\n`, `  currentScene : ${currentScene}` );
    // console.log("scrollSection2 섹션의 내부 높이", scrollSection2.current.offsetHeight, "상단으로부터의 높이", scrollSection2.current.offsetTop);
    // console.log("scrollSection3 섹션의 내부 높이", scrollSection3.current.offsetHeight, "상단으로부터의 높이", scrollSection3.current.offsetTop);
    // console.log("scrollSection4 섹션의 내부 높이", scrollSection4.current.offsetHeight, "상단으로부터의 높이", scrollSection4.current.offsetTop);
    // console.log(window.pageYOffset);  // 화면에 스크롤 위치가 표시됩니다. 
    // 몇번째 section이냐? 



    enterNewScene = false
      preScrollHeigth = 0
      for (let i = 0; i < currentScene; i++) {
      preScrollHeigth += screnInfo[i].scrollHeight;
    }
    // if(currentScene < 4 && yoffset > preScrollHeigth + screnInfo[currentScene].scrollHeight + (462.8 * (currentScene+1)) ) {
    // 실제는 3980 이지만, 마진을 포함한 다양한 속성들 때문에 내용이 추가되어 4391로 각 preScrollHeigth의 높이가 증가된 것을 볼 수 있다. 
    // 이는 강의를 따라 했지만, 전역에 설정한  box-sizing: border-box; 가 적용되지 않았던 문제 때문이다. 
    if(currentScene < 4 && yoffset > preScrollHeigth + screnInfo[currentScene].scrollHeight) {  
      enterNewScene = true
      currentScene++
     }
    // if (currentScene > 0 && yoffset < preScrollHeigth+(471 * (currentScene))) {
    if (currentScene > 0 && yoffset < preScrollHeigth) {  
      enterNewScene = true
      currentScene--
    }
    if (enterNewScene) return // 신이 변경될 때의 찰나를 제어할 수 있습니다. 

    playAnimation()
  }

  useEffect(()=> {
    setLayout()

    window.addEventListener('scroll', ()=> {
      // 스크롤은 복잡하기에, 여러 함수들이 기록될 것입니다.
      yoffset = window.scrollY  // pageYOffset 현재 사용되지 않음
      scrollLoop()
      setCount(currentScene);
    })
    window.addEventListener('load', setLayout); // 새로고침시에도 대응할 수 있도록 
    window.addEventListener('resize', setLayout);

    return () => {
      window.removeEventListener('resize', setLayout);
    }
  },[currentScene])

  
  return (
    <Container>
      {/* 헤더 부분 */}
      <GlobalNav>
        <GlobalNav>
          <GlobalNavLink>
            <GlobalNavItem href="#" children="Rooms" />
            <GlobalNavItem href="#" children="ideas" />
            <GlobalNavItem href="#" children="Stores" />
            <GlobalNavItem href="#" children="contact" />
          </GlobalNavLink>
        </GlobalNav>
      </GlobalNav>
      <LocalNav>
        <LocalNavLinks>
          <ProductName href="#" children="AirMug Pro" />
          <LocalNavLinksA href="#" children="개요" />
          <LocalNavLinksA href="#" children="제품사양" />
          <LocalNavLinksA href="#" children="구입하기" />
        </LocalNavLinks>
      </LocalNav>

{/* 인터렉션 부분 scrollSection1 */}
      <ScrollSection ref={scrollSection1} >
        <ScrollSectionH1>AirMug Pro</ScrollSectionH1>
        <MainMsg $state={count === 0} ref={scrollSection1Msg1}>
          <p>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </MainMsg>
        <MainMsg $state={count === 0} ref={scrollSection1Msg2}>
          <p>
            주변 맛을 느끼게 해주는
            <br />
            주변 맛 허용 모드
          </p>
        </MainMsg>
        <MainMsg $state={count === 0} ref={scrollSection1Msg3}>
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </MainMsg>
        <MainMsg $state={count === 0} ref={scrollSection1Msg4}>
          <p>
            새롭게 입가를
            <br />
            찾아온 매혹{" "}
          </p>
        </MainMsg>
      </ScrollSection>

{/* 인터렉션 부분 scrollSection2 */}
      <ScrollSection ref={scrollSection2} >
        <Desc >
          <strong>보통스크롤 영역</strong>
          {/* lorem200 엔터를 치면 가짜텍스트가 입력됩니다.  */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          sapiente incidunt vitae! Itaque enim libero eum obcaecati debitis,
          optio, officia commodi nesciunt perspiciatis vero velit nostrum
          quidem, repellat beatae praesentium assumenda qui. Possimus laborum
          repellendus quod labore sit nihil reiciendis sequi odit officiis est.
          In cum velit mollitia impedit tempore reprehenderit eligendi suscipit.
          Error animi incidunt architecto provident quos tempora expedita sequi
          voluptate consequatur et praesentium natus facere laborum at dolorum
          id recusandae, minima amet perferendis deleniti eveniet esse,
          voluptatum possimus voluptates! Nisi alias, possimus repudiandae,
          totam, voluptatum voluptas quia et quae accusantium id enim. Ut
          molestias sed quidem sunt. Esse saepe nobis assumenda! Enim, facilis
          ullam voluptates explicabo eius cum aliquam rerum, quo vel velit ex
          molestias officiis alias perspiciatis harum labore possimus
          necessitatibus voluptate ad blanditiis tempora dolor. Iure iste dolor
          unde esse nobis dignissimos non ut repudiandae minima, consequatur
          possimus laudantium asperiores voluptatem perferendis accusamus,
          ducimus repellat! Iusto libero fuga, debitis saepe rem similique
          excepturi eius, ex repellat sequi corrupti. Earum iste quod nihil
          illo, animi laudantium, minus unde incidunt, natus quam sit? Repellat
          nesciunt laborum sequi earum eum quidem alias sunt ipsam, quam ratione
          asperiores eius nostrum veritatis saepe aperiam assumenda commodi
          debitis tenetur odio amet.
        </Desc>
      </ScrollSection>

{/* 인터렉션 부분 scrollSection3 */}
      <ScrollSection ref={scrollSection3}>
        <MainMsg ref={scrollSection1Msg5} $state={count === 2}>
          <Desc2>
            <small>편안한 촉감</small>
            입과 하나 되다.
          </Desc2>
        </MainMsg>
        <DescMsg ref={scrollSection1Msg6} $state={count === 2}>
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성를, 우리는 이를 하나하나
            새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug
            Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이
            당신과 음료만 남게 되죠.
          </p>
          <Pin />
        </DescMsg>
        <DescMsg2 ref={scrollSection1Msg7} $state={count === 2}>
          <p>
            디자인 앤 퀼리티 오브 스웨덴, <br /> 메이드 인 차이나
          </p>
          <Pin />
        </DescMsg2>
      </ScrollSection>

{/* 인터렉션 부분 scrollSection4 */}
      <ScrollSection ref={scrollSection4}>
        <MinMessege>
          <strong>Retina 머그</strong><br/>
          아이디어를 광활하게 펼칠 <br /> 아름답고 부드러운 음료 공간.
        </MinMessege>
        <CavasCapthion>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
          doloremque! Impedit hic accusamus ducimus iusto iure deleniti,
          sapiente id adipisci exercitationem aliquid, explicabo ad earum ipsam
          culpa. Est mollitia consequuntur nesciunt enim praesentium? Eligendi
          magni autem doloremque rerum delectus sunt, libero ad est, illum iure
          doloribus aliquid nobis? Inventore ex, molestiae, laboriosam
          voluptatibus iure eum ratione totam nostrum repudiandae sed at,
          reprehenderit dolores? Soluta repellendus quae necessitatibus tenetur,
          sit sapiente provident in, veritatis magni earum nemo expedita, porro
          sunt inventore. Quaerat ab optio dolores accusantium nemo provident
          tempora veniam neque ducimus. Soluta voluptate velit iusto? Blanditiis
          voluptates quas ad quaerat, ea voluptate exercitationem. Quam deleniti
          facilis voluptate, id recusandae consequuntur quod tempora eum amet,
          fugiat omnis nihil! Perferendis expedita saepe voluptatem ratione
          voluptates, vel, quis iste eos consequatur quo non? Eius quidem
          quisquam quasi repellendus quo nisi at quas? Distinctio voluptate et
          eligendi tenetur nisi sapiente, error magni laborum voluptatibus. Illo
          et sit facilis fugiat vero nesciunt enim molestiae laborum alias ex,
          aliquid magnam veritatis quas corporis ratione dolor! Molestiae eius
          provident natus, accusamus dolorum iure dicta voluptates eos
          cupiditate maiores vero quis explicabo repellendus, aut ad laudantium
          pariatur quisquam? A eius nobis odio, aliquid sed sint nisi beatae
          ducimus?
        </CavasCapthion>
      </ScrollSection>
      <Footer>2023. Edwin</Footer>
    </Container>
  );
}

export default Interactive;

/*
스크콜에 따른 비디오 같은 인터렉티브를 다뤄보겠습니다. 
1) 스크롤을 할 때 구간을 설정해야 합니다. 
  (1) 강의를 보면 4개의 구간이 설정되기에, setction  
2) 반응형을 위해서 모바일용에서 확장하기를 선호합니다.   
3) rem(14px), em(현재폰트사이즈 기준)

*/

const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;900&display=swap");
  font-family: "Noto Sans KR", sans-serif;
  font-size: 14px;
  overflow-x: hidden;
  color: rgb(29, 29, 31);
  letter-spacing: -0.05em;
  background: white;
  padding: 0;


  p {
    line-height: 1.6;
  }

  a {
    color: rgb(29, 29, 31);
    text-decoration: none;
  }


`;

const GlobalNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  padding: 0 0.5rem;

`;

const GlobalNavLink = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
`;

const GlobalNavItem = styled.a``;

const LocalNav = styled.nav`
  position: fixed;
  top: 45px;
  left: 0;
  width: 100%;
  height: 52px;
  padding: 0 1rem;
  border-bottom: 1px solid #ddd;
`;

const LocalNavLinks = styled(GlobalNavLink)`
  justify-content: start;
`;

const ProductName = styled.a`
  margin-right: auto;
  font-size: 1.4rem;
  font-weight: 900;
`;

const LocalNavLinksA = styled.a`
  margin-left: 2em;
  font-size: 0.8rem;
`;

const ScrollSection = styled.section`
  border-top: 3px solid red;
  padding-top: 50vh;
`;

const ScrollSectionH1 = styled.h1`
  font-size: 4rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 9vw;
  }
`;

// 섹션2
// position: fixed(처음부터 고정이죠) ; sticky (일정 구간에 도달하면 해당 부분에 멈춰있습니다.)
// position: fixed를 하겠다는 것은 jS제어 하겠다는 것입니다. 
// sticky는 많은 곳에서 사용하지 않고 있기에, 개발 방식이 복잡하더라도 fixed로 도전해보겠습니다. 

const StyickyElem = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left:0;
  width: 100%;
`;

const MainMsg = styled(StyickyElem)`
  display: ${({$state}) => $state ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  height: 3em;
  font-size: 2.3rem;
  margin: 10px;
  opacity: 0;
  top:35vh;

  p {
    line-height: 1.2;
    font-weight: bold;
    text-align: center;
  }

  @media (min-width: 1024px) {
    font-size: 4vw;
  }
`;

const DescMsg = styled(StyickyElem)`
  display: ${({$state}) => $state ? "block" : "none"};
  font-weight: bold;
  width: 50%;
  top:10%;
  left: 40%;

  @media (min-width: 1024px) {
    width: 20%;
    top:20%;
    left:53%;
}
`;

const DescMsg2 = styled(DescMsg)`
  top:15%;
  left:45%;
  @media (min-width: 1024px) {
    left:55%
  }

`

const Pin = styled.div`
  width: 1px;
  height: 100px;
  background: rgb(29, 29, 31);
`;

const Desc = styled.p`
  padding: 0 1rem;
  font-size: 1.2rem;
  color: #888;

  strong {
    float: left;
    margin-right: 0.2em;
    font-size: 2.8rem;
    color: rgb(29, 29, 31);
  }
  @media (min-width: 1024px) {
    margin: 0 auto;
    max-width: 1000px;
    font-size: 2rem;

    strong {
      font-size: 6rem;
    }
}
`;

const Desc2 = styled.p`
  font-size: 3.5rem;

  small {
    display: block;
    font-size: 1.2rem;
    margin-bottom: 0.5em;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;

    small {
      font-size: 1.5rem;
    }
}
`;

const MinMessege = styled.p`
  font-size: 2rem;
  padding: 0 1rem;
  color:#888;

  strong {
    color: rgb(29, 29, 31);
  }

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 4rem;

  }

`;

const CavasCapthion = styled.p`
  color:#888;
  padding: 0 1rem;
  font-size: 1.2rem;

  @media (min-width: 1024px) {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 2rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: darkorange;
  color:white;
  height: 7rem;
`;


/*
  현재 섹션이 4개입니다. 
  Timeline(scoll)에 따라 화면이 진행됩니다. 
  1) 컵과 텍스트 애니메이션 4개 
  2) 그냥 스크롤 1
  3) 컵과 설명
  4) 이미지가 크게 나오고 스크롤되면서 다른 이미지로 블랜딩되는 것 

  구간별로 정보를 설정하고 애니메이션은 실행하는 것이죠. 
  예를 들어 
  1) 0 ~ 3000px 의 비율이 있을 겁니다. 50% 과 같이 말이에요. 
  2)  애니메이션은 우리 눈에만 보이면 됩니다. 
      이를 위해서 미리 정해놓은 스크롤값에 대해서만 애니메이션 처리를 해야 합니다. 
  3) 비디오의 재생 프레임 수 등을 가지고 제어해야 합니다. 
  4) 이 정보들을 어떤 배열(arr)에 담아 놓고 제어할 것입니다. >> 핵심은 스크롤에 따른 장면을 나누고, 그 장면에 대한 애니메이션을 처리할 것입니다. 



*/