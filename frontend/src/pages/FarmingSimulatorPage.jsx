import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useAtom } from "jotai";
import { Experience } from "../components/farming-simulator-components/Experience";
import { SocketManager } from "../components/farming-simulator-components/SocketManager";
import {
  UI,
  shopModeAtom,
} from "../components/farming-simulator-components/UI";

function FarmingSimulatorPage() {
  const [shopMode] = useAtom(shopModeAtom);
  return (
    <div className="relative h-screen w-screen">
      <SocketManager />
      <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
        <color attach="background" args={["#BAE6FD"]} />
        <ScrollControls pages={shopMode ? 4 : 0}>
          <Experience />
        </ScrollControls>
      </Canvas>
      <div className="glass absolute top-0 right-0 h-screen w-96">
        <h1>Farm Simulator</h1>
        <label className="input input-bordered flex items-center gap-2">
          Name
          <input type="text" className="grow" placeholder="Daisy" />
        </label>
      </div>
      <UI />
    </div>
  );
}

export default FarmingSimulatorPage;
