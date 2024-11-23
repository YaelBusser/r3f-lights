import * as THREE from "three";
import {useRef} from "react";
import {useHelper} from "@react-three/drei";
import {useControls} from "leva";

const lights = () => {
    const ref = useRef<any>();

    useHelper(ref, THREE.SpotLightHelper, "red")

    const {color, distance, intensity, decay, penumbra, angle} = useControls({
        color: "red",
        distance: 5,
        intensity: 100,
        decay: 2,
        penumbra: 0,
        angle: 0.8,
    });
    return (
        <>
            {
                /*
                lumière qui  éclaire tout les  objets sans direction ni localisation dans l'espace (sinon ça ferait vraiment sombre)
                    ambientLight
                        <ambientLight intensity={0.5}/>
                types de lumière avec une direction et  située dans l'espace
                    directionalLights
                        <directionalLight intensity={0.5} position={[2, 2, 2]} color={"blue"}/>
                        <directionalLight intensity={0.5} position={[0, 2, 2]} color={"red"}/>
                        <directionalLight intensity={0.5} position={[-2, 2, 2]} color={"green"}/>
                    pointLight (comme une ampoule)
                        <pointLight intensity={0.5} position={[0, 1, 0]} distance={3} decay={5} color={"red"}/>
                        <pointLight intensity={0.5} position={[1, 0, 0]} distance={3} decay={5} color={"green"}/>
                        <pointLight intensity={0.5} position={[-1, 0, 0]} distance={3} decay={5} color={"blue"}/>
                        <pointLight intensity={0.5} position={[0, 0, -1]} distance={3} decay={5} color={"pink"}/>
                        <pointLight intensity={0.5} position={[0, 0 , 1]} distance={3} decay={5} color={"purple"}/>
                    pointLight avec helper
                        useHelper(ref, THREE.PointLightHelper, 0.5, "red")
                        <pointLight ref={ref} intensity={intensity} position={[1, 1, 1]} distance={distance} decay={decay} color={color} />
                    hemisphereLight comme la lumière du soleil
                        useHelper(ref, THREE.HemisphereLightHelper, 0.5, "red")
                        <hemisphereLight ref={ref} color={"deepskyblue"} groundColor={"brown"}  position-y={5}/>

                 */
            }
            <spotLight intensity={intensity} decay={decay} position={[0.5, 1, 2]} ref={ref} color={color}
                       angle={angle} penumbra={penumbra} distance={distance}/>
        </>
    )
}

export default lights;