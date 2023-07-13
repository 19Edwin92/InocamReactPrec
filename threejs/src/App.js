import React from "react";
import { GlobalStyle, Layout } from "./styled";
import { Canvas } from "@react-three/fiber";
// import { Box } from '@react-three/drei'

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Canvas>
        <mesh>
          {/* <circleGeometry attach="geometry" args={[1, 15]} />  */} 
          <boxGeometry attach="geometry"  args={[1, 1, 1]} />
          <meshStandardMaterial attach="material"/>
        </mesh> 
      </Canvas>
    </Layout>
  );
}

export default App;

/*
  <Canvas> 내부에는 다음의 요소만을 사용할 수 있다 Mesh, BufferGeometry, Material
  기타, HTML 태그들은 <Canvas> 외부에서 선언해야 한다. 

  Three.js 맥락에서 Mesh, BufferGeometry 및 Material은 3D 그래칙을 렌더링 하는 데 사용되는 기본 구성 요소로

  Mesh : 
  " 형상과 재질을 결합한 3D 개체를 "
  3D 모델을 나타내는 객체로, 형성과 재료를 결합하여 모델의 시각적 모양과 속성을 정의한다. 
  형상은 모델의 모양과 구조를 정의하고, 재료는 모델의 표면이 빛과 상호 작용하는 방식을 정의한다. 
  메시는 geometry와 material 지정하여 생성하고, 형상은 정육면체, 구 또는 원통과 같은 미리 정의된 모양이거나 꼭지점과 면을 사용하여 정의된 사용자 지정 형상일 수 있습니다. 

  메시가 생성되면 장면에 추가하고 Three.js의 렌더러를 사용하여 렌더링할 수 있다. 
  즉 메시는 위치, 회전 및 배율을 조작하여 원하는 변형 및 애니메이션은 얻는다. 

  [ 강의 ](https://www.youtube.com/watch?v=fdtqqyeKRJk)
  <boxBufferGeometry> >> " boxGeometry "
  1) attach : Three.js 개체의 특정부분에 연결하는데 사용한다. 지오메트리를 부탁하면 객체의 일부가 되어 모양을 정의한다. 

  <mesh>
    <boxGeometry 
      attach="geometry" 
      args={[1, 1, 1]} />
    <meshStandardMaterial attach="material" />
  </mesh>

  위의 코드는 @react-three/drei 의 <Box> 태그로 쉽게 구현할 수 있는데, @react-three/drei 와 drei 라이브러리를 같이 사용할 경우 둘다 다운 받아야 하는 것 같다. 

  <Box children={<meshStandardMaterial attach="material" />}/>

  원의 경우에는 
  <boxGeometry /> 대신에, 아래를 사용할 수 있다. 크기와 각도를 지정할 수 있다. 
  <circleGeometry attach="geometry" args={[1, 1]} />
  첫 숫자는 크기를 나타낸다. 
  두번째 숫자는 각도를 나타내는데, 각각의 각형을 나타낼 수 있다. 


  BufferGeometry :
  " 효율적인 렌더링을 위해 셩상 데이터의 최적화된 표현을 제공 "
  BufferGeometry는 Three.js에서 기하학 데이터의 최적화된 표현으로, 지오메트리 형식에 비해 많은 양의 지오메트리를 렌더링하는 데 더 효율적이다. 
  정점, 면, 법선 및 UV 좌표와 같은 기하학적 데이터는 일반적으로 JS 배열에 저장된다. 
  BufferGeometry는 이러한 배열을 가져와 렌더링을 위해 GPU에서 직접 사용할 수 있는 저수준 버퍼로 변환한다. 

  Material :
  " 색상, 질감 및 음영과 같은 개체 표현의 시각적 속성을 정의 "
  Three.js 에서 객체 표면의 시각적 속성을 정의합니다. 
  빛이 개체와 상호 작용하는 방식을 결정하여 개체가 음영 처리되는 방식과 해당 색상 및 질감이 표시되는 방식에 영향을 미칩니다. 
  재료는 색상, 방출 색상, 불투명도, 투명도, 광택, 거칠기, 금속성 등과 같은 속성을 가질 수 있습니다.
  또한 확산 맵, 반사 맵, 일반 맵 및 변위 맵과 같은 보다 사실적인 렌더링을 위해 텍스처를 통합할 수 있습니다.

*/

// import React, { useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls } from '@react-three/drei';

// function App() {

//   return (
//     <div>
//       <h1>Three.js 다뤄보기</h1>
//       <Canvas>
//       <OrbitControls autoRotate={true}/>
//         <mesh>
//           <ambientLight intensity={1} />
//           <directionalLight position={[-1,0,1]}  intensity={0.8} />
//           <boxGeometry args={[5, 3, 3]} />
//           <meshStandardMaterial attach="material" color="blue"/>
//         </mesh>
//       </Canvas>
//     </div>
//   );
// }

// export default App;

// function MyRotatingBox ()  {
//   const myMesh = React.useRef();
//   const [active, setActive] = useState(false);
//   useFrame(({ clock }) => {
//     const a = clock.getElapsedTime();
//     myMesh.current.rotation.x = a;
//   });
//   return (
//     <mesh
//     scale={active ? 1.5 : 1}
//     onClick={()=> setActive(!active)}
//     ref={myMesh}
//   >
//     <boxGeometry />
//     <meshStandardMaterial color="orange"/>
//   </mesh>
//   )
// }