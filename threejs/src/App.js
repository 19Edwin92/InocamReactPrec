import React, { useRef, useState } from "react";
import { GlobalStyle, Layout } from "./styled";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshWobbleMaterial, OrbitControls } from '@react-three/drei' // @react-three/drei의 softshadow "@react-three/fiber"; 8.14.0 이상부터
import { useSpring, a } from '@react-spring/three' // 애니메이션을 활용하기 위해서는 기존의 mesh를 확장해야 합니다. 그리고, 이를 useSpring 를 통해서 넣어줄 수 있습니다. 
 
// softShadows() 동작되지 않음
const SpinningMesh = ({ position, args, color }) => {
  const meshRef = useRef(null);
  useFrame(
    () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01)
  );
  const [expend, setExpend] = useState(false);
  const props = useSpring({
    scale:expend ? [1.4, 1.4, 1.4] : [1,1,1]
  })

  return (
    <a.mesh  
      onClick={()=>setExpend(!expend)}
      scale={props.scale}
      castShadow ref={meshRef} position={position}>
      <boxGeometry attach="geometry" args={args} />
      {/* <meshStandardMaterial attach="material" color={color} /> */} 
      <MeshWobbleMaterial  attach="material" color={color} speed={1} factor={0.6}  />
    </a.mesh>
  );
};

/* meshStandardMaterial 에서는 위 아래가 안되는듯 */

function App() {
  return (
    <Layout>
      <GlobalStyle />
      <Canvas
        shadows 
        colormanagement="linear" 
        camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3}/>
            {/* <meshStandardMaterial attach="material" color="yellow" /> */}
          </mesh>
          <SpinningMesh speed={6} position={[-2, 1, -5]} color="pink" />
          <SpinningMesh speed={2} position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
          <SpinningMesh speed={6} position={[5, 1, -2]} color="pink" /> 
        </group>
    

        <OrbitControls />
      </Canvas>
    </Layout>
  );
}

export default App;

