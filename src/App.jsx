import Instructor from "./components/Instructor"
import { OrbitControls, SoftShadows, Environment } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import Interface from "./components/interface"
import { CharacterAnimationsProvider, useCharacterAnimations } from "./contexts/CharacterAnimations"
import ReactLoading from "react-loading";


function App() {
  let instructorPosition = [1.6,-1.80,0]
  let instructorScale = 1.35
  let instructorRotation = [-0.189, 0.08, 0.085]
  const { animations } = useCharacterAnimations();
  if(window.innerHeight < 850)
  {
    instructorPosition = [1.80, -1.80, 0]
  }
   
  
  return (
    <>
     
    <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach="background" args={["#fdcb58"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <directionalLight intensity={2} position={[1, 0.5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Instructor scale = {instructorScale} position = {instructorPosition} rotation={instructorRotation}/>
    <SoftShadows size={40} samples={16} />
    <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.2} />
    </mesh>
    
    <Environment preset="warehouse" background blur={0.7} />

  </Canvas>
  <Interface />
  </>
  )
}

export default App