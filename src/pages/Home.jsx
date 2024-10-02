import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Plane from "../models/Plane";
import Charizard from "../models/Charizard";
import HomeInfo from "../components/HomeInfo";
import onepiece from "../assets/onepiece.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const audioRef = useRef(new Audio(onepiece));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;

  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [1, 1, 1];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };

  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;
    // let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [2, 2, 2];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };

  const [planeScale, planePosition] = adjustPlaneForScreenSize();

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex justify-center items-center'>
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          {/* <pointLight />
          <spotLight /> */}
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' />
          <Charizard />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            scale={planeScale}
            position={planePosition}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className='absolute bottom-2 left-2 transform transition duration-300 hover:scale-105'>
        <img
          className='w-10 h-10 object-contain cursor-pointer'
          src={!isPlayingMusic ? soundoff : soundon}
          alt='sound'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
};

export default Home;
