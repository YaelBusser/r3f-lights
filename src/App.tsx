import './App.css'
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {DoubleSide} from "three";
import * as THREE from "three";
import Lights from "./components/lights";

function App() {
    return (
        <Canvas camera={{
            position: [0, 3, 3]
        }}>
            <OrbitControls/>
            <Lights/>
            <mesh>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={"white"} roughness={1} metalness={0}/>
            </mesh>
            <mesh rotation-x={THREE.MathUtils.degToRad(-90)} position-y={-0.5}>
                <planeGeometry args={[5, 5]}/>
                <meshStandardMaterial side={DoubleSide} color={"white"} roughness={0} metalness={0.8}/>
            </mesh>
        </Canvas>
    )
}

export default App
