import { useRef, useEffect } from "react";

import birdScene from "../assets/3d/charizard.glb";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Charizard = () => {
  const { scene, animations } = useGLTF(birdScene);
  const birdRef = useRef();
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Flying"].play();
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion using a sine wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // Check if the bird reached a certain endpoint relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      // Change direction to backward (rotate the bird 180 degrees on the y-axis)
      birdRef.current.rotation.y = 0; // Inverted this to be the new forward
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      // Change direction to forward (reset the bird's rotation)
      birdRef.current.rotation.y = Math.PI; // Inverted this to be the new backward
    }

    // Update the X and Z positions based on the direction
    if (birdRef.current.rotation.y === 0) {
      // Moving forward (now the inverted logic)
      birdRef.current.position.x -= 0.01; // Reversed movement
      birdRef.current.position.z += 0.01;
    } else {
      // Moving backward (inverted forward logic)
      birdRef.current.position.x += 0.01;
      birdRef.current.position.z -= 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-4, 1, -1]} scale={[0.6, 0.6, 0.6]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Charizard;
