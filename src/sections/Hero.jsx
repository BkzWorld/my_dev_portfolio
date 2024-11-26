import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/HackerRoom.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {Suspense} from "react";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import {Spotlight} from "../components/ui/Spotlight.jsx";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 678, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <Spotlight className="-top-40 -left-50 md:-left-40 md:-top-20 h-screen" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[80vw]" fill="purple"/>
                <Spotlight className="top-28 left-10 h-[80vh] w-[50vw]" fill="purple"/>
                <p className="sm:text-3xl text-2xl font-medium text-white
                text-center font-serif">Hi, I am Bahnimaan Kashyap<span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Connect, Create and Collaborate</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                {/*<Leva />*/}
                    <Canvas className="w-full h-full ">
                        <Suspense fallback={<CanvasLoader />}>

                        <PerspectiveCamera makeDefault position={[0, 0, 25]} />

                            <HeroCamera isMobile={isMobile}>
                                <HackerRoom
                                    // scale={0.07}
                                    position={sizes.deskPosition}
                                    scale={sizes.deskScale}
                                    rotation={[0,-Math.PI,0]}
                                />
                            </HeroCamera>

                            <group>
                                <Target position={sizes.targetPosition}/>
                                <ReactLogo position={sizes.reactLogoPosition}/>
                                <Cube position={[ 9, -8, 0]}/>
                                {/*<Rings  position={[-24.5, 5, 0]}/>*/}
                                <Rings position={sizes.ringPosition}/>
                            </group>
                            <ambientLight intensity={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={0.5}/>
                        </Suspense>
                    </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit mt-2">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit  sm:min-w-96"/>
                </a>
            </div>

        </section>
    )
}
export default Hero
