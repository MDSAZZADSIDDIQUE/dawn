import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Experience } from "../components/exoplanet-exploration-components/Experience";
import { SocketManager } from "../components/exoplanet-exploration-components/SocketManager";
import {
  UI,
  shopModeAtom,
} from "../components/exoplanet-exploration-components/UI";

function ExoplanetExplorationPage() {
  const [shopMode] = useAtom(shopModeAtom);
  return (
    <div className="h-screen w-screen">
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={shopMode ? 4 : 0}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <UI />
    </div>
  );
}

export default ExoplanetExplorationPage;
