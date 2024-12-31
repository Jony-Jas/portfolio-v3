import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import HackerRoom from "../components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../components/CanvasLoader";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const sizes = calculateSizes(isMobile);

  return (
    <section className="min-h-screen w-full flex flex-row">
      {/* Left Section */}
      <div className="md:w-2/5 w-full sm:flex justify-center items-center sm:mt-20 mt-20 c-space">
        <div className="w-full mx-auto flex flex-col">
          <p className="hero_tag text-gray_gradient italic">
            Hy! I&apos;m Jony Jas{" "}
            <span className="waving-hand text-white">👋</span>
          </p>
          <p className="sm:text-2xl text-xl font-medium text-white font-generalsans">
            Software Engineer
          </p>
          <span className="text-white font-medium leading-8 sm:mt-22 mt-5">
            🚀 Passionate &quot;Web & App Developer&quot; and enthusiastic
            engineer 🛠️, constantly seeking opportunities to learn and grow, no
            matter the scale. Dedicated to building a better future through
            technology while enhancing personal development. 📈
          </span>
          <Button
            name="Resume"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-56 sm:mt-22 mt-10 !mx-0"
          />

          <div className="flex gap-3 justify-self-end mt-10">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/jony-jas/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/linkedin.png" alt="linkedin" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://github.com/Jony-Jas/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/github.svg" alt="github" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://instagram.com/_jony.j/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/instagram.svg" alt="instagram" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://x.com/_jonyj/"
                target="_blank"
                className="w-1/3 h-1/3"
              >
                <img src="/assets/twitter.png" alt="twitter" />
              </a>
            </div>
            <div className="social-icon">
              <a
                href="https://www.behance.net/jonyjas/"
                target="_blank"
                className="w-1/2 h-1/2"
              >
                <img src="/assets/behance.png" alt="behance" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-3/5 w-full md:flex justify-center items-center sm:mt-0 mt-20 hidden">
        <div className="w-full h-full relative flex items-center justify-center">
          <Canvas className="w-full !h-full [@media(min-height:960px)]:!h-[700px]">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 20]} />
              <HeroCamera isMobile={isMobile}>
                <HackerRoom
                  scale={sizes.deskScale}
                  position={sizes.deskPosition}
                  rotation={[0.2, -3.7, 0]}
                />
              </HeroCamera>
              <group>
                <Target position={sizes.targetPosition} />
                <ReactLogo position={sizes.reactLogoPosition} />
                <Cube position={sizes.cubePosition} />
                <Rings position={sizes.ringPosition} />
              </group>
              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <div className="absolute bottom-[-2px] left-0 right-0 z-10 w-fit mx-auto">
        <a href="#about" className="w-fit">
          <img
            src="assets/scroll-down.gif"
            alt="scroll-down"
            className="w-16 h-16 mx-auto"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
