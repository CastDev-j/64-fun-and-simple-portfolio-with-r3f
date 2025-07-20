import { Suspense } from "react";
import { PlaceHolder } from "./PlaceHolder";
import { Environment, PresentationControls } from "@react-three/drei";
import { LaptopComponent } from "../models/LaptopComponent";

export const ModelsGroup = () => {
  return (
    <group>
      <Suspense fallback={<PlaceHolder text="Loading laptop model..." />}>
        {/* Controls */}
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          damping={0.1}
          snap
        >
          {/* Environment */}
          <Environment preset="city" />

          {/* Laptop Model */}
          <LaptopComponent />
        </PresentationControls>
      </Suspense>
    </group>
  );
};
