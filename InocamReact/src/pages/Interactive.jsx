import React, { useEffect, useRef, useState } from "react";
import { css, styled } from "styled-components";



function Interactive() {
  const scrollSection1 = useRef(null);
  const scrollSection2 = useRef(null);
  const scrollSection3 = useRef(null);
  const scrollSection4 = useRef(null);
  const [count, setCount] = useState(0)

  // 변수 모음공간
  let yoffset = 0 // window.pageYOffset 대신 사용할 변수
  let preScrollHeigth = 0 // 상위에 있는 섹션들의 스크롤의 합
  let currentScene = 0 // 현재 뷰포트에 등장한 section

  

  /* 섹션2 : 스크롤을 담은객체를 생성합니다. */ 
  const screnInfo = [
    {
      //scrollSection1
      type:"styicky",
      heightNum: 5, // 브라우저 높이의 5배로 scrollHeight를 세팅, 페이지를 연 디바이스 별로 대응하기 위함입니다. 
      scrollHeight : 0,
      objs : {
        contaniner : scrollSection1
      } 
    },
    {
      //scrollSection2
      type:"nomarl",
      heightNum: 5, 
      scrollHeight : 0,
      objs : {
        contaniner : scrollSection2
      } 
    },
    {
      //scrollSection3
      type:"styicky",
      heightNum: 5, 
      scrollHeight : 0, 
      objs : {
        contaniner : scrollSection3
      }
    },
    {
      //scrollSection4
      type:"nomarl",
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
      screnInfo[i].scrollHeight = screnInfo[i].heightNum * window.innerHeight;
      screnInfo[i].objs.contaniner.current.style.height = `${screnInfo[i].scrollHeight}px`
    }

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


  const scrollLoop = () => {
    // console.log(window.pageYOffset);  // 화면에 스크롤 위치가 표시됩니다. 
    // 몇번째 section이냐? 
      preScrollHeigth = 0
      for (let i = 0; i < currentScene; i++) {
      preScrollHeigth += screnInfo[i].scrollHeight;
    }
    if(currentScene < 4 && yoffset > preScrollHeigth + screnInfo[currentScene].scrollHeight + (462.8 * (currentScene+1)) ) {
      currentScene++
     }
    if (currentScene > 0 && yoffset < preScrollHeigth+(471 * (currentScene))) {
      currentScene--
    }
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
        <MainMsg $state={count === 0 && true}>
          <p>
            온전히 빠져들게 하는
            <br />
            최고급 세라믹
          </p>
        </MainMsg>
        <MainMsg $state={count === 0 && true}>
          <p>
            주변 맛으 느끼게 해주는
            <br />
            주변 맛 허용 모드
          </p>
        </MainMsg>
        <MainMsg $state={count === 0 && true}>
          <p>
            온종일 편안한
            <br />
            맞춤형 손잡이
          </p>
        </MainMsg>
        <MainMsg $state={count === 0 && true}>
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
        <MainMsg $state={count === 2 && true}>
          <Desc2>
            <small>편안한 촉감</small>
            입과 하나 되다.
          </Desc2>
        </MainMsg>
        <DescMsg $state={count === 2 && true}>
          <p>
            편안한 목넘김을 완성하는 디테일한 여러 구성를, 우리는 이를 하나하나
            새롭게 살피고 재구성하는 과정을 거쳐 새로운 수준의 머그, AirMug
            Pro를 만들었습니다. 입에 뭔가 댔다는 감각은 어느새 사라지고 오롯이
            당신과 음료만 남게 되죠.
          </p>
          <Pin />
        </DescMsg>
        <StyickyElem>
          <p>
            디자인 앤 퀼리티 오브 스웨덴, <br /> 메이드 인 차이나
          </p>
          <Pin />
        </StyickyElem>
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

  @media (min-width: 1024px) {
    width: 20%;
}
`;

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