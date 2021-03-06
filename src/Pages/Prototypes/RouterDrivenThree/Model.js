/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import React, { useRef } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

export default function Model({ color, ...props }) {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    "/models/Default_Cube.glb",
    (loader) => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  useFrame(() => (group.current.rotation.y += 0.01));

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <mesh geometry={nodes.Cube.geometry} name="Cube">
          <meshStandardMaterial
            attach="material"
            {...materials.Material}
            color={color || 0xff0000}
          />
        </mesh>
      </scene>
    </group>
  );
}
