import Instructor from "./components/Instructor"
import { OrbitControls, SoftShadows } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import Interface from "./components/interface"
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations"

function App() {

  return (
    <>
    <Canvas shadows gl={{ antialias: false }} camera={{ position: [1, 0.5, 2.5], fov: 50 }}>
    <color attach="background" args={["#f0f0f0"]} />
    <fog attach="fog" args={["#f0f0f0", 0, 20]} />
    <ambientLight intensity={0.5} />
    <directionalLight intensity={2} position={[1, 0.5, 5]} castShadow shadow-mapSize={2048} shadow-bias={-0.0001} />
    <Instructor scale = {0.85} position = {[1.5,-0.70,0]} rotation={[-0.02, 0.04, 0.085]}/>
    <SoftShadows size={40} samples={16} />
    {/* <SoftShadows size={40} samples={16} />
    <EffectComposer disableNormalPass multisampling={4}>
      <TiltShift2 blur={1} />
    </EffectComposer> */}
  </Canvas>
  <Interface />
  </>
  )
}

export default App
