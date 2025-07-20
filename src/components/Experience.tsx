import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Performance } from "./performance/Performance";
import { ModelsGroup } from "./groups/ModelsGroup";

export const Experience = () => {
  return (
    <div className={`h-screen w-screen`}>
      <Leva collapsed />

      <Canvas
        className="r3f"
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-7, 3, 7],
        }}
        shadows
      >
        {/* Models */}
        <ModelsGroup />

        {/* Performance Monitor */}
        <Performance />

        <color attach="background" args={["#171717"]} />
      </Canvas>
    </div>
  );
};
