import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

function App() {
  
  return (
    <div>
      <h1>Three.js 다뤄보기</h1>
      <Canvas>
      <OrbitControls autoRotate={true}/>
        <mesh>
          <ambientLight intensity={1} />
          <directionalLight position={[-1,0,1]}  intensity={0.8} />
          <boxGeometry args={[5, 3, 3]} />
          <meshStandardMaterial attach="material" color="blue"/>
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;


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