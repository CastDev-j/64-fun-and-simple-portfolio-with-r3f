import { Center, Float, Html, Text, useGLTF } from "@react-three/drei";
import { Mesh } from "three";

export const Laptop = () => {
  const computer = useGLTF(
    "https://threejs-journey.com/resources/models/macbook_model.gltf"
  );

  computer.scene.traverse((child) => {
    if (child instanceof Mesh) {
      console.log(child.material);
    }
  });

  return (
    <>
      <Float rotationIntensity={0.5} floatIntensity={0.5}>
        <Center>
          <primitive object={computer.scene}>
            <Html
              transform
              distanceFactor={1.17}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              <iframe
                src="https://castdev-j.netlify.app/"
                width={1024}
                height={670}
                className="rounded-3xl bg-neutral-900"
              ></iframe>
            </Html>

            <Text
              fontSize={0.5}
              position={[1.5, 2.0, 0.5]}
              rotation={[0, -Math.PI / 2, 0]}
              children={`CastDev\rPortfolio`}
              textAlign="center"
              maxWidth={2}
            ></Text>
          </primitive>
        </Center>
      </Float>
    </>
  );
};