/*
  <Canvas> 내부에는 다음의 요소만을 사용할 수 있다 Mesh, BufferGeometry, Material
  기타, HTML 태그들은 <Canvas> 외부에서 선언해야 한다. 

  Three.js 맥락에서 Mesh, BufferGeometry 및 Material은 3D 그래칙을 렌더링 하는 데 사용되는 기본 구성 요소로
  그리고, <Canvas> 내부에서는 주석도 텍스트 취급된다는 것을 기억하자.  

  1) 
  Mesh : " 형상과 재질을 결합한 3D 개체를 "
  3D 모델을 나타내는 객체로, 형성과 재료를 결합하여 모델의 시각적 모양과 속성을 정의한다. 
  형상은 모델의 모양과 구조를 정의하고, 재료는 모델의 표면이 빛과 상호 작용하는 방식을 정의한다. 
  메시는 geometry와 material 지정하여 생성하고, 형상은 정육면체, 구 또는 원통과 같은 미리 정의된 모양이거나 꼭지점과 면을 사용하여 정의된 사용자 지정 형상일 수 있습니다. 

  메시가 생성되면 장면에 추가하고 Three.js의 렌더러를 사용하여 렌더링할 수 있다. 
  즉 메시는 위치, 회전 및 배율을 조작하여 원하는 변형 및 애니메이션은 얻는다. 

  [ 강의 ](https://www.youtube.com/watch?v=fdtqqyeKRJk) // 29분 
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

  2) 
  BufferGeometry :
  " 효율적인 렌더링을 위해 셩상 데이터의 최적화된 표현을 제공 "
  BufferGeometry는 Three.js에서 기하학 데이터의 최적화된 표현으로, 지오메트리 형식에 비해 많은 양의 지오메트리를 렌더링하는 데 더 효율적이다. 
  정점, 면, 법선 및 UV 좌표와 같은 기하학적 데이터는 일반적으로 JS 배열에 저장된다. 
  BufferGeometry는 이러한 배열을 가져와 렌더링을 위해 GPU에서 직접 사용할 수 있는 저수준 버퍼로 변환한다. 

  3)
  Material :
  " 색상, 질감 및 음영과 같은 개체 표현의 시각적 속성을 정의 "
  Three.js 에서 객체 표면의 시각적 속성을 정의합니다. 
  빛이 개체와 상호 작용하는 방식을 결정하여 개체가 음영 처리되는 방식과 해당 색상 및 질감이 표시되는 방식에 영향을 미칩니다. 
  재료는 색상, 방출 색상, 불투명도, 투명도, 광택, 거칠기, 금속성 등과 같은 속성을 가질 수 있습니다.
  또한 확산 맵, 반사 맵, 일반 맵 및 변위 맵과 같은 보다 사실적인 렌더링을 위해 텍스처를 통합할 수 있습니다.

  4) 
  useFrame :
  렌더링 루프에서 사용자 지정 애니메이션 및 업데이트를 수행하는 유틸리티로 제공된다. 이 후크는 WebGL 렌더링의 모든 프레임 업데이트에서 호출될 함수를 정의한다.
  개체 위치 업데이트, 재질 속성 변경 딩 다른 애니메이션 트리거와 같이 프레임당 실행하는 모든 논리를 포함한다. 

  useFrame(
    () => (meshRef.current.rotation.y += 0.05)   // y축만 회전을 하게 할 수 있고 
    // () => (meshRef.current.rotation.x += 0.05) // x축만 회전을 하게 할 수 있고
    // () => (meshRef.current.rotation.x = meshRef.current.rotation.y += 0.01) // x,y축을 같이 설정할 수 있다. 
    // () => (meshRef.current.rotation.x += 0.01, meshRef.current.rotation.y += 0.05) // 또한 각각 다르게 설정해 줄 수도 있다. 
  );

    x축과 y축을 물론 별개로 설정할 수도 있다. 

  5) <ambientLight/>
    intensity={0}
    ambientLight는 광원의 강도 또는 밝기를 결정한다. 이를 통해 장면의 전체 조명에 기여하는 정도를 제어한다. 
    0.1 : 주변광이 상대적으로 적은 양의 빛을 발산하여 전체 조면이 더  어두워진다는 것을 의미한다. 
    이때 음수로 기록할 수 있는데, 이에 대한 값은 동작은 하지만 컨텍스트에서 의미가 없기에, 0 보다 큰 양수를 주어야 한다. 
    1 : 중립 강도로 간주되며, 1.0 보다 큰 값은 밝기를 증가시키고, 0.0 ~ 1.0 사이의 값은 밝기를 감소시킨다. 

    <meshStandardMaterial attach="material" color="blue" />
    만약 빛이 주어지지 않는 상태에서 meshStandardMaterial의 색을 주려고 해도 검은색이었던 이유가 바로 그것이다.
    일정량의 빛이 있어야 색이 표현된다. 마치 검은 밤에 색을 분별하라는 이야기였던 것이다. 

  6) <Canvas colorManagement>
    colorManagement : 렌더링된 장면에 대산 색상 관리를 활성화하기 위한 속성이다.
    다양한 장치 및 색상 공간에서 색상이 정확하고 일관되게 표시되도록 한다. 장면의 색 공간과 출력 장치의 색 공간 간에 색상이 적절하게 변환되도록하여 정확한 색상 표현이 되도록 


  7) camera={{position:[5, 0, 5]}}

    첫번째 : 카메라의 좌우각도 정수는 왼쪽으로, 음수는 오른쪽으로  
    두번째 : 음수는 카메라의 위치가 아래로 가며 위를 향해보고, 정수는 카메라의 위치가 위로가며 아래를 내려본다. 
    세번째 : 최소는 1 숫자가 증가할 수록 줌아웃시킨다.
  
  8) camera={{for : 60}}
    카메라의 화각을 지정할 수 있다. 


  9) 과거문법 수정
   <Canvas
        shadows // https://sbcode.net/react-three-fiber/shadows/ // shadowMap 과거문법
        colormanagement="linear" // colorManagement 과거문법
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >  

  10) 그림자 관련
          <group>
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3}/>
            // <meshStandardMaterial attach="material" color="yellow" />
            </mesh>
            </group> 
            
  11)  <OrbitControls /> 
      드디어 회전이 된다. 확대 축소가 됩니다.  
      
  12) 반응형을 위해서, 그룹 안에 넣습니다. 
    <SpinningMesh speed={6} position={[-2, 1, -5]} color="pink" />
    <SpinningMesh speed={2} position={[0, 1, 0]} args={[3, 2, 1]} color="lightblue" />
    <SpinningMesh speed={6} position={[5, 1, -2]} color="pink" />    
    

  13) pointLight 포인트 조명  
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
